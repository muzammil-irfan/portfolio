import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Box, Flex } from '@chakra-ui/react';
import CommonHeading from '../common/CommonHeading';

export default function GraphicsPortfolio() {
  return (
    <>
    <Flex w='full' direction='column'>
      <CommonHeading >
        PORTFOLIO
      </CommonHeading>
      
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper2"
      >
        <SwiperSlide>
          <Box width='240px' height='320px'>
            {/* <Image src={} /> */}hjfjh
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box width='240px' height='320px'>
            {/* <Image src={} /> */}
            Skiddfg
          </Box>
        </SwiperSlide>
      </Swiper>
      
    </Flex>
    </>
  )
}
