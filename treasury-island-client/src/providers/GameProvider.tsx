import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useDojo } from "../dojo/useDojo";
import { Terrain } from "../enums/terrain";
import { useRoomId } from "../hooks/useRoomId";
import { IBuriedTreasure, ITreasure } from "../types/Treasure";

const BASE_GRID = [
  [0, Terrain.PALM, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [Terrain.STONE, 0, 0, 0, 0, 0],
  [Terrain.STONE, 0, 0, 0, 0, 0],
  [0, 0, 0, Terrain.PALM, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [Terrain.STONE, Terrain.STONE, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, Terrain.PALM, 0],
  [0, 0, 0, 0, 0, 0],
];


interface IGameContext {
  treasureToBury: ITreasure | undefined;
  pickTreasure: (treasure: ITreasure | undefined) => void;
  buriedTreasures: IBuriedTreasure[];
  buryTreasure: (x: number, y: number) => void;
  rotateTreasure: () => void;
  grid: Terrain[][];
  updateGridValue: (x: number, y: number, newValue: Terrain) => void;
  checkIfCanBeBuried: (x: number, y: number) => boolean;
}

const GameContext = createContext<IGameContext>({
  treasureToBury: undefined,
  pickTreasure: () => {},
  buriedTreasures: [],
  buryTreasure: () => {},
  rotateTreasure: () => {},
  grid: BASE_GRID,
  updateGridValue: () => {},
  checkIfCanBeBuried: () => false,
});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const {
      setup: {
      clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
      client,
      },
      account: { account },
  } = useDojo();
  const roomId = useRoomId();

  const [treasureToBury, setTreasureToBury] = useState<ITreasure | undefined>();
  const [buriedTreasures, setBuriedTreasures] = useState<IBuriedTreasure[]>([]);

  const [grid, setGrid] = useState<Terrain[][]>(BASE_GRID);


  const updateGridValue = (x: number, y: number, newValue: Terrain) => {
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[x] = [...newGrid[x]];
      newGrid[x][y] = newValue;
      return newGrid;
    });
  };

  const buryTreasure = async (x: number, y: number) => {
    if (treasureToBury) {
      /* setAvailableTreasures((prev) =>
        prev.filter((t) => t.id !== treasureToBury?.id)
      ); */
      setBuriedTreasures((prev) => [...prev, { x, y, ...treasureToBury }]);
      const { xSize, ySize } = treasureToBury;
      for (let i = 0; i < xSize; i++) {
        for (let j = 0; j < ySize; j++) {
          const currentX = x + i;
          const currentY = y + j;
          updateGridValue(currentX, currentY, Terrain.TREASURE);
        }
      }
      await client.gameroom.hide_loot({
        account,
        game_id: BigInt(roomId??""),
        loot_id: 1, // 1 is 1x1, 2 is 3x1, 3 is 4x1
        x0: x,
        y0: y,
        x1: x,
        y1: y,
    });
    } else {
      console.error("No treasure to bury");
    }
    setTreasureToBury(undefined);
  };

  const rotateTreasure = () => {
    if (treasureToBury) {
      setTreasureToBury((prev) => {
        return (
          prev && {
            ...prev,
            xSize: prev!.ySize,
            ySize: prev!.xSize,
          }
        );
      });
    }
  };

  const checkIfCanBeBuried = (x: number, y: number) => {
    if (!treasureToBury || !grid) {
      return false;
    }
    const { xSize, ySize } = treasureToBury;

    // Loop through the grid cells that the treasure would occupy
    for (let i = 0; i < xSize; i++) {
      for (let j = 0; j < ySize; j++) {
        const currentX = x + i;
        const currentY = y + j;

        // Check if the current cell is of Terrain.SAND
        if (grid[currentX]?.[currentY] !== Terrain.SAND) {
          return false; // If any cell is not Terrain.SAND, the treasure can't be buried here
        }
      }
    }

    return true; // All cells are Terrain.SAND, so the treasure can be buried here
  };

  const pickTreasure = (treasure: ITreasure | undefined) => {
    setTreasureToBury(treasure);
  };

  return (
    <GameContext.Provider
      value={{
        treasureToBury,
        pickTreasure,
        buriedTreasures,
        buryTreasure,
        rotateTreasure,
        grid,
        updateGridValue,
        checkIfCanBeBuried,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
