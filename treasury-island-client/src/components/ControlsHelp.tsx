import { Box, Text } from "@chakra-ui/react";

export const ControlsHelp = () => {
  return (
    <Box borderRadius='10px 0' backgroundColor='white' position="absolute" top={0} right={0} m={2} px={4}>
      <Text>Press 'R' to rotate the treasure</Text>
    </Box>
  );
};
