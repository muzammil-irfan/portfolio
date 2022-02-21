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
  toast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as React from "react";

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      services: "",
      message: "",
    },
    onSubmit: (e) => {
      console.log('submit')
      handleSubmit(e);
    },
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const toast = useToast();
  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => {
        toast({
          title: "Thank you for contacting us",
          status: "success",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "We apolojize for failure, kindly try again",
          status: "error",
          duration: 3000,
        });
      });
  };
  const values = formik.values;
  const change = formik.handleChange;
  return (
    <>
      <Flex direction="column" gap={4} m={10}>
        <Stack spacing="8" id="contact">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={"gray.50"}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack textAlign={"center"} pb={8}>
              <Heading fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
                Any query? Lets solve it now!
              </Heading>
            </Stack>
            {/* <form > */}
            <Stack
              spacing="6"
              name="contact"
              method="POST"
              onSubmit={formik.handleSubmit}
              as="form"
            >
              <Input type="hidden" name="contact" value="contact" />
              <Stack direction={{ base: "column", md: "row" }} spacing={8}>
                <Stack spacing="5" w={{ md: "50%" }}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      placeholder="e.g John"
                      name="name"
                      type="text"
                      onChange={change}
                      value={values.name}
                    />
                  </FormControl>
                </Stack>
                <Stack spacing="5" w={{ md: "50%" }}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      placeholder="example@gmail.com"
                      name="email"
                      type="email"
                      onChange={change}
                      value={values.email}
                    />
                  </FormControl>
                </Stack>
              </Stack>
              <Stack spacing="5" w={{ md: "50%" }}>
                <FormControl isRequired>
                  <FormLabel htmlFor="services">Services</FormLabel>
                  <RadioGroup
                    // value={values.services}
                    onChange={change}
                    name="services"
                  >
                    <Stack spacing={4}>
                      {radioData.map((item, index) => {
                        return (
                          <Radio key={index}
                          value={item} name="services">
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
                    value={values.message}
                  />
                </FormControl>
              </Stack>
              <Stack spacing="6" direction={"row"} justify="flex-end">
                <Button variant="primary" type="submit" bg="gray.200" px={8}>
                  Send
                </Button>
              </Stack>
            </Stack>
            {/* </form> */}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default ContactSection;
const radioData = [
  "Website Development",
  "Graphic Design",
  "Video Editing and Animation",
  "Product Photography",
];
