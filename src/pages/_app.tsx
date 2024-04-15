import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import SEO from "../../next-seo.config";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <DefaultSeo {...SEO} />

        <GlobalStyle />

        <NextNProgress
          color=" #FF0000"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
