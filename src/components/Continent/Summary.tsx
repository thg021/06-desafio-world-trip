import { Flex, HStack, Text } from "@chakra-ui/react";

interface SummaryProps {
  text: string;
}

export default function Summary() {
  return (
    <Flex justify="space-between">
      <Text flex={0.8} align="justify">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <HStack spacing={40}>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontWeight="bold"
            color="yellow.900"
            fontSize="4xl"
            lineHeight="1"
          >
            50
          </Text>
          <Text fontWeight="bold" color="gray.800">
            países
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontWeight="bold"
            color="yellow.900"
            fontSize="4xl"
            lineHeight="1"
          >
            50
          </Text>
          <Text fontWeight="bold" color="gray.800">
            países
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontWeight="bold"
            color="yellow.900"
            fontSize="4xl"
            lineHeight="1"
          >
            50
          </Text>
          <Text fontWeight="bold" color="gray.800">
            países
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
}
