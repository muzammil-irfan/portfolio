import React from 'react'
import Banner from './Banner'
import { Container } from '@chakra-ui/react'
import Technologies from './Technologies'

export default function AppDevelopmentPage() {
  return (
    <>
    <Banner />
    <Container maxW='7xl'>
      <Technologies />
    </Container>
    </>
  )
}
