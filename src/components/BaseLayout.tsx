import { Box, Contain, Flex } from "@components/system";

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Box as="main" flex={"1 0 auto"} display="block" bg="bg">
        <Contain>{children}</Contain>
      </Box>
    </Flex>
  );
};
