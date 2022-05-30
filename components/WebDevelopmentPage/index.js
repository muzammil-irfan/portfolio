import { Container } from '@chakra-ui/react'
import React from 'react'
// import CommonBanner from '../common/CommonBanner'
import Banner from './Banner'
import Technologies from './Technologies'


export default function WebDevelopmentPage() {
  
  return (
    <>
    
    <Banner />
    <Container maxW='7xl'>
      <Technologies />
    </Container>
    </>
  )
}
