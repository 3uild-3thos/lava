<script lang="ts">
  import { PublicKey } from "@solana/web3.js";
  export let editingWallet: number;
  export let walletName: string;
  export let sol_balance: number;
  export let walletAddress: string;
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let walletAlreadyExists = false;

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

  $: if (editingWallet === -1) {
    walletName = "";
    walletAddress = "";
    sol_balance = 10;
  }

  let formTouched = { name: false, sol_balance: false };
  let valid = { name: false, sol_balance: false };

  $: valid = {
    name: walletName.length > 0 && walletName.length <= 32,
    sol_balance: sol_balance > 0 && sol_balance <= 1000000000,
  };

  function handleInputTouch(field: string) {
    formTouched[field] = true;
  }

  function onEditWallet() {
    if (walletName) {
      // Check if wallet name already exists
      const accounts = $workspaces[$selectedWorkspace].accounts;
      const accountIndex = accounts.findIndex(
        (account) => account.name === walletName
      );
      if (accountIndex !== -1) {
        walletAlreadyExists = true;
        return;
      }
      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.authority === $workspaces[$selectedWorkspace].accounts[editingWallet].name
      );
      ataAccounts.forEach((account) => {
        account.authority = walletName;
        account.name = account.authority + account.mint
      });

      const mintAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) =>
          account.kind === "mint" &&
          (account.freezeAuthority === $workspaces[$selectedWorkspace].accounts[editingWallet].name ||
            account.mintAuthority === $workspaces[$selectedWorkspace].accounts[editingWallet].name)
      );
      mintAccounts.forEach((account) => {
        if (account.freezeAuthority === $workspaces[$selectedWorkspace].accounts[editingWallet].name) {
          account.freezeAuthority = walletName;
        }
        if (account.mintAuthority === $workspaces[$selectedWorkspace].accounts[editingWallet].name) {
          account.mintAuthority = walletName;
        }
      });
      $workspaces[$selectedWorkspace].accounts[editingWallet] = {
        name: walletName,
        address: walletAddress,
        sol_balance,
        kind: "wallet",
      };

      walletName = "";
      walletAddress = "";
      sol_balance = 0;
      editingWallet = -1;
      dispatch("closeModal");
    }
  }

  function addWallet() {
    if (valid.name && valid.sol_balance) {
      // Check if wallet name already exists
      const accounts = $workspaces[$selectedWorkspace].accounts;
      const accountIndex = accounts.findIndex(
        (account) => account.name === walletName
      );
      if (accountIndex !== -1) {
        walletAlreadyExists = true;
        return;
      }

      $workspaces[$selectedWorkspace].accounts = [
        ...$workspaces[$selectedWorkspace].accounts,
        {
          name: walletName,
          address: walletAddress,
          sol_balance,
          kind: "wallet",
        },
      ];
      dispatch("closeModal");
    }
  }
</script>

<h1 class="modal--title">
  {editingWallet == -1 ? "Create a new Wallet" : "Edit Wallet"}
</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Wallet Name</div>
    <div
      class={`modal--form--label-end ${
        walletName.length > 32 ? " text-lava-error" : ""
      }`}
    >
      {walletName.length}/32
    </div>
  </div>
  <input
    class="input--primary {!valid.name && formTouched.name
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="Main Wallet"
    bind:value={walletName}
    on:blur={() => handleInputTouch("name")}
  />
</div>
<div class="modal--form-title">SOL Balance</div>
<input
  class="input--primary {!valid.sol_balance ? 'input--invalid' : ''}"
  type="number"
  placeholder="10"
  bind:value={sol_balance}
/>

{#if walletAlreadyExists}
  <div class="already--exists">An account with this name already exists</div>
{/if}

<div class="btns--modal">
  <button
    class={`btn btn--lava${
      isValidAddress(walletAddress) && valid.name && valid.sol_balance
        ? ""
        : " btn--disabled"
    }`}
    disabled={!isValidAddress(walletAddress) ||
      !valid.name ||
      !valid.sol_balance}
    on:click={() => {
      handleInputTouch("name");
      handleInputTouch("sol_balance");
      editingWallet == -1 ? addWallet() : onEditWallet();
    }}>{editingWallet == -1 ? "Create Wallet" : "Update Wallet"}</button
  >
</div>
