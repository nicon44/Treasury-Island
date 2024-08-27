import { TILE_SIZE } from "../constants";
import { BasicGrid } from "./BasicGrid";
import { MapGrid } from "./MapGrid";

const HEIGHT = 6;
const WIDTH = 14;

export const Grid = () => {
  const gridHeight = HEIGHT * TILE_SIZE;

  return (
    <>
      <group position={[0, 0, gridHeight]}>
        <MapGrid />
      </group>
      <group position={[0, 0, 0]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT} type="WATER" />
      </group>
      <group position={[0, 0, -gridHeight]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT} type="SAND" />
      </group>
    </>
  );
};
