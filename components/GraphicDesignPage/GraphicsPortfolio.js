import React from 'react'
import { AspectRatio, Box, Flex, Stack } from '@chakra-ui/react';
import CommonHeading from '../common/CommonHeading';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./style.module.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

//Images
import cardMockups from '../../public/images/graphicDesign/portfolio/cardMockups.png';
import cardMockups2 from '../../public/images/graphicDesign/portfolio/cardMockups2.png';
import cardMockups3 from '../../public/images/graphicDesign/portfolio/cardMockups3.png';
import websitePortfolio from '../../public/images/graphicDesign/portfolio/websitePortfolio.png';
import estraLogo from '../../public/images/graphicDesign/portfolio/estraLogo.png';
import rafayCard from '../../public/images/graphicDesign/portfolio/rafayCard.png';
import rafayLogo from '../../public/images/graphicDesign/portfolio/rafayLogo.png';
import rafayLogo2 from '../../public/images/graphicDesign/portfolio/rafayLogo2.png';
import Image from 'next/image';

export default function GraphicsPortfolio() {
  return (
    <>
    <Flex w='full' direction='column' align='center'>
      <CommonHeading >
        PORTFOLIO
      </CommonHeading>
      <Stack maxW='900px' py={10}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className={`mySwiper `}
      >
        {
          data.map(item=>{
            return(
              <>
              <SwiperSlide key={item.alt}>
                <Stack >
                <Image src={item.url} alt={item.alt} />
                </Stack>
              </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>
      </Stack>
      
    </Flex>
    </>
  )
}
const data = [
  {
    url:cardMockups,
    alt:"card mockups",
  },
  {
    url:cardMockups2,
    alt:"card mockups 2",
  },
  {
    url:cardMockups3,
    alt:"card mockups 3",
  },
  {
    url:estraLogo,
    alt:"estra logo",
  },
  {
    url:rafayCard,
    alt:"card design",
  },
  {
    url:rafayLogo,
    alt:"logo design",
  },
  {
    url:rafayLogo2,
    alt:"logo design"
  },
  {
    url: websitePortfolio,
    alt: 'website design'
  }
]