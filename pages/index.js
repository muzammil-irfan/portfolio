import {NextSeo} from 'next-seo'
import Head from 'next/head'

import MainPage from '../components/Home'

export default function Home() {
  return (
   <>
   <Head>
     <title> </title>
     
     <meta name='description' content='Skillatria, a digital agency which provides the services of website development, Graphic design, Video editing and app development' /> 
     
   </Head>
   <NextSeo
   title='Digital Agency based in Pakistan'
   description='Skillatria, a digital agency which provides the services of website development, Graphic design, Video editing and app development'
   />
    <MainPage />
   </>

  )
}
