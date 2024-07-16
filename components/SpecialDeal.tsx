"use client";

import React, { useEffect, useState } from "react";
import Products from "./Products";
import { Box, Center, Spinner } from "@chakra-ui/react";
import getProducts from "@/app/action";
import Image from "next/image";

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
      {loading ? (
        <Center h="50vh">
          <Image src="/loading.gif" alt="loading" width={300} height={300} />
        </Center>
      ) : (
        <Products
          products={products}
          showDiscount={true}
          pageTitle="Glow Up Today - Special Deals!"
          subTitle="Glow Getters! Don't Miss Our Best-Selling Skincare Deals!"
          bgColor="#E1C4A5"
        />
      )}
    </Box>
  );
};

export default SpecialDeal;
