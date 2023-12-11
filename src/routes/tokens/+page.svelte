<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import TokenIcon from "../../components/avatars/index.svelte";
  import { fade, fly, blur } from "svelte/transition";
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../../components/avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";

  let wallets =
    $workspaces[$selectedWorkspace]?.wallets.map((wallet) => {
      return { label: wallet.name, value: wallet.address, color: "#DC30C0" };
    }) ?? [];

  let color = ["#9945FF", "#19FB9B"];

  let tokenColors = [
    "#8A54FE",
    "#5498FE",
    "#FEBC2E",
    "#19FB9B",
    "#FE6054",
    "#DC30C0",
  ];

  function getTokenColor(stringParam) {
    let sum = 0;
    for (let i = 0; i < stringParam.length; i++) {
      sum += stringParam.charCodeAt(i);
    }
    let result = sum % 5;
    let finalColor = tokenColors[result];
    return finalColor;
  }

  $: colors = $workspaces[$selectedWorkspace]?.tokens.map((token) => {
    return getTokenColor(token.symbol);
  });

  let assignedList = [];

  let ready = false;
  onMount(() => {
    ready = true;
  });

  import Modal from "../../components/Modal.svelte";
  import Dropdown from "../../components/Dropdown.svelte";
  import Index from "../../components/avatars/index.svelte";
  let isCreateModalOpen = false;
  let isViewModalOpen = false;
  let isDropdownOpen = false;
  let selectedOption = "None";
  let hideTokens = false;
  let openedTokenIndex;
  let openedToken = $workspaces[$selectedWorkspace]?.tokens[0] ?? [];

  function openViewModal(index) {
    isViewModalOpen = true;
    openedToken = $workspaces[$selectedWorkspace].tokens[index];
    openedTokenIndex = index;
    assignedList =
      $workspaces[$selectedWorkspace].wallets.filter((wallet) =>
        wallet.tokens.some((token) => token.symbol === openedToken.symbol)
      ) ?? [];
  }

  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    let bounds = event.currentTarget.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }

  let isAssignedButtonDisabled = true;

  $: if (Object.keys(selectedWallet).length !== 0 && tokenAmount > 0) {
    isAssignedButtonDisabled = false;
  }

  let selectedWallet = {};
  let tokenAmount = 1000;

  function clearSelectedWallet(e) {
    selectedWallet = {};
    selectedWallet = selectedWallet;
    isAssignedButtonDisabled = true;
  }

  function updateSelectedWallet(e) {
    selectedWallet = e.detail;
    tokenAmount =
      $workspaces[$selectedWorkspace].wallets
        .find((wallet) => wallet.address === selectedWallet.value)
        ?.tokens?.find((token) => token.symbol === openedToken.symbol)
        ?.amount ?? 1000;
    isAssignedButtonDisabled = true;
  }

  function clearCreatorWallet(e) {
    creator = "";
  }
  function updateCreatorWallet(e) {
    creator = e.detail.value;
  }

  function addWallet() {
    const index = $workspaces[$selectedWorkspace].wallets.findIndex(
      (wallet) => wallet.address === selectedWallet.value
    );
    if (index !== -1) {
      if (
        $workspaces[$selectedWorkspace].wallets[index].tokens.some(
          (token) => token.symbol === openedToken.symbol
        )
      ) {
        $workspaces[$selectedWorkspace].wallets[index].tokens = $workspaces[
          $selectedWorkspace
        ].wallets[index].tokens.map((token) => {
          if (token.symbol === openedToken.symbol) {
            token.amount = tokenAmount;
          }
          return token;
        });
      } else {
        $workspaces[$selectedWorkspace].wallets[index].tokens = [
          ...$workspaces[$selectedWorkspace].wallets[index].tokens,
          {
            symbol: openedToken.symbol,
            amount: tokenAmount,
          },
        ];
      }
    }
    assignedList =
      $workspaces[$selectedWorkspace].wallets.filter((wallet) =>
        wallet.tokens.some((token) => token.symbol === openedToken.symbol)
      ) ?? [];
    selectedWallet = {};
    tokenAmount = 1000;
    isAssignedButtonDisabled = true;
  }

  function removeWallet(index) {
    assignedList.splice(index, 1);
    assignedList = assignedList;
  }

  let supply: string;
  let decimal: any;
  let symbol = "";
  let name = "";
  let creator = "";
  const addToken = () => {
    // Check the whole valid object is true
    if (valid.name && valid.symbol && valid.decimal) {
      $workspaces[$selectedWorkspace].tokens = [
        ...$workspaces[$selectedWorkspace].tokens,
        {
          symbol,
          supply,
          creator,
        },
      ];
      formSubmitted = true;
      isCreateModalOpen = false;
    } else {
      formSubmitted = true;
    }
  };

  //   let formTouched = false;

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

  const deleteToken = (index) => {
    $workspaces[$selectedWorkspace].tokens = $workspaces[
      $selectedWorkspace
    ].tokens.filter((token, i) => i !== index);
  };
</script>

{#if ready}
  <!-- Create Token Modal -->
  <Modal
    width={400}
    bind:isOpen={isCreateModalOpen}
    on:close={() => (isCreateModalOpen = false)}
  >
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
    </div></Modal
  >

  <!-- Assign Tokens Modal -->

  <Modal
    bind:isOpen={isViewModalOpen}
    on:close={() => (isViewModalOpen = false)}
    modalVariant={true}
    color={colors[openedTokenIndex]}
    width={400}
  >
    <h1 class="modal--title">
      Assign <span style={`color: ${colors[openedTokenIndex]}`}
        >{openedToken.symbol}</span
      > to Wallets
    </h1>
    <div class="assign--tokens--wrapper">
      <div class="assign--tokens">
        <div class="assign--tokens--wallet">
          <Select
            items={wallets}
            focused={true}
            placeholder="Select Wallet"
            on:change={updateSelectedWallet}
            on:clear={clearSelectedWallet}
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
        <div class="assign--tokens--amount">
          <input
            class="input--primary"
            bind:value={tokenAmount}
            style="height:45px"
            type="number"
            step="100"
            placeholder="Amount"
          />
        </div>
      </div>
      <button
        class="assign--button"
        disabled={isAssignedButtonDisabled}
        style={isAssignedButtonDisabled ? "opacity:0.2" : "opacity:1"}
        on:click={() => addWallet()}
      >
        <img src="./add.svg" class="assign--button--image" />
      </button>
    </div>

    {#if assignedList.length > 0}
      <div class="assigned--header" transition:fade={{ duration: 200 }}>
        Wallets Assigned
      </div>
      <div class="assigned--tokens">
        {#each assignedList as assigned, index}
          <div class="assigned--token" transition:fade={{ duration: 200 }}>
            <Icon
              size={24}
              value={assigned.name}
              color={color[0]}
              border={true}
              radius={7}
            />
            <div class="assigned--wallet--name">
              {assigned.name}
            </div>
            <div class="assigned--wallet--amount">
              {assigned?.tokens?.find(
                (token) => token.symbol === openedToken.symbol
              )?.amount ?? ""}
            </div>
            <button
              class="assign--button"
              style="padding:0.25rem"
              on:click={() => removeWallet(index)}
            >
              <img src="./remove.svg" style="width:14px;height:14px" />
            </button>
          </div>
        {/each}
      </div>
    {/if}
  </Modal>

  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--header">
        <h1
          class="common--title"
          style="margin-bottom:0px !important"
          in:fly|global={{ delay: 100, duration: 100, y: -10 }}
        >
          Tokens
        </h1>
        {#if !hideTokens}
          <button
            class="btn btn--primary btn--fit btn--end"
            on:click={() => (isCreateModalOpen = true)}
            ><img
              src="./add.svg"
              alt="Add Icon"
              style="margin-right:5px;width:16px;height:16px;"
            /> Add a Token</button
          >
        {/if}
      </div>
      {#if $workspaces[$selectedWorkspace]?.tokens.length > 0 && !hideTokens}
        <div class="token--list">
          {#each $workspaces[$selectedWorkspace]?.tokens ?? [] as token, index}
            <div class="relative">
              <div
                class="wallet--list--item"
                on:click={() => openViewModal(index)}
                on:mousemove={handleMousemove}
                in:fade|global={{
                  delay: index * 100,
                  duration: 100,
                }}
                style={`--color: #A0A0AB50; --color2: #A0A0AB50; --bgColor: #383A4110; --hoveredColor: ${colors[index]}; --opacity: 1; --left:${m.x}; --top:${m.y}`}
              >
                <div class="token--list--item--shimmer" />
                <div class="wallet--list--content">
                  <div class="token--header">
                    <TokenIcon
                      value={token.symbol}
                      size={32}
                      color={colors[index]}
                      border={true}
                      radius={7}
                    />

                    <div class="token--ticker">
                      {token.symbol}
                    </div>
                  </div>
                  <div class="token--name">{token.symbol}</div>
                  <div
                    class="token--supply"
                    style={`--supply: ${getTokenColor(token.symbol)}`}
                  >
                    {token.supply}
                  </div>
                  <div class="token--owner">
                    <img
                      src="./owner.svg"
                      class="token--owner-icon"
                      alt="Fingerprint Icon"
                    />{token.creator}
                  </div>
                </div>
              </div>
              <div
                class="trash-icon"
                on:click={() => {
                  deleteToken(index);
                }}
              />
            </div>
          {/each}
        </div>
      {:else}
        <div class="empty--state">
          <img
            src="/emptystates/notokens.svg"
            class="empty--state--image"
            alt="No Tokens in Wallet"
          />
          <div class="empty--state--text">You don't have any tokens, yet</div>
          <div class="empty--state--subtext">
            Create and assign to your wallets here
          </div>
          <button
            class="btn btn--primary btn--fit"
            on:click={() => (isCreateModalOpen = true)}
            ><img
              src="./add.svg"
              alt="Add Icon"
              style="margin-right:5px;width:16px;height:16px;"
            /> Create a Token</button
          >
        </div>
      {/if}
    </div>
  </div>
{/if}
