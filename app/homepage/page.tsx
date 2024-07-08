import Blog from "@/components/Blog";
import FanProducts from "@/components/FanProducts";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/NavBar";
import ProductBox from "@/components/ProductBox";
import SpecialDeal from "@/components/SpecialDeal";
import WillowPage from "@/components/WillowPage";
import Footer from "@/components/footer/Footer";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  return (
    <Box bg="#F8F2EB">
      <Navbar />
      <Box display={{ md: "none" }} pt={6}>
        <ProductBox />
      </Box>
      <HeroPage />
      <FanProducts />
      <WillowPage />
      <SpecialDeal />
      <Blog />
      <Footer />
    </Box>
  );
};
