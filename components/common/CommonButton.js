import { Button } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';

export default function CommonButton(props) {
    const MotionButton = motion(Button);
  return (
    <>
    <MotionButton whileHover={{scale:1.2}} color='white' animate={{x:0,opacity:100}} initial={{x:-100,opacity:0}}  whileTap={{scale:0.8}} bgColor={'secondary'} variant='disabled' {...props}>
        {props.label}
    </MotionButton>
    </>
  )
}
