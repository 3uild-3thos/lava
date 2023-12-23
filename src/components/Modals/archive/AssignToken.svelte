<script lang="ts">
  export let tokenColors: string[];
  export let editingWallet = -1;
  import { createEventDispatcher } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../../stores/store";
  import Icon from "../../avatars/index.svelte";
  let amount = 1000000000;
  let symbol = "";
  let formSubmitted = false;
  const dispatch = createEventDispatcher();

  let valid = {
    token_amount: false,
  };

  let formTouched = {
    token_amount: false,
  };

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
<!-- Form Submit -->
<div class="btns--modal">
  <button
    class="btn btn--lava {!valid.token_amount || !symbol
      ? 'btn--disabled'
      : ''}"
    disabled={!valid.token_amount || !symbol}
    on:click={assignToken}>Assign</button
  >
</div>
