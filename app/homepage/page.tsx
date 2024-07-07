import Footer from "@/components/Footer";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/NavBar";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <HeroPage />
      <Text fontSize="2xl">Home Page</Text>
      <Footer />
    </Box>
  );
};
