import { Box, Button, Flex } from "@chakra-ui/react";
import bg from "@/assets/home-bg.png";
function HomePage() {
  return (
    <Flex>
      <Box
        w="100vw"
        h="100vh"
        backgroundImage={bg}
        filter="blur(5px)"
        position="absolute"
        top="0"
        left="0"
      ></Box>
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Button colorScheme="teal">Start</Button>
      </Flex>
    </Flex>
  );
}

export default HomePage;
