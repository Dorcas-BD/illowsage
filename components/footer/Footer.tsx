"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTwitterSquare,
} from "react-icons/lia";
import FooterBox, { LinkItem } from "./FooterBox";

const Footer = () => {
  const QuickLinks: LinkItem[] = [
    { url: "#", text: "Home" },
    { url: "#", text: "About" },
    { url: "#", text: "Appointment" },
    { url: "#", text: "Blog" },
    { url: "#", text: "Contact" },
  ];

  const CompanyLinks: LinkItem[] = [
    { url: "#", text: "About" },
    { url: "#", text: "Contact" },
    { url: "#", text: "Career" },
    { url: "#", text: "Press" },
  ];

  const InformationLinks: LinkItem[] = [
    { url: "#", text: "Privacy Policy" },
    { url: "#", text: "Terms & Conditions" },
    { url: "#", text: "FAQ" },
  ];
  const logoWidth = useBreakpointValue({ base: 60, md: 70 });
  return (
    <Box bg="#000000" py={6} px={{ base: 2, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "left", md: "space-around" }}
        px={{ base: 4, md: 20 }}
      >
        <Flex direction="column">
          <Flex mt={4}>
            <Box position={"relative"} bottom={{ base: 3, md: 5 }}>
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={logoWidth}
                height={logoWidth}
              />
            </Box>
            <Text
              fontSize="4xl"
              fontWeight="700"
              color="#D95D7D"
              lineHeight={10}
              ml={2}
            >
              illowsage
            </Text>
          </Flex>
          <Box>
            <Text mt={2} color="#9D9D9D" w={{ base: "100%", md: 72 }}>
              Glow with confidence, embrace your natural beauty. Discover the
              power of premium skincare with us.
            </Text>
          </Box>
          <HStack spacing={0}>
            <IconButton
              icon={<Box as={LiaFacebook} boxSize={6} color="#4F4F4F" />}
              aria-label="Facebook"
              variant="ghost"
              _hover={{ bg: "#000000" }}
            />
            <IconButton
              icon={<Box as={LiaInstagram} boxSize={6} color="#4F4F4F" />}
              aria-label="Instagram"
              variant="ghost"
              _hover={{ bg: "#000000" }}
            />
            <IconButton
              icon={<Box as={LiaTwitterSquare} boxSize={6} color="#4F4F4F" />}
              aria-label="Twitter"
              variant="ghost"
              _hover={{ bg: "#000000" }}
            />
            <IconButton
              icon={<Box as={LiaLinkedin} boxSize={6} color="#4F4F4F" />}
              aria-label="LikedIn"
              variant="ghost"
              _hover={{ bg: "#000000", color: "#ffffff" }}
            />
          </HStack>
        </Flex>
        {/* <Box> */}
        <FooterBox title="Quick Links" links={QuickLinks} />
        <FooterBox title="Company" links={CompanyLinks} />
        <FooterBox title="Information" links={InformationLinks} />
        {/* </Box> */}
      </Flex>
    </Box>
  );
};

export default Footer;
