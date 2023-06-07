import { startRain } from "@/ultilities";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import shrine from "@/assets/ui-chan-shrine.png";

function ActionPage() {
  const onClick = () => {
    startRain();
  };
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Button
        colorScheme="green"
        position="absolute"
        left={10}
        top={10}
        onClick={onClick}
        zIndex={2}
      >
        Click
      </Button>
      <Box
        id="effectContainer"
        position="absolute"
        w="100vw"
        h="100vh"
        left={0}
        top={0}
        zIndex={1}
      ></Box>
      <Image src={shrine} width={{ base: "full", md: 500 }} h="auto" />
    </Flex>
  );
}

export default ActionPage;
