import { Box, Text,Flex,Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card(props) {
    return (
        <>
        <Flex p={3} shadow='lg' borderRadius={'2xl'} >
            <Link href={props.href}>
            <a>
            <Box>
            <Image src={props.src} width={props.width} height={props.height} alt={props.alt} />
            </Box>
            <Flex justify={'center'}>
                <Heading size='xl'>{props.label}</Heading>
            </Flex>
            </a>
            </Link>
        </Flex>   
        </>
    )
}
