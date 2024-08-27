import { Button, Flex, Heading } from "@chakra-ui/react";
import { useGameContext } from "../providers/GameProvider";

const TREASURES_TO_BURY = [
  { id: 1, label: "Small (1x1)", x: 1, y: 1 },
  { id: 2, label: "Medium (1x2)", x: 1, y: 2 },
  { id: 3, label: "Large (1x4)", x: 1, y: 4 },
  { id: 4, label: "Large (1x4)", x: 1, y: 4 },
];

export const Sidebar = () => {
  const { setTreasureToBury } = useGameContext();
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
        {TREASURES_TO_BURY.map((treasure) => (
          <Button
          variant='outline'
            key={treasure.id}
            onClick={() =>
              setTreasureToBury({
                xSize: treasure.x,
                ySize: treasure.y,
              })
            }
          >
            {treasure.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
