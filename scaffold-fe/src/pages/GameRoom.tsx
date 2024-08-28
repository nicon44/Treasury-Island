import React from 'react';
import { useParams } from 'react-router-dom';
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, HasValue, getComponentValueStrict,
    getComponentValue
} from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "@/dojo/useDojo";

import { feltToString, formatAddress, bigintToHex,
    mapGameState, mapPhase
    } from "@/utils";


export const GameRoom = () => {
    const { roomId } = useParams();
    const {
        setup: {
        clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
        client,
        },
        account: { account },
    } = useDojo();


    const game = getComponentValue(GameRoom, 
        getEntityIdFromKeys([BigInt(roomId??"")]) as Entity)??"";
    const gameStarted = mapGameState(game?.state) == "InProgress";
    
    const player1Address: string = Number(game?.player1) == 0? "": bigintToHex(game?.player1);
    const player1isHere: boolean = player1Address == ""? false: true;
    const player1 = player1isHere ? getComponentValue(Player, getEntityIdFromKeys([game?.player1])??"" as Entity):{};

    const player2Address: string = Number(game?.player2) == 0? "": bigintToHex(game?.player2);
    const player2isHere: boolean = player2Address == ""? false: true;
    const player2 = player2isHere ? getComponentValue(Player, getEntityIdFromKeys([game?.player2])??"" as Entity):{};
    
    const player = account.address == bigintToHex(game?.player1) ? player1: 
                    account.address == bigintToHex(game?.player2) ? player2:
                    {};
    //const playerAddress = account.address

    
    console.log(`GameRoom ${roomId}: `, game);
    console.log("Player is :", account.address == bigintToHex(game?.player1) ? "player 1": 
        account.address == bigintToHex(game?.player2) ? "player 2": "not in this game.")

    console.log("player: ", player);

    console.log("player1: ", Number(player1Address));
    console.log("player1: ", player1);

    console.log("player2: ", Number(player2Address));
    console.log("player2: ", player2);


    // === LOOT Tracker ===
    
    const hasLoots = useEntityQuery([Has(Loot)]); //only has loot when game starts
    console.log("hasLoot: ", hasLoots);
    
    const playerLootEntity = getEntityIdFromKeys([
        BigInt(roomId??""),
        BigInt(account.address)])
    console.log("Player Loot Entity", playerLootEntity);

    const playerLoot = getComponentValue(Loot, playerLootEntity??"")??""
    
    console.log("Player Loot: ", playerLoot);
    

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

    const handleHide = async ({x,y}) => {
        console.log("hiding loot..", x,y)
        await client.gameroom.hide_loot({
            account,
            game_id: BigInt(roomId??""),
            loot_id: 2, // 1 is 1x1, 2 is 3x1, 3 is 4x1
            x0: x,
            y0: y,
            x1: x+2,
            y1: y,
        });
    }

    const handleEndRound = async () => {
        console.log("ending round..")
        await client.gameroom.end_round({
            account,
            game_id: BigInt(roomId??""),
        });
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
            </div>
            
            <div className="w-full">
                <p>Loot Stats</p>
                    <p>
                        <span className="mx-2">4x1: </span>
                        <span>{playerLoot?.four_one}</span>
                        <span className="mx-2">(hidden): </span>
                        <span>{playerLoot?.four_one_hidden}</span>

                    </p>

                    <p>
                        <span className="mx-2">3x1: </span>
                        <span>{playerLoot?.three_one}</span>
                        <span className="mx-2">(hidden): </span>
                        <span>{playerLoot?.three_one_hidden}</span>
                    </p>

                    <p>
                        <span className="mx-2">1x1: </span>
                        <span>{playerLoot?.one_one}</span>
                        <span className="mx-2">(hidden): </span>
                        <span>{playerLoot?.one_one_hidden}</span>
                    </p>
            </div>

            {/* Land */}
            <div className="m-2 grid gap-2">
                {
                    Array.from({length: 6}).map((_, y) => {
                        return (
                            <div key={y} className="flex gap-x-1">
                                {
                                    Array.from({length: 14}).map((_, x) => {

                                        const targetTile = getComponentValue(IslandCoords, 
                                            getEntityIdFromKeys([
                                                BigInt(roomId??""),
                                                BigInt(account.address),
                                                BigInt(x),
                                                BigInt(y)
                                            ]))
                                        
                                        targetTile ?console.log("targetTile: ", targetTile ):null;
                                        const isHiddenLoot = targetTile ? targetTile?.terrain == 1 : false;

                                        return (
                                            <div key={"square"+x+y} 
                                            className={`w-10 h-10 border border-gray-400 rounded-md
                                            ${isHiddenLoot?'bg-orange-600':'bg-yellow-400'}
                                            hover:bg-yellow-200
                                            hover:cursor-pointer
                                            `}
                                            onClick={()=>handleHide({x,y})}
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
            
        </div>
    )
}
