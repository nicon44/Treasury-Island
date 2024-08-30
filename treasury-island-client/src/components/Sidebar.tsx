import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useComponentValue } from "@dojoengine/react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "../dojo/useDojo";
import { useAvailableTreasures } from "../hooks/useAvailableTreasures";
import { useRoomId } from "../hooks/useRoomId";
import { useGameContext } from "../providers/GameProvider";
import { PhaseProps } from "../types/PhaseProps";
import { bigintToHex, feltToString, mapGameState } from "../utils";

export const Sidebar = ({ hide, seek }: PhaseProps) => {
  const {
    pickTreasure,
    game,
    phase,
    player1,
    player1isHere,
    player2,
    player2isHere,
    isPlayer1,
    shovels,
  } = useGameContext();
  const id = useRoomId();

  const availableTreasures = useAvailableTreasures();

  const {
    setup: {
      clientComponents: { LootTracker },
      client,
    },
    account: { account },
  } = useDojo();

  const roomId = useRoomId();

  const gameState = mapGameState(Number(game?.state ?? 0));

  const gameStarted = game?.state && gameState == "InProgress";

  function getImgId(xSize: number, ySize: number) {
    if ((xSize === 2 && ySize === 1) || (xSize === 1 && ySize === 2)) {
      return 2;
    } else if ((xSize === 3 && ySize === 1) || (xSize === 1 && ySize === 3)) {
      return 3;
    } else {
      return 1;
    }
  }

  const oponent =
    account.address == bigintToHex(BigInt(game?.player1.toString() ?? 0))
      ? player2
      : player1;

  const entityKey = getEntityIdFromKeys([
    BigInt(roomId ?? ""),
    BigInt(oponent?.player_id.toString() ?? 0),
  ]);
  const oponentLootTracker = useComponentValue(LootTracker, entityKey ?? "");
  const oponentHidAll = oponentLootTracker?.loot_count?.four + oponentLootTracker?.loot_count?.three + oponentLootTracker?.loot_count?.two + oponentLootTracker?.loot_count?.one === 0;

  console.log("oponentHidAll: ", oponentHidAll);

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
        <Flex w="100%" justifyContent="center">
          <Img src="/logo.png" width="90%" />
        </Flex>
        <hr />
        <Text>Game state: {gameState}</Text>
        {!player1 ||
          (!player2 && <Text>Waiting for other players to join...</Text>)}
        {phase !== "NULL" && <Text>Phase: {phase}</Text>}
        {/* both players are here and I am player 1 */}
        {player1isHere && player2isHere && isPlayer1 && !gameStarted && (
          <Button
            color="primary"
            backgroundColor="teal.200"
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
        {gameStarted && hide && (
          <Heading mb={4} size="sm">
            {availableTreasures.length
              ? "Select treasure to bury"
              : isPlayer1 && oponentHidAll ?(
                  <Button
                    variant="solid"
                    backgroundColor="teal.200"
                    onClick={async () => {
                      await client.gameroom.end_round({
                        account,
                        game_id: BigInt(roomId ?? ""),
                      });
                    }}
                  >
                    Go to SEEK phase
                  </Button>
                ) : 'Waiting for opponent to bury all the treasures...'}
          </Heading>
        )}
        {hide && (
          <Flex direction="column" gap={2}>
            {availableTreasures.map((treasure) => (
              <span key={treasure.id}>
                <Button
                  variant="outline"
                  key={treasure.id}
                  onClick={() => pickTreasure(treasure)}
                >
                  {`${treasure.xSize}x${treasure.ySize}`}
                  <Img
                    height="30px"
                    src={`/chest${getImgId(treasure.xSize, treasure.ySize)}.png`}
                    ml={2}
                  />
                </Button>
              </span>
            ))}
          </Flex>
        )}
        {seek && (
          <Flex direction="column" gap={2}>
            Shovels: {shovels}
          </Flex>
        )}
      </Flex>
      <Box m={2}>
        <Text>
          Player 1: {feltToString(player1?.name.toString() ?? "") ?? ""}
        </Text>
        <Text>
          Player 2: {feltToString(player2?.name.toString() ?? "") ?? ""}
        </Text>
        <Text>Room ID: {id}</Text>
      </Box>
    </Flex>
  );
};
