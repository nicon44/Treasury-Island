import { Flex, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import { useGameContext } from "../providers/GameProvider";
import { mapGameState } from "../utils";

export const Winner = () => {
  const { game, isPlayer1 } = useGameContext();
  const gameState = mapGameState(Number(game?.state ?? 0));

  const gameFinished = useMemo(
    () => game?.state && gameState == "Resolved",
    [game?.state, gameState]
  );

  const playerWon =
    (isPlayer1 && game?.winner === game?.player1) ||
    (isPlayer1 === false && game?.winner === game?.player2);

  return (
    gameFinished && (
      <Flex
        position="fixed"
        top={0}
        left={0}
        zIndex={9999}
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize={150} color='white'>YOU {playerWon ? "WON" : "LOST"}!</Heading>
      </Flex>
    )
  );
};
