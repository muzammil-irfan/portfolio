import { Button } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function CommonButton(props) {
    const MotionButton = motion(Button);
    const router = useRouter();
  return (
    <>
    <MotionButton whileHover={{scale:1.2}} color='white' animate={{x:0,opacity:100}} initial={{x:-100,opacity:0}} onClick={()=>props.label === 'Get Quote' || 'GET IN TOUCH' && router.push('/contact')} whileTap={{scale:0.8}} bgColor={'secondary'} variant='disabled' {...props}  p={6}>
        {props.label}
    </MotionButton>
    </>
  )
}
