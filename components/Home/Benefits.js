import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Benefits() {
  return (
    <>
      <Flex flexDirection={"column"} justify={"center"}>
        <Flex justify={"center"} my={6}>
          <Heading as={"h1"}>Services that you were looking for</Heading>
        </Flex>
      </Flex>
    </>
  );
}
