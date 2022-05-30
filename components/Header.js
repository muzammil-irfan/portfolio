import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  HStack,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon,HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/SkillatriaHeartLogo.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navData = [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "About us",
    //   href: "#about",
    // },
    {
      label: "Services",
      options: [
        {
          label: "Web Development",
          href: "/services/websitedevelopment",
        },
        {
          label: "App Development",
          href: "/services/applicationdevelopment",
        },
        {
          label: "Graphic Design",
          href: "/services/graphicdesign",
        },
        {
          label: "Video Editing",
          href: "/services/videoediting",
        },
      ],
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <Flex
        align={"center"}
        justify="space-between"
        bg={'white'}
        // 
        p={3}
        shadow="dark-lg"
      >
        <Link href='/'>
        <a>
        <Box position={"relative"}>
          <Image placeholder='blur' src={Logo} alt="Skillatria Logo" height={60} width={200} />
        </Box>
        </a>
        </Link>
        <Flex justify="space-evenly"  marginRight={6} gap={[3, 6]} display={{ base: "none", md: "flex" }}>
          {navData.map((item) => {
            return (
              <>
                {item.label === "Services" ? (
                  <Menu key={item.label}>
                    <MenuButton >{item.label}<ChevronDownIcon /></MenuButton>
                    <MenuList>
                      {item.options.map((option) => {
                        return (
                          <>
                            <Link href={option.href} key={option.href}>
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
                  <Link href={item.href} key={item.href}>
                  <a>
                    {item.label}
                  </a>
                  </Link>
                )}
              </>
            );
          })}
        </Flex>
        <Box display={{md: "none" }}>
          <IconButton icon={<HamburgerIcon />} aira-label='Hamburger Icon' onClick={onOpen} my={1} variant='ghost' name='menu' /> 
          <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader >
            <HStack justifyContent={'flex-end'}>
          <CloseButton  onClick={onClose} />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
          <Flex
            align={"center"}
            flexDirection={"column"}
            gap={3}
            height={"full"}
          >
            {navData.map((item) => {
             
              return (
                <>
                  {item.label === "Services" ? (
                    <>
                      <Menu py={2}>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          Services
                        </MenuButton>
                        <MenuList>
                          {item.options.map((option) => {
                            return (
                              <>
                                <Link href={option.href} key={option.label} >
                                  <a>
                                    <MenuItem onClick={()=>setTimeout(onClose,600)}>{option.label}</MenuItem>
                                  </a>
                                </Link>
                              </>
                            );
                          })}
                        </MenuList>
                      </Menu>
                    </>
                  ) : (
                    <Box onClick={()=>{onClose()}} py={2} key={item.href}>
                    <Link href={item.href} >
                      <a>{item.label}</a>
                    </Link>
                    </Box>
                  )}
                </>
              );
            })}
          </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          </Box>
      </Flex>
      
    </>
  );
}
