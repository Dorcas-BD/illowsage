"use client";

import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export type Product = {
  id: string;
  name: string;
  description: string;
  selling_price: string;
  rating: string;
  product_image: string;
  discount?: string;
};

type ProductsProps = {
  products?: Product[];
  showDiscount?: boolean;
  pageTitle?: string;
  subTitle?: string;
  bgColor?: string;
};

const Products: React.FC<ProductsProps> = ({
  products = [],
  showDiscount = false,
  pageTitle = "",
  subTitle = "",
  bgColor = "#FCF0F3",
}) => {
  return (
    <Box>
      <Box
        bg={bgColor}
        pr={{ base: 4, md: 20 }}
        pl={{ base: 4, md: 28 }}
        pb={8}
      >
        <Flex direction={"column"} justify={"center"} align={"center"} py={12}>
          <Heading
            as="h2"
            size="xl"
            mb={2}
            color={"#161D25"}
            fontWeight={700}
            lineHeight="43px"
          >
            {pageTitle}
          </Heading>
          <Text
            fontSize="lg"
            mb={6}
            color={"#5F5F5F"}
            fontWeight={400}
            lineHeight="22px"
            display={{ base: "none", md: "flex" }}
          >
            {subTitle}
          </Text>
        </Flex>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
        >
          {products.map((product) => (
            <GridItem key={product.id}>
              <Link href={`/description/${product.id}`} passHref>
                <Box
                  as="a"
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                >
                  {product.discount && showDiscount && (
                    <Box
                      position={"absolute"}
                      color="#571426"
                      bg={"#E17E98"}
                      py={0.5}
                      px={1.5}
                      m={2}
                      borderRadius="md"
                    >
                      {product.discount}
                    </Box>
                  )}

                  <Box bg="#F8F2EB" display={"flex"} justifyContent={"center"}>
                    <Image
                      src={`https://api.timbu.cloud/images/${product.product_image}`}
                      alt={product.name}
                    />
                  </Box>
                  <Box p={4}>
                    <Text
                      color={"#5F5F5F"}
                      fontSize={"12px"}
                      lineHeight={"15px"}
                      fontWeight={400}
                      pb={2}
                    >
                      {product.description}
                    </Text>
                    <Heading
                      as="h3"
                      size={{ base: "xs", md: "md" }}
                      color={"#7E7E7E"}
                      fontWeight={600}
                      lineHeight={"19px"}
                    >
                      {product.name}
                    </Heading>
                    <Flex
                      direction={"row"}
                      justify={"space-between"}
                      align={"center"}
                      mt={4}
                    >
                      <Text
                        fontWeight={700}
                        color={"#571426"}
                        lineHeight={"22px"}
                        fontSize={"16px"}
                      >
                        {product.selling_price}
                      </Text>
                      <Flex bg={"#F8E1E7"} p={1} borderRadius="md">
                        <Box
                          as={FaStar}
                          color="#FFC107"
                          position={"relative"}
                          top={1}
                        />
                        <Text color={"#781C34"}>{product.rating}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>

        <Flex justifyContent="flex-end" mt={4}>
          <Button bg={"#BA2B50"} color={"#FAFAFA"}>
            See More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Products;
