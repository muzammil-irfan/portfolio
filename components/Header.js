import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/images/SkillatriaHeartLogo.png";
export default function Header() {
  const [expand, setExpand] = useState(false);
  const navData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      options: [
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
      ],
    },
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Contact us",
      href: "/contact",
    },
  ];

  return (
    <>
      <Flex
        align={"center"}
        justify="space-between"
        display={{ base: "none", md: "flex" }}
        p={3}
        shadow="md"
      >
        <Box position={"relative"}>
          <Image src={Logo} alt="Skillatria Logo" height={60} width={200} />
        </Box>
        <Flex justify="space-evenly" marginRight={6} gap={[3, 6]}>
          {navData.map((item, index) => {
            return (
              <>
                {item.label === "Portfolio" ? (
                  <Menu key={index}>
                    <MenuButton >{item.label}<ChevronDownIcon /></MenuButton>
                    <MenuList>
                      {item.options.map((option, index) => {
                        return (
                          <>
                            <Link href={option.href} key={index}>
                              <a>
                                <MenuItem>{option.label}</MenuItem>
                              </a>
                            </Link>
                          </>
                        );
                      })}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link href={item.href} key={index}>
                  <a>
                    {item.label}
                  </a>
                  </Link>
                )}
              </>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        align={"center"}
        display={{ base: "flex", md: "none" }}
        p={1}
        shadow={"md"}
        position={"absolute"}
        top={0}
        width={"full"}
        zIndex={2}
        justify={"center"}
      >
        <Flex
          bg={"#fff"}
          width={expand ? 150 : 35}
          height={"100vh"}
          shadow={"sm"}
          position="absolute"
          left={0}
          top={0}
          flexDirection={"column"}
        >
          <Box>
            <Button onClick={()=>setExpand(!expand)} my={1} >
            
          </Button>
          </Box>
          <Flex
            align={"center"}
            flexDirection={"column"}
            gap={3}
            display={expand ? "flex" : "none"}
            height={"full"}
          >
            {navData.map((item, index) => {
              return (
                <>
                  {item.label === "Portfolio" ? (
                    <>
                      <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          Portfolio
                        </MenuButton>
                        <MenuList>
                          {item.options.map((option, index) => {
                            return (
                              <>
                                <Link href={option.href} key={index}>
                                  <a>
                                    <MenuItem>{option.label}</MenuItem>
                                  </a>
                                </Link>
                              </>
                            );
                          })}
                        </MenuList>
                      </Menu>
                    </>
                  ) : (
                    <Link href={item.href} key={index}>
                      <a>{item.label}</a>
                    </Link>
                  )}
                </>
              );
            })}
          </Flex>
          <Flex
            align={"center"}
            flexDirection={"column"}
            gap={3}
            display={expand ? "none" : "flex"}
            height={"full"}
          ></Flex>
        </Flex>
        <Box position={"relative"}>
          <Image src={Logo} alt="Skillatria Logo" height={30} width={100} />
        </Box>
      </Flex>
    </>
  );
}
