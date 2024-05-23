import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Services() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Our Services
      </Heading>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="lg">
            Exterior Wash
          </Heading>
          <Text>Complete exterior wash with high-quality wax and polish to give your car a shiny finish.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Interior Cleaning
          </Heading>
          <Text>Thorough interior cleaning including vacuuming, upholstery cleaning, and dashboard polishing.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Full Detailing
          </Heading>
          <Text>Comprehensive detailing service to make your car look brand new, inside and out.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Engine Cleaning
          </Heading>
          <Text>Professional engine cleaning to remove grime and ensure your engine runs smoothly.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Tire and Wheel Cleaning
          </Heading>
          <Text>Specialized cleaning for tires and wheels to remove brake dust and road grime.</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Services;
