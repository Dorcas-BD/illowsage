"use client";

import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const WillowPage = () => {
  const productImageWidth = useBreakpointValue({ base: 152, md: 597 });
  const productImageHeight = useBreakpointValue({ base: 120, md: 418 });
  const imageWidth = useBreakpointValue({ base: 688, md: 722 });
  const imageHeight = useBreakpointValue({ base: 277, md: 481 });

  return (
    <Flex
      direction={{ base: "row", md: "row-reverse" }}
      bg={"#DFC7A3"}
      width={{ base: "calc(100% - 3rem)", md: "calc(100% - 11rem)" }}
      mx={{ base: "1.5rem", md: "6rem" }}
      mt={20}
      borderRadius={12}
    >
      <Box
        position={{ base: "absolute", md: "relative" }}
        m={4}
        zIndex={8}
        mt={{ base: 16, md: 3 }}
      >
        <Box position={"relative"} top={{ base: 0, md: 20 }}>
          <Text
            fontSize={{ base: "20px", md: "72px" }}
            fontWeight="500"
            lineHeight={{ base: "24px", md: "83px" }}
            color={"#d7b186"}
          >
            WillowSage
          </Text>
        </Box>
        <Box>
          <Image
            src="/img/product.png"
            alt="Product"
            width={productImageWidth}
            height={productImageHeight}
          />
        </Box>
      </Box>
      <Box position={"relative"} top={{ base: 0, md: 12 }}>
        <Image
          src="/img/image6.png"
          alt="Willow Sage"
          width={imageWidth}
          height={imageHeight}
        />
      </Box>
    </Flex>
  );
};

export default WillowPage;
