import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      justify={["center", "space-between"]}
      mt={["8", "16"]}
      flexWrap="wrap"
    >
      <Flex
        align="center"
        direction={["row", "column"]}
        mx={[3, 0]}
        my={[4, 0]}
      >
        <Img
          display={["none", "block"]}
          src="/images/traveltypes/cocktail.svg"
          h="20"
          mb="3"
        />
        <Box
          display={["block", "none"]}
          bg="yellow.900"
          h="8px"
          w="8px"
          borderRadius={"full"}
          mr={2}
        ></Box>
        <Text fontWeight="bold">vida noturna</Text>
      </Flex>

      <Flex
        align="center"
        direction={["row", "column"]}
        mx={[3, 0]}
        my={[4, 0]}
      >
        <Img
          display={["none", "block"]}
          src="/images/traveltypes/surf.svg"
          h="20"
          mb="3"
        />
        <Box
          display={["block", "none"]}
          bg="yellow.900"
          h="8px"
          w="8px"
          borderRadius={"full"}
          mr={2}
        ></Box>
        <Text fontWeight="bold">praia</Text>
      </Flex>

      <Flex
        align="center"
        direction={["row", "column"]}
        mx={[3, 0]}
        my={[4, 0]}
      >
        <Img
          display={["none", "block"]}
          src="/images/traveltypes/building.svg"
          h="20"
          mb="3"
        />
        <Box
          display={["block", "none"]}
          bg="yellow.900"
          h="8px"
          w="8px"
          borderRadius={"full"}
          mr={2}
        ></Box>
        <Text fontWeight="bold">moderno</Text>
      </Flex>

      <Flex
        align="center"
        direction={["row", "column"]}
        mx={[3, 0]}
        my={[4, 0]}
      >
        <Img
          display={["none", "block"]}
          src="/images/traveltypes/museum.svg"
          h="20"
          mb="3"
        />
        <Box
          display={["block", "none"]}
          bg="yellow.900"
          h="8px"
          w="8px"
          borderRadius={"full"}
          mr={2}
        ></Box>
        <Text fontWeight="bold">clássico</Text>
      </Flex>

      <Flex
        align="center"
        direction={["row", "column"]}
        mx={[3, 0]}
        my={[4, 0]}
      >
        <Img
          display={["none", "block"]}
          src="/images/traveltypes/earth.svg"
          h="20"
          mb="3"
        />
        <Box
          display={["block", "none"]}
          bg="yellow.900"
          h="8px"
          w="8px"
          borderRadius={"full"}
          mr={2}
        ></Box>
        <Text fontWeight="bold">e mais...</Text>
      </Flex>
    </Flex>
  );
}
