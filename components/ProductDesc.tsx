"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  Collapse,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { LuArrowRight } from "react-icons/lu";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ProductDesc = () => {
  const DescLinks = ["Home", "Eyecream", "Estee Lauder"];
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
      answer:
        "Our return policy allows you to return products within 30 days of purchase. Please ensure the products are in their original condition.",
    },
    {
      title: "Questions",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section. You will also receive email updates with tracking information.",
    },
    {
      title: "Reviews (21)",
      answer:
        "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination.",
    },
  ];

  const [isOpen, setIsOpen] = useState(new Array(moreItems.length).fill(false));

  const toggleItems = (index: number) => {
    const newOpenState = isOpen.map((state, i) =>
      i === index ? !state : false
    );
    setIsOpen(newOpenState);
  };

  return (
    <Box bg={"#F8F2EB"} px={{ base: 4, md: 36 }} pt={4}>
      <Flex>
        {DescLinks.map((link, index) => (
          <Flex
            key={index}
            border={"0.5px solid #BCBCBC"}
            borderRadius={"25px"}
            m={2}
            px={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton
              icon={<Box as={LuArrowRight} boxSize={6} color="#4F4F4F" />}
              aria-label="Arrow Right"
              variant="ghost"
              _hover={{ bg: "#000000" }}
            />
            <Text color={"#4F4F4F"}>{link}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex>
        <Flex direction={"column"}>
          <Image
            src="/img/descImg1.png"
            alt="Description Image 1"
            width={517}
            height={705}
          />
          <Image
            src="/img/descImg2.png"
            alt="Description Image 2"
            width={517}
            height={359}
          />
        </Flex>
        <Flex direction={"column"} pl={4}>
          <Flex alignItems={"center"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <IconButton
                  key={i}
                  icon={<Box as={HiStar} boxSize={6} color="#4F4F4F" />}
                  aria-label={`Star ${i + 1}`}
                  variant="ghost"
                  _hover={{ bg: "#000000" }}
                  isDisabled // Disable the button since it is used for display purposes only
                />
              ))}
            <Text ml={2}>21 Reviews</Text>
          </Flex>
          <Box>
            <Heading mb={6}>
              Estée Lauder Advanced Night Repair Eye Supercharged Complex
            </Heading>
            <Text mb={6}>
              Lightweight gel-cream that absorbs quickly without leaving a
              greasy residue.
            </Text>
            <Text mb={6}>
              $199.00 <Text as="s">$250.00</Text>
            </Text>
          </Box>
          <Flex gap={8} mb={8}>
            <Flex
              bg={"#F2E5D7"}
              py={"10px"}
              px={"14px"}
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
              px={28}
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
              w={"508px"}
              color={"#FFFFFF"}
              _hover={{ bg: "#F2E5D7" }}
            >
              Add to Cart
            </Button>
          </Box>

          <Box my={4}>
            <Text>
              <Text as="span" fontWeight="bold">
                SKU
              </Text>{" "}
              108g
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                CATEGORY
              </Text>{" "}
              Eye Cream
            </Text>
          </Box>

          <Box>
            {moreItems.map((moreItem, index) => {
              return (
                <Box key={index} mb={4}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    p={4}
                    textDecoration={"underline"}
                    borderRadius="md"
                    onClick={() => toggleItems(index)}
                    cursor="pointer"
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      textDecoration={"underline"}
                    >
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
                    <Divider />
                  </Flex>
                  <Collapse in={isOpen[index]} animateOpacity>
                    <Box p={4}>
                      <Text>{moreItem.answer}</Text>
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDesc;
