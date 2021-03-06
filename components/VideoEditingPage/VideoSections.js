import { AspectRatio, Stack, Text,Box } from "@chakra-ui/react";
import React from "react";
import CommonHeading from '../common/CommonHeading';
import CommonButton from '../common/CommonButton';

export default function VideoSections(props) {
  return (
    <>
      <Stack alignItems='center' py={8} px={2}  >
        <CommonHeading>{props.title}</CommonHeading>
        <Text textAlign="center"  width={{sm:"75%"}} pb={4}>{props.description} </Text>
        <AspectRatio   width='100%' maxW='560px' height={{base:'50vw',md:'315px'}} ratio={'16/9'}>
          <iframe  src={props.video.src} title={props.video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AspectRatio>
        <Box pb={1} />
        <CommonButton  label='Get Quote'  />
      </Stack>
    </>
  );
}
