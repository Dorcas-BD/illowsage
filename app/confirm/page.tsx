import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  VStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import { CheckIcon } from "@chakra-ui/icons";
import { FaCheck } from "react-icons/fa";
import { LuCheck } from "react-icons/lu";
import Link from "next/link";

const Confirm = () => {
  return (
    <Box>
      <Navbar />
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50vh"}
      >
        <Heading textAlign="center" my={4} color={"#BA2B50"}>
          Order Confirmed
        </Heading>
        <Text textAlign="center" fontSize="lg">
          Your order has been placed successfully.
        </Text>
        <Flex
          justifyContent="center"
          mt={8}
          border={"2px solid #3CB371"}
          borderRadius={"50%"}
          p={12}
        >
          <IconButton
            icon={<LuCheck />}
            fontSize={80}
            aria-label="Check"
            bg={"none"}
            color={"#3CB371"}
            _hover={{ bg: "none" }}
          />
        </Flex>
      </Flex>

      <Box mb={8}>
        <Link href="/">
          <Text
            textAlign="center"
            fontSize="xl"
            color={"#BA2B50"}
            _hover={{ color: "#3CB371" }}
          >
            Continue Shopping
          </Text>
        </Link>
      </Box>

      <Footer />
    </Box>
  );
};

export default Confirm;
