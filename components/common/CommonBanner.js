import React from 'react'
import { Flex, Stack, Heading, Text,useBreakpointValue} from '@chakra-ui/react'
import Image from 'next/image';

export default function CommonBanner(props) {
    const heading= useBreakpointValue({base:"xs",sm:"lg",md:"2xl",lg:"4xl"})
        const text= useBreakpointValue({base:"9px",sm:"sm",md:"lg",lg:"xl"})
  return (
    <>
    {/* <Flex  zIndex={0} > */}
    {/* <Flex justifyContent={'center'} color='white'>
        <Flex maxW='5xl' px={8}>
        <Stack width={{base:'50%',sm:"50%"}} position='relative' my={8} pt={20}>
            <Heading as='h1' size={{base:"sm"}} >
                {props.title}
            </Heading>
            <Text>
                {props.description}
            </Text>
        </Stack>
        <Stack width={{base:"50%",sm:'50%'}} position='relative' bottom='20px'  >
            <Image src={props.imageUrl}  alt={props.imageAlt} />
        </Stack>
        </Flex>
    <Box position='absolute' top='70px' zIndex={-1} height={{base:"120px",sm:"200px",md:"350px",lg:'400px'}} bg='primary' width='full' />
    </Flex> */}
    {/* </Flex> */}
    <Flex justify={'center'} color='white' bg='primary'>
        <Flex maxW='5xl' px={8} >
            <Stack width='40%'  justify='center'>
            <Heading as='h1' fontSize={heading} >
                {props.title}
            </Heading>
            <Text fontSize={text}>
                {props.description}
            </Text>
            </Stack>
            <Stack width={"60%"} >
            <Image src={props.imageUrl}  alt={props.imageAlt} />
        </Stack>
        </Flex>
    </Flex>
    </>
    //  
  )
}
