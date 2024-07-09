"use client";

import {
  Box,
  Flex,
  Text,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const ProductBox = () => {
  const items = [
    "Bodycare",
    "Sunscreen",
    "Lipcare",
    "Exfoliator",
    "Facemask",
    "Moisturizer",
    "Cleaners",
    "Toners",
    "Serums",
  ];

  const scrollingAnimation = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

  const animationDuration = useBreakpointValue({ base: "20s", md: "30s" });

  const itemWidth = "25%";

  return (
    <Box
      width={"105%"}
      height="61px"
      py={4}
      borderRadius={12}
      opacity={0.7}
      background="linear-gradient(90deg, #FCF0F3 0%, #DDC3A0)"
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
    >
      <Flex
        as="div"
        width={{ base: "400%", md: "200%" }}
        justifyContent="space-around"
        alignItems="center"
        animation={`${scrollingAnimation} ${animationDuration} linear infinite`}
      >
        {[...items, ...items].map((item, index) => (
          <Text
            key={index}
            fontSize={{ base: "sm", md: "lg" }}
            color="#4F4F4F"
            opacity={0.5}
            mx={2}
            display="inline-block"
            whiteSpace="nowrap"
            width={itemWidth}
            textAlign="center"
          >
            {item}
          </Text>
        ))}
      </Flex>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        width="10%"
        bg="linear-gradient(to right, rgba(252, 240, 243, 1), rgba(252, 240, 243, 0))"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        width="10%"
        bg="linear-gradient(to left, rgba(252, 240, 243, 1), rgba(252, 240, 243, 0))"
        pointerEvents="none"
      />
    </Box>
  );
};

export default ProductBox;
