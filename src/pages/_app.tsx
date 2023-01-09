import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import GlobalStyles from "../styles/global";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <GlobalStyles />

      <NextNProgress
        color=" #FF0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  );
}

export default App;
