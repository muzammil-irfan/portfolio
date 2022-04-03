import { Container } from '@chakra-ui/react';
import React from 'react';
import Banner from './Banner';
import Benefits from './Benefits';
import Service from './Service';
// import Faq from './Faq';

export default function MainPage() {
  return (
    <>
    <Banner />
    <Container maxW='7xl' bgColor={'background'}>

    <Service />
    </Container>
    <Benefits />
    <Container maxW='7xl' bgColor={'background'}>
      {/* <Faq/> */}
    </Container>
    

    </>
  );
}
