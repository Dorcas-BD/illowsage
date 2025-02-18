"use client";

import { ChakraProvider } from "@chakra-ui/react";

const ChakraProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraProviders;
