import { PropsWithChildren, createContext, useContext, useState } from "react";
import { IBuriedTreasure, ITreasure } from "../types/Treasure";
import { Terrain } from "../enums/terrain";

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
]

interface IGameContext {
  treasureToBury: ITreasure | undefined;
  setTreasureToBury: (treasure: ITreasure | undefined) => void;
  buriedTreasures: IBuriedTreasure[];
  buryTreasure: (x: number, y: number) => void;
  rotateTreasure: () => void;
  grid: Terrain[][];
  updateGridValue: (x: number, y: number, newValue: Terrain) => void;
}

const GameContext = createContext<IGameContext>({
  treasureToBury: undefined,
  setTreasureToBury: () => {},
  buriedTreasures: [],
  buryTreasure: () => {},
  rotateTreasure: () => {},
  grid: BASE_GRID,
  updateGridValue: () => {}
});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [treasureToBury, setTreasureToBury] = useState<ITreasure | undefined>();
  const [buriedTreasures, setBuriedTreasures] = useState<IBuriedTreasure[]>([]);

  const [grid, setGrid] = useState<Terrain[][]>(BASE_GRID)

  const updateGridValue = (x: number, y: number, newValue: Terrain) => {
    const newGrid = [...grid];
    newGrid[x] = [...newGrid[x]];
    newGrid[x][y] = newValue;
    setGrid(newGrid);
  };

  const buryTreasure = (x: number, y: number) => {
    if (treasureToBury) {
      setBuriedTreasures((prev) => [...prev, { x, y, ...treasureToBury }]);
    } else {
      console.error("No treasure to bury");
    }
    setTreasureToBury(undefined);
  };

  const rotateTreasure = () => {
    console.log("treasureToBury", treasureToBury);
    if (treasureToBury) {
      setTreasureToBury((prev) => {
        console.log("prev", prev);
        return {
          xSize: prev!.ySize,
          ySize: prev!.xSize,
        };
      });
    }
  };

  return (
    <GameContext.Provider
      value={{
        treasureToBury,
        setTreasureToBury,
        buriedTreasures,
        buryTreasure,
        rotateTreasure,
        grid,
        updateGridValue
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
