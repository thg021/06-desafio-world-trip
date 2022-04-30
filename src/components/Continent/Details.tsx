import { Box, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface DetailsProps {
  text: string;
  value: number;
  tooltip?: boolean;
}

export function Details({ text, value, tooltip = false }: DetailsProps) {
  return (
    <Flex direction="column" align={["flex-start", "center"]} justify="center">
      <Text
        fontWeight="bold"
        color="yellow.900"
        fontSize={["2xl", "4xl"]}
        lineHeight="1"
      >
        {value}
      </Text>
      <Flex direction={["row", "column"]} justify="center" align="center">
        <Text fontWeight={["normal", "bold"]} color="gray.800">
          {text}
        </Text>
        {tooltip && (
          <Tooltip
            hasArrow
            label="Hey, I'm here!"
            aria-label="A tooltip"
            bg="gray.700"
            borderRadius="full"
          >
            <Box>
              <Icon as={RiInformationLine} fontSize="md" />
            </Box>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
}
