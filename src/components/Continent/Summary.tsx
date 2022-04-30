import { Box, Flex, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { Details } from "./Details";

interface SummaryProps {
  text: string;
}

export default function Summary({ text, countries, languages, cities }) {
  return (
    <Flex justify="space-between" direction={["column", "row"]}>
      <Text flex={0.8} align="justify">
        {text}
      </Text>

      <HStack mt={[5]} spacing={[6, 40]}>
        <Details key="paises" value={countries} text={"paises"} />
        <Details key="idioma" value={languages} text={"Idiomas"} />
        <Details
          key="cidades"
          value={cities}
          text={"100+ cidades"}
          tooltip={true}
        />
      </HStack>
    </Flex>
  );
}
