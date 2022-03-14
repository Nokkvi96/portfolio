import { ColorProps } from "styled-system";

import { Box, Contain } from "@components/system";

type HeroProps = ColorProps & {
  children: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({ backgroundColor, children }) => {
  return (
    <Box
      as="section"
      boxShadow="l"
      minHeight={["4", "5rem", "6rem"]}
      bg={backgroundColor}
      mt={[-8, null, -10]}
      pt={[8, null, 10]}
      pb={[8, null, 10]}
      mb={[8, null, 10]}
    >
      <Contain>{children}</Contain>
    </Box>
  );
};
