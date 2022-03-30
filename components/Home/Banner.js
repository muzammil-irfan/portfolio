import React from 'react';
import { Flex,Heading,Stack,Text,Box } from '@chakra-ui/react';
import CommonButton from '../common/CommonButton';
import Typewriter from "typewriter-effect";
import CommonHeading from '../common/CommonHeading';
export default function Banner() {
  return (
    <>
    <Flex color='white' bgColor='primary' justifyContent='center'>
      <Flex direction='column'>
        <Stack textAlign={'center'} spacing={4} my={20}>
          {/* <Heading as='h1' >Graphic <Box as='span' color='secondary' textDecoration={'underline'} > Designing</Box> Services</Heading> */}
          <CommonHeading as='h1' textDecoration='underline' color='white'>
          <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GRAPHIC DESIGNING SERVICES")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString(`VIDEO EDITING SERVICES`)
       .pauseFor(1000)
       .deleteAll()
       .typeString("WEBSITE DEVELOPMENT SERVICES")
       .pauseFor(1000)
       .deleteAll()
       .typeString("APPLICATION DEVELOPMENT SERVICES")
       .start();
       }}
       />
          </CommonHeading>
          <Text>
          SKILLATRIA PROVIDES YOU THE <Box as='span' color='secondary'> SOLUTION</Box> OF YOUR BUSINESSES TO GROW IT DIGITALLY <br/> WITH ITS CREATIVITY AND SERVICES
          </Text>
          <Flex justifyContent='center' gap={{base:10,sm:20}} p={4}>
            <CommonButton label='GET IN TOUCH' />
            <CommonButton label='OUR SERVICES' />
          </Flex>

        </Stack>
      </Flex>
    </Flex>
    </>
  )
}
