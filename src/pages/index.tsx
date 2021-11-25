import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import { useDebouncedValue } from "rooks";

import { Box, Contain, Text, Stack, Heading, Flex } from "@components/system";

import { theme } from "@theme/theme";
import { BaseLayout } from "@components/BaseLayout";
import { SearchBox } from "@components/atoms";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const [debouncedQuery, immediatelyUpdateDebouncedValue] = useDebouncedValue(
    query,
    500
  );

  // const fetchGifs = async () =>
  //   await (
  //     await fetch(
  //       `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${debouncedQuery}`
  //     )
  //   ).json();

  const { data, status } = useQuery(["todos", debouncedQuery], async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${debouncedQuery}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  // useEffect(() => {
  //   console.log(debouncedQuery);
  //   console.log(data);
  //   console.log(status);
  // }, [debouncedQuery, status, data]);

  return (
    <BaseLayout>
      <Head>
        <title>Giphy Leit</title>
        <meta name="description" content="Search for your favorite gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="column" gap={[4, null, 6]} mt={[8, null, 10]}>
        <Heading as="h1" fontSize={[4, 6]} color="primary300">
          Finndu uppáhalds gifið þitt!
        </Heading>
        <Box bg="grey400" mt={4} p={2} borderRadius={10}>
          <SearchBox
            placeholder="Leitaðu að gifi"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></SearchBox>
        </Box>
        <Box mb={[8, null, 10]}>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {data?.data.map((d: any) => (
              <Box maxWidth={["100%", "50%", "50%", "33%"]} alignSelf="center">
                <Image
                  key={d.id}
                  src={d.images?.downsized?.url}
                  height={d.images.downsized.height}
                  width={d.images.downsized.width}
                  objectFit="cover"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Stack>
    </BaseLayout>
  );
};

export default Home;
