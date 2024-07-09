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
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { LuArrowRight } from "react-icons/lu";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Reviews from "./Reviews";

const ProductDesc = () => {
  const DescLinks = [
    { name: "Home", path: "/" },
    { name: "EyeCream", path: "#" },
    { name: "Estee Lauder", path: "#" },
  ];
  const [count, setCount] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const moreItems = [
    {
      title: "Additional Info",
      detailsTile: "Details",
      detailsDesc:
        "The Estée Lauder Advanced Night Repair Eye Supercharged Complex is a powerful eye cream designed to combat multiple signs of aging and fatigue around the delicate eye area. This cream is formulated to reduce the appearance of fine lines, wrinkles, puffiness, and dark circles, providing a brighter, more youthful look.",
      sizeTitle: "Sizee",
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

  const [isOpen, setIsOpen] = useState(
    moreItems.map((item, index) => index === 0)
  );

  const toggleItems = (index: number) => {
    const newOpenState = isOpen.map((state, i) =>
      i === index ? !state : false
    );
    setIsOpen(newOpenState);
  };

  const imageWidth = useBreakpointValue({ base: 224, md: 517 });
  const imageHeight = useBreakpointValue({ base: 352, md: 705 });

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
            >
              <IconButton
                icon={
                  <Box
                    as={LuArrowRight}
                    boxSize={{ base: 4, md: 6 }}
                    color="#4F4F4F"
                  />
                }
                aria-label="Arrow Right"
                variant="ghost"
                _hover={{ bg: "#F8F2EB" }}
              />
              <Text
                fontSize={{ base: "10px", md: "16px" }}
                color={"#4F4F4F"}
                ml={-2}
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
          <Image
            src="/img/descImg1.png"
            alt="Description Image 1"
            width={imageWidth}
            height={imageHeight}
          />
          <Box display={{ base: "none", md: "flex" }}>
            <Image
              src="/img/descImg2.png"
              alt="Description Image 2"
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
            <Text ml={2}>21 Reviews</Text>
          </Flex>
          <Box>
            <Heading mb={6} fontSize={{ base: "20px", md: "25px" }}>
              Estée Lauder Advanced Night Repair Eye Supercharged Complex
            </Heading>
            <Text
              mb={6}
              fontSize={"16px"}
              display={{ base: "none", md: "flex" }}
            >
              Lightweight gel-cream that absorbs quickly without leaving a
              greasy residue.
            </Text>
            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                £25.00
              </Text>{" "}
              <Text as="s">£27.00</Text>
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
              <Button
                onClick={decrement}
                bg={"#F2E5D7"}
                fontSize={"lg"}
                size="sm"
                _hover={{ bg: "#F2E5D7" }}
              >
                -
              </Button>
              <Box mx={4}>
                <Text fontSize="lg" fontWeight="bold">
                  {count}
                </Text>
              </Box>
              <Button
                onClick={increment}
                bg={"#F2E5D7"}
                fontSize={"lg"}
                size="sm"
                _hover={{ bg: "#F2E5D7" }}
              >
                +
              </Button>
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
            <Button
              bg={"#BA2B50"}
              w={{ base: "370px", md: "508px" }}
              py={6}
              color={"#FFFFFF"}
              _hover={{ bg: "#F2E5D7" }}
            >
              Add to Cart
            </Button>
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
            {moreItems.map((moreItem, index) => {
              return (
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
                          isOpen[index] ? (
                            <ChevronUpIcon />
                          ) : (
                            <ChevronDownIcon />
                          )
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
                    <Box p={4}>
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
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Flex>
      <Reviews />
    </Box>
  );
};

export default ProductDesc;
