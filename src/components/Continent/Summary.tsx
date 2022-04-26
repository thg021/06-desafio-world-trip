import { Flex, HStack, Text } from "@chakra-ui/react";

interface SummaryProps {
  text: string;
}

export default function Summary({ text, countries, languages, cities }) {
  return (
    <Flex justify="space-between">
      <Text flex={0.8} align="justify">
        {text}
      </Text>

      <HStack spacing={40}>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontWeight="bold"
            color="yellow.900"
            fontSize="4xl"
            lineHeight="1"
          >
            {countries}
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
            {languages}
          </Text>
          <Text fontWeight="bold" color="gray.800">
            idiomas
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontWeight="bold"
            color="yellow.900"
            fontSize="4xl"
            lineHeight="1"
          >
            {cities}
          </Text>
          <Text fontWeight="bold" color="gray.800">
            cidades
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
}
