import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function About() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        About Us
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>Joshua's Car Wash was founded in 2020 with the mission to provide top-notch car wash services using eco-friendly products. Our team of professionals is dedicated to ensuring your vehicle looks its best.</Text>
        <Text>We offer a range of services from basic exterior washes to full detailing packages. Our state-of-the-art facility is equipped with the latest technology to provide a thorough and efficient clean.</Text>
        <Text>At Joshua's Car Wash, customer satisfaction is our top priority. We strive to provide a convenient and pleasant experience for all our customers.</Text>
      </VStack>
    </Box>
  );
}

export default About;
