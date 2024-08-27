import { PropsWithChildren } from "react";
import { Sand } from "../models/terrain/Sand";
import { Water } from "../models/terrain/Water";
import { TILE_SIZE } from "../constants";

interface BasicGridProps extends PropsWithChildren {
  xSize: number;
  ySize: number;
  type: "SAND" | "WATER";
}
export const BasicGrid = ({ xSize, ySize, type }: BasicGridProps) => {
  const tiles = [];

  for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
      tiles.push(
        <group key={`${x}-${y}`} position={[x * TILE_SIZE, 0, y * TILE_SIZE]}>
          {type === "SAND" ? <Sand x={x} y={y} /> : <Water x={x} y={y} />}
        </group>
      );
    }
  }

  return <>{tiles}</>;
};
