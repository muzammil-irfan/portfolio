import { SimpleGrid, Flex, Stack, Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/SkillatriaHeartLogo.png";

export default function Footer() {
  const portfolio = [
    {
      label: "Web Development",
      href: "portfolio/webdevelopment",
    },
    {
      label: "Graphic Design",
      href: "portfolio/graphicdesign",
    },
    {
      label: "Video Editing",
      href: "portfolio/videoediting",
    },
    {
      label: "Photography",
      href: "portfolio/photography",
    },
  ];
  return (
    <>
      <Flex py={6} bg={'blue.100'} mt={6}>
        <SimpleGrid  columns={{ base: 1, md: 2, lg: 4 }} >
          <Stack p={6} mx="auto">
            <Box>
              <Image src={Logo} />
            </Box>
            <Text>
              Skillatria provides you the solution of your businesses to grow it
              digitally with its creativity and services.
            </Text>
          </Stack>
          <Stack justify={'center'} mx='auto' p={6}>
            <Heading>Portfolio</Heading>
            {portfolio.map((item, index) => {
              return (
                <>
                  <Link href={item.href} key={index}>
                    <a>{item.label}</a>
                  </Link>
                </>
              );
            })}
          </Stack>
          <Stack justify={'center'} mx='auto' p={6}>
              <Heading>Contact us</Heading>
                <Link href='tel:'>
                <a>Whatsapp</a>
                </Link>

          </Stack>
        </SimpleGrid>
      </Flex>
    </>
  );
}
