// components/ProductBox.tsx

"use client";

import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
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

  const visibleItems =
    useBreakpointValue({
      base: items.slice(0, 4),
      md: items,
    }) || items.slice(0, 4);

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
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex width="100%" justifyContent="space-around">
        {visibleItems.map((item, index) => (
          <Text
            key={index}
            fontSize={{ base: "sm", md: "lg" }}
            color="#4F4F4F"
            opacity={0.5}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

export default ProductBox;
