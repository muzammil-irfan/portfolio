import { Container } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'
import VideoSections from './VideoSections'

export default function VideoEditingPage() {
  return (
    <>
    <Banner />
    <Container maxW='7xl' >
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
    description:"Video is an important factor because it's easy to digest, entertaining and engaging.<br />SKillatria provides you Video Editing Services like, VLOGS AND TRAVEL, WEDDING HIGHLIGHTS, CINEMATIC SEQUENCES, PODCASTS, PRODUCT COMMERCIALS, DOCUMENTRIES, FASHION FILMS and PICTURES SLIDESHOW",
    video:{
      src:"https://www.youtube.com/embed/oUKZZGoJsME",
      title:"VIDEO EDITING"
    }
  },
  {
    title:"2D ANIMATION VIDEO",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    video:{
      src:"https://www.youtube.com/embed/a2IxNInk1u0",
      title:"2D ANIMATION VIDEO"
    }
  },
  {
    title:"WHITE BOARD ANIMATION",
    description:"Whiteboard videos are cheaper as compared to animations and roi is  mindblowing!  SKillatria also provides Whiteboard animation video service  to convey your value prosposition clearly and draw people closer to making a buying decision and boost your sales",
    video:{
      src:"https://www.youtube.com/embed/s14Vouui7U0",
      title:"WHITE BOARD ANIMATION"
    }
  },
]