"use client";

import { Box, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import Products from "./Products";
import getProducts from "@/app/action";
import Image from "next/image";

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
      {loading ? (
        <Center h="50vh">
          <Image src="/loading.gif" alt="loading" width={300} height={300} />
        </Center>
      ) : (
        <>
          <Box display={{ base: "none", md: "flex" }} pt={6}>
            <ProductBox />
          </Box>
          <Products
            products={products}
            pageTitle="Fans Products"
            subTitle="Check our best seller products on Willow website right now"
            showDiscount={true}
          />
        </>
      )}
    </Box>
  );
};

export default FanProducts;
