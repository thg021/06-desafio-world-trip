import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Banner } from "../../components/Continent/Banner";
import Cities from "../../components/Continent/Cities";
import Summary from "../../components/Continent/Summary";
import { getPrismicClient } from "../../services/prismic";

export default function Continent({ continent }) {
  return (
    <Flex direction="column">
      <Banner url={continent.url} text={continent.name} />

      <Flex mx={[10, 24]} direction={["column"]} mt="16">
        <Summary
          text={continent.summary}
          cities={continent.cities}
          languages={continent.languages}
          countries={continent.countries}
        />
        <Text fontWeight="bold" color="gray.800" fontSize="2xl" my="8">
          Cidades +100
        </Text>
        <Cities listCities={continent.cities_summary} />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID<any>("continents", String(slug), {});

  const continent = {
    slug: response.uid,
    name: response.data.name,
    title: response.data.title,
    summary: response.data.summary, //
    url: response.data.slider.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_summary: response.data.cities_summary.map((city) => {
      return {
        url_image_city: city.image_city.url,
        icon: city.icon.url,
        city: city.city,
        country: city.country,
      };
    }),
  };

  return {
    props: { continent },
  };
};
