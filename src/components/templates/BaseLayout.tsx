import { Box, Contain, Flex } from "@components/system";
import { Header, Footer } from "@components/organisms";
export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />
      <Box as="main" flex={"1 0 auto"} display="block" bg="bg">
        <Contain>{children}</Contain>
      </Box>
      <Footer />
    </Flex>
  );
};
