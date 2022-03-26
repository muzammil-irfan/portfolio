
import Head from 'next/head'

import MainPage from '../components/Home'

export default function Home() {
  return (
   <>
   <Head>
     <title>Welcome to skillatria</title>
     <link rel='icon' href='/favicon.ico' /> 
     <meta name='description' content='We are a talented team who provides the micro services of ecommerce like website development, Graphic design, Video editing and product photography' /> 
   </Head>
    <MainPage />
    {/* <Flex color='white' bg='#021141' justifyContent='center'>
      <Stack>
        <Stack textAlign={'center'} spacing={4} my={8}>
          <Heading as='h1' >Graphic <Box as='span'> Designing</Box> Services</Heading>
          <Text>
          SKILLATRIA PROVIDES YOU THE SOLUTION OF YOUR BUSINESSES TO GROW IT DIGITALLY <br/> WITH ITS CREATIVITY AND SERVICES
          </Text>
          <Flex >
            <CommonButton label='GET IN TOUCH' />
            <CommonButton label='OUR SERVICES' />
          </Flex>

        </Stack>
      </Stack>
    </Flex> */}
   </>

  )
}
