import { Box, SimpleGrid, Image, Text, Avatar } from "@chakra-ui/react";

export default function Cities({ listCities }) {
  return (
    <SimpleGrid columns={4} spacing={10} mb={8}>
      {listCities.map((city) => (
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="md"
          borderColor="yellow.400"
          overflow="hidden"
          key={city.city}
        >
          <Image src={city.url_image_city} alt="test" maxH="128px" w="100%" />

          <Box p="6" bg="white">
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                <Text
                  color="gray.700"
                  fontWeight="bold"
                  lineHeight="2"
                  fontSize="md"
                >
                  {city.city}
                </Text>
                <Text color="gray.400" fontSize="small">
                  {city.country}
                </Text>
              </Box>
              <Avatar size="sm" name="Prosper Otemuyiwa" src={city.icon} />
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
