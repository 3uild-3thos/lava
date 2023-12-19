<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  // Service that calls the chosen Solana node
  import {
    getBlockHeight,
    type ConnectionStatus,
  } from "../services/solanaService";
  import { fade, fly } from "svelte/transition";
  import Popover from "./Popover.svelte";

  let selectedNetwork = "localnet"; //  'mainnet';
  let connectionStatus = "disconnected";
  let slotHeight = 0;
  let interval: NodeJS.Timeout;
  let hovered = false;

  function connect() {
    updateSlotHeight();
    interval = setInterval(updateSlotHeight, 400);
  }

  function disconnect() {
    connectionStatus = "disconnected";
    clearInterval(interval);
    slotHeight = 0;
  }

  async function updateSlotHeight() {
    let status: ConnectionStatus;
    status = await getBlockHeight(selectedNetwork);
    slotHeight = status.slot;
    connectionStatus = status!.status;
  }

  onMount(() => {
    // Initialize with the first slot height
    updateSlotHeight();
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<main>
  <!-- <select bind:value={selectedNetwork}>
      <option value="mainnet">Mainnet Beta</option>
      <option value="devnet">Devnet</option>
      <option value="localnet">Localnet</option>
      <option value="custom">Custom Node</option>
    </select>
   -->
  <div class="connect">
    <div
      class="connect--button"
      on:click={connectionStatus === "connected" ? disconnect : connect}
      on:mouseover={() => (hovered = true)}
      on:mouseleave={() => (hovered = false)}
    >
      <div class="ping">
        <div class="ping--outer" />
        <div class="ping--inner" />
        <div class="ping--pulse" />
      </div>
    </div>

    {#if hovered}
      <Popover
        title={`Connected to ${selectedNetwork}`}
        xOffset={35}
        yOffset={-40}
      >
        <span class="connect--change">Click to change</span>
      </Popover>
    {/if}
  </div>
</main>
