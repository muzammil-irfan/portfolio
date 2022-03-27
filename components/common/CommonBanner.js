import React from 'react'
import { Flex, Stack, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image';

export default function CommonBanner(props) {
  return (
    <>
    <Flex bg={"primary"} color='white' height={{base:"200px",md:"300px",lg:'500px'}} justify={'center'}>
        <Flex maxW={'3xl'}>
        <Stack width={'50%'} p={6} position='relative' spacing={4} my={8}>
            <Heading as='h1'>
                {props.title}
            </Heading>
            <Text>
                {props.description}
            </Text>
        </Stack>
        <Stack position='absolute' maxW={{base:"200px",sm:"250px",md:"400px",lg:'600px'}} right={{base:"0px",lg:'10%'}} top={{md:'5%'}} >
            <Image src={props.imageUrl}  alt={props.imageAlt} />
        </Stack>
        </Flex>
    </Flex>
    </>
  )
}
