import { Connection } from '@solana/web3.js';

const ENDPOINTS: any = {
  mainnet: 'https://api.mainnet-beta.solana.com',
  devnet: 'https://api.devnet.solana.com',
  localnet: 'http://localhost:8899', // Update with your localnet URL if necessary
};

export interface ConnectionStatus {
  status: "disconnected" | "connected" | "error";
  slot: number;
};

export async function getBlockHeight(network: string): Promise<ConnectionStatus> {
  let status = "disconnected";
  let slot = 0;
  try {
    const endpoint = ENDPOINTS[network] || network;
    const connection = new Connection(endpoint, 'confirmed');
    slot = await connection.getSlot();
    status = "connected";
  } catch(e) {
    status = "error";
  }
  return { 
    status, 
    slot 
  } as ConnectionStatus 
}