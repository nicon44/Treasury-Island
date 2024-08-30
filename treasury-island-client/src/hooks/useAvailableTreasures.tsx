import { useComponentValue } from "@dojoengine/react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "../dojo/useDojo";
import { useGameContext } from "../providers/GameProvider";
import { ITreasure } from "../types/Treasure";
import { bigintToHex } from "../utils";
import { useRoomId } from "./useRoomId";

export const useAvailableTreasures = (): ITreasure[] => {
  const { player1, player2, game } = useGameContext();

  const availableTreasures = [];
  const {
    setup: {
      clientComponents: { LootTracker },
    },
    account: { account },
  } = useDojo();
  const roomId = useRoomId();

  const player =
    account.address == bigintToHex(BigInt(game?.player1.toString() ?? 0))
      ? player1
      : player2;

  const playerLootTrackerEntity = getEntityIdFromKeys([
    BigInt(roomId ?? ""),
    BigInt(player?.player_id.toString() ?? 0),
  ]);
  const playerLootTracker = useComponentValue(
    LootTracker,
    playerLootTrackerEntity ?? ""
  );

  const one_one = playerLootTracker?.loot_count?.one ?? 0;
  const two_one = playerLootTracker?.loot_count?.two ?? 0;
  const three_one = playerLootTracker?.loot_count?.three ?? 0;
  const four_one = playerLootTracker?.loot_count?.four ?? 0;
  let index = 1;

  // Add 1x1 treasures based on one_one count
  for (let i = 0; i < one_one; i++) {
    availableTreasures.push({
      id: index,
      xSize: 1,
      ySize: 1,
    });
    index++;
  }

  // Add 1x2 treasures based on one_two count
  for (let i = 0; i < two_one; i++) {
    availableTreasures.push({
      id: index,
      xSize: 1,
      ySize: 2,
    });
    index++;
  }

  // Add 1x3 treasures based on three_one count
  for (let i = 0; i < three_one; i++) {
    availableTreasures.push({
      id: index,
      xSize: 1,
      ySize: 3,
    });
    index++;
  }

  // Add 1x4 treasures based on four_one count
  for (let i = 0; i < four_one; i++) {
    availableTreasures.push({
      id: index,
      xSize: 1,
      ySize: 4,
    });
    index++;
  }
  return availableTreasures;
};
