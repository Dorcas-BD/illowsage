import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <Flex
      bg={"#F8F2EB"}
      p={8}
      px={{ base: 2, md: 36 }}
      pl={6}
      justify="space-between"
      align="center"
      pb={36}
    >
      <Flex
        flex={1}
        direction={{ base: "column-reverse", md: "column" }}
        position={"relative"}
        top={{ base: 4, md: 20 }}
        mr={8}
      >
        <Flex
          direction={"column"}
          justifyContent={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Heading
            fontFamily="Montserrat"
            fontSize={{ base: 28, md: 32, lg: 48 }}
            fontWeight={700}
            lineHeight={{ base: "32px", md: "56px" }}
            textAlign={{ base: "center", md: "left" }}
            color={"#4F4F4F"}
          >
            Unveil Your Inner Radiance <br /> Discover the Collection Now!
          </Heading>
          <Text
            mt={4}
            fontSize={16}
            color="#4F4F4F"
            fontWeight={400}
            lineHeight="16px"
            textAlign="justify"
          >
            Pamper your skin seven times, let it glow eight.
          </Text>
        </Flex>
        <Box mt={{ base: 0, md: 8 }} left={80}>
          <Image
            src="/img/heroSubImage.png"
            alt="Hero Subimage"
            width={526}
            height={328}
          />
        </Box>
      </Flex>

      <Flex
        flex={1}
        direction="column"
        align="center"
        position="relative"
        right={-28}
        display={{ base: "none", md: "flex" }}
      >
        <Box>
          <Image
            src="/img/heroImage.png"
            alt="Hero Image"
            height={552}
            width={499}
          />
        </Box>
        <Text mt={4} fontSize="sm" color="#4F4F4F" w={499}>
          Discover your natural glow with WillowSage Cosmetics. Pure, gentle,
          and effective skincare inspired by nature. Join our community and
          embrace radiant beauty.
        </Text>
      </Flex>
    </Flex>
  );
};

export default HeroPage;
