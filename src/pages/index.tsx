import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import {
  Box,
  Card,
  Text,
  Stack,
  Heading,
  Flex,
  Grid,
  Contain,
} from "@components/system";
import { TextWithIcon } from "@components/atoms";
import { GitHubCard } from "@components/organisms";
import { Hero } from "@components/templates";

type Post = {
  id: number;
  title: string;
  body: string;
  url: string;
  github: string;
  image?: any;
};

const Home: NextPage = ({
  posts,
  gitHubProfile,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero backgroundColor="primary700">
        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          gap={4}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            width={["100%", null, "50%"]}
          >
            <GitHubCard profile={gitHubProfile} />
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="flex-end"
            width={["100%", null, "50%"]}
          >
            <Heading color="white" fontSize={[5, 6, 7]}>
              Áhugasamur og sveigjanlegur nýútskrifaður tölvunarfræðingur sem er
              léttur í skapi
            </Heading>
          </Flex>
        </Flex>
      </Hero>
      <Contain>
        <Heading as="h2" textAlign="center" mb={[4, null, 5]} fontSize={7}>
          Verkefni
        </Heading>
        <Grid
          gridGap={[4, null, 6]}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          {posts.map((p: Post) => (
            <Card
              key={p.id}
              boxShadow="m"
              bg="white"
              width="100%"
              borderRadius={8}
              overflow="hidden"
            >
              <Stack height="100%" direction="column">
                {p?.image !== undefined && (
                  <Box display="block">
                    <Image
                      alt="test"
                      src={p.image.sizes.medium_large}
                      height={posts[0].image.sizes["medium_large-height"]}
                      width={posts[0].image.sizes["medium_large-width"]}
                      layout="responsive"
                    />
                  </Box>
                )}
                <Stack flex="1 0 auto" direction="column" gap={4} p={4}>
                  <Heading as="h4" fontSize={3}>
                    {p.title}
                  </Heading>
                  <Text lineHeight="1.6" display="block">
                    {parse(p.body)}
                  </Text>
                  <Flex justifyContent="space-around" mt="auto">
                    {p.url && (
                      <Link href={p.url} passHref>
                        <a href="/#">
                          <TextWithIcon
                            fontSize={2}
                            fontWeight="semibold"
                            gap={2}
                            icon="Web"
                            text="Verkefni"
                          />
                        </a>
                      </Link>
                    )}
                    {p.github && (
                      <Link href={p.github} passHref>
                        <a href="/#">
                          <TextWithIcon
                            fontSize={2}
                            fontWeight="semibold"
                            gap={2}
                            icon="Github"
                            text="GitHub"
                          />
                        </a>
                      </Link>
                    )}
                  </Flex>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Contain>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://nokkvi96.com/wp-json/wp/v2/portfolio");
  const data = await res.json();

  const posts = await Promise.all(
    data.map((json: any) => ({
      id: json.id,
      title: json.acf.title,
      body: json.acf.body,
      url: json.acf.website,
      github: json.acf.github,
      image: json.acf.image || null,
    }))
  );

  const gitResponse = await fetch("https://api.github.com/users/Nokkvi96");
  const gitData = await gitResponse.json();

  return {
    props: {
      posts,
      gitHubProfile: {
        id: gitData.id,
        login: gitData.login,
        avatar_url: gitData.avatar_url,
        html_url: gitData.html_url,
        name: gitData.name,
        location: gitData.location,
        bio: gitData.bio,
        public_repos: gitData.public_repos,
      },
    },
  };
};

export default Home;
