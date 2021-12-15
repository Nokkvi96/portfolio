import type { AppProps } from "next/app";
import { DefaultSeo } from "@utils/DefaultSeo";

import { ThemeProvider } from "styled-components";
import { theme } from "@theme/theme";
import { GlobalStyle } from "@theme/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
