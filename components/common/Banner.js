import React from "react";
import { Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
export default function Banner(props) {
  return (
    <>
    {
        props.type === 'Home' && 
      <Flex height={{base:400,md:600}} width={'full'} >
          <SimpleGrid columns={2}>
          <Stack px={3} justify={'center'} gap={3}>
              <Heading size="3xl">
                Welcome to the Heart of skills
              </Heading>
              <Text size={'lg'} width={'70%'}>
                 Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services.
              </Text>
          </Stack>
          </SimpleGrid>
      </Flex>
    }
    </>
  );
}
