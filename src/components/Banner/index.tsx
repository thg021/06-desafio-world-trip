import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box maxH="320">
      <Flex
        bgImage="url('/images/Background.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        px={[4, 24]}
        py={[4, 12]}
        align="center"
        justify="space-between"
      >
        <Box>
          <Text
            fontSize={["2xl", "3xl"]}
            fontWeight="medium"
            color="white"
            mb="6"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text color="white">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Box>
        <Img
          w={["300px", "300px", "300px", "430px"]}
          src="/images/Airplane.svg"
          alt="airplane"
          transform="translateY(32px)"
          display={["none", "block"]}
        />
      </Flex>
    </Box>
  );
}
