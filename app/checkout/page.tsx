"use client";
import Footer from "@/components/footer/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/NavBar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

const Checkout = () => {
  const CheckoutLinks = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "#", active: true },
  ];
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Box>
      <Navbar />

      <Box bg={"#F8F2EB"} px={{ base: 4, md: 36 }} py={8}>
        <Flex justifyContent={{ base: "center", md: "flex-start" }} mb={8}>
          {CheckoutLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <Flex
                border={"0.5px solid #BCBCBC"}
                borderRadius={"25px"}
                m={2}
                px={2}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
                bg={link.active ? "#BA2B50" : "transparent"}
              >
                <IconButton
                  icon={
                    <Box
                      as={LuArrowRight}
                      boxSize={{ base: 4, md: 6 }}
                      color={link.active ? "#F8E1E7" : "#4F4F4F"}
                      _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
                    />
                  }
                  aria-label="Arrow Right"
                  variant="ghost"
                  _hover={{ bg: "#BA2B50", color: "#F8E1E7" }}
                />
                <Text
                  fontSize={{ base: "10px", md: "16px" }}
                  ml={-2}
                  color={link.active ? "#F8E1E7" : "#4F4F4F"}
                  _hover={{ color: "#F8E1E7" }}
                >
                  {link.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Flex flex={1}>
            <VStack spacing={6} align="stretch">
              <FormControl>
                <Input type="text" placeholder="Enter your full name" />
              </FormControl>

              <FormControl>
                <Input type="email" placeholder="Enter your email address" />
              </FormControl>

              <FormControl>
                <Input type="text" placeholder="Enter your Address" />
              </FormControl>

              <FormControl>
                <FormLabel>Payment Method</FormLabel>
                <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
                  <Stack direction="column" spacing={5}>
                    <Radio value="card">Credit/Debit Card</Radio>
                    <Radio value="gpay">Google Pay</Radio>
                    <Radio value="paypal">PayPal</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              {paymentMethod === "card" && (
                <Box>
                  <FormControl>
                    <Input type="text" placeholder="Card Number" />
                  </FormControl>
                  <FormControl>
                    <Input type="text" placeholder="Card Number" />
                  </FormControl>
                  <Flex justifyContent="space-between" mt={4}>
                    <FormControl mr={2}>
                      <Input
                        type="text"
                        placeholder="Expiration Date (MM/YY)"
                      />
                    </FormControl>
                    <FormControl ml={2}>
                      <Input type="text" placeholder="CVV" />
                    </FormControl>
                  </Flex>
                </Box>
              )}

              {paymentMethod === "gpay" && (
                <Box>
                  <Text fontSize="lg">
                    You selected Google Pay as your payment method.
                  </Text>
                </Box>
              )}

              {paymentMethod === "paypal" && (
                <Box>
                  <Text fontSize="lg">
                    You selected PayPal as your payment method.
                  </Text>
                </Box>
              )}

              <Flex gap={{ base: 6, md: 8 }}>
                <Button
                  bg={"#BA2B50"}
                  color={"#FAFAFA"}
                  size="lg"
                  mt={6}
                  px={{ base: 16, md: 32 }}
                >
                  Pay Now
                </Button>
                <Button
                  color={"#4F4F4F"}
                  bg={"#F8F2EB"}
                  shadow={"lg"}
                  px={{ base: 14, md: 20 }}
                  size="lg"
                  mt={6}
                >
                  Cancel
                </Button>
              </Flex>
            </VStack>
          </Flex>
          <Flex flex={1} bg={"#F2E5D7"} justifyContent={"center"} p={4}>
            <Box borderRadius="md" width={{ base: "100%", md: "80%" }}>
              <Text
                fontSize="26px"
                mb={4}
                textAlign={"center"}
                color={"#4F4F4F"}
                lineHeight={"32px"}
                fontWeight={500}
              >
                Confirm Order Details
              </Text>
              <Box mb={4}>
                <ImageSlider />
              </Box>
              <Box>
                <Flex justifyContent={"space-between"} pb={2} mt={8}>
                  <Text fontWeight={400} color={"#8D8D8D"}>
                    Subtotal
                  </Text>
                  <Text fontWeight="bold">£250.00</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={400} color={"#8D8D8D"}>
                    Shipping
                  </Text>
                  <Text fontWeight={700} color={"#161D25"}>
                    £10.00
                  </Text>
                </Flex>
                <Divider
                  mt={2}
                  borderWidth="1px"
                  borderColor="#CBCBCB"
                  opacity={0.7}
                />
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">£265.00</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Checkout;
