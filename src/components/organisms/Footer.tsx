import { Box, Contain, Flex } from "@components/system";

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="white">
      <Contain maxWidth={1440}>
        <Flex flexDirection="column" width="100%">
          <Box>Nökkvi Þórsson</Box>
        </Flex>
      </Contain>
    </Box>
  );
};
