import Link from "next/link";
import { theme } from "@theme/theme";
import { Box, Contain, Flex } from "@components/system";
import { TextWithIcon } from "@components/atoms";

export const Footer: React.FC = () => {
  const { colors } = theme;

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
          <Link href="https://www.linkedin.com/in/nokkvi96/" passHref>
            <a href="/#">
              <TextWithIcon
                fontSize={3}
                fontWeight="semibold"
                gap={3}
                color={colors.primary900}
                icon="Linkedin"
                text="LinkedIn"
              />
            </a>
          </Link>
          <Link href="https://github.com/Nokkvi96" passHref>
            <a href="#">
              <TextWithIcon
                fontSize={3}
                fontWeight="semibold"
                gap={3}
                color={colors.primary900}
                icon="Github"
                text="GitHub"
              />
            </a>
          </Link>
          <Link href="mailto:nokkvi96@gmail.com" passHref>
            <a href="#">
              <TextWithIcon
                fontSize={3}
                fontWeight="semibold"
                gap={2}
                color={colors.primary900}
                icon="Email"
                text="nokkvi96@gmail.com"
              />
            </a>
          </Link>
        </Flex>
      </Contain>
    </Box>
  );
};
