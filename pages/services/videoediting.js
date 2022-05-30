import { NextSeo } from 'next-seo'
import React from 'react'
import VideoEditingPage from '../../components/VideoEditingPage'

export default function VideoEditing() {
  return (
    <>
    <NextSeo 
    title='Professional Video Editing Services'
    description='Looking for professional video editing services? Check the offers of Skillatria - the leading business partner in video editing solutions.'
    />
    <VideoEditingPage />
    </>
  )
}
