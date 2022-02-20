import React from "react";
import { Flex, Heading, Stack, Text,useBreakpointValue } from '@chakra-ui/react';
// import Particles from "../Home/particles/Particles";
import HomeBannerImage from '../../public/images/homeBanner.jpg';
// import ParticlesBackground from "../Home/particles/Particles";
import Image from "next/image";
export default function Banner(props) {
  const fontSize = useBreakpointValue({base:'md',sm:'xl',md:'2xl',lg:'3xl'})
  return (
    <>
    {
      props.type === 'Home' && 
      <Flex height={{base:400,md:600}} textAlign='center' color='white' justifyContent={'center'} >
        {/* <ParticlesBackground /> */}
        <Image src={HomeBannerImage} alt='Welcome to skillatria' placeholder='blur' objectFit="cover" />
          <Stack px={8} justifyContent={'center'} height={{base:400,md:600}} alignItems='center' position='absolute' >
              <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>

      </Flex>
    }
    {
      props.type === 'webDevelopment' && (
        <>
        <Flex height={{base:400,md:600}} justifyContent={'center'} >
          <Stack width='40%' p={8} justifyContent={'center'}  >
          <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          <Stack width='50%' p={8} justifyContent={'center'}  >

          </Stack>
        </Flex>
        </>
      )
    }
    {
      props.type === 'graphicDesign' && (
        <>
        <Flex height={{base:400,md:600}} justifyContent={'center'} >
          <Stack width='40%' p={8} justifyContent={'center'}  >
          <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          <Stack width='50%' p={8} justifyContent={'center'}  >

          </Stack>
        </Flex>
        </>
      )
    }
    {
      props.type === 'videoEditing' && (
        <>
        <Flex height={{base:400,md:600}} justifyContent={'center'} >
          <Stack width='40%' p={8} justifyContent={'center'}  >
          <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          <Stack width='50%' p={8} justifyContent={'center'}  >

          </Stack>
        </Flex>
        </>
      )
    }
    {
      props.type === 'photography' && (
        <>
        <Flex height={{base:400,md:600}} justifyContent={'center'} >
          <Stack width='40%' p={8} justifyContent={'center'}  >
          <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          <Stack width='50%' p={8} justifyContent={'center'}  >

          </Stack>
        </Flex>
        </>
      )
    }
    </>
  );
}
