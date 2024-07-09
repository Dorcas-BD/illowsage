import React from "react";
import Products, { Product } from "./Products";
import { Box } from "@chakra-ui/react";

const SpecialDeal = () => {
  const specialDeal: Product[] = [
    {
      title: "Lychee Sorbet",
      description: "Moisturizer",
      price: "£114.00",
      rating: "4.5",
      imageUrl: "/img/product/fan6.png",
      discount: "-20%",
    },
    {
      title: "Super Aqua",
      description: "Moisturizer",
      price: "£1000.00",
      rating: "4.5",
      imageUrl: "/img/product/deal2.png",
      discount: "-20%",
    },
    {
      title: "Herbivore Vegan Collagen",
      description: "Serum",
      price: "£25.00",
      rating: "4.5",
      imageUrl: "/img/product/fan7.png",
      discount: "-20%",
    },
    {
      title: "Innisfree Cherry Cream",
      description: "Moisturizer",
      price: "£17.00",
      rating: "4.5",
      imageUrl: "/img/product/deal4.png",
      discount: "-20%",
    },
    {
      title: "Elf Oil Control",
      description: "Serum",
      price: "£45.00",
      rating: "4.5",
      imageUrl: "/img/product/fan1.png",
      discount: "-20%",
    },
    {
      title: "Time Revolution",
      description: "Toner",
      price: "£75.00",
      rating: "4.5",
      imageUrl: "/img/product/deal1.png",
      discount: "-20%",
    },
    {
      title: "Gorgeously Glossy",
      description: "Moisturizer",
      price: "£45.00",
      rating: "4.5",
      imageUrl: "/img/product/fan11.png",
      discount: "-20%",
    },
    {
      title: "Innisfree Clay Mask",
      description: "Facemask",
      price: "£30.00",
      rating: "4.5",
      imageUrl: "/img/product/fan8.png",
      discount: "-20%",
    },
    {
      title: "Lychee Sorbet",
      description: "Moisturizer",
      price: "£35.00",
      rating: "4.5",
      imageUrl: "/img/product/fan6.png",
      discount: "-20%",
    },
    {
      title: "Watermelon Exfoliating Cubes",
      description: "Exfoliator",
      price: "£85.00",
      rating: "4.5",
      imageUrl: "/img/product/fan3.png",
      discount: "-20%",
    },
    {
      title: "Corsx Hyaluronic Acid Toner",
      description: "Toner",
      price: "£27.00",
      rating: "4.5",
      imageUrl: "/img/product/fan9.png",
      discount: "-20%",
    },
    {
      title: "Japan Cherry Blossom",
      description: "Serum",
      price: "£44.00",
      rating: "4.5",
      imageUrl: "/img/product/deal3.png",
      discount: "-20%",
    },
  ];

  return (
    <Box mt={12} mx={6}>
      <Products
        products={specialDeal}
        showDiscount={true}
        title="Glow Up Today - Special Deals!"
        subTitle="Glow Getters! Don't Miss Our Best-Selling Skincare Deals!"
        bgColor="#E1C4A5"
      />
    </Box>
  );
};

export default SpecialDeal;
