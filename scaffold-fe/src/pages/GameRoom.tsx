import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, HasValue, getComponentValueStrict,
    getComponentValue
} from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "@/dojo/useDojo";

import { feltToString, formatAddress, bigintToHex,
    mapGameState, mapPhase, indexToXY
    } from "@/utils";


export const GameRoom = () => {
    const { roomId } = useParams();
    const {
        setup: {
        clientComponents: { Player, GameRoom, Round, IslandCoords, Loot, 
            LootObject, LootTracker, Guesses },
        client,
        },
        account: { account },
    } = useDojo();

    const xyRef = useRef(null);
    const [x0, setX0] = useState(0);
    const [x1, setX1] = useState(0);
    const [y0, setY0] = useState(0);
    const [y1, setY1] = useState(0);
    const [ coordArrays, setCoordArrays ] = useState([]);

    // === GameRoom, Game Round ===
    const game = getComponentValue(GameRoom, 
        getEntityIdFromKeys([BigInt(roomId??"")]) as Entity)??"";
    const gameStarted = mapGameState(game?.state) == "InProgress";
    
    const gameRoundEntity = getEntityIdFromKeys([BigInt(roomId??""),
        BigInt(game?.round_num??"")])
    const gameRound = getComponentValue(Round,gameRoundEntity)??"";
    

    console.log(`GameRoom ${roomId}: `, game);

    //const hasGameRounds = useEntityQuery([Has(Round)]);
    // console.log("hasGameRounds: ", hasGameRounds);
    // console.log("Game Round Entity: ", gameRoundEntity)
    // console.log("Game Round: ", gameRound)
    

    // === Player Details ===
    const player1Address: string = Number(game?.player1) == 0? "": bigintToHex(game?.player1);
    const player1isHere: boolean = player1Address == ""? false: true;
    const player1 = player1isHere ? getComponentValue(Player, getEntityIdFromKeys([game?.player1])??"" as Entity):{};

    const player2Address: string = Number(game?.player2) == 0? "": bigintToHex(game?.player2);
    const player2isHere: boolean = player2Address == ""? false: true;
    const player2 = player2isHere ? getComponentValue(Player, getEntityIdFromKeys([game?.player2])??"" as Entity):{};
    
    const player = account.address == bigintToHex(game?.player1) ? player1: 
                    account.address == bigintToHex(game?.player2) ? player2:
                    {};
    const opponent = account.address == bigintToHex(game?.player1) ? player2:
                    account.address == bigintToHex(game?.player2) ? player1:
                    {};

    console.log("Player is :", account.address == bigintToHex(game?.player1) ? "player 1": 
        account.address == bigintToHex(game?.player2) ? "player 2": "not in this game.")
    
    console.log(player, opponent)
    console.log("player1: ", Number(player1Address));
    console.log("player1: ", player1);

    console.log("player2: ", Number(player2Address));
    console.log("player2: ", player2);

        
    const playerTries = account.address == bigintToHex(game?.player1) ? gameRound?.player1_tries:
                        gameRound?.player2_tries ?? 0;
    const opponentTries = account.address == bigintToHex(game?.player1) ? gameRound?.player2_tries:
                        gameRound?.player1_tries ?? 0;

    // === LOOT Objects and Tracker ===
    
    const hasLoots = useEntityQuery([Has(Loot)]); //only has loot when game starts
    console.log("hasLoot: ", hasLoots);
    
    const playerLootEntity = getEntityIdFromKeys([
        BigInt(roomId??""),
        BigInt(account.address)])
    console.log("Player Loot Entity", playerLootEntity);

    const playerLoot = getComponentValue(Loot, playerLootEntity??"")??""
    
    console.log("Player Loot: ", playerLoot);
    

    // ===== Loot Objects
    const hasLootObjects = useEntityQuery([Has(LootObject)]);
    console.log("hasLootObjects: ", hasLootObjects);

    const lootObjects = hasLootObjects.map((entity)=>{
        const loot = getComponentValue(LootObject, entity);
        return loot;
    })
    console.log("loot objects: ", lootObjects);
    
    const playerLootObjects = lootObjects.filter((loot)=>{
        return (loot?.player_id == BigInt(player.player_id??"")
        &&
        loot?.game_id == BigInt(roomId??"")
    );
    })
    console.log("player loot objects: ", playerLootObjects);
    const playerHiddenIndices = playerLootObjects.map((loot)=>{
        return loot?.hidden_indices.map((index)=>{return index?.value})
        }).flat().map((index)=>{return indexToXY(index)});
    
    console.log("player hidden indices: ", playerHiddenIndices);

    
    const opponentLootObjects = lootObjects.filter((loot)=>{
        return loot?.player_id == BigInt(opponent.player_id??"");
    })
    console.log("opponent loot objects: ", opponentLootObjects);
    

    // ===== Loot Trackers
    const hasLootTrackers = useEntityQuery([Has(LootTracker)]);
    console.log("hasLootTrackers: ", hasLootTrackers);
    
    const playerLootTrackerEntity = getEntityIdFromKeys([
        BigInt(roomId??""),
        BigInt(player?.player_id?? "")])
    const playerLootTracker = getComponentValue(LootTracker, playerLootTrackerEntity??"")??"";
    console.log("Player Loot Tracker: ", playerLootTracker);
    const playerLootIds = playerLootTracker?.loot_ids??[];
    console.log("Player Loot Ids: ", playerLootIds);


    const opponentLootTrackerEntity = getEntityIdFromKeys([
        BigInt(roomId??""),
        BigInt(opponent?.player_id??"")])
    const opponentLootTracker = getComponentValue(LootTracker, opponentLootTrackerEntity??"")??"";
    console.log("Opponent Loot Tracker: ", opponentLootTracker);


    
    // === Guesses Tracker ===
    const HasGuesses = useEntityQuery([Has(Guesses)]);
    console.log("HasGuesses: ", HasGuesses);

    const GuessesObject = HasGuesses.map((entity)=>{
        const guesses = getComponentValue(Guesses, entity);
        return guesses;
    })
    console.log("GuessesObject: ", GuessesObject);

    const playerGuesses = GuessesObject.filter((guess)=>{
        return (guess?.player_id == BigInt(player?.player_id??"")
        && guess?.game_id == BigInt(roomId??"")
        );
    }).map((guess)=>{
        return {x: guess?.x, y: guess?.y, correct: guess?.correct};
    })

    console.log("playerGuesses: ", playerGuesses);
    
    
    // === UI Functions ===

    const handleJoinGame = async () => {
        console.log("joining room..", roomId)
        await client.lobby.join_room({
        account,
        game_id: BigInt(roomId??""),
        });
    }

    const handleStartGame = async () => {
        console.log("starting game at: ", roomId)
        await client.gameroom.start_game({
            account,
            game_id: BigInt(roomId??""),
        });
    }

    const handleHide = async () => {
        console.log("hiding loot..", x0, x1, y0, y1)
        const xSmall = x0 < x1? x0: x1;
        const xLarge = x0 > x1? x0: x1;
        const ySmall = y0 < y1? y0: y1;
        const yLarge = y0 > y1? y0: y1;
        const xLength = xLarge - xSmall +1;
        const yLength = yLarge - ySmall +1;
        const longestLength = xLength > yLength? xLength: yLength;
        console.log("loot_lenght: ", longestLength);
        console.log("x0: ", xSmall, "y0: ", ySmall, "x1: ", xLarge, "y1: ", yLarge);

        await client.gameroom.hide_loot({
            account,
            game_id: BigInt(roomId??""),
            loot_length: longestLength,
            x0: xSmall,
            y0: ySmall,
            x1: xLarge,
            y1: yLarge,
        });
    }

    const handleDigToSeek = async () => {
        console.log("digging for loot..", x0, x1, y0, y1)

        const xSmall = x0 < x1? x0: x1;
        const xLarge = x0 > x1? x0: x1;
        const ySmall = y0 < y1? y0: y1;
        const yLarge = y0 > y1? y0: y1;

        console.log("hence digging at: ", xSmall, ySmall)

        await client.gameroom.dig_for_loot({
            account,
            game_id: BigInt(roomId??""),
            x: xSmall,
            y: ySmall,
        })
    }

    const handleEndRound = async () => {
        console.log("ending round..")
        await client.gameroom.end_round({
            account,
            game_id: BigInt(roomId??""),
        });
    }

    const handleHidingValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // print value of x0, x1, y0, y1 input fields
        setX0(xyRef.current.x0.value? xyRef.current.x0.value:0);
        setX1(xyRef.current.x1.value? xyRef.current.x1.value:0);
        setY0(xyRef.current.y0.value? xyRef.current.y0.value:0);
        setY1(xyRef.current.y1.value? xyRef.current.y1.value:0);

    }

    useEffect(() => {
        console.log("x0: ", x0, "x1: ", x1, "y0: ", y0, "y1: ", y1);

        let tempCoordArrays = [];
        const xSmall = x0 < x1? x0: x1;
        const xLarge = x0 > x1? x0: x1;
        const ySmall = y0 < y1? y0: y1;
        const yLarge = y0 > y1? y0: y1;

        for(let x = xSmall; x <= xLarge; x++){
            for(let y = ySmall; y <= yLarge; y++){
                tempCoordArrays.push({x: Number(x),y: Number(y)});
            }
        }
        setCoordArrays(()=>tempCoordArrays)

    }, [x0, x1, y0, y1])
    console.log("coordArrays: ", coordArrays);

    const isInArray = (arr:Array<{x:number,y:number}>, x:number, y:number)=> {
        return arr.some(item => item.x === x && item.y === y);
    }

    const isInArrayAndTrue = (arr:Array<{x:number,y:number, correct:boolean}>, x:number, y:number)=> {
        return arr.some(item => item.x === x && item.y === y && item.correct === true);
    }
    const isInArrayAndFalse = (arr:Array<{x:number,y:number, correct:boolean}>, x:number, y:number)=> {
        return arr.some(item => item.x === x && item.y === y && item.correct === false);
    }

    return (
        <div className="flex flex-col items-start p-2 gap-y-1">
            <div className="border p-2 rounded-lg">GameRoom: {roomId}</div>

            <div className="flex my-2 gap-x-2">
                <div className="flex items-center">
                    <span className="mx-2">Player 1: {feltToString(player1?.name?? "")??""}</span>
                    <span className="mx-4">Vs</span>
                    <span className="mx-2">Player 2: {feltToString(player2?.name ?? "")??""}</span>
                </div>

                <div className="flex items-center">
                    <span>Game Status: </span>
                    <span className="mx-4
                    border p-2 rounded-lg
                    bg-blue-400
                    ">
                        { 
                            mapGameState(game?.state ?? "")
                        }
                    </span>

                    <span className="mx-2">Round: </span>
                    <span>{game?.round_num}</span>

                    <span className="mx-2">Phase: </span>
                    <span className="p-2 bg-green-600 rounded-lg">
                        {mapPhase(game?.phase??"")}</span>

                    <span className="mx-2">Winner: {
                    game?.winner == game?.player1? feltToString(player1?.name?? ""):
                    game?.winner == game?.player2? feltToString(player2?.name?? ""):
                    "No Winner Yet"
                    }</span>
                </div>
            </div>
            
            {/* Controls */}
            <div className="w-full flex items-center 
            gap-x-2 px-2 border p-2">
                <span>Controls:</span>
                <button className="p-2 rounded-lg
                    bg-red-400  hover:bg-red-200
                    disabled:bg-red-950/20 disabled:text-gray-800/20
                    "
                    onClick={handleStartGame}
                    disabled={(!player2isHere || gameStarted)}
                >Start Game</button>

                <button 
                    className="p-2 rounded-lg
                    bg-green-600
                    hover:bg-green-400
                    disabled:bg-green-950/20 disabled:text-gray-800/20
                    "
                    onClick={handleJoinGame}
                    disabled={player2isHere}
                >
                    Join Game
                </button>

                <button 
                    className="p-2 rounded-lg
                    bg-purple-500
                    hover:bg-purple-400
                    disabled:bg-purple-950/20 disabled:text-gray-800/20
                    "
                    onClick={handleEndRound}
                    disabled={!gameStarted}
                >
                    End Round
                </button>
                
                <form ref={xyRef}>
                    <span className="ml-4">X0:</span>
                    <input
                        name="x0"
                        type="number"
                        className="w-[50px] border rounded-lg p-2
                        "
                        max="14"
                        placeholder="0"
                        onChange={handleHidingValueChange}
                        />
                    
                    <span className="ml-4">X1:</span>
                    <input
                        name="x1"
                        type="number"
                        className="w-[50px] border rounded-lg p-2
                        "
                        max="14"
                        placeholder="0"
                        onChange={handleHidingValueChange}
                        />
                    
                    <span className="ml-4">Y0:</span>
                    <input
                        name="y0"
                        type="number"
                        className="w-[50px] border rounded-lg p-2
                        "
                        max="14"
                        placeholder="0"
                        onChange={handleHidingValueChange}
                        />
                    
                    <span className="ml-4">Y1:</span>
                    <input
                        name="y1"
                        type="number"
                        className="w-[50px] border rounded-lg p-2
                        "
                        max="14"
                        placeholder="0"
                        onChange={handleHidingValueChange}
                        />
                </form>

                <button className="bg-orange-600 p-2 rounded-lg
                hover:bg-orange-300
                "
                onClick={()=>mapPhase(game?.phase??"") == "Hide Phase"?
                    handleHide():handleDigToSeek()}
                >
                    {mapPhase(game?.phase??"") == "Hide Phase"?'Hide':'Dig'}
                </button>

            </div>
            
            {/* Stats */}
            <div className="w-full">
                <p>Loot Stats</p>

                <div className="flex justify-start px-2 gap-x-4">
                    <div className="flex flex-col border rounded-lg p-3">
                        <p>{feltToString(player?.name?? "")??""}'s tries: {playerTries}</p>
                            <p>
                                <span className="mx-2">4x1: </span>
                                <span>{playerLootTracker?.loot_count?.four??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{playerLootTracker?.loot_hidden_count?.four??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">3x1: </span>
                                <span>{playerLootTracker?.loot_count?.three??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{playerLootTracker?.loot_hidden_count?.three??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">2x1: </span>
                                <span>{playerLootTracker?.loot_count?.two??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{playerLootTracker?.loot_hidden_count?.two??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">1x1: </span>
                                <span>{playerLootTracker?.loot_count?.one??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{playerLootTracker?.loot_hidden_count?.one??""}</span>
                            </p>
                    </div>
                    
                    <div className="flex flex-col border rounded-lg p-3">
                        <p>{feltToString(opponent?.name?? "")??""}'s tries: {opponentTries}</p>
                            <p>
                                <span className="mx-2">4x1: </span>
                                <span>{opponentLootTracker?.loot_count?.four??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{opponentLootTracker?.loot_hidden_count?.four??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">3x1: </span>
                                <span>{opponentLootTracker?.loot_count?.three??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{opponentLootTracker?.loot_hidden_count?.three??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">2x1: </span>
                                <span>{opponentLootTracker?.loot_count?.two??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{opponentLootTracker?.loot_hidden_count?.two??""}</span>
                            </p>

                            <p>
                            <span className="mx-2">1x1: </span>
                                <span>{opponentLootTracker?.loot_count?.one??""}</span>
                                <span className="mx-2">(hidden): </span>
                                <span>{opponentLootTracker?.loot_hidden_count?.one??""}</span>
                            </p>
                    </div>
                </div>


            </div>

            {/* Land */}
            {
                mapPhase(game?.phase??"") == "Hide Phase"?
            <div className="m-2 grid gap-2">
                {
                    Array.from({length: 6}).map((_, y) => {
                        return (
                            <div key={y} className="flex gap-x-1">
                                {
                                    Array.from({length: 14}).map((_, x) => {
                                        return (
                                            <div key={"square"+x+y} 
                                            className={`w-10 h-10 border border-gray-400 rounded-md
                                            ${
                                                isInArray(playerHiddenIndices, x, y) ? 'bg-yellow-300/20':
                                                isInArray(coordArrays, x, y) ? 'bg-cyan-500':'bg-yellow-400'}
                                            hover:bg-yellow-200
                                            hover:cursor-pointer
                                            `}
                                            >
                                                {/* {x},{y} */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            :
                mapPhase(game?.phase??"") == "Seek Phase"?
            <div className="m-2 grid gap-2">
                {
                    Array.from({length: 6}).map((_, y) => {
                        return (
                            <div key={y} className="flex gap-x-1">
                                {
                                    Array.from({length: 14}).map((_, x) => {

                                        return (
                                            <div key={"square"+x+y} 
                                            className={`w-10 h-10 border border-gray-400 rounded-md
                                            

                                            ${  
                                                isInArrayAndTrue(playerGuesses, x, y) ? 'bg-rose-600':
                                                isInArrayAndFalse(playerGuesses, x, y) ? 'bg-gray-700/40':
                                                isInArray(coordArrays, x, y) ? 'bg-cyan-500': 'bg-green-400'}
                                            hover:bg-green-300
                                            hover:cursor-pointer
                                            `}
                                            
                                            >
                                                {/* {x},{y} */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            :
            <></>
            }
            
        </div>
    )
}
