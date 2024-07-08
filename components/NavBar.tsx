// components/Navbar.tsx

"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  useBreakpointValue,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { LuHeart, LuSearch, LuShoppingCart, LuUser2 } from "react-icons/lu";

const Links = ["About", "Feature", "Pricing", "Gallery", "Team"];

const NavLink = ({ children }: { children: string }) => (
  <Link href={`/${children.toLowerCase()}`}>
    <Box px={2} py={1} rounded={"md"} _hover={{ bg: "#F8E1E7" }}>
      <Text color="#5F5F5F">{children}</Text>
    </Box>
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoWidth = useBreakpointValue({ base: 50, md: 60 });
  const showIcons = useBreakpointValue({ base: false, md: true });

  return (
    <Box bg={"#F8E1E7"} px={{ base: 4, md: 36 }}>
      <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={logoWidth}
              height={logoWidth}
            />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Spacer />
        {showIcons && (
          <HStack spacing={0} position={"relative"} left={12}>
            <IconButton
              icon={<Box as={LuSearch} boxSize={6} color="#4F4F4F" />}
              aria-label="Search"
              variant="ghost"
            />
            <IconButton
              icon={<Box as={LuUser2} boxSize={6} color="#4F4F4F" />}
              aria-label="Profile"
              variant="ghost"
            />
            <IconButton
              icon={<Box as={LuHeart} boxSize={6} color="#4F4F4F" />}
              aria-label="Cart"
              variant="ghost"
            />
            <IconButton
              icon={<Box as={LuShoppingCart} boxSize={6} color="#4F4F4F" />}
              aria-label="Like"
              variant="ghost"
            />
          </HStack>
        )}
        <IconButton
          size={"lg"}
          icon={<Box as={LuShoppingCart} boxSize={8} />}
          aria-label={"Shopping Cart"}
          display={{ md: "none" }}
          bg={"#F8E1E7"}
          opacity={0.7}
          _hover={{ bg: "#F8E1E7" }}
        />
        <IconButton
          size={"md"}
          icon={
            isOpen ? (
              <CloseIcon boxSize={6} color={"#ffffff"} />
            ) : (
              <HamburgerIcon boxSize={7} color={"#ffffff"} />
            )
          }
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg={"#992442"}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
