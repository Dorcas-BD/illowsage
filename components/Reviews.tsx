"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  HStack,
  VStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Raphael O.",
      profileImage: "/img/review1.png",
      title: "The Estee Lauder Eye Cream",
      description:
        " is a game-changer in my skincare routine, providing noticeable reduction in fine lines and puffiness around my eyes.",
      rating: 4,
      productImages: ["/img/reviewProduct1.png"],
      date: "26/07/24",
    },
    {
      id: 2,
      name: "Faith A.",
      profileImage: "/img/review2.png",
      title: "Its Lightweight Formula",
      description:
        "absorbs quickly,  So far I really am enjoying it and it gives my skin a smooth and fresh look morning and night!",
      rating: 5,
      productImages: ["/img/reviewProduct1.png", "/img/reviewProduct2.png"],
      date: "12/07/24",
    },
    {
      id: 3,
      name: "Cynthia M.",
      profileImage: "/img/review3.png",
      title: "It Works so Well!",
      description:
        "leaving my skin feeling hydrated and refreshed without any greasy residue. After just a few weeks of use, my under-eye area looks brighter and more youthful.",
      rating: 5,
      productImages: ["/img/reviewProduct3.png", "/img/reviewProduct4.png"],
      date: "05/06/24",
    },
  ];

  return (
    <Box p={{ base: 1, md: 4 }} width={"90vw"}>
      {reviews.map((review) => (
        <Box key={review.id} mb={8} p={4}>
          <Flex alignItems="center" justifyContent={"space-between"} mb={4}>
            <Flex>
              <Avatar src={review.profileImage} mr={4} />
              <Box>
                <Text fontWeight="bold">{review.name}</Text>
                <HStack spacing={1} mb={4}>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <Box key={i} mx={-2}>
                        <IconButton
                          key={i}
                          icon={
                            <Box
                              as={HiStar}
                              boxSize={6}
                              color={i < review.rating ? "#EFB319" : "#CBCBCB"}
                            />
                          }
                          aria-label={`Star ${i + 1}`}
                          variant="ghost"
                          isDisabled
                          size="sm"
                          _hover={{ bg: "transparent" }}
                        />
                      </Box>
                    ))}
                </HStack>
              </Box>
            </Flex>
            <Box>
              <Text fontSize="sm" color="gray.500">
                {review.date}
              </Text>
            </Box>
          </Flex>
          <Heading size="md" mb={2}>
            {review.title}
          </Heading>
          <Text mb={4}>{review.description}</Text>
          <Flex>
            {review.productImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Product image ${index + 1}`}
                boxSize="100px"
                objectFit="cover"
                mr={2}
                borderRadius="md"
              />
            ))}
          </Flex>
          <Divider
            mt={4}
            borderWidth="1px"
            borderColor="#CBCBCB"
            opacity={0.7}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
