import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
  url: string;
  text: string;
}

export function Banner({ url, text }: BannerProps) {
  return (
    <Flex
      bgImage={`url(${url})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      align="flex-end"
      w="100%"
      h={420}
    >
      <Text fontSize="3xl" color="white" fontWeight="bold" mb={8} ml={24}>
        {text}
      </Text>
    </Flex>
  );
}
