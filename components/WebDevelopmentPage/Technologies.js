import { AspectRatio, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CommonHeading from "../common/CommonHeading";
import CommonButton from "../common/CommonButton";
import NodeJs from "../../public/images/webDev/nodejs.png";
import ReactJs from "../../public/images/webDev/reactjs.png";
import NextJs from "../../public/images/webDev/nextjs.png";
import Image from "next/image";
export default function Technologies() {
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
      "Node js is a Javascript runtime environment for backend development. We use it to deliver scalable, fast and secure website applications.",
    image: {
      url: NodeJs,
      alt: "node js",
    },
  },
  {
    description:
      "React js is a javascript frontend library developed by facebook. It gives the smooth single page application functionality which we won't be able to achieve from normal bootstrap and javascript coding.",
    image: {
      url: ReactJs,
      alt: "react js",
    },
  },
  {
    description:
      "Next js is the amazing framework build on react. It is reknown for its seo performance as well as generating data statically",
    image: {
      url: NextJs,
      alt: "next js",
    },
  },
];
