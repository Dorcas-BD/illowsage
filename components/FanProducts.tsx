"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import Products from "./Products";
import getProducts from "@/app/action";

const FanProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const result = await getProducts();
      if ("products" in result) {
        setProducts(result.products);
        setError(null);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <Box>
      <Box display={{ base: "none", md: "flex" }} pt={6}>
        <ProductBox />
      </Box>
      <Products
        products={products}
        pageTitle="Fans Products"
        subTitle="Check our best seller products on Willow website right now"
        showDiscount={true}
      />
    </Box>
  );
};

export default FanProducts;
