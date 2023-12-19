<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import { writable } from "svelte/store";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  export let editingWallet = -1;
  let amount = 1000000000;
  let symbol = "";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Icon from "../avatars/index.svelte";
  export let tokenColors: string[];

  function updateToken(event) {
    symbol = event.detail;
    amount =
      $workspaces[$selectedWorkspace]?.wallets[editingWallet]?.tokens?.find(
        (token) => token.symbol === symbol?.value
      )?.amount ?? 1000000000;
  }

  function handleInputTouch(field) {
    formTouched[field] = true;
  }

  function assignToken() {
    console.log(symbol, amount);
    if (symbol && editingWallet !== -1) {
      const index = $workspaces[$selectedWorkspace].wallets[
        editingWallet
      ].tokens.findIndex((token) => token.symbol === symbol?.value);
      if (index !== -1) {
        $workspaces[$selectedWorkspace].wallets[editingWallet].tokens[
          index
        ].amount = amount;
        dispatch("closeModal");
      } else {
        $workspaces[$selectedWorkspace].wallets[editingWallet].tokens = [
          ...$workspaces[$selectedWorkspace].wallets[editingWallet].tokens,
          {
            symbol: symbol?.value,
            amount,
          },
        ];
        dispatch("closeModal");
      }
      symbol = "";
      amount = 1000000000;
    }
  }

  let valid = {
    token_symbol: false,
    token_amount: false,
  };

  let formTouched = {
    token_symbol: false,
    token_amount: false,
  };

  let formSubmitted = false;

  $: formTouched = {
    token_symbol: symbol?.length > 0 || formSubmitted,
    token_amount: amount > 0 || formSubmitted,
  };

  $: valid = {
    token_symbol: symbol?.length > 0,
    token_amount: amount > 0,
  };
</script>

<h1 class="modal--title">Assign a Token</h1>
<div class="modal--form">
  <div class="modal--form-title">Token</div>
  <Select
    items={$workspaces[$selectedWorkspace]?.tokens.map(
      ({ symbol }) => symbol
    ) ?? []}
    on:change={updateToken}
    placeholder="Select a token"
    class={!valid.token_symbol && formTouched.token_symbol
      ? "input--invalid"
      : ""}
    on:blur={() => handleInputTouch("token_symbol")}
  >
    <div slot="selection" class="select--option" let:selection>
      <Icon
        size={24}
        value={selection.label}
        color={tokenColors[selection.index]}
        border={true}
        radius={7}
      />
      <div class="select--text">{selection.label}</div>
    </div>
    <div slot="item" class="select--option" let:item>
      <Icon
        size={24}
        value={item.label}
        color={tokenColors[item.index]}
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
    on:blur={() => handleInputTouch("token_amount")}
  />
</div>
<div class="btns--modal">
  <button class="btn btn--lava" on:click={assignToken}>Assign</button>
</div>
