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
      address: "0xc58C2A1Ce5cE4D7Fc7f997B983d9a859dbD2e507",
    },
  },
});
