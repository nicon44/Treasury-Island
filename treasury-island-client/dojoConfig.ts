import manifest from "../contracts/manifests/dev/deployment/manifest.json";

import { createDojoConfig } from "@dojoengine/core";

const rpcUrl = import.meta.env.VITE_RPC_URL || "http://localhost:5050"
const toriiUrl = import.meta.env.VITE_TORII_URL || "http://localhost:8080"
const relayUrl = import.meta.env.VITE_RELAY_URL || ""
const masterAddress = import.meta.env.VITE_MASTER_ADDRESS || "0x644da5178f4c6a3ac86781a4f52edd92acd33eae2feda10fe5a993db8bdaadc"
const masterPrivateKey = import.meta.env.VITE_MASTER_PRIVATE_KEY || "0x550c2e7d842e726ed3f57b87d1f098b5bbb035d140d9ba00df236b23fba4654"

export const dojoConfig = createDojoConfig({
  manifest, rpcUrl, toriiUrl, relayUrl, masterAddress, masterPrivateKey
});