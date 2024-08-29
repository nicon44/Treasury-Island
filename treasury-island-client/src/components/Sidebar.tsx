import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "../dojo/useDojo";
import { useAvailableTreasures } from "../hooks/useAvailableTreasures";
import { useRoomId } from "../hooks/useRoomId";
import { useGameContext } from "../providers/GameProvider";
import { PhaseProps } from "../types/PhaseProps";
import { bigintToHex, feltToString, mapGameState } from "../utils";

export const Sidebar = ({ hide, seek }: PhaseProps) => {
  const { pickTreasure, game, phase } = useGameContext();
  const id = useRoomId();

  const availableTreasures = useAvailableTreasures();

  const {
    setup: {
      clientComponents: { Player },
      client,
    },
    account: { account },
  } = useDojo();

  const roomId = useRoomId();

  const gameState = mapGameState(game?.state);

  const gameStarted = game?.state && mapGameState(game?.state) == "InProgress";

  const player1Address: string =
    Number(game?.player1) == 0 ? "" : bigintToHex(game?.player1);
  const player1isHere: boolean = player1Address == "" ? false : true;
  const player1 =
    game?.player1 &&
    getComponentValue(
      Player,
      getEntityIdFromKeys([game.player1]) ?? ("" as Entity)
    );

  const player2Address: string =
    Number(game?.player2) == 0 ? "" : bigintToHex(game?.player2);
  const player2isHere: boolean = player2Address == "" ? false : true;
  const player2 =
    game?.player2 &&
    getComponentValue(
      Player,
      getEntityIdFromKeys([game?.player2]) ?? ("" as Entity)
    );

  const isPlayer1 = account.address == bigintToHex(game?.player1);

  function getImgId(xSize: number, ySize: number) {
    if ((xSize === 2 && ySize === 1) || (xSize === 1 && ySize === 2)) {
      return 2;
    } else if ((xSize === 3 && ySize === 1) || (xSize === 1 && ySize === 3)) {
      return 3;
    } else {
      return 1;
    }
  }

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
              : isPlayer1 && (
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
                    End turn
                  </Button>
                )}
          </Heading>
        )}
        {hide && (
          <Flex direction="column" gap={2}>
            {availableTreasures.map((treasure) => (
              <>
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
              </>
            ))}
          </Flex>
        )}
      </Flex>
      <Box m={2}>
        <Text>Player 1: {feltToString(player1?.name ?? "") ?? ""}</Text>
        <Text>Player 2: {feltToString(player2?.name ?? "") ?? ""}</Text>
        <Text>Room ID: {id}</Text>
      </Box>
    </Flex>
  );
};
