<script lang="ts">
  export let tokenColors: string[];
  export let assigningMint = -1;
  import { createEventDispatcher, onMount } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import Icon from "../avatars/index.svelte";
    import { fade } from "svelte/transition";
  let amount = 1000000000;
  export let selectedATA = -1;
  let accountAssigned = "";
  let name = "";
  let formSubmitted = false;
  let ataAlreadyExists = false;
  let initialiseATA = false;
  let mint = ""
  const dispatch = createEventDispatcher();

  let valid = {
    token_amount: false,
    name: false,
  };

  let formTouched = {
    token_amount: false,
    name: false,
  };

  function updateAccount(event) {
    accountAssigned = event.detail;
  }

  function createATA(event) {
    const accounts = $workspaces[$selectedWorkspace].accounts;
    const accountIndex = accounts.findIndex(
      (account) => account.name === accountAssigned
    );
    const ataExists = $workspaces[$selectedWorkspace].accounts?.some(
      (account, index) => index !== accountIndex && account.name === name
    );
    if (ataExists) {
        ataAlreadyExists = true;
        return;
    }
    $workspaces[$selectedWorkspace].accounts = [
        ...$workspaces[$selectedWorkspace].accounts,
        {
            amount: amount ? amount : 0,
            name: name,
            authority: accountAssigned.value,
            mint: $workspaces[$selectedWorkspace].accounts[assigningMint.index].symbol,
            kind: "ata",
        },
        ];
     dispatch("closeAtaModal");
  }

  function updateATA() {
    const accounts = $workspaces[$selectedWorkspace].accounts;
    const ataExists = $workspaces[$selectedWorkspace].accounts?.some(
      (account, index) => index !== selectedATA && account.name === name
    );
    if (ataExists) {
        ataAlreadyExists = true;
        return;
    }
    $workspaces[$selectedWorkspace].accounts[selectedATA] = {
      amount: amount ? amount : 0,
      name: name,
      authority: accountAssigned.value ? accountAssigned.value : accountAssigned,
      mint: mint,
      kind: "ata",
    };
    dispatch("closeAtaModal");
  }

  onMount(() => {
    if(selectedATA !== -1) {
        mint = $workspaces[$selectedWorkspace].accounts[selectedATA].mint;
        amount = $workspaces[$selectedWorkspace].accounts[selectedATA]?.amount;
        name = $workspaces[$selectedWorkspace].accounts[selectedATA].name;
        accountAssigned = $workspaces[$selectedWorkspace].accounts[selectedATA]?.authority;
    }
  })

  $: formTouched = {
    token_amount: amount >= 0 || formSubmitted,
    name: name.length > 0 || formSubmitted,
  };

  $: valid = {
    token_amount: amount >= 0 && amount <= 1000000000000000,
    name: name.length > 0 && name.length <= 32,
  };

  $:console.log($workspaces[$selectedWorkspace].accounts[selectedATA])
</script>

<h1 class="modal--title">{selectedATA === -1 ? 'Create ATA' : 'Edit ATA'}</h1>
<div class="modal--form">
  <div class="modal--form-title">Name</div>
  <input
  class="input--primary {!valid.name && formTouched.name
    ? 'input--invalid'
    : ''}"
  placeholder="My ATA"
  type="text"
  bind:value={name}
/>
  <div class="modal--form-title">Account</div>
  <Select
  items={$workspaces[$selectedWorkspace]?.accounts
    .map((account, index) => ({ ...account, originalIndex: index })) // add original index to each account
    .filter((account) => account.kind !== "mint" && account.kind !== "ata")
    .map(({ name, originalIndex }, index) => ({ index, value: name, label: name, originalIndex })) // map to get the index, value, label and original index
    ?? []}
    value={accountAssigned}
    on:change={updateAccount}
    placeholder="Select an account"
  >
    <div slot="selection" class="select--option" let:selection>
      <Icon
        size={24}
        value={selection.label}
        style={"character"}
        color={tokenColors[selection.originalIndex]}
        border={true}
        radius={7}
      />
      <div class="select--text">{selection.label}</div>
    </div>
    <div slot="item" class="select--option" let:item>
      <Icon
        size={24}
        value={item.label}
        color={tokenColors[item.originalIndex]}
        border={true}
        radius={7}
      />
      <div class="select--text">{item.label}</div>
    </div>
  </Select>
  <div class="modal--form-title">Amount</div>
  <input
    class="input--primary {!valid.token_amount && formTouched.token_amount
      ? 'input--invalid'
      : ''}"
    placeholder="100,000,000"
    type="number"
    bind:value={amount}
  />
</div>

    {#if amount === 0 || !amount}
    <div class="initialise" transition:fade>
      <label class="toggle--checkbox">
        <input
          type="checkbox"
          bind:checked={initialiseATA}
        />
        <div class="checkmark" />
      </label>
      Are you sure you want to initialise this ATA with zero tokens?
    </div>
    {/if}

    {#if ataAlreadyExists}
    <div class="already--exists">
        An account already exists with this name or ATA already exists for this mint and account.
    </div>
    {/if}
<!-- Form Submit -->
<div class="btns--modal">
  <button
    class="btn btn--lava {!valid.token_amount || accountAssigned.length === 0 || !valid.name || !amount && initialiseATA === false
      ? 'btn--disabled'
      : ''}"
    disabled={!valid.token_amount || accountAssigned.length === 0 || !valid.name || !amount && initialiseATA === false}
    on:click={selectedATA === - 1 ? createATA : updateATA}>{selectedATA === -1 ? 'Create' : 'Update'}</button
  >
</div>

<style lang="scss">
  .initialise {
    @apply relative flex items-center text-sm font-medium text-lava-mute gap-x-4 mt-3 flex-shrink-0;
  }
  /* Hide the default checkbox */
  .toggle--checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    box-shadow: rgb(254, 96, 84) 0px 0px 0px 2px;
    background-color: rgba(16, 16, 16, 0.5);
    height: 16px;
    width: 16px;
    flex-shrink: 0;
    margin-top: -1px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    transform-origin: 0px 10px;
    border-radius: 4px;
    padding: 0px;
    box-sizing: border-box;
  }

  .toggle--checkbox input:checked ~ .checkmark {
    box-shadow: rgb(254, 96, 84) 0px 0px 0px 2px;
    background-color: rgba(245, 96, 84, 0.3);
    height: 16px;
    width: 16px;
    flex-shrink: 0;
    margin-top: -1px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    transform-origin: 0px 10px;
    padding: 0px;
    box-sizing: border-box;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .toggle--checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 0.4em;
    top: 0.2em;
    width: 0.2em;
    height: 0.4em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
    transition: all 500ms ease-in-out;
  }
  </style>