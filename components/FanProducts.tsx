import { Box } from "@chakra-ui/react";
import React from "react";
import ProductBox from "./ProductBox";
import Products, { Product } from "./Products";

const FanProducts = () => {
  const fanProduct: Product[] = [
    {
      title: "Elf Toner",
      description: "Toner",
      price: "£680.00",
      rating: "4.5",
      imageUrl: "/img/product/fan1.png",
    },
    {
      title: "Gorgeously Glossy",
      description: "Moisturizer",
      price: "£2000.00",
      rating: "4.5",
      imageUrl: "/img/product/fan2.png",
    },
    {
      title: "Watermelon Exfoliating Cubes",
      description: "Exfoliator",
      price: "£1725.00",
      rating: "4.5",
      imageUrl: "/img/product/fan3.png",
    },
    {
      title: "SkinLight Whitening ",
      description: "Moisturizer",
      price: "£60.00",
      rating: "4.5",
      imageUrl: "/img/product/fan4.png",
    },
    {
      title: "Glow Face Revitalizer",
      description: "Moisturizer",
      price: "£95.00",
      rating: "4.5",
      imageUrl: "/img/product/fan5.png",
    },
    {
      title: "Lychee Sorbet Cooling Moisturizer",
      description: "Moisturizer",
      price: "£645.00",
      rating: "4.5",
      imageUrl: "/img/product/fan6.png",
      discount: "New",
    },
    {
      title: "Herbivore Vegan Collagen",
      description: "Serum",
      price: "£1500.00",
      rating: "4.5",
      imageUrl: "/img/product/fan7.png",
    },
    {
      title: "Innisfree Clay Mask",
      description: "Facemask",
      price: "£1200.00",
      rating: "4.5",
      imageUrl: "/img/product/fan8.png",
      discount: "New",
    },
    {
      title: "Cosrx Hyaluronic Essence",
      description: "Toner",
      price: "£25.00",
      rating: "4.5",
      imageUrl: "/img/product/fan9.png",
      discount: "Out  Of Stock",
    },
    {
      title: "Innisfree Jeju Cherry",
      description: "Body Care",
      price: "£325.00",
      rating: "4.5",
      imageUrl: "/img/product/fan10.png",
    },
    {
      title: "Bobcare Glow",
      description: "Moisturizer",
      price: "£1765.00",
      rating: "4.5",
      imageUrl: "/img/product/fan11.png",
    },
    {
      title: "Estee Lauder Advanced Night  ",
      description: "Eye Cream",
      price: "£25.00",
      rating: "4.5",
      imageUrl: "/img/product/fan12.png",
    },
  ];
  return (
    <Box>
      <Box display={{ base: "none", md: "flex" }} pt={6}>
        <ProductBox />
      </Box>
      <Products
        products={fanProduct}
        title="Fans Products"
        subTitle="Check our best seller products on Willow website right now"
        showDiscount={true}
      />
    </Box>
  );
};

export default FanProducts;
