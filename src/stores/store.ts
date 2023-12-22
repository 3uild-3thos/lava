import { persisted } from "./persisted";
import { writable, type Writable } from "svelte/store";
import type { Idl } from "@coral-xyz/anchor"

export interface Wallet {
  name: string;
  address: string;
  sol_balance: number;
  tokens: TokenBalance[];
}

export interface TokenBalance {
  symbol: string;
  amount: number;
}
export interface Workspace {
  name: string;
  programs: Array<Idl|String>;
  wallets: Wallet[];
  tokens: Token[];
  pdas: PDA[];
  tests: Test[];
  version: string;
}

export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  mintAuthority: string;
  freezeAuthority: string;
}

export interface Seed {
  value: any;
  seed: string;
}
export interface PDA {
  seeds: Seed[];
  name: string;
}

export interface Test {
  name: string;
  programId: string;
  instruction: string;
  accounts: any[];
  args: any[];
}

export const workspaces = persisted("workspaces", [
  {
    name: "Empty Workspace",
    programs: [],
    wallets: [],
    tokens: [],
    pdas: [],
    tests: [],
    version: "0.0.0-pre-alpha"
  },
] as Workspace[]);

export const selectedWorkspace = persisted("selectedWorkspace", 0);
