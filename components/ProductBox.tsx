"use client";

import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import React from "react";

const ProductBox = () => {
  const items = [
    "Bodycare",
    "Sunscreen",
    "Lipcare",
    "Exfolitor",
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

  const itemWidth = "25%";

  return (
    <Box
      width={{ base: "calc(100% - 2rem)", md: "calc(100% - 8rem)" }}
      mx={{ base: "1rem", md: "4rem" }}
      height="61px"
      py={4}
      px={{ base: 0, md: 4 }}
      borderRadius={12}
      opacity={0.7}
      background="linear-gradient(90deg, #FCF0F3 0%, #DDC3A0)"
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
    >
      <Flex
        as="div"
        width="200%"
        justifyContent="space-around"
        alignItems="center"
        animation={`${scrollingAnimation} 30s linear infinite`}
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
    </Box>
  );
};

export default ProductBox;
