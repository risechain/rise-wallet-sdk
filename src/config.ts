import { defaultConfig, type Config } from "porto/Porto";
import { riseTestnet } from "./chain";
import { Mode } from "porto";
import { http } from "viem";

export const riseTestnetConfig = {
  ...defaultConfig,
  chains: [riseTestnet],
  mode: Mode.dialog({
    host: "https://rise-wallet-testnet.vercel.app/dialog",
  }),
  transports: {
    [riseTestnet.id]: http(),
  },
} satisfies Config;
