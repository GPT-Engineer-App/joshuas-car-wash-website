import React from "react";
import { Box, Heading, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <FaPhone />
          <Text>(123) 456-7890</Text>
        </HStack>
        <HStack>
          <FaEnvelope />
          <Text>info@joshuascarwash.com</Text>
        </HStack>
        <HStack>
          <FaMapMarkerAlt />
          <Text>123 Car Wash Lane, Clean City, CA 12345</Text>
        </HStack>
        <Text>If you have any questions or would like to book an appointment, please don't hesitate to contact us. We look forward to serving you!</Text>
      </VStack>
    </Box>
  );
}

export default Contact;
