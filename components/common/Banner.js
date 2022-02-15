import React from "react";
import { Flex, Heading, SimpleGrid, Stack, Text,useBreakpointValue } from '@chakra-ui/react';
export default function Banner(props) {
  const fontSize = useBreakpointValue({base:'md',sm:'xl',md:'2xl',lg:'3xl'})
  return (
    <>
    {
        props.type === 'Home' && 
      <Flex height={{base:400,md:600}}  textAlign='center' backgroundColor='blue.900' color='white' justifyContent={'center'}  >
          <Stack px={3} justifyContent={'center'} width={'4xl'} gap={3}>
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
