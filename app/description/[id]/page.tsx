import Navbar from "@/components/NavBar";
import ProductBox from "@/components/ProductBox";
import ProductDesc from "@/components/ProductDesc";
import Footer from "@/components/footer/Footer";
import { Box, Text } from "@chakra-ui/react";

const ProductDescription = () => {
  return (
    <Box>
      <Navbar />
      <ProductDesc />
      <Footer />
    </Box>
  );
};

export default ProductDescription;
