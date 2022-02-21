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
      label: "Contact us",
      href: "#contact",
    },
  ];
  // const router = Router();
  return (
    <>
      <Flex
        align={"center"}
        justify="space-between"
        bg={"gray.50"}
        // 
        p={3}
        shadow="md"
      >
        <Link href='/'>
        <a>
        <Box position={"relative"}>
          <Image placeholder='blur' src={Logo} alt="Skillatria Logo" height={60} width={200} />
        </Box>
        </a>
        </Link>
        <Flex justify="space-evenly" marginRight={6} gap={[3, 6]} display={{ base: "none", md: "flex" }}>
          {navData.map((item, index) => {
            return (
              <>
                {item.label === "Portfolio" ? (
                  <Menu key={index}>
                    <MenuButton >{item.label}<ChevronDownIcon /></MenuButton>
                    <MenuList>
                      {item.options.map((option, index) => {
                        const contact = '#services'
                        return (
                          <>
                            <Link href={contact} key={index}>
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
                  <Link href={'#contact'} key={index}>
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
          <IconButton icon={<HamburgerIcon />} aira-label='Hamburger Icon' onClick={onOpen} my={1} variant='ghost' /> 
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
            {navData.map((item, index) => {
             
              return (
                <>
                  {item.label === "Portfolio" ? (
                    <>
                      <Menu py={2}>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          Portfolio
                        </MenuButton>
                        <MenuList>
                          {item.options.map((option, index) => {
                             const contact = '#services'
                            return (
                              <>
                                <Link href={contact} key={index}>
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
                    <Box onClick={()=>{onClose()}} py={2} key={index}>
                    <Link href={'#contact'} >
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

      {/* <Flex
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
      </Flex> */}
      
    </>
  );
}
