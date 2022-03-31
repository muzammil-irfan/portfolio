import { Flex, Heading, Stack, Text,Box,useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import ContactForm from './ContactForm'
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {RiFacebookCircleLine,RiInstagramLine,RiLinkedinBoxLine,RiSkypeLine} from 'react-icons/ri';
import CommonLink from '../common/CommonLink';

export default function ContactPage() {
  const textSize = useBreakpointValue({base:'sm',md:"xs"})
  return (
    <>
    <Flex bg="#0e205a" bgColor='white'  w='full' maxW='2xl' boxShadow={'dark-lg'} color='primary' p={6} m={6} borderRadius={30} direction={{base:"column",md:'row'}}>
      <Stack w={{md:"40%"}} p={2}>
        <Box>
        <Heading as='h1'>
          Get in touch
        </Heading>
        <Text fontSize={textSize} fontWeight={'bold'} color='#4163d0'>
        Fill up the form below to contact us
        </Text>
        </Box>
        <Stack spacing={10} py={10}>
          {
            contactList.map(item=>
              <CommonLink fontWeight='bold' href={item.href} label={item.label} key={item.label} icon={item.icon} target='_blank' />
            )
          }
        </Stack>
      </Stack>
      <Stack w={{md:"60%"}}>
        <ContactForm />
      </Stack>
    </Flex>
    </>
  )
}
const contactList = [
  {
    label:"+923361207994",
    href:"tel:+923361207994",
    icon:<BiPhoneCall size="24px" />
  },
  {
    label:"skillatria@gmail.com",
    href:"mailto:skillatria@gmail.com",
    icon:<HiOutlineMail size="24px" />
  },
  {
    label: "Facebook",
    icon: <RiFacebookCircleLine size="24px" />,
    href: "https://www.facebook.com/skillatria/",
  },
  {
    label: "Instagram",
    icon: <RiInstagramLine size="24px" />,
    href: "https://www.instagram.com/skillatria/",
  },
  {
    label: "LinkedIn",
    icon: <RiLinkedinBoxLine size="24px" />,
    href: "https://www.linkedin.com/company/skillatria",
  },
  {
    label: "Skype",
    icon: <RiSkypeLine size="24px" />,
    href: "https://join.skype.com/invite/wIo4KbU5gxF1",
  }
]