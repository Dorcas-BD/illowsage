"use client";

import CartTable from "@/components/CartTable";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBar";
import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

const Cart = () => {
  const CartLinks = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "#", active: true },
  ];
  return (
    <Box>
      <Navbar />
      <Box bg={"#F8F2EB"}>
        <Flex
          justifyContent={{ base: "center", md: "flex-start" }}
          py={8}
          mx={{ base: 4, md: 36 }}
        >
          {CartLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <Flex
                border={"0.5px solid #BCBCBC"}
                borderRadius={"25px"}
                m={2}
                px={8}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
                bg={link.active ? "#BA2B50" : "transparent"}
              >
                <IconButton
                  icon={
                    <Icon
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
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={{ base: "20px", md: "18px" }}
            fontWeight={400}
            mx={{ base: 4, md: 36 }}
            mb={4}
            lineHeight={"20px"}
          >
            PEEK INSIDE YOUR{" "}
          </Text>
          <Text
            fontSize={{ base: "25px", md: "40px" }}
            fontWeight={500}
            mx={{ base: 4, md: 36 }}
            mb={4}
            color={"#161D25"}
            lineHeight={"30px"}
          >
            Beauty Basket
          </Text>
        </Flex>
        <CartTable />
        <Box pb={24}>
          <Link href="/checkout">
            <Flex
              justifyContent={"center"}
              bg={"#BA2B50"}
              color={"#F8E1E7"}
              borderRadius={"8px"}
              p={4}
              mx={{ base: 4, md: 96 }}
              _hover={{ bg: "#F8E1E7", color: "#BA2B50" }}
            >
              <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={600}>
                Checkout
              </Text>
            </Flex>
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;
