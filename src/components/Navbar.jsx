import { Link } from "react-router-dom";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Link to="/">
            <Button colorScheme="teal" variant="ghost">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="teal" variant="ghost">
              About
            </Button>
          </Link>
          <Link to="/services">
            <Button colorScheme="teal" variant="ghost">
              Services
            </Button>
          </Link>
          <Link to="/gallery">
            <Button colorScheme="teal" variant="ghost">
              Gallery
            </Button>
          </Link>
          <Link to="/contact">
            <Button colorScheme="teal" variant="ghost">
              Contact
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
