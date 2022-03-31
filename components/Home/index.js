import { Container } from '@chakra-ui/react';
import React from 'react';
import Banner from './Banner';
import ContactSection from '../Contact';
import Benefits from './Benefits';
import Service from './Service';

export default function MainPage() {
  return (
    <>
    <Banner />
    <Container maxW='7xl' bgColor={'#f6f6f6'}>

    <Service />
    </Container>
    <Benefits />
    </>
  );
}
