// components/Footer.tsx

"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  const logoWidth = useBreakpointValue({ base: 60, md: 70 });
  return (
    <Box bg="#000000" py={6} px={{ base: 16, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-around" }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 20 }}
      >
        <Flex direction="column">
          <Flex>
            <Box justifyContent="center" alignItems="center" pr="4" pb="">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={logoWidth}
                height={logoWidth}
              />
            </Box>
            <Text
              fontSize="4xl"
              fontWeight="700"
              color="#D95D7D"
              lineHeight={10}
            >
              illowsage
            </Text>
          </Flex>
          <Box>
            <Text mt={2} color="#9D9D9D" w={{ base: 500, md: 72 }}>
              Glow with confidence, embrace your natural beauty. Discover the
              power of premium skincare with us.
            </Text>
          </Box>
        </Flex>
        {/* <Flex mt={{ base: 4, md: 0 }} align="center"> */}
        <Box>
          <Text fontWeight="bold" color="#F0C0CD">
            Section 1
          </Text>
          <Flex direction="column" color="#9D9D9D">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
          </Flex>
        </Box>
        <Box ml={8}>
          <Text fontWeight="bold" color="#F0C0CD">
            Section 2
          </Text>
          <Flex direction="column" color="#9D9D9D">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
          </Flex>
        </Box>
        <Box ml={8}>
          <Text fontWeight="bold" color="#F0C0CD">
            Section 3
          </Text>
          <Flex direction="column" color="#9D9D9D">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
          </Flex>
        </Box>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default Footer;
