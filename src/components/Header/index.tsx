import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="center"
      marginX="auto"
      py="4"
    >
      <Logo />
    </Flex>
  );
}
