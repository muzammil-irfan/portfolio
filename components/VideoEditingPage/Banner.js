import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import React from "react";
  import Image from "next/image";
import videoEditingBanner from '../../public/images/videoEditing/videoEditingBanner.png'
export default function Banner() {
  const heading = useBreakpointValue({
    base: "xs",
    sm: "lg",
    md: "2xl",
    lg: "4xl",
  });
  const text = useBreakpointValue({
    base: "10px",
    sm: "sm",
    md: "lg",
    lg: "xl",
  });
  return (
    <>
    <Flex justifyContent={"center"} color="white">
        <Flex maxW="5xl" px={{ base: 2, sm: 8 }}>
          <Stack
            width={{ base: "50%", sm: "50%" }}
            position="relative"
            pt={{ base: 6, sm: 10, md: "10vh" }}
          >
            <Heading as="h1" fontSize={heading}>
              VIDEO EDITING/ANIMATION
            </Heading>
            <Text fontSize={text}>
              Video is the great medium to capture and engage potential audiences. It give us ability to convey and connect our business with them
            </Text>
          </Stack>
          <Stack
            width={{ base: "50%", sm: "50%" }}
            position="relative"
            bottom="20px"
          >
            <Image src={videoEditingBanner} alt={"VIDEO EDITING/ANIMATION "} />
          </Stack>
        </Flex>
        <Box
          position="absolute"
          top="70px"
          zIndex={-1}
          height={{ base: "40vw", lg: "400px" }}
          bg="primary"
          width="full"
        />
      </Flex>
    </>
  )
}
