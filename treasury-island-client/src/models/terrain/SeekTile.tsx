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

  const { grid, shovels } = useGameContext();
  const [hovered, setHovered] = useState(false);

  const handleDig = async (event) => {
    event.stopPropagation();
    if (shovels > 0) {
      await client.gameroom.dig_for_loot({
        account,
        game_id: BigInt(roomId ?? ""),
        x: x,
        y: y,
      });
    } else {
      console.log('no shovels');
    }
  };

  /*   const player1 =
    game?.player1 &&
    getComponentValue(
      Player,
      getEntityIdFromKeys([game.player1]) ?? ("" as Entity)
    );

  const player2 =
    game?.player2 &&
    getComponentValue(
      Player,
      getEntityIdFromKeys([game?.player2]) ?? ("" as Entity)
    );

  const player =
    account.address == bigintToHex(game?.player1)
      ? player1
      : account.address == bigintToHex(game?.player2)
        ? player2
        : {};

  console.log("game", game?.game_id);
  console.log("player id", player?.player_id);
  console.log("x", x);
  console.log("y", y);
  const entityKey = getEntityIdFromKeys([
    BigInt(game?.game_id ?? 0),
    BigInt(player?.player_id ?? 0),
    BigInt(x),
    BigInt(y),
  ]);

  const terrain = useComponentValue(IslandCoords, entityKey ?? "");
  console.log(terrain); */

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
