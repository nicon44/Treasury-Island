import { Box, Text } from "@chakra-ui/react";
import { PhaseProps } from "../types/PhaseProps";

export const ControlsHelp = ({ hide, seek }: PhaseProps) => {
  return (
    <Box
      borderRadius="10px 0"
      backgroundColor="white"
      position="absolute"
      top={0}
      right={0}
      m={2}
      px={4}
    >
      {hide && <Text>Press R to rotate the treasure</Text>}
      {seek && (
        <Text>
          Click on the tiles to find treasures. <br /> Shovels represent your
          tries.
        </Text>
      )}
    </Box>
  );
};
