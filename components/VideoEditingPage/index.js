import { Container } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'
import VideoSections from './VideoSections'

export default function VideoEditingPage() {
  return (
    <>
    <Banner />
    <Container maxW='7xl' bg='background' >
      {
        videoPortfolio.map(item=>{
          return(
            <VideoSections key={item.title} title={item.title} description={item.description} video={item.video} />
          )
        })
      }
    </Container>
    </>
  )
}
const videoPortfolio = [
  {
    title:"VIDEO EDITING",
    description:"Video is an important factor because it's easy to digest, entertaining and engaging. Skillatria provides you its Video Editing Services to market your business through these medium",
    video:{
      src:"https://www.youtube.com/embed/oUKZZGoJsME",
      title:"VIDEO EDITING"
    }
  },
  {
    title:"2D ANIMATION VIDEO",
    description:"2D Animation is the advanced level of videos which provides more engagement than usual videos. It is commonly used for marketing and social media advertising videos",
    video:{
      src:"https://www.youtube.com/embed/a2IxNInk1u0",
      title:"2D ANIMATION VIDEO"
    }
  },
  {
    title:"WHITE BOARD ANIMATION",
    description:"Whiteboard videos are cheaper as compared to animations and roi is  mindblowing!  SKillatria also provides Whiteboard animation video service  to convey your value prosposition clearly ",
    video:{
      src:"https://www.youtube.com/embed/s14Vouui7U0",
      title:"WHITE BOARD ANIMATION"
    }
  },
]