import React from 'react'
import { Flex, Stack, Heading, Text,useBreakpointValue} from '@chakra-ui/react'
import Image from 'next/image';

export default function CommonBanner(props) {
  return (
    <>
    <Flex justify={'center'} color='white' bg='primary'>
        <Flex maxW='5xl' px={8} >
            <Stack width='40%'  justify='center'>
            <Heading as='h1' fontSize={useBreakpointValue({base:"xs",sm:"lg",md:"2xl",lg:"4xl"})} >
                {props.title}
            </Heading>
            <Text fontSize={useBreakpointValue({base:"0.5rem",sm:"xs",md:"lg",lg:"xl"})}>
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
