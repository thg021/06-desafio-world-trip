import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

type continent = {
  background: string;
  name: string;
  title: string;
};

interface SlidesProps {
  continents: continent[];
}

export function Slides({ continents }: SlidesProps) {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      mt={10}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent.name}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url('${continent.background}')`}
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <Link href={`/continent/${continent.name}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]}
                      color="gray.100"
                      fontWeight="bold"
                    >
                      {continent.name}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="white"
                      fontSize={["0.8rem", "1xl", "2xl"]}
                      mt={["1", "2"]}
                    >
                      {continent.title}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
