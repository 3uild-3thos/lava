import { persisted } from "./persisted";

export const workspace = persisted("workspace", {
  program: "pCrLE3Ygn9efmpn6HC6ZDd9PKJHZEuebVERnFQ2JjXB",
  wallets: [
    {
      name: "maker",
      address: "Hejznrp39zCfcmq4WpihfAeyhzhqeFtj4PURHFqMaHSS",
      tokens: [
        { symbol: "SOL", amount: 1000000000 },
        { symbol: "USDC", amount: 1000000000 },
        { symbol: "BONK", amount: 1000000000 },
      ],
    },
    {
      name: "taker",
      address: "Q3jFZ4DxU7qU8cdmHV4nEFSDAj9DYtAcoyFJe2mnbxTM",
      tokens: [
        {
          symbol: "SOL",
          amount: 1000000000,
        },
        { symbol: "USDC", supply: 1000000000 },
        { symbol: "BONK", supply: 1000000000 },
      ],
    },
  ],
  tokens: { USDC: { creator: "*" }, BONK: { creator: "*" } },
});
