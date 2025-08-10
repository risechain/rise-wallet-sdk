import { Mode } from "porto";
import { type Config, defaultConfig } from "porto/Porto";
import { http } from "viem";
import { riseTestnet } from "./chain";

export const riseTestnetConfig: Config<[typeof riseTestnet]> = {
  ...defaultConfig,
  chains: [riseTestnet],
  mode: Mode.dialog({
    host: "https://rise-wallet-testnet.vercel.app/dialog",
  }),
  transports: {
    [riseTestnet.id]: http(),
  },
} as const;
