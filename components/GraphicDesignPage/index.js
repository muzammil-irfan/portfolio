import React from 'react'
import CommonBanner from '../common/CommonBanner';
import GraphicsBanner from '../../public/images/graphicDesign/graphicsBanner.png';
import { Container } from '@chakra-ui/react';
import GraphicSection from './GraphicSection';
import GraphicsData from './GraphicsData';
import GraphicsPortfolio from './GraphicsPortfolio';
// import GraphicsPortfolio from './GraphicsPortfolio';
export default function GraphicDesignPage() {
  const description='Design is one of the most important factor when we build a brand. Skillatria understand your requirements and provide graphic designs for your business.'
  return (
    <>
    <CommonBanner title='Graphic Design' description={description} imageUrl={GraphicsBanner} imageAlt='Graphic Design'  />
    <Container maxW='7xl' bg={'background'}>
      {
        GraphicsData.map(item=>{
          return(
            <GraphicSection title={item.title} description={item.description} options={item.options} key={item.title} swiperSpeed={item.swiperSpeed} />
          )
        })
      }
      <GraphicsPortfolio />
       </Container>
    </>
  )
}
