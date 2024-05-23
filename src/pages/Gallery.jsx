import React from "react";
import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

function Gallery() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Gallery
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Image src="https://images.unsplash.com/photo-1636857686493-e4342ef6d62b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwMXxlbnwwfHx8fDE3MTY0OTAxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 1" borderRadius="md" />
        <Image src="https://images.unsplash.com/photo-1694636503360-9709f78bdae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwMnxlbnwwfHx8fDE3MTY0OTAxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 2" borderRadius="md" />
        <Image src="https://images.unsplash.com/photo-1528597469186-bddab681a37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwM3xlbnwwfHx8fDE3MTY0OTAxOTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash 3" borderRadius="md" />
      </SimpleGrid>
    </Box>
  );
}

export default Gallery;
