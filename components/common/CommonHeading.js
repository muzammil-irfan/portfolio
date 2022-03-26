import React from 'react'
import {Heading } from '@chakra-ui/react';

export default function CommonHeading(props) {
  return (
    <>
    <Heading as='h2' color='secondary' {...props}>
        {props.children}
    </Heading>
    </>
  )
}
