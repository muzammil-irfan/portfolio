import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import {Flex,Text } from '@chakra-ui/react';

export default function CommonLink(props) {
    const MotionLink = motion(Flex);
  return (
    <>
    <Link href={props.href}>
        <a target={props.target}>
        <MotionLink whileHover={{x:3}} whileTap={{x:10}} alignItems='center' cursor='pointer' {...props}>
            {props.icon}
            <Text px={2}>
            {props.label}
            </Text>
        </MotionLink>
        </a>
    </Link>
    </>
  )
}
