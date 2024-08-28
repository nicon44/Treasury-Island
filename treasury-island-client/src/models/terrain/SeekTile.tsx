import { useMemo, useState } from "react";
import { Terrain } from "../../enums/terrain";
import { useGameContext } from "../../providers/GameProvider";
import { TileProps } from "../../types/TileProps";
import { Treasure } from "../Treasure";
import { Palm } from "./Palm";
import { Sand } from "./Sand";
import { Stone } from "./Stone";
import { Water } from "./Water";

export const SeekTile = ({ x, y }: TileProps) => {
  const {
    grid,
  } = useGameContext();
  const [hovered, setHovered] = useState(false);

  const TERRAIN_MAP = useMemo(() => {
    return {
      [Terrain.SAND]: (
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.WATER]: (
        <Water x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.PALM]: (
        <Palm x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.STONE]: (
        <Stone x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
    };
  }, [x, y, hovered, setHovered]);

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        console.log('DIIIGGGGGGGGG')
      }}
    >
      {TERRAIN_MAP[grid[x][y]]}
    </group>
  );
};
