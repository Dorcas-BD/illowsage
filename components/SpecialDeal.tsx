import React from "react";
import Products from "./Products";
import { Box } from "@chakra-ui/react";

const SpecialDeal = () => {
  return (
    <Box mt={12} mx={6}>
      <Products
        showDiscount={true}
        title="Glow Up Today - Special Deals!"
        subTitle="Glow Getters! Don't Miss Our Best-Selling Skincare Deals!"
        bgColor="#E1C4A5"
      />
    </Box>
  );
};

export default SpecialDeal;
