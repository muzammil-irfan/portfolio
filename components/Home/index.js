import { Container } from '@chakra-ui/react';
import React from 'react';
import Banner from '../common/Banner';
import Service from './Service';

export default function MainPage() {
  return (
    <>
    <Container maxW='7xl'>
        <Banner type='Home'/> 
        <Service />
    </Container>
    </>
  );
}
