import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { Banner } from "../../components/Continent/Banner";
import Cities from "../../components/Continent/Cities";
import Summary from "../../components/Continent/Summary";

export default function Continent() {
  return (
    <Flex direction="column">
      <Banner
        url="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg"
        text="Europa"
      />

      <Flex mx={24} direction="column" mt="16">
        <Summary />
        <Text fontWeight="bold" color="gray.800" fontSize="2xl" my="8">
          Cidades +100
        </Text>
        <Cities />
      </Flex>
    </Flex>
  );
}
