import { Box, Flex, Heading, Stack,Text,useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import webBanner from '../../public/images/webDev/webBanner.png'

export default function Banner() {
        // <Flex  bg={"primary"} color='white' justify={'center'}>
        // <Stack  p={6}  spacing={4} my={8} >
        //     <Heading as='h1'>
        //         WEBSITE DEVELOPMENT
        //     </Heading>
        //     <Text>
        //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus viverra maecenas accumsan lacus viverra maecenas accumsan lacus vel facilisis. 
        //     </Text>
        // </Stack>
        // {/* maxW={{base:"200px",sm:"250px",md:"400px",lg:'600px'}} right={{base:"0px",lg:'10%'}} top={{md:'5%'}} */}
        // <Stack   >
        //     <Image src={webBanner} alt='Website Development' />
        // </Stack>
        // </Flex>
        const heading= useBreakpointValue({base:"xs",sm:"lg",md:"2xl",lg:"4xl"})
        const text= useBreakpointValue({base:"10px",sm:"sm",md:"lg",lg:"xl"})
        // const heading= useBreakpointValue({base:""})
  return (
    <>
    {/* <Flex> */}
        <Flex justifyContent={'center'} color='white'>
        <Flex maxW='5xl' px={{base:2,sm:8}}>
        <Stack width={{base:'50%',sm:"50%"}} position='relative' pt={{base:6,sm:10,md:'10vh'}}  >
            <Heading as='h1' fontSize={heading} >
            WEBSITE DEVELOPMENT
            </Heading>
            <Text fontSize={text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </Stack>
        <Stack width={{base:"50%",sm:'50%'}} position='relative' bottom='20px'  >
            <Image src={webBanner}  alt={'Website Development'} />
        </Stack>
        </Flex>
    <Box position='absolute' top='70px' zIndex={-1} height={{base:"40vw",lg:'400px'}} bg='primary' width='full' />
    </Flex>
    {/* </Flex> */}
    </>
  )
}
