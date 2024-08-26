import { PropsWithChildren, createContext, useContext, useState } from "react";
import { IBuriedTreasure, ITreasure } from "../types/Treasure";

interface IGameContext {
  treasureToBury: ITreasure | undefined;
  setTreasureToBury: (treasure: ITreasure | undefined) => void;
  buriedTreasures: IBuriedTreasure[];
  buryTreasure: (x: number, y: number) => void;
  rotateTreasure: () => void;
}

const GameContext = createContext<IGameContext>({
  treasureToBury: undefined,
  setTreasureToBury: () => {},
  buriedTreasures: [],
  buryTreasure: () => {},
  rotateTreasure: () => {},
});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [treasureToBury, setTreasureToBury] = useState<ITreasure | undefined>();
  const [buriedTreasures, setBuriedTreasures] = useState<IBuriedTreasure[]>([]);
  const buryTreasure = (x: number, y: number) => {
    if (treasureToBury) {
      setBuriedTreasures((buriedTreasures) => [
        ...buriedTreasures,
        { x, y, ...treasureToBury },
      ]);
    } else {
      console.error("No treasure to bury");
    }
    setTreasureToBury(undefined);
  };

  const rotateTreasure = () => {
    if (treasureToBury) {
      setTreasureToBury(prev => { return {
        xSize: prev!.ySize,
        ySize: prev!.xSize,
      }})
    }}

  return (
    <GameContext.Provider
      value={{
        treasureToBury,
        setTreasureToBury,
        buriedTreasures,
        buryTreasure,
        rotateTreasure,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
