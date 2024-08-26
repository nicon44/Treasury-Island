import { Sand } from "../models/terrain/Sand";
import { Water } from "../models/terrain/Water";
import { BasicGrid } from "./BasicGrid";

const HEIGHT = 6;
const WIDTH = 14;

export const Grid = () => {
  const tileSize = 10;
  const gridHeight = HEIGHT * tileSize;

  return (
    <>
      <group position={[0, 0, gridHeight]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT}>
          <Sand />
        </BasicGrid>
      </group>
      <group position={[0, 0, 0]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT}>
          <Water />
        </BasicGrid>
      </group>
      <group position={[0, 0, -gridHeight]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT}>
          <Sand />
        </BasicGrid>
      </group>
    </>
  );
};
