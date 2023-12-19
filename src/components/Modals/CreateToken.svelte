<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let token;
  let name = token ? token.name : "";
  let symbol = token ? token.symbol : "";
  let decimal = token ? token.decimal : null;
  export let wallets = [];
  $: console.log(wallets);
  let creator = "";

  let freezeAuthority = token
    ? wallets.find((wallet) => wallet.name === token.freezeAuthority)
    : "";
  let mintAuthority = token
    ? wallets.find((wallet) => wallet.name === token.mintAuthority)
    : "";

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
      if (token) {
        // Edit mode
        const index = $workspaces[$selectedWorkspace].tokens.findIndex(
          (t) => t.name === token.name
        );
        if (index !== -1) {
          $workspaces[$selectedWorkspace].tokens[index] = {
            name,
            symbol: symbol.toUpperCase(),
            decimal: decimal,
            freezeAuthority: freezeAuthority?.name,
            mintAuthority: mintAuthority.name,
          };
        }
      } else {
        // Create mode
        $workspaces[$selectedWorkspace].tokens = [
          ...$workspaces[$selectedWorkspace].tokens,
          {
            name,
            symbol: symbol.toUpperCase(),
            decimal: decimal,
            freezeAuthority: freezeAuthority?.name,
            mintAuthority: mintAuthority?.name,
          },
        ];
      }
      formSubmitted = true;
      dispatch("closeTokenModal");
    } else {
      formSubmitted = true;
    }
  };
</script>

<h1 class="modal--title">{token ? "Edit Token" : "Create a New Mint"}</h1>
<div class="modal--form">
  <div class="modal--form-item">
    <div class="modal--form-inline">
      <div class="modal--form-title">Token Name</div>
      <div
        class={`modal--form--label-end ${
          name.length > 32 ? " text-lava-error" : ""
        }`}
      >
        {name.length}/32
      </div>
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
      id="test"
      items={(wallets = wallets.map((wallet, index) => ({
        ...wallet,
        value: index,
      })))}
      placeholder="Select Wallet (Optional)"
      searchable={false}
      bind:value={mintAuthority}
      on:clear={() => (mintAuthority = "")}
    >
      <div slot="selection" class="select--option" let:selection>
        <Icon
          size={24}
          value={selection.name}
          color={"#9352FF"}
          border={true}
          radius={7}
        />
        <div class="select--text">{selection.name}</div>
      </div>

      <div slot="item" class="select--option" let:item>
        <Icon
          size={24}
          value={item.name}
          color={"#9352FF"}
          border={true}
          radius={7}
        />
        <div class="select--text">{item.name}</div>
      </div>
    </Select>
  </div>
  <div class="modal--form-title">Freeze Authority</div>
  <div class="assign--tokens--wallet">
    <Select
      items={(wallets = wallets.map((wallet, index) => ({
        ...wallet,
        value: index,
      })))}
      placeholder="Select Wallet (Optional)"
      bind:value={freezeAuthority}
      on:clear={() => (freezeAuthority = "")}
    >
      <div slot="selection" class="select--option" let:selection>
        <Icon
          size={24}
          value={selection.name}
          color={"#9352FF"}
          border={true}
          radius={7}
        />
        <div class="select--text">{selection.name}</div>
      </div>

      <div slot="item" class="select--option" let:item>
        <Icon
          size={24}
          value={item.name}
          color={"#9352FF"}
          border={true}
          radius={7}
        />
        <div class="select--text">{item.name}</div>
      </div>
    </Select>
  </div>
  <div class="btns--modal">
    <button
      class={`btn btn--lava${
        !valid.name || !valid.symbol || !valid.decimal ? " btn--disabled" : ""
      }`}
      on:click={() => addToken()}
      disabled={!valid.name || !valid.symbol || !valid.decimal}
      >Create Token</button
    >
  </div>
</div>
