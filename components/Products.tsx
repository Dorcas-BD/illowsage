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
import { LuStar } from "react-icons/lu";

type Product = {
  title: string;
  description: string;
  price: string;
  rating: string;
  imageUrl: string;
  discount: string;
};

type ProductsProps = {
  showDiscount?: boolean;
  title?: string;
  subTitle?: string;
  bgColor?: string;
};

const products: Product[] = [
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
  {
    title: "Advanced Night Repair Eye",
    description: "Eye Cream",
    price: "£1,725.00",
    rating: "(4.5)",
    imageUrl: "/img/productImage.png",
    discount: "-20%",
  },
];

const Products: React.FC<ProductsProps> = ({
  showDiscount = false,
  title = "",
  subTitle = "",
  bgColor = "#FCF0F3",
}) => {
  const visibleProducts =
    useBreakpointValue({
      base: products.slice(0, 6),
      md: products.slice(0, 12),
    }) || products.slice(0, 6);

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
            {title}
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
          {visibleProducts.map((product, index) => (
            <GridItem key={index}>
              <Link href={`/description`} passHref>
                <Box
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                >
                  {showDiscount && (
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
                    <Image src={product.imageUrl} alt={product.title} />
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
                      {product.title}
                    </Heading>
                    <Flex
                      direction={"row"}
                      justify={"space-between"}
                      align={"center"}
                      mt={4}
                    >
                      <Text fontWeight="bold">{product.price}</Text>
                      <Flex bg={"#F8E1E7"} p={1} borderRadius="md">
                        <Box
                          as={LuStar}
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
