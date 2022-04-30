import { Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import Separador from "../components/Separator";
import { Slides } from "../components/Slides";
import { TravelTypes } from "../components/TravelTypes";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

export default function Home({ continents }) {
  return (
    <Flex mb={30} direction="column">
      <Banner />
      <Flex mx={[6, 24]} direction="column" align="center">
        <TravelTypes />
        <Separador />
        <Text fontSize={["1xl", "2xl"]} fontWeight="medium" align="center">
          Vamos nesta? <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <Slides continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>(
    [Prismic.predicates.at("document.type", "continents")],
    {
      fetch: ["continents.name", "continents.title", "continents.slider"],
      pageSize: 10,
    }
  );

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      name: continent.data.name,
      title: continent.data.title,
      url: continent.data.slider.url,
    };
  });

  console.log(JSON.stringify(continents, null, 2));

  return {
    props: { continents },
  };
};
