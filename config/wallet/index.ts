import { infura } from "@config/environment";
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { chain, createClient } from "wagmi";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [apiProvider.infura(infura.apiKey), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "Heladitos NFT",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { wagmiClient, chains };
