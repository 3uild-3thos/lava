import { persisted } from "./persisted";
import {writable, type Writable} from 'svelte/store'

export interface Wallet {
  name: string;
  address: string;
  sol_balance: number;
  tokens: TokenBalance[];
  }

export interface TokenBalance {
    symbol: string,
    amount: number,
  }
export interface Workspace {
  name: string;
  programs: string[];
  wallets: Wallet[];
  tokens: Token[];
}

export interface Token {
  name: string;
  symbol: string;
  supply: number;
  creator: string;
}

export const workspaces = persisted("workspaces", [{
  name: "Empty Workspace",
  programs: [],
  wallets: [],
  tokens: [],
}] as Workspace[]);

export const selectedWorkspace = persisted("selectedWorkspace", 0);