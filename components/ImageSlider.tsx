import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Flex, Radio, RadioGroup } from "@chakra-ui/react";

const ImageSlider: React.FC = () => {
  const images = [
    "/img/cartImg.png",
    "/img/product/fan12.png",
    "/img/cartImg.png",
    "/img/product/fan12.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleRadioChange = (value: string) => {
    setCurrentIndex(parseInt(value, 10));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box position="relative" width="100%" maxWidth="800px" mx="auto">
      <Box position="relative" height="300px">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Flex justify="center" mt={4}>
        <RadioGroup
          onChange={(value: string) => handleRadioChange(value)}
          value={String(currentIndex)}
          display="flex"
          gap={2}
        >
          {images.map((_, index: number) => (
            <Radio
              key={index}
              value={String(index)}
              size="lg"
              border={"1.4px solid #571426"}
              color={"#571426"}
              _checked={{
                bg: "#571426",
                borderColor: "#571426",
              }}
            />
          ))}
        </RadioGroup>
      </Flex>
    </Box>
  );
};

export default ImageSlider;
