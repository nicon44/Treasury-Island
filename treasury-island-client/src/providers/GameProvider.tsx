import { useComponentValue } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GameRoom } from "../dojo/typescript/models.gen";
import { useDojo } from "../dojo/useDojo";
import { Terrain } from "../enums/terrain";
import { useRoomId } from "../hooks/useRoomId";
import { IBuriedTreasure, ITreasure } from "../types/Treasure";
import { mapPhase } from "../utils";

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
  resetGrid: () => void;
  game: GameRoom | undefined;
  phase: string;
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
  resetGrid: () => {},
  game: undefined,
  phase: "",
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

  const game = useComponentValue(
    GameRoom,
    (getEntityIdFromKeys([BigInt(roomId ?? "")]) as Entity) ?? {}
  );

  const [treasureToBury, setTreasureToBury] = useState<ITreasure | undefined>();
  const [buriedTreasures, setBuriedTreasures] = useState<IBuriedTreasure[]>([]);

  const [grid, setGrid] = useState<Terrain[][]>(BASE_GRID);

  const resetGrid = () => {
    setGrid(BASE_GRID);
  };

  const updateGridValue = (x: number, y: number, newValue: Terrain) => {
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[x] = [...newGrid[x]];
      newGrid[x][y] = newValue;
      return newGrid;
    });
  };

  const getLootId = (xSize: number, ySize: number): number => {
    if (xSize === 1 && ySize === 1) {
      return 1;
    } else if ((xSize === 3 && ySize === 1) || (xSize === 1 && ySize === 3)) {
      return 2;
    } else if ((xSize === 4 && ySize === 1) || (xSize === 1 && ySize === 4)) {
      return 3;
    } else {
      return 0;
    }
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
        game_id: BigInt(roomId ?? ""),
        loot_id: getLootId(xSize, ySize), // 1 is 1x1, 2 is 3x1, 3 is 4x1
        x0: x,
        y0: y,
        x1: x + xSize - 1,
        y1: y + ySize - 1,
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

  const phase = useMemo(() => mapPhase(game?.phase ?? 0), [game?.phase]);

  // Reset grid when phase changes
  useEffect(() => {
    resetGrid();
  }, [phase]);

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
        resetGrid,
        game,
        phase,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
