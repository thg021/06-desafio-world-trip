import "../styles/theme.ts";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100%" h="100vh" direction="column">
        <Header />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
