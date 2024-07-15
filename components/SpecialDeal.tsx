"use client";

import React, { useEffect, useState } from "react";
import Products, { Product } from "./Products";
import { Box } from "@chakra-ui/react";
import getProducts from "@/app/action";

const SpecialDeal = () => {
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
    <Box mt={12} mx={6}>
      <Products
        products={Products}
        showDiscount={true}
        pageTitle="Glow Up Today - Special Deals!"
        subTitle="Glow Getters! Don't Miss Our Best-Selling Skincare Deals!"
        bgColor="#E1C4A5"
      />
    </Box>
  );
};

export default SpecialDeal;
