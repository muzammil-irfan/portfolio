import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/Home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <Head>
     <title>Welcome to skillatria</title>
     <meta name='description' content='We are a talented team who provides the micro services of ecommerce like website development, Graphic design, Video editing and product photography' /> 
   </Head>
    <MainPage />
   </>

  )
}
