import { TILE_SIZE } from "../constants";
import { BasicGrid } from "./BasicGrid";
import { Decorations } from "./Decorations";
import { MapGrid } from "./MapGrid";
import { WaterBackground } from "./WaterBackground";

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
        <Decorations />
        <WaterBackground />
      </group>
      <group position={[0, 0, -gridHeight]}>
        <BasicGrid xSize={WIDTH} ySize={HEIGHT} type="SAND" />
      </group>
    </>
  );
};
