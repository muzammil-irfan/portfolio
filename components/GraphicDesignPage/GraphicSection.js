import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CommonHeading from "../common/CommonHeading";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import Image from "next/image";
import webDesign from "../../public/images/graphicDesign/websiteDesign.png";
export default function GraphicSection(props) {
  return (
    <>
      <Flex direction="column" alignItems="center" py={8} px={2}>
        <CommonHeading>{props.title}</CommonHeading>
        <Text textAlign={"center"} width={{sm:"75%"}} mb={2} >
          {props.description}
        </Text>
        {/* <Stack width="100%" direction={'row'}> */}
          <Swiper
            // slidesPerView={3}
            spaceBetween={2}
            grabCursor={true}
            // loop={true}
            scrollbar={{
              hide: true,
            }}
            breakpoints={{
              300:{
                slidesPerView:0.6,
              },
              350:{
                slidesPerView:1 ,
              },
              470:{
                slidesPerView:1.2,
              },
              570:{
                slidesPerView:1.5,
              },
              770:{
                slidesPerView:2,
              },
              900:{
                slidesPerView:2.5,
              },
              1100:{
                slidesPerView:3,
              },
            }}
            // grid={{
            //   rows: 2,
            // }}
            speed={props.swiperSpeed}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar,Autoplay]}
            className="mySwiper"
          >
            {props.options.map((item) => {
              return (
                <>
                
                  <SwiperSlide key={item.title}>
                    <SwiperCard options={item} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
      </Flex>
    </>
  );
}
const SwiperCard = (props) => {
  return (
    <Flex alignItems="center" gap={3} p={4} >
      <Stack width="30%">
        <Image
          src={props.options.image.url}
          alt={props.options.image.alt}
          title={props.options.image.title}
        />
      </Stack>
      <Stack textAlign={"left"} width="70%" spacing={0}>
        <CommonHeading textAlign={"left"} fontSize="lg">
          {props.options.title}
        </CommonHeading>
        <Text fontSize="sm">{props.options.description}</Text>
      </Stack>
    </Flex>
  );
};
