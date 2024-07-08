import { Box } from "@chakra-ui/react";
import React from "react";
import ProductBox from "./ProductBox";
import Products from "./Products";

const FanProducts = () => {
  return (
    <Box>
      <Box display={{ base: "none", md: "flex" }} pt={6}>
        <ProductBox />
      </Box>
      <Products
        showDiscount={false}
        title="Fans Favorite"
        subTitle="Check our best seller products on Willow website right now"
      />
    </Box>
  );
};

export default FanProducts;
