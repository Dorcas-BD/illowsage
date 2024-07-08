"use client";

import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

type Blog = {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

const Blogs: Blog[] = [
  {
    title: "The Ultimate Guide to a Glowing Complexion",
    description:
      "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    date: "07 July 2024",
    imageUrl: "/img/blog1.png",
  },
  {
    title: "Top Anti-Aging Skincare Tips and Products",
    description:
      "Aging is a natural process, but with the right skincare regimen, you can maintain a youthful and vibrant appearance.",
    date: "08 July 2024",
    imageUrl: "/img/blog2.png",
  },
  {
    title: "Transform Your Skin Naturally and Repair",
    description:
      "Harness the power of nature with skincare products that utilize...",
    date: "09 July 2024",
    imageUrl: "/img/blog3.png",
  },
];

const Blog = () => {
  return (
    <Box>
      <Box
        bg={"#FFFFFF"}
        pr={{ base: 10, md: 36 }}
        pl={{ base: 10, md: 48 }}
        py={8}
        pb={24}
      >
        <Flex
          direction={"column"}
          justify={{ base: "center", md: "left" }}
          align={{ base: "center", md: "flex-start" }}
          py={12}
        >
          <Heading
            as="h2"
            size="2xl"
            mb={2}
            color={"#161D25"}
            fontWeight={400}
            lineHeight="52px"
            textAlign={{ base: "center", md: "left" }}
          >
            Read our blog
          </Heading>
          <Box w={{ base: "full", md: 500 }} mt={6}>
            <Text
              fontSize="16px"
              mb={{ base: 0, md: 4 }}
              color={"#959EAD"}
              fontWeight={400}
              lineHeight="22px"
              textAlign={{ base: "center", md: "left" }}
            >
              We&apos;ll cover everything you need to know to unlock your
              skin&apos;s natural luminosity
            </Text>
          </Box>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
          {Blogs.map((blog, index) => (
            <GridItem key={index} colSpan={{ base: 1, md: 1 }}>
              <Box mt={{ base: 12, md: 0 }}>
                <Box>
                  <Image src={blog.imageUrl} alt={blog.title} width="100%" />
                </Box>
                <Box>
                  <Text color={"#9D9D9D"} pt={2}>
                    {blog.date}
                  </Text>
                  <Heading
                    as="h3"
                    size="md"
                    color={"#161D25"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    pt={6}
                  >
                    {blog.title}
                  </Heading>
                  <Text
                    color={"#959EAD"}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    fontWeight={400}
                    pt={6}
                  >
                    {blog.description}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;
