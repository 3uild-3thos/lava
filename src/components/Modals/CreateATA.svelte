<script lang="ts">
  export let tokenColors: string[];
  export let assigningMint = -1;
  import { createEventDispatcher } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import Icon from "../avatars/index.svelte";
  let amount = 1000000000;
  let accountAssigned = "";
  let formSubmitted = false;
  let ataAlreadyExists = false;
  const dispatch = createEventDispatcher();

  let valid = {
    token_amount: false,
  };

  let formTouched = {
    token_amount: false,
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
      (account, index) => index !== accountIndex && account.name === accountAssigned.value + $workspaces[$selectedWorkspace].accounts[assigningMint.index].symbol
    );
    if (ataExists) {
        ataAlreadyExists = true;
        return;
    }
    $workspaces[$selectedWorkspace].accounts = [
        ...$workspaces[$selectedWorkspace].accounts,
        {
            amount: amount,
            name: accountAssigned.value + $workspaces[$selectedWorkspace].accounts[assigningMint.index].symbol,
            authority: accountAssigned.value,
            mint: $workspaces[$selectedWorkspace].accounts[assigningMint.index].symbol,
            kind: "ata",
        },
        ];
     dispatch("closeAtaModal");
  }

  $: formTouched = {
    token_amount: amount > 0 || formSubmitted,
  };

  $: valid = {
    token_amount: amount > 0 && amount <= 1000000000000000,
  };
</script>

<h1 class="modal--title">Create ATA</h1>
<div class="modal--form">
  <div class="modal--form-title">Account</div>
  <Select
  items={$workspaces[$selectedWorkspace]?.accounts
    .map((account, index) => ({ ...account, originalIndex: index })) // add original index to each account
    .filter((account) => account.kind !== "mint" && account.kind !== "ata")
    .map(({ name, originalIndex }, index) => ({ index, value: name, label: name, originalIndex })) // map to get the index, value, label and original index
    ?? []}
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

    {#if ataAlreadyExists}
    <div class="already--exists">
        ATA already exists, delete the existing ATA to create a new one.
    </div>
    {/if}
<!-- Form Submit -->
<div class="btns--modal">
  <button
    class="btn btn--lava {!valid.token_amount || !accountAssigned
      ? 'btn--disabled'
      : ''}"
    disabled={!valid.token_amount || !accountAssigned}
    on:click={createATA}>Assign</button
  >
</div>
