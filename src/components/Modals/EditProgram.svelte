<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let editingProgram = -1;
  export let programAddress = "";
  export let programName = "";
  export let programExists = false;

  import { PublicKey } from "@solana/web3.js";
  const isValidAddress = (address: string) => {
    if (address.trim() === "") {
      return true;
    } else {
      try {
        new PublicKey(address);
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  let formTouched = { address: false, name: false };
  let valid = { address: false, name: false };

  $: valid = {
    name: programName?.length > 0 && programName?.length <= 32,
    address: programAddress?.length > 0,
  };

  $: formTouched = {
    address: programAddress?.length > 0,
    name: programName?.length > 0 || formTouched.name,
  };
</script>

<h1 class="modal--title">Edit Program</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Program Name</div>
  </div>
  <input
    class="input--primary {!valid.name ? 'input--invalid' : ''}"
    type="text"
    placeholder="Escrow Program"
    bind:value={programName}
  />
  <div class="modal--form-inline">
    <div class="modal--form-title">Program Address</div>
  </div>
  <input
    class="input--primary {programAddress.length > 0 &&
    !isValidAddress(programAddress)
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="Address"
    bind:value={programAddress}
  />
  {#if !programAddress}
    <div class="anchor--provider">
      Your program will be deployed using the Anchor Provider.
    </div>
  {/if}

  {#if programExists}
    <div class="already--exists">A program with this name already exists</div>
  {/if}
  <div class="btns--modal">
    <button
      class={`btn btn--lava${
        (programAddress.length > 0 && !isValidAddress(programAddress)) ||
        !valid.name
          ? " btn--disabled"
          : ""
      }`}
      on:click={() =>
        dispatch("updateProgram", {
          index: editingProgram,
          address: programAddress,
          name: programName,
        })}
      disabled={(programAddress.length > 0 &&
        !isValidAddress(programAddress)) ||
        !valid.name}>Update</button
    >
  </div>
</div>
