import { PropsWithChildren } from "react";

interface BasicGridProps extends PropsWithChildren {
  xSize: number;
  ySize: number;
}
export const BasicGrid = ({ xSize, ySize, children }: BasicGridProps) => {
  const tileSize = 10; // Size of each tile (matches planeGeometry args)

  const tiles = [];

  for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
      tiles.push(
        <group key={`${x}-${y}`} position={[x * tileSize, 0, y * tileSize]}>
          {children}
        </group>
      );
    }
  }

  return <>{tiles}</>;
};
