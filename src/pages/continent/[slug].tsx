import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Continent() {
  return (
    <Flex direction="column">
      <Flex
        bgImage="url('https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={"cover"}
        align="flex-end"
        w="100%"
        h={420}
      >
        <Text fontSize="3xl" color="white" fontWeight="bold" mb={8} ml={24}>
          Asia
        </Text>
      </Flex>
      <Flex mx={24} direction="column" mt="16">
        <Flex justify="space-between">
          <Text flex={0.8} align="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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

        <Text fontWeight="bold" color="gray.800" fontSize="2xl" my="8">
          Cidades +100
        </Text>

        <SimpleGrid columns={4} spacing={10} mb={8}>
          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>

          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="xs"
            borderWidth="1px"
            borderRadius="md"
            borderColor="yellow.400"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
              alt="test"
            />

            <Box p="6" bg="white">
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Londres</Text>
                  <Text>Reino Unido</Text>
                </Box>
                <Avatar
                  size="md"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />{" "}
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
