import type { Chain } from "porto/Chains";
import { riseTestnet as riseTestnetChain } from "viem/chains";

export function define<const chain extends Chain>(chain: chain): chain {
  return chain;
}

export const riseTestnet = /*#__PURE__*/ define({
  ...riseTestnetChain,
  contracts: {
    ...riseTestnetChain.contracts,
    portoAccount: {
      address: "0x912a428b1a7e7cb7bb2709a2799a01c020c5acd9",
    },
  },
  rpcUrls: {
    default: {
      ...riseTestnetChain.rpcUrls.default,
      http: [
        "https://rise-testnet-porto.fly.dev",
        ...riseTestnetChain.rpcUrls.default.http,
      ],
    },
  },
});
