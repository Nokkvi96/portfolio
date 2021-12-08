import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { ThemeProvider } from "styled-components";
import { theme } from "@theme/theme";
import { GlobalStyle } from "@theme/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={`%s | Next React Typescript Boilerplate`} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
