"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  IconButton,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import Image from "next/image";

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: "/img/cartImg.png",
      details: "Estée Lauder",
      subDetails: "15ML",
      status: "In Stock",
      price: 25,
      quantity: 1,
    },
    {
      id: 2,
      product: "/img/cartImg.png",
      details: "Estée Lauder",
      subDetails: "15ML",
      status: "Out of Stock",
      price: 25,
      quantity: 2,
    },
    {
      id: 3,
      product: "/img/cartImg.png",
      details: "Estée Lauder",
      subDetails: "15ML",
      status: "In Stock",
      price: 25,
      quantity: 1,
    },
  ]);

  const incrementQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 0) {
      newCartItems[index].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const deleteItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingFee = 5;

  const finalTotal = subtotal + shippingFee;

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box overflowX="hidden" mx={{ base: 2, md: 36 }} py={12}>
      {isSmallScreen ? (
        cartItems.map((item, index) => (
          <Flex
            key={item.id}
            direction="column"
            mb={4}
            bg={"#F8F2EB"}
            p={4}
            borderRadius="md"
          >
            <Flex direction="row" mb={2}>
              <Flex flex={1} justifyContent={"center"} shadow={"md"}>
                <Image
                  src={item.product}
                  alt={`Product ${index + 1}`}
                  width={95}
                  height={140}
                  objectFit="cover"
                />
              </Flex>
              <Flex direction="column" ml={4} flex="1">
                <Text mb={2} fontWeight={600} color={"#4F4F4F"}>
                  {item.details}
                </Text>
                <Text mb={2} color={"#8D8D8D"}>
                  {item.subDetails}
                </Text>
                <Text mb={2}> {item.status}</Text>
                <Text mb={2}>£{item.price.toFixed(2)}</Text>
                <Flex>
                  <Flex
                    alignItems="center"
                    justify={"center"}
                    py={2}
                    bg={"#F8E1E7"}
                    borderRadius={"8px"}
                    mt={2}
                    w={32}
                  >
                    <IconButton
                      icon={<FaMinus />}
                      size="xs"
                      onClick={() => decrementQuantity(index)}
                      aria-label="Decrement"
                      bg={"#E99FB2"}
                      borderRadius={6}
                      color={"#FFFAFA"}
                      _hover={{ bg: "#E99FB2" }}
                    />
                    <Text mx={2}>{item.quantity}</Text>
                    <IconButton
                      icon={<FaPlus />}
                      size="xs"
                      onClick={() => incrementQuantity(index)}
                      aria-label="Increment"
                      bg={"#E99FB2"}
                      color={"#FFFAFA"}
                      borderRadius={6}
                      _hover={{ bg: "#E99FB2" }}
                    />
                  </Flex>
                  <IconButton
                    icon={<Box as={FaRegTrashAlt} boxSize={7} />}
                    size="sm"
                    onClick={() => deleteItem(index)}
                    aria-label="Delete"
                    color={"#BCBCBC"}
                    mt={2}
                    ml={2}
                    borderRadius={6}
                    _hover={{ bg: "#BCBCBC" }}
                  />
                </Flex>
                <Text mt={4} fontWeight="bold">
                  Total: £{(item.price * item.quantity).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
            {index < cartItems.length - 1 && <Divider />}
          </Flex>
        ))
      ) : (
        <Table variant="simple">
          <Thead bg={"#F8E1E7"} color={"#161D25"}>
            <Tr>
              <Th py={"16px"}>Product</Th>
              <Th py={"16px"}>Details</Th>
              <Th py={"16px"}>Status</Th>
              <Th py={"16px"}>Price</Th>
              <Th py={"16px"}>Quantity</Th>
              <Th py={"16px"}>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item, index) => (
              <Tr key={item.id} bg={"#F8F2EB"}>
                <Td>
                  <Image
                    src={item.product}
                    alt={`Product ${index + 1}`}
                    width={95}
                    height={140}
                    objectFit="cover"
                  />
                </Td>
                <Td>
                  <Text fontWeight={600} color={"#4F4F4F"}>
                    {item.details}
                  </Text>
                  <Text color={"#8D8D8D"}>{item.subDetails}</Text>
                </Td>
                <Td>{item.status}</Td>
                <Td>£{item.price.toFixed(2)}</Td>
                <Td>
                  <Flex
                    alignItems="center"
                    justify={"center"}
                    py={4}
                    bg={"#F8E1E7"}
                    borderRadius={"8px"}
                  >
                    <IconButton
                      icon={<FaMinus />}
                      size="xs"
                      onClick={() => decrementQuantity(index)}
                      aria-label="Decrement"
                      bg={"#E99FB2"}
                      borderRadius={4}
                      color={"#FFFAFA"}
                      _hover={{ bg: "#E99FB2" }}
                    />
                    <Text mx={2}>{item.quantity}</Text>
                    <IconButton
                      icon={<FaPlus />}
                      size="xs"
                      onClick={() => incrementQuantity(index)}
                      aria-label="Increment"
                      bg={"#E99FB2"}
                      color={"#FFFAFA"}
                      borderRadius={4}
                      _hover={{ bg: "#E99FB2" }}
                    />
                  </Flex>
                </Td>
                <Td color={"#4F4F4F"}>
                  £{(item.price * item.quantity).toFixed(2)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Flex justifyContent={"space-between"} pb={2} mt={8}>
        <Text fontWeight={400} color={"#8D8D8D"}>
          Subtotal
        </Text>
        <Text fontWeight="bold">£{subtotal.toFixed(2)}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={400} color={"#8D8D8D"}>
          Shipping
        </Text>
        <Text fontWeight={700} color={"#161D25"}>
          £{shippingFee.toFixed(2)}
        </Text>
      </Flex>
      <Divider mt={2} borderWidth="1px" borderColor="#CBCBCB" opacity={0.7} />
      <Flex justifyContent={"space-between"}>
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">£{finalTotal.toFixed(2)}</Text>
      </Flex>
    </Box>
  );
};

export default CartTable;
