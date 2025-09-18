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
      address: "0xDF3E102d92320d119FEA727d3eF30F3570Bb3379",
    },
  },
});
