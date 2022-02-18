import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import WebDevelopment from '../../public/images/WebDevelopment.png';
import ProductPhotography from '../../public/images/productPhotography.png';
import VideoEditing from '../../public/images/videoEditing.png';
import GraphicDesign from '../../public/images/graphicDesign.png';
import React from "react";
import Card from "../common/Card";

export default function Service() {
  return (
    <>
      <Flex flexDirection={'column'} justify={'center'} my={4}>
          <Flex justify={'center'} my={6}>
        <Heading textAlign={'center'} fontSize={{base:'xl',sm:'2xl',md:'4xl'}} >Services that you were looking for</Heading>

          </Flex>
        <SimpleGrid columns={{base:1,md:2}} gap={6}>
          {servicesData.map((item, index) => {
            return (
              <>
              <Card
                key={index}
                label={item.label}
                src={item.image}
                href={item.href}
              />
              </>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
const servicesData = [
  {
    label: "Web Development",
    image: WebDevelopment,
    href: "/portfolio/webdevelopment",
  },
  {
    label: "Graphic Design",
    image: GraphicDesign,
    href: "/portfolio/graphicdesign",
  },
  {
    label: "Video Editing",
    image: VideoEditing,
    href: "/portfolio/videoediting",
  },
  {
    label: "Product Photography",
    image: ProductPhotography,
    href: "/portfolio/productphotography",
  },
];
