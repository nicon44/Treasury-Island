import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Terrain } from "../enums/terrain";
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

const AVAILABLE_TREASURES = [
  {
    id: 1,
    xSize: 1,
    ySize: 1,
  },
  {
    id: 2,
    xSize: 1,
    ySize: 2,
  },
  {
    id: 3,
    xSize: 2,
    ySize: 1,
  },
  {
    id: 4,
    xSize: 1,
    ySize: 4,
  },
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
  availableTreasures: ITreasure[];
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
  availableTreasures: [],
});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [treasureToBury, setTreasureToBury] = useState<ITreasure | undefined>();
  const [buriedTreasures, setBuriedTreasures] = useState<IBuriedTreasure[]>([]);

  const [grid, setGrid] = useState<Terrain[][]>(BASE_GRID);

  const [availableTreasures, setAvailableTreasures] =
    useState<ITreasure[]>(AVAILABLE_TREASURES);

  const updateGridValue = (x: number, y: number, newValue: Terrain) => {
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[x] = [...newGrid[x]];
      newGrid[x][y] = newValue;
      return newGrid;
    });
  };

  const buryTreasure = (x: number, y: number) => {
    if (treasureToBury) {
      setAvailableTreasures((prev) =>
        prev.filter((t) => t.id !== treasureToBury?.id)
      );
      setBuriedTreasures((prev) => [...prev, { x, y, ...treasureToBury }]);
      const { xSize, ySize } = treasureToBury;
      for (let i = 0; i < xSize; i++) {
        for (let j = 0; j < ySize; j++) {
          const currentX = x + i;
          const currentY = y + j;
          updateGridValue(currentX, currentY, Terrain.TREASURE);
        }
      }
    } else {
      console.error("No treasure to bury");
    }
    setTreasureToBury(undefined);
  };

  const rotateTreasure = () => {
    console.log("treasureToBury", treasureToBury);
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
        availableTreasures,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
