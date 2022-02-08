import { Box, Contain, Flex } from "@components/system";

export const Header: React.FC = () => {
  return (
    <Box boxShadow="l" height="100%" maxHeight="4rem" bg="white">
      <Contain maxWidth={1440}>
        <Flex flexDirection="column" width="100%">
          <Box>Nökkvi Þórsson</Box>
        </Flex>
      </Contain>
    </Box>
  );
};
