import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let initialWorkspace = false;

// Check if there is data in localStorage
if(browser) {
  const persistedState = localStorage.getItem('workspace');
  initialWorkspace = persistedState ? JSON.parse(persistedState) : '';
}
// Create a store with initial values
export const workspace = writable(initialWorkspace || false);

export const selectedWallet = writable(null)

// Subscribe to changes in store's state
if(browser) {
workspace.subscribe(($workspace) => {
  localStorage.setItem('workspace', JSON.stringify($workspace));
});
}



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