import { Box, Img } from "@chakra-ui/react";

export function Logo() {
  return (
    <Box flex="1">
      <Img mx="auto" src="/images/logo.svg" alt="Logo trip" h={[8, 16]}></Img>
    </Box>
  );
}
