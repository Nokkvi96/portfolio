import type { NextPage } from "next";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { Card, Text, Stack, Heading, Flex, Grid } from "@components/system";

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
  return (
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
          {p?.image !== undefined && (
            <Image
              alt="test"
              src={p.image.sizes.medium_large}
              height={posts[0].image.sizes["medium_large-height"]}
              width={posts[0].image.sizes["medium_large-width"]}
            />
          )}
          <Stack direction="column" gap={4} p={4}>
            <Heading as="h4" fontSize={3}>
              {p.title}
            </Heading>
            <Text lineHeight="1.6" flex={"1 0 auto"} display="block">
              {parse(p.body)}
            </Text>
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
    </Grid>
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

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Home;
