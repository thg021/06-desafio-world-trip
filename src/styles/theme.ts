import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      //   "900": "#181B23",
      "800": "#47585B",
      //   "700": "#353646",
      //   "600": "#4B4D63",
      //   "500": "#616480",
      "400": "#999999",
      //   "300": "#9699B0",
      //   "200": "#B3B5C6",
      "100": "#CBCBCB",
      "50": "#EEEEF2",
    },
    yellow: {
      "900": "#FFBA08",
      "400": "#FFDC83",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
