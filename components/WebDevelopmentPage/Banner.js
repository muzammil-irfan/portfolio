import { Container, Flex, Heading, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <>
    <Flex bg={"primary"} color='white' height={{base:"200px",md:"300px",lg:'500px'}} justify={'center'}>
        <Flex maxW={'3xl'}>
        <Stack width={'50%'} p={6} position='relative' spacing={4} my={8}>
            <Heading as='h1'>
                WEBSITE DEVELOPMENT
            </Heading>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus viverra maecenas accumsan lacus viverra maecenas accumsan lacus vel facilisis. 
            </Text>
        </Stack>
        <Stack position='absolute' maxW={{base:"200px",sm:"250px",md:"400px",lg:'600px'}} right={{base:"0px",lg:'10%'}} top={{md:'5%'}} >
            <Image src={webBanner}  alt='Website Development' />
        </Stack>
        </Flex>
    </Flex>
    </>
  )
}
