import {
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Satisfaction from '../../public/images/icons/satisfaction.png';
import Quality from '../../public/images/icons/quality.png';
import Time from '../../public/images/icons/time.png';
import Creative from '../../public/images/icons/creativity.png';
import Image from "next/image";

export default function Benefits() {
  return (
    <>
      <Flex flexDirection={"column"} justify={"center"} my={8} >
        <Flex justify={"center"} my={8}>
          <Stack textAlign={"center"}>
            <Heading fontSize={{base:'xl',sm:'2xl',md:'4xl'}}>
              Why us?
            </Heading>
            <Heading fontSize={{base:'xl',sm:'2xl',md:'4xl'}}>Lets check out the Benefits First</Heading>
          </Stack>
        </Flex>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={8} mx={4}>
          {benefitsData.map((item, index) => {
            return (
              <>
                <Stack key={index} direction={"row"} px={4} m={2} justifyContent='center'>
                  <Box p={2}>
                    <Image src={item.icon} width={80} height={80} alt={item.heading} />
                  </Box>
                  <Stack width="75%">
                    <Heading size={"lg"}>{item.heading}</Heading>
                    <Text fontSize={"lg"}>{item.label}</Text>
                  </Stack>
                </Stack>
              </>
            );
          })}
          <Stack>Hello</Stack>
        </SimpleGrid>
      </Flex>
    </>
  );
}
const benefitsData = [
  {
    icon: Creative,
    heading: "Creative",
    label:
      "We are a team of creative members to execute your idea into reality.",
  },
  {
    icon: Quality,
    heading: "Quality",
    label:
      "We believe in providing you the best quality work so we can build a long term relation",
  },
  {
    icon: Satisfaction,
    heading: "Satisfaction",
    label:
      "Your satisfaction is our first priority so we always give unlimited revisions",
  },
  {
    icon: Time,
    heading: "Time",
    label: "We value your time thats why we always provide your work on time",
  },
];
