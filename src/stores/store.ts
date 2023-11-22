import { persisted } from "./persisted";
import {writable, type Writable} from 'svelte/store'

export const workspaces = persisted("workspaces", [{
  name: "Empty Workspace",
  programs: [],
  wallets: [],
  tokens: [],
}]);

export const selectedWorkspace = persisted("selectedWorkspace", 0);