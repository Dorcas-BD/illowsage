"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  Collapse,
  Divider,
  RadioGroup,
  Radio,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { LuArrowRight } from "react-icons/lu";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Reviews from "./Reviews";
import { useParams } from "next/navigation";
import getProducts from "@/app/action";
import { useCart } from "@/lib/providers/CartContext";

interface Price {
  GBP: [number, number | null, any[]];
}

interface Product {
  id: string;
  name: string;
  description: string;
  current_price: Price[];
  rating: string;
  product_image: string;
  discount?: string;
  photos: { url: string }[];
}

const DescLinks = [
  { name: "Home", path: "/" },
  { name: "Estee Lauder", path: "#", active: true },
  { name: "Cart", path: "/cart" },
];

const moreItems = [
  {
    title: "Additional Info",
    detailsTile: "Details",
    detailsDesc:
      "The Estée Lauder Advanced Night Repair Eye Supercharged Complex is a powerful eye cream designed to combat multiple signs of aging and fatigue around the delicate eye area. This cream is formulated to reduce the appearance of fine lines, wrinkles, puffiness, and dark circles, providing a brighter, more youthful look.",
    sizeTitle: "Size",
    sizeDescW: 'Width: 20 " Height: 1 ½ " Length: 21 ½ "',
    sizeDescWe: "Weight: 0.5 oz",
    sizeDescP: "Package(s): 1",
    option1: "15ML",
    option2: "50ML",
  },
  {
    title: "Questions",
  },
  {
    title: "Reviews (21)",
  },
];

const ProductDesc = () => {
  const [count, setCount] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState<boolean[]>(() =>
    moreItems.map((item, index) => index === 0 || index === 2)
  );

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = await getProducts();
      const foundProduct = allProducts.products?.find(
        (item: Product) => item.id === id
      );
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  const toggleItems = (index: number) => {
    const newOpenState = isOpen.map((state, i) =>
      i === index ? !state : state
    );

    const openCount = newOpenState.filter((state) => state).length;

    if (openCount <= 2) {
      setIsOpen(newOpenState);
    }
  };

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        product: `https://api.timbu.cloud/images/${product.photos[0]?.url}`,
        details: product.name,
        subDetails: "15ML",
        status: "In Stock",
        price: parseFloat(product.current_price[0].GBP[0].toFixed(2)),
        quantity: 1,
      });
    }
  };

  // const imageWidth = ;
  // const imageHeight = ;

  return (
    <Box bg={"#F8F2EB"} px={{ base: 4, md: 36 }} pt={4}>
      <Flex justifyContent={{ base: "center", md: "flex-start" }} mb={8}>
        {DescLinks.map((link, index) => (
          <Link href={link.path} key={index}>
            <Flex
              border={"0.5px solid #BCBCBC"}
              borderRadius={"25px"}
              m={2}
              px={2}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
              bg={link.active ? "#BA2B50" : "transparent"}
            >
              <IconButton
                icon={
                  <Box
                    as={LuArrowRight}
                    boxSize={{ base: 4, md: 6 }}
                    color={link.active ? "#F8E1E7" : "#4F4F4F"}
                    _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
                  />
                }
                aria-label="Arrow Right"
                variant="ghost"
                _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
              />
              <Text
                fontSize={{ base: "10px", md: "16px" }}
                ml={-2}
                color={link.active ? "#F8E1E7" : "#4F4F4F"}
                _hover={{ color: "#F8E1E7" }}
              >
                {link.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex
          direction={"column"}
          flex={1}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Box border={"1px solid #DBDBDB"}>
            <Image
              src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
              alt={product.name}
              width={517}
              height={705}
            />
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Image
              src={`https://api.timbu.cloud/images/${product.photos[1]?.url}`}
              alt={product.name}
              width={517}
              height={359}
            />
          </Box>
        </Flex>
        <Flex direction={"column"} pl={4} flex={1}>
          <Flex alignItems={"center"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Box key={i} mx={-2}>
                  <IconButton
                    key={i}
                    icon={<Box as={HiStar} boxSize={6} color="#4F4F4F" />}
                    aria-label={`Star ${i + 1}`}
                    variant="ghost"
                    _hover={{ bg: "#000000" }}
                    isDisabled
                  />
                </Box>
              ))}
            <Text ml={2}>{product.rating} Reviews</Text>
          </Flex>
          <Box>
            <Heading mb={6} fontSize={{ base: "20px", md: "25px" }}>
              {product.name}
            </Heading>
            <Text
              mb={6}
              fontSize={"16px"}
              display={{ base: "none", md: "flex" }}
            >
              {product.description}
            </Text>
            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                £{product.current_price[0].GBP[0]}
                .00
              </Text>
              {product.discount && (
                <Text as="s" ml={2}>
                  {product.discount}
                </Text>
              )}
            </Text>
          </Box>
          <Flex gap={{ base: 4, md: 8 }} mb={8}>
            <Flex
              bg={"#F2E5D7"}
              py={"8px"}
              px={{ base: "4px", md: "14px" }}
              borderRadius={"8px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton
                icon={<FaMinus />}
                size="sm"
                onClick={decrement}
                aria-label="Decrement"
                bg={"#F2E5D7"}
                _hover={{ bg: "#F2E5D7" }}
              />
              <Text mx={2}>{count}</Text>
              <IconButton
                icon={<FaPlus />}
                size="sm"
                onClick={increment}
                aria-label="Increment"
                bg={"#F2E5D7"}
                _hover={{ bg: "#F2E5D7" }}
              />
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              px={{ base: 16, md: 28 }}
              py={"8px"}
              border={"1px solid #9D9D9D"}
              borderRadius={"8px"}
            >
              <IconButton
                aria-label="Add to wishlist"
                icon={<FaHeart />}
                onClick={toggleWishlist}
                color={isWishlisted ? "red.500" : "gray.400"}
                _hover={{ color: "red.500" }}
                variant="ghost"
                fontSize="24px"
              />
              <Text ml={2}>Wishlist</Text>
            </Flex>
          </Flex>
          <Box>
            <Link href="/cart">
              <Button
                onClick={handleAddToCart}
                bg={"#BA2B50"}
                w={{ base: "370px", md: "508px" }}
                py={6}
                color={"#FFFFFF"}
                _hover={{ bg: "#F2E5D7" }}
              >
                Add to Cart
              </Button>
            </Link>
          </Box>

          <Box mt={12}>
            <Text mb={4}>
              <Text as="span">SKU</Text> 108g
            </Text>
            <Text>
              <Text as="span">CATEGORY</Text> Eye Cream
            </Text>
          </Box>

          <Box mt={12}>
            {moreItems.map((moreItem, index) => (
              <Box key={index} mb={4}>
                <Flex
                  direction={"column"}
                  p={4}
                  borderRadius="md"
                  onClick={() => toggleItems(index)}
                  cursor="pointer"
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold">
                      {moreItem.title}
                    </Text>
                    <IconButton
                      icon={
                        isOpen[index] ? <ChevronUpIcon /> : <ChevronDownIcon />
                      }
                      aria-label="Toggle moreItem"
                      variant="ghost"
                      size="sm"
                    />
                  </Flex>
                  <Divider
                    borderWidth="1px"
                    borderColor="#CBCBCB"
                    opacity={0.7}
                  />
                </Flex>
                <Collapse in={isOpen[index]} animateOpacity>
                  <Box p={{ base: 1, md: 4 }}>
                    {index === 2 ? (
                      <Flex>
                        <Reviews />
                      </Flex>
                    ) : (
                      <>
                        <Text fontWeight={"bold"}>{moreItem.detailsTile}</Text>
                        <Text>{moreItem.detailsDesc}</Text>

                        <Box mt={4}>
                          <RadioGroup defaultValue="1">
                            <Flex>
                              <Radio
                                bg={"#F2E5D7"}
                                color={"#000000"}
                                _hover={{ bg: "#F2E5D7" }}
                                mr={2}
                              >
                                {moreItem.option1}
                              </Radio>
                              <Radio
                                bg={"#F2E5D7"}
                                color={"#000000"}
                                _hover={{ bg: "#F2E5D7" }}
                              >
                                {moreItem.option2}
                              </Radio>
                            </Flex>
                          </RadioGroup>
                        </Box>
                        <Box>
                          <Text as={"h4"} fontWeight={"bold"} mt={6} mb={2}>
                            {moreItem.sizeTitle}
                          </Text>
                          <Text>{moreItem.sizeDescW}</Text>
                          <Text>{moreItem.sizeDescWe}</Text>
                          <Text>{moreItem.sizeDescP}</Text>
                        </Box>
                      </>
                    )}
                  </Box>
                </Collapse>
              </Box>
            ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDesc;
