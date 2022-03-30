import { AspectRatio, Stack, Text,Box } from "@chakra-ui/react";
import React from "react";
import CommonHeading from '../common/CommonHeading';
import ReactPlayer from "react-player/lazy";
import CommonButton from '../common/CommonButton';

export default function VideoSections(props) {
  return (
    <>
      <Stack alignItems='center' my={8} >
        <CommonHeading>{props.title}</CommonHeading>
        <Text textAlign="center" width={{sm:"75%"}}>{props.description} </Text>
        <Box py={6}>
          <ReactPlayer url={props.video.src} title={props.video.title} controls autoplay />
        </Box>
        <CommonButton label='Get Quote'  />
      </Stack>
    </>
  );
}
