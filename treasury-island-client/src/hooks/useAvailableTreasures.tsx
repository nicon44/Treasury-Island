import { useComponentValue } from "@dojoengine/react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "../dojo/useDojo";
import { ITreasure } from "../types/Treasure";
import { useRoomId } from "./useRoomId";

export const useAvailableTreasures = (): ITreasure[] => {
  const availableTreasures = [];
  const {
    setup: {
      clientComponents: { Loot },
    },
    account: { account },
  } = useDojo();
  const roomId = useRoomId();
  const playerLootEntity = getEntityIdFromKeys([
    BigInt(roomId ?? ""),
    BigInt(account.address),
  ]);

  const playerLoot = useComponentValue(Loot, playerLootEntity ?? "");
  const one_one = playerLoot?.one_one ?? 0;
  const three_one = playerLoot?.three_one ?? 0;
  const four_one = playerLoot?.four_one ?? 0;
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
