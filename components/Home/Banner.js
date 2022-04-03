import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  ScaleFade,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from 'next/link';
import CommonButton from "../common/CommonButton";
import Typewriter from "typewriter-effect";
import CommonHeading from "../common/CommonHeading";
import { motion } from "framer-motion";
export default function Banner() {
  const textSize = useBreakpointValue({base:'sm',sm:"lg",lg:"xl"})
  return (
    <>
      <Flex color="white" bgColor="primary" justifyContent="center">
        <Flex direction="column" >
          <Stack textAlign={"center"} spacing={4} my={20} align={'center'}>
            {/* <MotionHeading  animate={{scale:1}} transition={{repeat:'infinity'}}>
          GRAPHIC DESIGNING SERVICES
          </MotionHeading> */}
            <AnimatedText />
            <Text fontSize={textSize} width={{md:'75%'}} px={6}>
              SKILLATRIA PROVIDES YOU THE{" "}
              <Box as="span" color="secondary">
                {" "}
                SOLUTION
              </Box>{" "}
              OF YOUR BUSINESSES TO GROW IT DIGITALLY WITH ITS CREATIVITY
              AND SERVICES
            </Text>
            <Flex justifyContent="center" gap={{ base: 6, sm: 20 }} p={4}>
              <CommonButton label="GET IN TOUCH" />
              <Link href='#services'>
              <a>
              <CommonButton label="OUR SERVICES" />
              </a>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
const AnimatedText = () => {
  const [heading, setheading] = useState(0);
  return (
    <>
    {
      heading === 0 && 
      <AnimatedHeadingComponent bannerNumber={0} animationComplete={()=>setheading(val=>1)} />
}
    {
      heading === 1 && 
<AnimatedHeadingComponent bannerNumber={1} animationComplete={()=>setheading(val=>2)} />
    }
    {
      heading === 2 && 
<AnimatedHeadingComponent bannerNumber={2} animationComplete={()=>setheading(val=>3)} />
    }
    {
      heading === 3 && 
      <AnimatedHeadingComponent bannerNumber={3} animationComplete={()=>setheading(val=>0)} />
    }
    </>
  );
};
const AnimatedHeadingComponent = (props)=>{
  const headingFontSize = useBreakpointValue({base:"xl",sm:"3xl",lg:"4xl"})
  const MotionHeading = motion(Heading)
  return(
    <>
     <MotionHeading
      fontSize={headingFontSize}
    as="h1"
    // initial={{scale:0}}
    animate={{ y: -80,opacity:0 }}
    onAnimationComplete={()=>props.animationComplete()}
    transition={{
      ease: "easeInOut",
      duration: 1.5,
      delay:1
    }}
  >
    {bannerData[props.bannerNumber]}
  </MotionHeading>
    </>
  )
}
const bannerData = [
  <>
    Graphic{" "}
    <Box as="span" color="secondary" textDecoration={"underline"}>
      {" "}
      Designing
    </Box>{" "}
    Services
  </>,
  <>
    Video{" "}
    <Box as="span" color="secondary" textDecoration={"underline"}>
      {" "}
      Editing
    </Box>{" "}
    Services
  </>,
  <>
    Website{" "}
    <Box as="span" color="secondary" textDecoration={"underline"}>
      {" "}
      Development
    </Box>{" "}
    Services
  </>,
  <>
    Application
    <Box as="span" color="secondary" textDecoration={"underline"}>
      {" "}
      Development
    </Box>{" "}
    Services
  </>,
];
