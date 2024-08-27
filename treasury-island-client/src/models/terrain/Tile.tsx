import { useMemo, useState } from "react";
import { Terrain } from "../../enums/terrain";
import { useGameContext } from "../../providers/GameProvider";
import { TileProps } from "../../types/TileProps";
import { Treasure } from "../Treasure";
import { Sand } from "./Sand";
import { Water } from "./Water";

export const Tile = ({ x, y }: TileProps) => {
  const { treasureToBury, buryTreasure, buriedTreasures, grid } =
    useGameContext();
  const [hovered, setHovered] = useState(false);

  const TERRAIN_MAP = useMemo(() => {
    return {
      [Terrain.SAND]: (
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.WATER]: (
        <Water x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.PALM]: ( // TODO: Add palm
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.STONE]: ( // TODO: Add stone
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
    };
  }, [x, y, hovered, setHovered]);

  const buriedTreasure = buriedTreasures.find(
    (buriedTreasure) => buriedTreasure.x === x && buriedTreasure.y === y
  );

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        if (grid[x][y] === Terrain.SAND) {
          buryTreasure(x, y);
        }
      }}
    >
      {TERRAIN_MAP[grid[x][y]]}
      {buriedTreasure && (
        <Treasure size={[buriedTreasure.xSize, buriedTreasure.ySize]} />
      )}
      {hovered && treasureToBury && !buriedTreasure && (
        <Treasure size={[treasureToBury.xSize, treasureToBury.ySize]} />
      )}
    </group>
  );
};
