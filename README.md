# rise-wallet-sdk

Typescript SDK to integrate RISE wallet into your dApp.

## Usage

1. Install porto, wagmi and the RISE wallet SDK:

```bash
npm install porto wagmi rise-wallet
```

2. Use the rise config when instantiating porto:

```typescript
import { riseTestnetConfig, riseTestnet } from 'rise-wallet';
import { createConfig, http } from 'wagmi';
import { porto } from 'porto/wagmi';

export const config = createConfig({
  chains: [riseTestnet],
	connectors: [porto(riseTestnetConfig)],
	transports: {
		[riseTestnet.id]: http()
	}
})
```

3. Use wagmi as usual

```typescript
import { useConnect, useConnectors } from 'wagmi'

function Connect() {
  const connect = useConnect()
  const connectors = useConnectors()

  return connectors?.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => connect.connect({ connector })}
    >
      Connect
    </button>
  ))
}
```

RISE wallet is powered by Porto under the hood. For more information on its usage, refer to the [Porto docs](https://porto.sh)
