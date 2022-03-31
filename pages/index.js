
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
   </>

  )
}
