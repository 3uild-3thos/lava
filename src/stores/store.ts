import { persisted } from "./persisted";

export const workspace = persisted("workspace", {
  programs: [],
  wallets: [],
  tokens: [],
});
