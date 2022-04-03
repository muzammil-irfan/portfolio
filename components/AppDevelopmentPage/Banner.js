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
import appDevBanner from "../../public/images/appDev/appDevBanner.png";

export default function Banner() {
  return (
    <>
      <Flex justifyContent={"center"} color="white">
        <Flex maxW="5xl" px={{ base: 2, sm: 8 }}>
          <Stack
            width={{ base: "50%", sm: "50%" }}
            position="relative"
            pt={{ base: 6, sm: 10, md: "10vh" }}
          >
            <Heading
              as="h1"
              fontSize={useBreakpointValue({
                base: "xs",
                sm: "lg",
                md: "2xl",
                lg: "4xl",
              })}
            >
              Application Development
            </Heading>
            <Text
              fontSize={useBreakpointValue({
                base: "10px",
                sm: "sm",
                md: "lg",
                lg: "xl",
              })}
            >
              Applications are used commonly by every smartphone users. It is a
              great way to reach every smartphone users by making an app for
              your business
            </Text>
          </Stack>
          <Stack
            width={{ base: "50%", sm: "50%" }}
            position="relative"
            bottom="20px"
          >
            <Image src={appDevBanner} alt={"Application Development"} />
          </Stack>
        </Flex>
        {/* Below for background color */}
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
  );
}
