import { NextSeo } from 'next-seo'
import React from 'react'
import WebDevelopmentPage from '../../components/WebDevelopmentPage'

export default function WebsiteDevelopment() {
  return (
    <>
    <NextSeo 
    title='Custom Web Development Services'
    description='Looking for custom web development service provider? Check the offers of Skillatria - the leading business partner in custom web solutions.'
    />
    <WebDevelopmentPage />
    </>
  )
}
