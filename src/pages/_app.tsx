import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { ThemeProvider } from "styled-components";
import { theme } from "@theme/theme";
import { GlobalStyle } from "@theme/GlobalStyle";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={`%s | Next React Typescript Boilerplate`} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
