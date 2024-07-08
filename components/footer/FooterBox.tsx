import { Box, Text, Flex, Link } from "@chakra-ui/react";

export type LinkItem = {
  url: string;
  text: string;
};

type FooterBoxProps = {
  title: string;
  links: LinkItem[];
};

const FooterBox = ({ title, links }: FooterBoxProps) => (
  <Box ml={{ base: 1, md: 8 }} mt={4}>
    <Text
      fontWeight={700}
      color="#F0C0CD"
      lineHeight={"26px"}
      fontSize={"22px"}
      mt={4}
    >
      {title}
    </Text>
    <Flex
      direction="column"
      color="#9D9D9D"
      lineHeight={"20px"}
      fontSize={"16px"}
      fontWeight={400}
      pb={4}
    >
      {links.map((link, index) => (
        <Link key={index} href={link.url} mt={3}>
          {link.text}
        </Link>
      ))}
    </Flex>
  </Box>
);

export default FooterBox;
