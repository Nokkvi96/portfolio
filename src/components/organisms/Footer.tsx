import { Box, Contain, Flex } from "@components/system";

export const Footer: React.FC = () => {
  return (
    <Box boxShadow="l" bg="white" justifySelf="end">
      <Contain maxWidth={1440}>
        <Flex flexDirection="column" width="100%">
          <Box>Nökkvi Þórsson</Box>
        </Flex>
      </Contain>
    </Box>
  );
};
