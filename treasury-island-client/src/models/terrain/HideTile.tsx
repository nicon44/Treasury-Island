import { useComponentValue } from "@dojoengine/react";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useMemo, useState } from "react";
import { useDojo } from "../../dojo/useDojo";
import { Terrain } from "../../enums/terrain";
import { useGameContext } from "../../providers/GameProvider";
import { TileProps } from "../../types/TileProps";
import { bigintToHex } from "../../utils";
import { Treasure } from "../Treasure";
import { Palm } from "./Palm";
import { Sand } from "./Sand";
import { Stone } from "./Stone";
import { Water } from "./Water";

export const HideTile = ({ x, y }: TileProps) => {
  const {
    treasureToBury,
    buryTreasure,
    buriedTreasures,
    grid,
    checkIfCanBeBuried,
    game,
  } = useGameContext();
  const [hovered, setHovered] = useState(false);

  const {
    setup: {
      clientComponents: { IslandCoords, Player },
    },
    account: { account },
  } = useDojo();

  const player1 =
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
  console.log(terrain);

  const canBeBuried = useMemo(
    () => checkIfCanBeBuried(x, y),
    [x, y, checkIfCanBeBuried]
  );

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

  const buriedTreasure = buriedTreasures.find(
    (buriedTreasure) => buriedTreasure.x === x && buriedTreasure.y === y
  );

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        if (grid[x][y] === Terrain.SAND && canBeBuried) {
          buryTreasure(x, y);
        }
      }}
    >
      {TERRAIN_MAP[grid[x][y]]}
      {buriedTreasure && (
        <>
          <Treasure size={[buriedTreasure.xSize, buriedTreasure.ySize]} />
        </>
      )}
      {hovered && treasureToBury && !buriedTreasure && (
        <Treasure
          size={[treasureToBury.xSize, treasureToBury.ySize]}
          canBeBuried={canBeBuried}
        />
      )}
    </group>
  );
};
