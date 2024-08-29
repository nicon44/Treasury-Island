import { TILE_SIZE } from "../constants";
import { PhaseProps } from "../types/PhaseProps";
import { BasicGrid } from "./BasicGrid";
import { Decorations } from "./Decorations";
import { MapGrid } from "./MapGrid";
import { WaterBackground } from "./WaterBackground";

const HEIGHT = 6;
const WIDTH = 14;

export const Grid = ({ hide, seek }: PhaseProps) => {
  const gridHeight = HEIGHT * TILE_SIZE;

  const mapGrid = <MapGrid hide={hide} seek={seek} />;
  const basicGrid = <BasicGrid xSize={WIDTH} ySize={HEIGHT} type="SAND" />;

  return (
    <>
      <group position={[0, 0, gridHeight]}>{hide ? mapGrid : basicGrid}</group>
      <group position={[0, 0, 0]}>
        <Decorations />s
        <WaterBackground />
      </group>
      <group position={[0, 0, -gridHeight]}>{seek ? mapGrid : basicGrid}</group>
    </>
  );
};
