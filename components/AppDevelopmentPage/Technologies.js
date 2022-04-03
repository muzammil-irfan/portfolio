import { AspectRatio, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CommonHeading from "../common/CommonHeading";
import CommonButton from "../common/CommonButton";
import ReactNative from '../../public/images/appDev/reactNative.png'
import Image from "next/image";
export default function Technologies() {
  return (
    <>
      <Flex direction="column" alignItems={'center'} mt={10}>
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
        <CommonButton  label='Get Quote' />
      </Flex>
    </>
  );
}
const TechCard = (props) => {
  return (
    <>
      <Flex py={6} direction='column' alignItems='center' >
      <AspectRatio ratio={'16/9'} maxW={'300px'} >

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
      "React Native is the hybrid way to make applications for ios and android at once. It is also built by facebook and it can make those applications which we need to make for android and ios separately with great performance",
    image: {
      url: ReactNative,
      alt: "react native",
    },
  },
];
