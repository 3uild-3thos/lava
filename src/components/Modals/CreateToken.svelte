<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let token;
  let name = token ? token.name : "";
  let symbol = token ? token.symbol : "";
  let decimals = token ? token.decimals : null;
  let tokenAlreadyExists = false;
  export let wallets = [];
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
    decimals: false,
  };

  let formTouched = {
    name: false,
    symbol: false,
    decimals: false,
  };

  let formSubmitted = false;

  $: formTouched = {
    name: name.length > 0 || formSubmitted,
    symbol: symbol.length > 0 || formSubmitted,
    decimals: decimals > 0 || formSubmitted,
  };

  $: valid = {
    name: name.length > 0 && name.length <= 32,
    symbol: symbol.length > 0 && symbol.length <= 5,
    decimals: decimals >= 0 && decimals <= 18,
  };

  function handleInputTouch(field) {
    formTouched[field] = true;
  }

  const addToken = () => {
    if (valid.name && valid.symbol) {
      if (token) {
        // Edit mode
        const index = $workspaces[$selectedWorkspace].accounts.findIndex(
          (account) => account.name === token.name && account.kind === "mint"
        );

        const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.mint === $workspaces[$selectedWorkspace].accounts[index].name
          );
          ataAccounts.forEach((account) => {;
            account.mint = name
        });

        if (index !== -1) {
          $workspaces[$selectedWorkspace].accounts[index] = {
            name,
            symbol: symbol.toUpperCase(),
            decimals: decimals ? decimals : 0,
            freezeAuthority: freezeAuthority?.name,
            mintAuthority: mintAuthority?.name,
            kind: "mint",
          };
        }
      } else {
        // Create mode
        const tokenNameExists = $workspaces[$selectedWorkspace].accounts.some(
          (account) => account.name === name
        );
        const tokenSymbolExists = $workspaces[$selectedWorkspace].accounts.some(
          (account) => account.symbol === symbol.toUpperCase() && account.kind === "mint" || account.name === symbol.toUpperCase() 
        );
        if (tokenNameExists || tokenSymbolExists) {
          tokenAlreadyExists = true;
          return;
        }
        $workspaces[$selectedWorkspace].accounts = [
          ...$workspaces[$selectedWorkspace].accounts,
          {
            name,
            symbol: symbol.toUpperCase(),
            decimals: decimals ? decimals : 0,
            freezeAuthority: freezeAuthority?.name,
            mintAuthority: mintAuthority?.name,
            kind: "mint",
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

<h1 class="modal--title">{token ? "Edit Mint" : "Create a New Mint"}</h1>
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
        class="input--primary {!valid.decimals && formTouched.decimals
          ? 'input--invalid'
          : ''}"
        type="number"
        placeholder="Number between 0-18"
        bind:value={decimals}
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

  {#if tokenAlreadyExists}
    <div class="already--exists">
      An account with this name or ticker already exists.
    </div>
  {/if}

  <div class="btns--modal">
    <button
      class={`btn btn--lava${
        !valid.name || !valid.symbol || !valid.decimals ? " btn--disabled" : ""
      }`}
      on:click={() => addToken()}
      disabled={!valid.name || !valid.symbol || !valid.decimals || !decimals}
      >{token ? "Update Mint" : "Create Mint"}</button
    >
  </div>
</div>
