import { Flex, Stack, Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/SkillatriaHeartLogo.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";

export default function Footer() {
  const portfolio = [
    {
      label: "Web Development",
      href: "/services/websitedevelopment",
    },
    {
      label: "Graphic Design",
      href: "/services/graphicdesign",
    },
    {
      label: "App Development",
      href: "/services/applicationdevelopment",
    },
    {
      label: "Video Editing",
      href: "/services/videoediting",
    },
  ];
  return (
    <>
      <Flex
        py={6}
        bg={"background"}
        boxShadow='inner'
        mt={6}
        justify="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Stack p={6} maxW={{base:"80vw", md: "300px" }}>
          <Link href="/">
            <a>
              <Box>
                <Image placeholder='blur' src={Logo} alt="Skillatria Logo" title='Skillatria Logo' />
              </Box>
            </a>
          </Link>
          <Text>
            Skillatria provides you the solution of your businesses to grow it
            digitally with its creativity and services.
          </Text>
        </Stack>
        <Stack
          justifyContent={"center"}
          align={{ md: "center " }}
          flexWrap="wrap"
          w="base"
          p={6}
        >
          <Stack>
            <Heading mb={2}>Services</Heading>
            <Stack spacing={4}>
              {portfolio.map((item) => {
                return (
                  <>
                    <Link href={item.href} key={item.label}>
                      <a>{item.label}</a>
                    </Link>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
        <Stack justify={"center"} align={{ md: "center " }} w="base" p={6}>
          <Stack>
            <Heading mb={2}>Contact us</Heading>
            <Stack spacing={4}>
              {contactInfo.map((item) => {
                return (
                  <>
                    <Link href={item.href} align="left" key={item.label}>
                      <a target={"_blank"}>
                        <Stack direction={"row"} align="center">
                          <Box>{item.icon} </Box>
                          <Text>{item.label}</Text>
                        </Stack>
                      </a>
                    </Link>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
const contactInfo = [
  {
    label: "Facebook",
    icon: <FaFacebook size="24px" />,
    href: "https://www.facebook.com/skillatria/",
  },
  {
    label: "Messenger",
    icon: <FaFacebookMessenger size="24px" />,
    href: "http://m.me/skillatria",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size="24px" />,
    href: "https://www.linkedin.com/company/skillatria",
  },
  {
    label: "Skype",
    icon: <FaSkype size="24px" />,
    href: "https://join.skype.com/invite/wIo4KbU5gxF1",
  },
];
