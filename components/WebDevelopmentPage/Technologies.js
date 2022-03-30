import { AspectRatio, Flex, Stack, Text,useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import CommonHeading from "../common/CommonHeading";
import CommonButton from "../common/CommonButton";
import NodeJs from "../../public/images/webDev/nodejs.png";
import ReactJs from "../../public/images/webDev/reactjs.png";
import NextJs from "../../public/images/webDev/nextjs.png";
import Image from "next/image";
export default function Technologies() {
  // const heading = useBreakpointValue({base:'sm',sm:"2xl"})
  return (
    <>
      <Flex direction="column" alignItems={'center'} mt={20}>
        <CommonHeading  >SKILLS AND TECHNOLOGIES  WE USE</CommonHeading>
        <Stack px={4}>
        {techData.map((item) => (
          <>
            <TechCard
              description={item.description}
              imageUrl={item.image.url}
              imageAlt={item.image.alt}
            />
          </>
        ))}
        </Stack>
        <CommonButton label='Get Quote' />
      </Flex>
    </>
  );
}
const TechCard = (props) => {
  return (
    <>
      <Flex py={6} direction='column' alignItems='center' >
      <AspectRatio ratio={'16/9'} maxW={'250px'} >

        <Image src={props.imageUrl || '/'}  alt={props.imageAlt}  />
      </AspectRatio>
            <Text textAlign={'center'} width='75%'> 
            {props.description} 
            </Text>
      <Stack  >
      </Stack> 
    </Flex>
    </>
  );
};
const techData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    image: {
      url: NodeJs,
      alt: "node js",
    },
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    image: {
      url: ReactJs,
      alt: "react js",
    },
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    image: {
      url: NextJs,
      alt: "next js",
    },
  },
];
