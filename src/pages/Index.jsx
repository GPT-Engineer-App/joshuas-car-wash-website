import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="blue.500" color="white" p={6} borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl">
            Joshua's Car Wash
          </Heading>
          <Text fontSize="lg">Premium Car Wash Services</Text>
        </Box>

        {/* About Section */}
        <Box p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="md">At Joshua's Car Wash, we provide top-notch car wash services to keep your vehicle looking its best. Our team of professionals uses the latest techniques and eco-friendly products to ensure a thorough clean every time.</Text>
        </Box>

        {/* Services Section */}
        <Box p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Our Services
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="lg">
                Exterior Wash
              </Heading>
              <Text>Complete exterior wash with high-quality wax and polish.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Interior Cleaning
              </Heading>
              <Text>Thorough interior cleaning including vacuuming and upholstery cleaning.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Full Detailing
              </Heading>
              <Text>Comprehensive detailing service to make your car look brand new.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Gallery Section */}
        <Box p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Gallery
          </Heading>
          <HStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1636857686493-e4342ef6d62b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwMXxlbnwwfHx8fDE3MTY0OTAxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 1" boxSize="200px" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1694636503360-9709f78bdae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwMnxlbnwwfHx8fDE3MTY0OTAxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 2" boxSize="200px" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1528597469186-bddab681a37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwM3xlbnwwfHx8fDE3MTY0OTAxOTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 3" boxSize="200px" borderRadius="md" />
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="md">Have questions or want to book an appointment? Get in touch with us!</Text>
          <Button colorScheme="blue" mt={4}>
            Contact Us
          </Button>
        </Box>

        {/* Footer Section */}
        <Box bg="gray.800" color="white" p={6} borderRadius="md" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Joshua's Car Wash. All rights reserved.</Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;