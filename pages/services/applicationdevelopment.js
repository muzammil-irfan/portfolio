import { NextSeo } from 'next-seo'
import React from 'react'
import AppDevelopmentPage from '../../components/AppDevelopmentPage'

export default function ApplicationDevelopment() {
  return (
    <>
    <NextSeo 
    title='Custom App Development Services'
    description='Looking for custom app development service provider? Check the offers of Skillatria - the leading business partner in custom app solutions.'
    />
    <AppDevelopmentPage />
    </>
  )
}
