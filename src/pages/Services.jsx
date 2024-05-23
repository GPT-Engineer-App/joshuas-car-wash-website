import React from "react";
import { Box, Heading, Text, VStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaCar, FaCogs, FaBroom, FaWater, FaCircle } from "react-icons/fa";

function Services() {
  return (
    <Box p={5} bgImage="url('https://images.unsplash.com/photo-1602526219011-9d9b9f8e9b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTY0OTAxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPos="center" color="white">
      <Heading as="h1" mb={6}>
        Our Services
      </Heading>
      <Heading as="h1" mb={6} bgGradient="linear(to-r, teal.500, green.500)" bgClip="text">
        Our Services
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(0, 0, 0, 0.7)">
          <Icon as={FaCar} w={10} h={10} mb={4} />
          <Heading as="h2" size="lg">
            Exterior Wash
          </Heading>
          <Text mt={4}>Complete exterior wash with high-quality wax and polish to give your car a shiny finish. Price: £15</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(0, 0, 0, 0.7)">
          <Icon as={FaBroom} w={10} h={10} mb={4} />
          <Heading as="h2" size="lg">
            Interior Cleaning
          </Heading>
          <Text mt={4}>Thorough interior cleaning including vacuuming, upholstery cleaning, and dashboard polishing. Price: £20</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(0, 0, 0, 0.7)">
          <Icon as={FaCogs} w={10} h={10} mb={4} />
          <Heading as="h2" size="lg">
            Full Detailing
          </Heading>
          <Text mt={4}>Comprehensive detailing service to make your car look brand new, inside and out. Price: £50</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(0, 0, 0, 0.7)">
          <Icon as={FaWater} w={10} h={10} mb={4} />
          <Heading as="h2" size="lg">
            Engine Cleaning
          </Heading>
          <Text mt={4}>Professional engine cleaning to remove grime and ensure your engine runs smoothly. Price: £30</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(0, 0, 0, 0.7)">
          <Icon as={FaCircle} w={10} h={10} mb={4} />
          <Heading as="h2" size="lg">
            Tire and Wheel Cleaning
          </Heading>
          <Text mt={4}>Specialized cleaning for tires and wheels to remove brake dust and road grime. Price: £10</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Services;
