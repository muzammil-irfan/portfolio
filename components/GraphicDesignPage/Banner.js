import { Box, Flex, Heading, Stack,Text,useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import GraphicsBanner from '../../public/images/graphicDesign/graphicsBanner.png';

export default function Banner() {
    const heading= useBreakpointValue({base:"xs",sm:"lg",md:"2xl",lg:"4xl"})
    const text= useBreakpointValue({base:"9px",sm:"sm",md:"lg",lg:"xl"})
  return (
    <>
    <Flex justifyContent={'center'} color='white'>
        <Flex maxW='5xl' px={{base:2,sm:8}}>
        <Stack width={{base:'50%',sm:"50%"}} position='relative' pt={{base:6,sm:10,md:'10vh'}}  >
            <Heading as='h1' fontSize={heading} >
            GRAPHIC DESIGN
            </Heading>
            <Text fontSize={text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </Stack>
        <Stack width={'50%'} position='relative'  >
            <Image src={GraphicsBanner}  alt={'Graphic Design'} />
        </Stack>
        </Flex>
    <Box position='absolute' top='70px' zIndex={-1} height={{base:"40vw",lg:'400px'}} bg='primary' width='full' />
    </Flex>
    </>
  )
}
