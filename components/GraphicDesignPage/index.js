import React from 'react'
import CommonBanner from '../common/CommonBanner';
import GraphicsBanner from '../../public/images/graphicDesign/graphicsBanner.png';
export default function GraphicDesignPage() {
  const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus viverra maecenas accumsan lacus viverra maecenas accumsan lacus vel facilisis.'
  return (
    <>
    <CommonBanner title='Graphic Design' description={description} imageUrl={GraphicsBanner} imageAlt='Graphic Design'  />
    </>
  )
}
