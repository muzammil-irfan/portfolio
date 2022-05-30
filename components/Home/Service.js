import { Box,AspectRatio, Flex, Heading, SimpleGrid,Stack,Text } from "@chakra-ui/react";
import WebDevelopment from '../../public/images/services/website.png';
import AppDevelopment from '../../public/images/services/appDev.png';
import VideoEditing from '../../public/images/services/video.png';
import GraphicDesign from '../../public/images/services/graphics.png';
import React from "react";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import CommonHeading from "../common/CommonHeading";
import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
  return (
    <>
      <Flex flexDirection={'column'} justify={'center'} py={4} id='services'>
          <Stack justify={'center'} my={6} textAlign={'center'} spacing={1}>
        <CommonHeading  fontSize={{base:'xl',sm:'2xl',md:'4xl'}} >OUR SERVICES</CommonHeading>
        <Text >
        We understand your Project challenges &#38; Deliver it the right way!
        </Text>
          </Stack>
          <Stack px={4}>
            {
              servicesData.map(item=>
                <ServiceCard title={item.title} description={item.description} imageUrl={item.imageUrl} imageAlt={item.imageAlt} href={item.href} key={item.href}  />
              )
            }
          </Stack>
      </Flex>
    </>
  );
}
const ServiceCard = (props) => {
  return(
    <>
    <Flex py={12} direction={{base:"column",md:"row"}} justify='center' >
      
      {/* <Stack maxW={'500px'} position='relative'> */}
      <AspectRatio ratio={'4/3'} maxW={'300px'} mr={8}>

        <Image src={props.imageUrl || '/'}  alt={props.imageAlt}  />
      </AspectRatio>
        {/* <AspectRatio  ratio={1}> */}
        {/* </AspectRatio> */}
      {/* </Stack> */}
      <Stack width={{md:'50%'}} justifyContent={'space-evenly'}>
        <Stack>  
        <Heading>
          {props.title}
        </Heading>
        <Text>
          {props.description}
        </Text>
        </Stack>
        <Link href={props.href} aria-label={props.imageAlt} >
        <a aria-label={props.imageAlt} >
          <Flex alignItems={'center'}>
            <HiOutlineArrowNarrowRight /> &nbsp; Learn more
          </Flex>
        </a>
        </Link>
      </Stack>
    </Flex>
    </>
  );
}
const servicesData = [
  {
    title: "Web Development",
    description:"In today’s fast-moving world. it is essential to have a website for your business. At Skillatria, we ensure to develop custom websites according to your desire.",
    imageUrl: WebDevelopment,
    imageAlt:'custom web development services',
    href: "/services/websitedevelopment",
  },
  {
    title: "Mobile App Development",
    description:"Mobiles have become an integral part of our lives. Represent your business on this highly developed platform with an easy to use application", 
    imageUrl: AppDevelopment ,
    imageAlt:'custom application development services',
    href: "/services/applicationdevelopment",
  },
  {
    title: "Graphic Design",
    description:"In modern world, art & design is already become a part of our life. Design is one of the most important factor factoor when we building a brand. Skillatria understand your requirements and make graphics designs for your business. ", 
    imageUrl: GraphicDesign,
    imageAlt:'freelance graphic designing services',
    href: "/services/graphicdesign",
  },
  {
    title: "Video Editing",
    description:"Video is an important factor because it's easy to digest, entertaining and engaging, and marketers like it because it can give a potentially huge return on investment (ROI) through many channels. Video is also very accessible to anyone with internet access, both to watch and to produce. Skillatria provides you video editing service...   ",
    imageUrl: VideoEditing,
    imageAlt:'freelance video editing services',
    href: "/services/videoediting",
  },
];
