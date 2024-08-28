import React from 'react';
import { useParams } from 'react-router-dom';
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, HasValue, getComponentValueStrict } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "@/dojo/useDojo";

import { feltToString, formatAddress, bigintToHex } from "@/utils";


export const GameRoom = () => {
    const { roomId } = useParams();
    const {
        setup: {
        clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
        client,
        },
        account: { account },
    } = useDojo();


    const game = getComponentValueStrict(GameRoom, 
        getEntityIdFromKeys([BigInt(roomId??"")]) as Entity);
    
    const player1Address: string = Number(game?.player1) == 0? "": bigintToHex(game?.player1);
    const player1isHere: boolean = player1Address == ""? false: true;
    const player1 = player1isHere ? getComponentValueStrict(Player, getEntityIdFromKeys([game?.player1]) as Entity):{};

    const player2Address: string = Number(game?.player2) == 0? "": bigintToHex(game?.player2);
    const player2isHere: boolean = player2Address == ""? false: true;
    const player2 = player2isHere ? getComponentValueStrict(Player, getEntityIdFromKeys([game?.player2]) as Entity):{};

    
    console.log(`GameRoom ${roomId}: `, game);
    console.log("player1: ", Number(player1Address));
    console.log("player1: ", player1);

    console.log("player2: ", Number(player2Address));
    console.log("player2: ", player2);

    const handleJoinGame = async () => {
        console.log("joining room..", roomId)
        await client.lobby.join_room({
        account,
        game_id: BigInt(roomId??""),
        });
    }

    return (
        <div className="flex flex-col items-start p-2 gap-y-1">
            <div className="border p-2 rounded-lg">GameRoom: {roomId}</div>

            <div className="flex my-2">
                <span className="mx-2">Player 1: {feltToString(player1?.name?? "")??""}</span>
                <span className="mx-4">Vs</span>
                <span className="mx-2">Player 2: {feltToString(player2?.name ?? "")??""}</span>
            </div>

            <div className="w-full flex items-center 
            gap-x-2 px-2 border p-2">
                <span>Controls:</span>
                <button className="p-2 rounded-lg
                    bg-red-400  hover:bg-red-200
                    disabled:bg-red-950/20 disabled:text-gray-800/20
                    "
                    onClick={()=>console.log("Starting Game..")}
                    disabled={!player2isHere}
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
            </div>
            
            
        </div>
    )
}
