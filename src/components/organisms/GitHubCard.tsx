import type { gitHubProfile } from "src/types";
import Image from "next/image";
import Link from "next/link";

import { Box, Card, Text, Stack } from "@components/system";
import { TextWithIcon, Icon } from "@components/atoms";

export type GitHubCardProps = {
  profile: gitHubProfile;
};

export const GitHubCard: React.FC<GitHubCardProps> = ({
  profile,
  ...props
}) => {
  console.log(profile);
  return (
    <Card
      bg="green100"
      boxShadow="l"
      padding={[3, null, 4]}
      borderRadius="6%"
      maxWidth="20rem"
      {...props}
    >
      <Stack gap={[3, null, 4]}>
        <Icon icon="Github" mb={[-3, null, -4]} />
        <Box
          borderRadius="99999px"
          overflow="hidden"
          width="100%"
          maxWidth="8rem"
          mx="auto"
        >
          <Image
            alt="test"
            src={profile.avatar_url}
            height={40}
            width={40}
            layout="responsive"
          />
        </Box>
        <Stack gap={1}>
          <Link href="https://github.com/Nokkvi96/" passHref>
            <a href="/#">
              <Text
                as="h4"
                fontFamily="Poppins, sans-serif"
                fontSize={[2, null, 3]}
                fontWeight="regular"
                textAlign="center"
              >
                @{profile.login}
              </Text>
            </a>
          </Link>
          <Text textAlign="center">{profile.name}</Text>
        </Stack>
        <Text lineHeight="1.5">{profile.bio}</Text>
        <Box as="span" mx="auto">
          <Stack direction="column" mx="auto" alignItems="center">
            <Link href="https://github.com/Nokkvi96?tab=repositories" passHref>
              <a href="/#">
                <TextWithIcon
                  fontSize={2}
                  fontWeight="bold"
                  gap={2}
                  icon="GithubBranch"
                  text={`: ${profile.public_repos}`}
                  color="primary800"
                />
              </a>
            </Link>
            <Text>Repositories</Text>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};
