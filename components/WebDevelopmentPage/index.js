import { Container } from '@chakra-ui/react'
import React from 'react'
// import CommonBanner from '../common/CommonBanner'
import Banner from './Banner'
import Technologies from './Technologies'


export default function WebDevelopmentPage() {
  const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus viverra maecenas accumsan lacus viverra maecenas accumsan lacus vel facilisis.'
  return (
    <>
    <Banner />
    {/* <CommonBanner title='Website Development' description={description} imageUrl={webBanner} imageAlt='Website Development' maxW={{base:"200px",sm:"250px",md:"400px",lg:'600px'}} right={{base:"0px",lg:'0px'}} top={{md:'5%'}} /> */}
    <Container maxW='7xl'>
      <Technologies />
    </Container>
    </>
  )
}
