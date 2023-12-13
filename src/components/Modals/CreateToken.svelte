<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name = "";
  let symbol = "";
  let supply;
  let decimal;
  export let wallets = [];
  let creator = "";

  function clearCreatorWallet(e) {
    creator = "";
  }
  function updateCreatorWallet(e) {
    creator = e.detail.value;
  }

  let valid = {
    name: false,
    symbol: false,
    decimal: false,
  };

  let formTouched = {
    name: false,
    symbol: false,
    decimal: false,
  };

  let formSubmitted = false;

  $: formTouched = {
    name: name.length > 0 || formSubmitted,
    symbol: symbol.length > 0 || formSubmitted,
    decimal: decimal > 0 || formSubmitted,
  };

  $: valid = {
    name: name.length > 0 && name.length <= 32,
    symbol: symbol.length > 0 && symbol.length <= 5,
    decimal: decimal >= 0 && decimal <= 18,
  };

  function handleInputTouch(field) {
    formTouched[field] = true;
  }

  const addToken = () => {
    if (valid.name && valid.symbol && valid.decimal) {
      $workspaces[$selectedWorkspace].tokens = [
        ...$workspaces[$selectedWorkspace].tokens,
        {
          name,
          symbol: symbol.toUpperCase(),
          supply,
          creator,
        },
      ];
      formSubmitted = true;
      dispatch("closeTokenModal");
    } else {
      formSubmitted = true;
    }
  };
</script>

<h1 class="modal--title">Create a new Token</h1>
<div class="modal--form">
  <div class="modal--form-item">
    <div class="modal--form-inline">
      <div class="modal--form-title">Token Name</div>
      <div class="modal--form--label-end">{name.length}/32</div>
    </div>
    <input
      class="input--primary {!valid.name && formTouched.name
        ? 'input--invalid'
        : ''}"
      placeholder="My Token"
      type="text"
      bind:value={name}
    />
  </div>
  <div class="modal--form-inline">
    <div class="modal--form-item">
      <div class="modal--form-title">Ticker Symbol</div>
      <input
        class="input--primary {!valid.symbol && formTouched.symbol
          ? 'input--invalid'
          : ''}"
        placeholder="TKN"
        type="text"
        bind:value={symbol}
      />
    </div>
    <div class="modal--form-item">
      <div class="modal--form-title">Decimals</div>
      <input
        class="input--primary {!valid.decimal && formTouched.decimal
          ? 'input--invalid'
          : ''}"
        type="number"
        placeholder="Number between 0-18"
        bind:value={decimal}
      />
    </div>
  </div>
  <div class="modal--form-title">Mint Authority</div>
  <div class="assign--tokens--wallet">
    <Select
      items={[...wallets, { label: "", value: "", color: "#8A54FE" }]}
      focused={true}
      placeholder="Select Wallet (Optional)"
      on:change={updateCreatorWallet}
      on:clear={clearCreatorWallet}
    >
      <div slot="selection" class="select--option" let:selection>
        <Icon
          size={24}
          value={selection.label}
          color={selection.color}
          border={true}
          radius={7}
        />
        <div class="select--text">{selection.label}</div>
      </div>

      <div slot="item" class="select--option" let:item>
        <Icon
          size={24}
          value={item.label}
          color={item.color}
          border={true}
          radius={7}
        />
        <div class="select--text">{item.label}</div>
      </div>
    </Select>
  </div>
  <div class="modal--form-title">Freeze Authority</div>
  <div class="assign--tokens--wallet">
    <Select
      items={[...wallets, { label: "", value: "", color: "#8A54FE" }]}
      focused={true}
      placeholder="Select Wallet (Optional)"
      on:change={updateCreatorWallet}
      on:clear={clearCreatorWallet}
    >
      <div slot="selection" class="select--option" let:selection>
        <Icon
          size={24}
          value={selection.label}
          color={selection.color}
          border={true}
          radius={7}
        />
        <div class="select--text">{selection.label}</div>
      </div>

      <div slot="item" class="select--option" let:item>
        <Icon
          size={24}
          value={item.label}
          color={item.color}
          border={true}
          radius={7}
        />
        <div class="select--text">{item.label}</div>
      </div>
    </Select>
  </div>
  <div class="btns--modal">
    <button class="btn btn--lava" on:click={() => addToken()}
      >Create Token</button
    >
  </div>
</div>
