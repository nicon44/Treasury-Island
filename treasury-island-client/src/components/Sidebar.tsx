import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useAvailableTreasures } from "../hooks/useAvailableTreasures";
import { useRoomId } from "../hooks/useRoomId";
import { useGameContext } from "../providers/GameProvider";

export const Sidebar = () => {
  const { pickTreasure } = useGameContext();
  const id = useRoomId();

  const availableTreasures = useAvailableTreasures();

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
      <Box>
        <Heading>Treasury Island</Heading>
        <hr />
        <Heading mb={4} size="sm">
          {availableTreasures.length
            ? "Select treasure to bury"
            : "No more treasures to bury"}
        </Heading>
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
      </Box>
      <Box m={2}>
        <Text>Room ID: {id}</Text>
      </Box>
    </Flex>
  );
};
