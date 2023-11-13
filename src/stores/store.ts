import { persisted } from './persisted';

export const workspace = persisted('workspaces', false);

program: "pCrLE3Ygn9efmpn6HC6ZDd9PKJHZEuebVERnFQ2JjXB"
wallets:
  maker:
    SOL: 1000000000
    USDC: 1000000000
    BONK: 1000000000
  taker:
    SOL: 1000000000
    USDC: 1000000000
    BONK: 1000000000
tokens:
  USDC:
    creator: "*"
  BONK:
    creator: "*"