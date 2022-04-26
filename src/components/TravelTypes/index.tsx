import { Flex, HStack, Img, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex w="100%" justify="space-between" mt="16">
      <Flex align="center" direction="column">
        <Img src="/images/traveltypes/cocktail.svg" h="20" mb="3" />
        <Text fontWeight="bold">vida noturna</Text>
      </Flex>

      <Flex align="center" direction="column">
        <Img src="/images/traveltypes/surf.svg" h="20" mb="3" />
        <Text fontWeight="bold">praia</Text>
      </Flex>

      <Flex align="center" direction="column">
        <Img src="/images/traveltypes/building.svg" h="20" mb="3" />
        <Text fontWeight="bold">moderno</Text>
      </Flex>

      <Flex align="center" direction="column">
        <Img src="/images/traveltypes/museum.svg" h="20" mb="3" />
        <Text fontWeight="bold">clássico</Text>
      </Flex>

      <Flex align="center" direction="column">
        <Img src="/images/traveltypes/earth.svg" h="20" mb="3" />
        <Text fontWeight="bold">e mais...</Text>
      </Flex>
    </Flex>
  );
}
