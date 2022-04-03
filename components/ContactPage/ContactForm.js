import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [value, setvalue] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const handleSubmit = (event) => {
    setloading(true);
    event.preventDefault();
    axios
      .post("/api/contact", value)
      .then((res) => {
        toast({
          title: "Thank you for contacting us",
          status: "success",
          duration: 3000,
        });
        setloading(false);
      })
      .catch((error) => {
        console.log(error.message);
        toast({
          title: "We apolojize for failure, kindly try again",
          status: "error",
          duration: 3000,
        });
        setloading(false);
      });
  };
  //radio is giving values directly thats why making a different function
  const handleRadio = (values) => {
    setvalue({ ...value, services: values });
  };
  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const change = handleChange;
  return (
    <>
      <Stack
        // bg="white"
        w="100%"
        rounded='xl'
        spacing="6"
        onSubmit={handleSubmit}
        as="form"
        p={6}
        color='white'
        id='contactForm'
        bg='#0e205a'
        boxShadow={"dark-lg"}
      >
        {/* <Stack
              
            > */}
        {/* <Stack direction={{ base: "column", md: "row" }} spacing={8}> */}
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="e.g John"
                name="name"
                type="text"
                onChange={change}
                value={value.name}
              />
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="example@gmail.com"
                name="email"
                type="email"
                
                onChange={change}
                value={value.email}
              />
            </FormControl>
          </Stack>
        {/* </Stack> */}
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="services">Services</FormLabel>
            <RadioGroup value={value.services} onChange={handleRadio}>
              <Stack spacing={4}>
                {radioData.map((item, index) => {
                  return (
                    <Radio key={index} value={item}>
                      {item}
                    </Radio>
                  );
                })}
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Message</FormLabel>
            <Textarea
              placeholder="Message..."
              name="message"
              onChange={change}
              value={value.message}
            />
          </FormControl>
        </Stack>
        <Stack spacing="6" direction={"row"} justify="flex-end">
          <Button
            isLoading={loading}
            loadingText="Sending..."
            variant="primary"
            type="submit"
            bg="#0f82c4"
            px={8}
            id='sendMessage'
          >
            Send Message
          </Button>
        </Stack>
      </Stack>
      {/* </Stack> */}
    </>
  );
}
const radioData = [
  "Website Development",
  "Graphic Design",
  "Video Editing/Animation",
  "App Development",
];
