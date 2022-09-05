import { env, infura } from "@config/environment";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, createClient, configureChains } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [env.production ? chain.goerli : chain.goerli],
  [infuraProvider({ apiKey: infura.apiKey }), publicProvider()]
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
