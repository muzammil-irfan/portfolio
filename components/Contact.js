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
import * as React from "react";
// const handleSubmit = ()=>{
//     return(

//         )
//     }
const ContactSection = () => {
    return(
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
          <Stack
            spacing="6"
            name="contact"
            method="POST"
            data-netlify={true}
          >
            <Input type="hidden" name="contact" value="contact" />
            <Stack direction={{ base: "column", md: "row" }} spacing={8}>
              <Stack spacing="5" w={{ md: "50%" }}>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="e.g John"
                    name="name"
                    type="text"
                  />
                </FormControl>
              </Stack>
              <Stack spacing="5" w={{ md: "50%" }}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="example@gmail.com"
                    name="email"
                    type="email"
                  />
                </FormControl>
              </Stack>
            </Stack>
            <Stack spacing="5" w={{ md: "50%" }}>
              <FormControl>
                <FormLabel htmlFor="services">Services</FormLabel>
                <RadioGroup name="services">
                  <Stack spacing={4}>
                    {radioData.map((item, index) => {
                      return (
                        <Radio key={index} value={item} name="services">
                          {item}
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl>
                <FormLabel htmlFor="email">Message</FormLabel>
                <Textarea placeholder="Message..." name="message" />
              </FormControl>
            </Stack>
            <Stack spacing="6" direction={"row"} justify="flex-end">
              <Button variant="primary" type="submit" bg="gray.200" px={8}>
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </>
)};

export default ContactSection;
const radioData = [
  "Website Development",
  "Graphic Design",
  "Video Editing and Animation",
  "Product Photography",
];
