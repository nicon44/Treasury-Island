import { useMemo, useState } from "react";
import { useDojo } from "../../dojo/useDojo";
import { Terrain } from "../../enums/terrain";
import { useRoomId } from "../../hooks/useRoomId";
import { useGameContext } from "../../providers/GameProvider";
import { TileProps } from "../../types/TileProps";
import { Palm } from "./Palm";
import { Sand } from "./Sand";
import { Stone } from "./Stone";
import { Water } from "./Water";

export const SeekTile = ({ x, y }: TileProps) => {
  const {
    setup: { client },
    account: { account },
  } = useDojo();
  const roomId = useRoomId();

  const { grid } = useGameContext();
  const [hovered, setHovered] = useState(false);

  const handleDig = async (event) => {
    event.stopPropagation();
    const found = await client.gameroom.dig_for_loot({
      account,
      game_id: BigInt(roomId ?? ""),
      x: x,
      y: y,
    });
    console.log("found: ", found);
  };

  const TERRAIN_MAP = useMemo(() => {
    return {
      [Terrain.SAND]: (
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />
      ),
      [Terrain.MISS]: (
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} miss />
      ),
      [Terrain.HIT]: (
        <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} hit />
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

  return <group onClick={handleDig}>{TERRAIN_MAP[grid[x][y]]}</group>;
};
