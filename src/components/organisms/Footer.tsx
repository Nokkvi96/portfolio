import { Box, Contain, Flex, Text } from "@components/system";

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="white">
      <Contain maxWidth={1440}>
        <Flex flexDirection="row" width="100%">
          <Text>Nökkvi Þórsson</Text>
          <Text>Nökkvi Þórsson</Text>
        </Flex>
      </Contain>
    </Box>
  );
};
