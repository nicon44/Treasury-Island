import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, getComponentValue, Has } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { GameRoom, Player } from "../dojo/typescript/models.gen";
import { useDojo } from "../dojo/useDojo";
import { Terrain } from "../enums/terrain";
import { useRoomId } from "../hooks/useRoomId";
import { IBuriedTreasure, ITreasure } from "../types/Treasure";
import { bigintToHex, mapPhase } from "../utils";

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
  player1: Player | undefined;
  player1isHere: boolean;
  player2: Player | undefined;
  player2isHere: boolean;
  isPlayer1: boolean;
  shovels: number;
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
  player1: undefined,
  player1isHere: false,
  player2: undefined,
  player2isHere: false,
  isPlayer1: false,
  shovels: 0,
});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const {
    setup: {
      clientComponents: { Player, GameRoom, Round, Guesses, Loot },
      client,
    },
    account: { account },
  } = useDojo();
  const roomId = useRoomId();
  const navigate = useNavigate();

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
        loot_length: xSize > ySize ? xSize : ySize,
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
    console.log("phase changed: ", phase);
    if (phase === "Hide" || phase === "Seek") {
      navigate(`/${phase.toLowerCase()}?id=${roomId}`);
      resetGrid();
    }
  }, [phase, roomId]);

  const player1Address: string =
    Number(game?.player1) == 0 ? "" : bigintToHex(BigInt(game?.player1 ?? ""));
  const player1isHere: boolean = player1Address == "" ? false : true;
  const player1 = useComponentValue(
    Player,
    getEntityIdFromKeys([BigInt(game?.player1 ?? "")]) ?? ("" as Entity)
  );

  const player2Address: string =
    Number(game?.player2) == 0 ? "" : bigintToHex(BigInt(game?.player2 ?? ""));
  const player2isHere: boolean = player2Address == "" ? false : true;
  const player2 = useComponentValue(
    Player,
    getEntityIdFromKeys([BigInt(game?.player2 ?? "")]) ?? ("" as Entity)
  );
  const isPlayer1 =
    account.address == bigintToHex(BigInt(game?.player1?.toString() ?? ""));

  const player =
    account.address == bigintToHex(game?.player1 ?? "") ? player1 : player2;

  const gameRoundEntity = getEntityIdFromKeys([
    BigInt(roomId ?? ""),
    BigInt(Number(game?.round_num ?? 0)),
  ]);
  const gameRound = useComponentValue(Round, gameRoundEntity);

  const shovels =
    (isPlayer1 ? gameRound?.player1_tries : gameRound?.player2_tries) ?? 0;

  const hasGuesses = useEntityQuery([Has(Guesses)]);

  const guessesObject = hasGuesses.map((entity) => {
    const guesses = getComponentValue(Guesses, entity);
    return guesses;
  });

  const playerGuesses = guessesObject
    .filter((guess) => {
      return (
        guess?.player_id == BigInt(player?.player_id ?? "") &&
        guess?.game_id == BigInt(roomId ?? "")
      );
    })
    .map((guess) => {
      return { x: guess?.x, y: guess?.y, correct: guess?.correct };
    });

  useEffect(() => {
    if (playerGuesses.length > 0) {
      playerGuesses.forEach((guess) => {
        if (
          (guess.x || guess.x === 0) &&
          (guess.y || guess.y === 0) &&
          grid[guess.x][guess.y] === Terrain.SAND
        ) {
          updateGridValue(
            guess.x,
            guess.y,
            guess.correct ? Terrain.HIT : Terrain.MISS
          );
        }
      });
    }
  }, [playerGuesses]);

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
        player1,
        player1isHere,
        player2,
        player2isHere,
        isPlayer1,
        shovels,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
