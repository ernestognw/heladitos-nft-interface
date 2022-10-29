import "@styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "@config/wallet";
import Head from "next/head";

import type { AppProps } from "next/app";

const HeladitosApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Heladitos NFT</title>
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default HeladitosApp;
