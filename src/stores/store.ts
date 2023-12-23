import { persisted } from "./persisted";
import { writable, type Writable } from "svelte/store";
import type { Idl } from "@coral-xyz/anchor"

export interface Workspace {
  name: string;
  idls?: Idl[];
  accounts: Account[];
  // tests?: Test[];
  version: string;
}

export interface Account {
  name: string;
  address?: string;
}

export interface Wallet extends Account {
  kind: "wallet"
}

export interface Pda extends Account {
  kind: "pda";
  seeds: Seed[];
  owner: string;
}

interface Seed {
  kind: "u8" | "i8" | "u16" | "i16" | "u32" | "i32" | "u64" | "i64" | "usize" | "isize" | "string" | "Pubkey" | "bytes" | string;
  value: string;
}

export interface Program extends Account {
  kind: "program"
}

export interface Program extends Account {
  kind: "program"
}

export interface Mint extends Account {
  kind: "mint",
  symbol: string;
  decimals: number;
  mintAuthority?: string;
  freezeAuthority?: string;
}

export interface AssociatedTokenAccount extends Account {
  kind: "ata",
  mint: string;
  authority: string;
  amount: number;
}

export const workspaces = persisted("workspaces", [
  {
    name: "Empty Workspace",
    accounts: [],
    tests: [],
    version: "0.0.0",
  },
] as Workspace[]);

export const selectedWorkspace = persisted("selectedWorkspace", 0);
