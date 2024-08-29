import { TILE_SIZE } from "../constants";
import { HideTile } from "../models/terrain/HideTile";
import { SeekTile } from "../models/terrain/SeekTile";
import { useGameContext } from "../providers/GameProvider";
import { PhaseProps } from "../types/PhaseProps";

export const MapGrid = ({hide, seek}: PhaseProps) => {
  const { grid } = useGameContext();
  const xSize = grid.length;
  const ySize = grid[0].length;

  const tiles = [];

  for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
      tiles.push(
        <group key={`${x}-${y}`} position={[x * TILE_SIZE, 0, y * TILE_SIZE]}>
          {hide ? <HideTile x={x} y={y} /> : <SeekTile x={x} y={y} />}
        </group>
      );
    }
  }

  return <>{tiles}</>;
};
