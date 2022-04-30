import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Logo } from "./Logo";

export function Header() {
  const { asPath } = useRouter();
  const isNothomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="space-between"
      px={[4, 24]}
      py="4"
    >
      {isNothomePage && (
        <Link href="/">
          <a>
            <Icon as={RiArrowLeftSLine} fontSize="30" />
          </a>
        </Link>
      )}

      <Logo />
    </Flex>
  );
}
