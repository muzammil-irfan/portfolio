import React from "react";
import { Flex, Heading, SimpleGrid, Stack, Text,useBreakpointValue } from '@chakra-ui/react';
export default function Banner(props) {
  const fontSize = useBreakpointValue({base:'md',sm:'xl',md:'2xl',lg:'3xl'})
  return (
    <>
    {
        props.type === 'Home' && 
      <Flex height={{base:400,md:600}} width={'full'} >
          <SimpleGrid columns={2}>
          <Stack px={3} justify={'center'} gap={3}>
              <Heading size={fontSize}>
                Welcome to the Heart of skills
              </Heading>
              <Text fontSize={{base:'xs',md:'2xl'}} >
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          </SimpleGrid>
      </Flex>
    }
    </>
  );
}
