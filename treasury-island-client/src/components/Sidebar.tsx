import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useComponentValue } from "@dojoengine/react";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "../dojo/useDojo";
import { useAvailableTreasures } from "../hooks/useAvailableTreasures";
import { useRoomId } from "../hooks/useRoomId";
import { useGameContext } from "../providers/GameProvider";
import { bigintToHex, feltToString, mapGameState, mapPhase } from "../utils";

export const Sidebar = () => {
  const { pickTreasure } = useGameContext();
  const id = useRoomId();

  const availableTreasures = useAvailableTreasures();

  const {
    setup: {
      clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
      client,
    },
    account: { account },
  } = useDojo();

  const roomId = useRoomId();

  const game = useComponentValue(
    GameRoom,
    (getEntityIdFromKeys([BigInt(roomId ?? "")]) as Entity) ?? {}
  ) ?? { state: 0, player1: BigInt(0), player2: BigInt(0) };

  const gameState = mapGameState(game?.state);

  const gameStarted = game?.state && mapGameState(game?.state) == "InProgress";

  const player1Address: string =
    Number(game?.player1) == 0 ? "" : bigintToHex(game?.player1);
  const player1isHere: boolean = player1Address == "" ? false : true;
  const player1 =
    player1isHere &&
    getComponentValue(
      Player,
      getEntityIdFromKeys([game?.player1]) ?? ("" as Entity)
    );

  const player2Address: string =
    Number(game?.player2) == 0 ? "" : bigintToHex(game?.player2);
  const player2isHere: boolean = player2Address == "" ? false : true;
  const player2 =
    player2isHere &&
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

  const isPlayer1 = account.address == bigintToHex(game?.player1);

  return (
    <Flex
      width="300px"
      position="fixed"
      height="100vh"
      bg="gray.100"
      left={0}
      direction="column"
      zIndex={9999}
      p={6}
      gap={2}
      justifyContent={"space-between"}
    >
      <Flex direction="column" gap={2}>
        <Heading>Treasury Island</Heading>
        <hr />
        <Text>Game state: {gameState}</Text>
        <Text>Phase: {mapPhase(game?.phase ?? "")}</Text>
        {/* both players are here and I am player 1 */}
        {player1isHere && player2isHere && isPlayer1 && !gameStarted && (
          <Button
            onClick={async () => {
              await client.gameroom.start_game({
                account,
                game_id: BigInt(roomId ?? ""),
              });
            }}
          >
            Start game
          </Button>
        )}
        {gameStarted && (
          <Heading mb={4} size="sm">
            {availableTreasures.length ? (
              "Select treasure to bury"
            ) : (
              <Button
                onClick={async () => {
                  await client.gameroom.end_round({
                    account,
                    game_id: BigInt(roomId ?? ""),
                  });
                }}
              >
                End turn
              </Button>
            )}
          </Heading>
        )}
        <Flex direction="column" gap={2}>
          {availableTreasures.map((treasure) => (
            <Button
              variant="outline"
              key={treasure.id}
              onClick={() => pickTreasure(treasure)}
            >
              {`Treasure ${treasure.id} (${treasure.xSize}x${treasure.ySize})`}
            </Button>
          ))}
        </Flex>
        <Box></Box>
      </Flex>
      <Box m={2}>
        <Text>Player 1: {feltToString(player1?.name ?? "") ?? ""}</Text>
        <Text>Player 2: {feltToString(player2?.name ?? "") ?? ""}</Text>
        <Text>Room ID: {id}</Text>
      </Box>
    </Flex>
  );
};
