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
      href: "/portfolio/webdevelopment",
    },
    {
      label: "Graphic Design",
      href: "/portfolio/graphicdesign",
    },
    {
      label: "Video Editing",
      href: "/portfolio/videoediting",
    },
    {
      label: "Photography",
      href: "/portfolio/photography",
    },
  ];
  return (
    <>
      <Flex
        py={6}
        bg={"gray.50"}
        boxShadow='inner'
        mt={6}
        justify="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Stack p={6} maxW={{ md: "300px" }}>
          <Link href="/">
            <a>
              <Box>
                <Image placeholder='blur' src={Logo} alt="Skillatria Logo" />
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
            <Heading mb={2}>Portfolio</Heading>
            <Stack spacing={4}>
              {portfolio.map((item, index) => {
                const contact = '#contact'
                return (
                  <>
                    <Link href={contact} key={index}>
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
              {contactInfo.map((item, index) => {
                return (
                  <>
                    <Link href={item.href} align="left" key={index}>
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
