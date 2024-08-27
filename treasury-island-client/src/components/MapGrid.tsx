import { TILE_SIZE } from "../constants";
import { Tile } from "../models/terrain/Tile";
import { useGameContext } from "../providers/GameProvider";

export const MapGrid = () => {
  const { grid } = useGameContext();
  const xSize = grid.length;
  const ySize = grid[0].length;

  const tiles = [];

  for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
      tiles.push(
        <group key={`${x}-${y}`} position={[x * TILE_SIZE, 0, y * TILE_SIZE]}>
          <Tile x={x} y={y} />
        </group>
      );
    }
  }

  return <>{tiles}</>;
};
