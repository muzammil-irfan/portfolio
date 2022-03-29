import React from 'react'
import { Flex, Stack, Heading, Text,Box} from '@chakra-ui/react'
import Image from 'next/image';

export default function CommonBanner(props) {
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
    <Flex justify={'center'} color='white'>
        <Flex maxW='5xl' px={8}>
            <Stack width='50%'>
            <Heading as='h1' >
                {props.title}
            </Heading>
            <Text>
                {props.description}
            </Text>
            </Stack>
            <Stack width={"50%"} >
            <Image src={props.imageUrl}  alt={props.imageAlt} />
        </Stack>
        </Flex>
    </Flex>
    </>
    //  
  )
}
