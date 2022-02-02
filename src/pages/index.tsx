import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Card, Text, Stack, Heading, Flex } from "@components/system";

import { BaseLayout } from "@components/templates/BaseLayout";

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
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts[0].image.sizes.medium);
  return (
    <BaseLayout>
      <Flex
        gap={[4, null, 6]}
        flexDirection="row"
        mt={[8, null, 10]}
        flexWrap="wrap"
      >
        {posts.map((p: Post) => (
          <Card
            key={p.id}
            boxShadow="m"
            bg="white"
            maxWidth="18rem"
            width="100%"
            borderRadius={8}
            overflow="hidden"
          >
            {p.image !== undefined && (
              <img alt="test" src={p.image.sizes.medium} />
            )}
            <Stack direction="column" gap={4} p={4}>
              <Heading as="h4" fontSize={3}>
                {p.title}
              </Heading>
              <Text>{p.body}</Text>
              <Flex justifyContent="space-around" mt="auto">
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
      image: json.acf.image || null,
    }))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
