import { Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import Separador from "../components/Separator";
import { Slides } from "../components/Slides";
import { TravelTypes } from "../components/TravelTypes";

const continents = [
  {
    background:
      "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg",
    name: "Europa",
    title: "O melhor dos mundos",
  },
  {
    background:
      "https://cdn.pixabay.com/photo/2016/11/14/03/29/grand-palace-1822487__340.jpg",
    name: "Asia",
    title: "Sushi esta aqui ",
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <Flex mx={24} direction="column" align="center">
        <TravelTypes />
        <Separador />
        <Text fontSize={["2xl"]} fontWeight="medium" align="center">
          Vamos nesta? <br />
          Então escolha seu continente
        </Text>

        <Slides continents={continents} />
      </Flex>
    </>
  );
}
