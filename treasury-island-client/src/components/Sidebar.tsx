import { Button, Flex, Heading } from "@chakra-ui/react";
import { useGameContext } from "../providers/GameProvider";

export const Sidebar = () => {
  const { pickTreasure, availableTreasures } = useGameContext();
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
    >
      <Heading>Treasury Island</Heading>
      <hr />
      <Heading mb={4} size="sm">Select treasure to bury</Heading>
      <Flex direction="column" gap={2}>
        {availableTreasures.map((treasure) => (
          <Button
          variant='outline'
            key={treasure.id}
            onClick={() =>
              pickTreasure(treasure)
            }
          >
            {`Treasure ${treasure.id} (${treasure.xSize}x${treasure.ySize})`}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
