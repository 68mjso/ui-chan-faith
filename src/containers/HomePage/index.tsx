import { Flex, Image } from "@chakra-ui/react";
import shrine from "@/assets/ui-chan-shrine.png";

function HomePage() {
  return (
    <Flex>
      <Image src={shrine} />
    </Flex>
  );
}

export default HomePage;
