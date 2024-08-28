import { useState } from 'react';
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, HasValue, getComponentValueStrict } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "./dojo/useDojo";
import { Button } from "./components/ui/button";
import * as torii from "@dojoengine/torii-client";
import { feltToString, formatAddress, bigintToHex } from "@/utils";

function App() {
  const {
    setup: {
      clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
      client,
    },
    account: { account },
  } = useDojo();

  // entity id we are syncing
  const entityId = getEntityIdFromKeys([BigInt(account.address)]) as Entity;


  // === PLAYER DETAILS ===
  const player = useComponentValue(Player, entityId);
  console.log("player: ", player);
  const hasPlayers = useEntityQuery([Has(Player)]);
  console.log(hasPlayers)
  const playersDetails = hasPlayers.map((entity)=>{
    const player = getComponentValueStrict(Player, entity);
    return player;
  })
  console.log("playersDetails: ", playersDetails);

  const hasRooms = useEntityQuery([Has(GameRoom)]);
  console.log(hasRooms)
  const roomsDetails = hasRooms.map((entity)=>{
    const room = getComponentValueStrict(GameRoom, entity);
    return room;
  })
  console.log("roomsDetails: ", roomsDetails);


  // === UI Functions ===

  const [nameValue, setNameValue] = useState('');
  const handleNameTypingInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(String(event.target.value));
  };

  const handleRegister = async () => {
    await client.lobby.register_player({
      account,
      name: BigInt(torii.cairoShortStringToFelt(nameValue)),
      pfp_num: 1,
    });
  }

  const handleCreateRoom = async () => {
    await client.lobby.create_room({
      account,
    });
  }

  // === === === === === === ===
  return (
    <div className="flex flex-col items-start
    p-4
    ">
      <button
      className="border rounded-lg p-2 w-fit"
      >Wallet Address: {account.address}</button>


      <div className="w-full flex gap-x-2">
        <button
        className="p-4 my-2 bg-blue-500 rounded-lg
        hover:bg-blue-300
        "
        onClick={handleRegister}
        >
          Register Player
        </button>

        <button
        className="p-4 my-2 bg-green-500 rounded-lg
        hover:bg-green-300
        "
        onClick={handleCreateRoom}
        >
          Create Room
        </button>
      </div>

      <div className="w-full">
        <input
          type="text"
          className="w-full
          py-2 px-2
          flex items-center rounded-lg 
          border-2 border-dark-gray-200 text-xl
          disabled:text-gray-700/50
          "

          placeholder="Register Name"
          maxLength={31}
          value={nameValue}
          onChange={handleNameTypingInput}
        />
      </div>
      

      
      <div className="flex flex-col items-center
      border border-orange-600 rounded-lg p-2 w-full my-2">
          <p className="w-fit p-2 rounded-lg border">Players</p>
          {
            playersDetails.map((player, index)=>{
              return (
                <div key={index} className="flex flex-row items-center gap-x-1
                border border-red-500 rounded-lg p-2 w-full">
                  <p className="w-fit p-2 rounded-lg border">Player: {
                  feltToString(player?.name)
                  }</p>
                  <p className="w-fit p-2 rounded-lg border">PFP: {player?.pfp_num}</p>
                </div>
              )
            })
          }
      </div>
      <div className="flex flex-col items-center
      border border-blue-500 rounded-lg p-2 w-full">
          <p className="w-fit p-2 rounded-lg border">Rooms</p>
          {
            roomsDetails.map((room, index)=>{
              return (
                <div key={"room-"+index} className="flex flex-row items-center gap-x-1
                border border-red-500 rounded-lg p-2 w-full">
                  <p className="w-[200px] truncate
                  p-2 rounded-lg border">Room: {
                    bigintToHex(room?.game_id)
                  }</p>
                  <p className="w-fit p-2 rounded-lg border">
                    Owner: {
                    formatAddress(String(room?.player1))
                    }</p>

                  <button
                  className="bg-orange-500 w-[100px]
                  p-2 rounded-lg
                  hover:bg-orange-300
                  "
                  >Join</button>
                </div>
              )
            })
          }
      </div>
    
    
    
    </div>
  );
}

export default App;
