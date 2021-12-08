import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import Head from "next/head";

import {
  Box,
  Card,
  Contain,
  Text,
  Stack,
  Heading,
  Flex,
} from "@components/system";

import { theme } from "@theme/theme";
import { BaseLayout } from "@components/BaseLayout";
import { SearchBox } from "@components/atoms";

type Post = {
  id: number;
  title: string;
  body: string;
  url: string;
  github: string;
};

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BaseLayout>
      <Head>
        <title>Giphy Leit</title>
        <meta name="description" content="Search for your favorite gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="row" mt={[8, null, 10]} flexWrap="wrap">
        {posts.map((p: Post) => (
          <Card
            key={p.id}
            boxShadow="xl"
            m={[4, null, 6]}
            maxWidth="18rem"
            width="100%"
          >
            <Stack direction="column" gap={[2, null, 4]}>
              <Heading as="h4">{p.title}</Heading>
              <Text>{p.body}</Text>
              <Flex justifyContent="space-around">
                <Link href={p.url} passHref>
                  <a href="/#">
                    <Text>Verkefni</Text>
                  </a>
                </Link>
                <Link href={p.github} passHref>
                  <a href="/#">
                    <Text fontWeight="semibold">Github</Text>
                  </a>
                </Link>
              </Flex>
            </Stack>
          </Card>
        ))}
      </Flex>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://nokkvi96.com/wp-json/wp/v2/portfolios");
  const data = await res.json();

  const posts = await Promise.all(
    data.map((json: any) => ({
      id: json.id,
      title: json.acf.title,
      body: json.acf.body,
      url: json.acf.website,
      github: json.acf.github,
    }))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
