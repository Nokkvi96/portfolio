import Link from "next/link";

import { Box, Contain, Flex, Text } from "@components/system";

export const Footer: React.FC = () => {
  return (
    <Box
      as="header"
      boxShadow="l"
      minHeight={["4", "5rem", "6rem"]}
      bg="white"
      zIndex={40}
    >
      <Contain maxWidth={1440} py={[14, 16, 18]} height="100%">
        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent="space-around"
          gap={[6, 8, 10]}
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Text fontSize={2} fontWeight="500">
            <Link href="https://www.linkedin.com/in/nokkvi96/" passHref>
              <a href="#">Linkedin</a>
            </Link>
          </Text>
          <Text fontSize={2} fontWeight="500">
            <Link href="https://github.com/Nokkvi96" passHref>
              <a href="#">Github</a>
            </Link>
          </Text>
          <Text fontSize={2} fontWeight="500">
            <Link href="mailto:nokkvi96@gmail.com" passHref>
              <a href="#">nokkvi96@gmail.com</a>
            </Link>
          </Text>
        </Flex>
      </Contain>
    </Box>
  );
};
