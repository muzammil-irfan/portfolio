import React from 'react'
import CommonBanner from '../common/CommonBanner';
import GraphicsBanner from '../../public/images/graphicDesign/graphicsBanner.png';
import { Container } from '@chakra-ui/react';
import GraphicSection from './GraphicSection';
import GraphicsData from './GraphicsData';
// import GraphicsPortfolio from './GraphicsPortfolio';
export default function GraphicDesignPage() {
  const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  return (
    <>
    <CommonBanner title='Graphic Design' description={description} imageUrl={GraphicsBanner} imageAlt='Graphic Design'  />
    <Container maxW='7xl' >
      {
        GraphicsData.map(item=>{
          return(
            <GraphicSection title={item.title} description={item.description} options={item.options} key={item.title} swiperSpeed={item.swiperSpeed} />
          )
        })
      }
       </Container>
    </>
  )
}
