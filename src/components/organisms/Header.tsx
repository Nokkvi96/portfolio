import { Box, Contain, Flex } from "@components/system";

export const Header: React.FC = () => {
  return (
    <Box
      as="header"
      boxShadow="l"
      height={[14, null, 16]}
      bg="white"
      zIndex={50}
    >
      <Contain maxWidth={1440}>
        <Flex flexDirection="row" width="100%">
          <Box>Nökkvi Þórsson</Box>
        </Flex>
      </Contain>
    </Box>
  );
};
