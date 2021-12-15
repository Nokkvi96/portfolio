import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import Head from "next/head";

import { Card, Text, Stack, Heading, Flex } from "@components/system";

import { BaseLayout } from "@components/BaseLayout";

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
      <Flex
        gap={[4, null, 8]}
        flexDirection="row"
        mt={[8, null, 10]}
        flexWrap="wrap"
      >
        {posts.map((p: Post) => (
          <Card
            key={p.id}
            boxShadow="m"
            p={[4, null, 4]}
            maxWidth="18rem"
            width="100%"
          >
            <Stack direction="column" gap={[4, null, 4]} height="100%">
              <Heading as="h4" fontSize={3}>
                {p.title}
              </Heading>
              <Text>{p.body}</Text>
              <Flex justifyContent="space-around" justifySelf="end">
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

export const getStaticProps: GetStaticProps = async () => {
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
