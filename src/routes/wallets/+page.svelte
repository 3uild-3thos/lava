<script>
  import { createEventDispatcher, onMount } from "svelte";
  import TokenIcon from "../../components/avatars/index.svelte";
  import { fade, fly, blur } from "svelte/transition";
  import { workspaces, selectedWorkspace } from "../../stores/store";

  let dummyWallets = [
    {
      name: "New Wallet",
      id: "generateMe",
      tokensOwned: [
        {
          name: "USDCoin",
          ticker: "USDC",
          amount: 500,
          color: "#2775CA",
          userAdded: false,
        },
        {
          name: "Solana",
          ticker: "SOL",
          amount: 10,
          color: "#9945FF",
          userAdded: false,
        },
      ],
      address: "Hejznrp39zCfcmq4WpihfAeyhzhqeFtj4PURHFqMaHSS",
      color: ["#FEBC2E", "#FEBC2E"],
    },
    {
      name: "Testing",
      id: "generateMe2",
      tokensOwned: [
        {
          name: "USDCoin",
          ticker: "USDC",
          amount: 500,
          color: "#2775CA",
          userAdded: false,
        },
        {
          name: "Solana",
          ticker: "SOL",
          amount: 10,
          color: "#9945FF",
          userAdded: false,
        },
        {
          name: "EpicMarz",
          ticker: "MARZ",
          amount: 500,
          color: "#8A54FE",
          userAdded: true,
        },
        {
          name: "Bob",
          ticker: "MARZ",
          amount: 750,
          color: "#FEBC2E",
          userAdded: true,
        },
        {
          name: "KenOath",
          ticker: "KEN",
          amount: 10000,
          color: "#30DCB2",
          userAdded: true,
        },
      ],
      address: "Q3jFZ4DxU7qU8cdmHV4nEFSDAj9DYtAcoyFJe2mnbxTM",
      color: ["#30DCB2", "#30DCB2"],
    },
  ];
  let colors = ["#FEBC2E", "#FEBC2E"];
  let color = ["#9945FF", "#19FB9B"];
  let ready = false;
  onMount(() => {
    ready = true;
  });

  import Modal from "../../components/Modal.svelte";

  let isCreateModalOpen = false;
  let isViewModalOpen = false;
  let hideWallets = false;
  let openedWallet = $workspaces[$selectedWorkspace]?.wallets[0];

  function openWalletModal(index) {
    isViewModalOpen = true;
    openedWallet = $workspaces[$selectedWorkspace].wallets[index];
  }

  import Popover from "../../components/Popover.svelte";
  import { PublicKey } from "@solana/web3.js";
  import Select from "svelte-select/no-styles/Select.svelte";

  // function selectWallet(wallet) {
  //   selectedWallet.set(wallet)
  // }

  let hoveredToken = 0;

  function setHoveredToken(index) {
    hoveredToken = index;
  }

  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    let bounds = event.currentTarget.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }

  let popOverOpened = false;

  let walletName = "";
  let hoveredLink = "";
  let walletAddress = "";
  /**
   * @type {any[]}
   */
  let walletTokens = [];
  let sol_balance = 10;

  const addWallet = () => {
    if (valid.name && valid.sol_balance) {
      $workspaces[$selectedWorkspace].wallets = [
        ...$workspaces[$selectedWorkspace].wallets,
        {
          name: walletName,
          address: walletAddress,
          tokens: [],
          sol_balance,
        },
      ];
      isCreateModalOpen = false;
    } else {
      formSubmitted = true;
    }
  };

  let symbol = "";
  let amount = 1000000000;

  let showMoreTokens = false;

  const deleteWallet = (index) => {
    $workspaces[$selectedWorkspace].wallets = $workspaces[
      $selectedWorkspace
    ].wallets.filter((wallet, i) => i !== index);
  };

  const isValidAddress = (address) => {
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

  let editingWallet = -1;
  const editWallet = (index) => {
    editingWallet = index;
    walletName = $workspaces[$selectedWorkspace].wallets[index].name;
    walletAddress = $workspaces[$selectedWorkspace].wallets[index].address;
    sol_balance = $workspaces[$selectedWorkspace].wallets[index].sol_balance;
    isCreateModalOpen = true;
  };

  const onEditWallet = () => {
    if (walletName) {
      $workspaces[$selectedWorkspace].wallets[editingWallet] = {
        name: walletName,
        address: walletAddress,
        tokens: $workspaces[$selectedWorkspace].wallets[editingWallet].tokens,
        sol_balance,
      };
      walletName = "";
      walletAddress = "";
      walletTokens = [];
      isCreateModalOpen = false;
      sol_balance = 0;
      editingWallet = -1;
    }
  };

  let isassignTokenModalOpen = false;

  const assignToken = () => {
    console.log(symbol, amount);
    if (symbol?.value && editingWallet !== -1) {
      const index = $workspaces[$selectedWorkspace].wallets[
        editingWallet
      ].tokens.findIndex((token) => token.symbol === symbol?.value);
      if (index !== -1) {
        $workspaces[$selectedWorkspace].wallets[editingWallet].tokens[
          index
        ].amount = amount;
      } else {
        $workspaces[$selectedWorkspace].wallets[editingWallet].tokens = [
          ...$workspaces[$selectedWorkspace].wallets[editingWallet].tokens,
          {
            symbol: symbol?.value,
            amount,
          },
        ];
      }
      symbol = "";
      amount = 1000000000;
      isassignTokenModalOpen = false;
      openedWallet = $workspaces[$selectedWorkspace].wallets[editingWallet];
    }
  };

  const updateToken = (e) => {
    symbol = e.detail;
    amount =
      $workspaces[$selectedWorkspace]?.wallets[editingWallet]?.tokens?.find(
        (token) => token.symbol === symbol?.value
      )?.amount ?? 1000000000;
    isViewModalOpen = false;
  };

  let valid = {
    name: false,
    sol_balance: false,
    token_symbol: false,
    token_amount: false,
  };

  let formTouched = {
    name: false,
    sol_balance: false,
    token_symbol: false,
    token_amount: false,
  };

  let formSubmitted = false;

  $: formTouched = {
    token_symbol: symbol?.valueOf.length > 0 || formSubmitted,
    token_amount: amount > 0 || formSubmitted,
    name: walletName.length > 0 || formSubmitted,
    sol_balance: sol_balance > 0 || formSubmitted,
  };

  $: valid = {
    name: walletName.length > 0 && walletName.length <= 32,
    sol_balance: sol_balance > 0,
    token_symbol: symbol?.value?.length > 0,
    token_amount: amount > 0,
  };
</script>

{#if ready}
  <!-- Create Wallet Modal -->

  <Modal
    bind:isOpen={isCreateModalOpen}
    on:close={() => (isCreateModalOpen = false)}
  >
    <h1 class="modal--title">
      {editingWallet == -1 ? "Create a new Wallet" : "Edit Wallet"}
    </h1>
    <div class="modal--form">
      <div class="modal--form-inline">
        <div class="modal--form-title">Wallet Name</div>
        <div class="modal--form--label-end">{walletName.length}/32</div>
      </div>
      <input
        class="input--primary {!valid.name && formTouched.name
          ? 'input--invalid'
          : ''}"
        type="text"
        placeholder="Main Wallet"
        bind:value={walletName}
      />
    </div>
    <div class="modal--form-title">SOL Balance</div>
    <input
      class="input--primary {!valid.sol_balance && formTouched.sol_balance
        ? 'input--invalid'
        : ''}"
      type="number"
      placeholder="10"
      bind:value={sol_balance}
    />

    <div class="btns--modal">
      <button
        class={`btn btn--lava${
          isValidAddress(walletAddress) ? "" : " btn--disabled"
        }`}
        disabled={!isValidAddress(walletAddress)}
        on:click={() => {
          editingWallet == -1 ? addWallet() : onEditWallet();
        }}>{editingWallet == -1 ? "Create Wallet" : "Update Wallet"}</button
      >
    </div>
  </Modal>

  <!-- Open Wallet Modal  -->

  <Modal
    bind:isOpen={isViewModalOpen}
    on:close={() => (isViewModalOpen = false)}
    width={400}
    modalVariant={true}
    color={colors[0]}
  >
    <div class="wallet--info">
      <TokenIcon
        value={openedWallet.name}
        size={32}
        color={colors[0]}
        border={true}
        radius={7}
      />
      <div class="wallet--name">{openedWallet.name}</div>
    </div>
    {#if openedWallet.tokens && openedWallet.tokens.length > 0}
      <div class="wallet--tokens">Tokens Owned</div>
      <div class="wallet--modal--list">
        {#each openedWallet.tokens as ownedToken, index}
          <div class="wallet--modal--item">
            <div class="wallet--modal--item--header">
              <TokenIcon
                value={ownedToken.symbol}
                style="shape"
                size={26}
                color={colors[0]}
                border={true}
                radius={7}
              />
              <div class="wallet--modal--name">{ownedToken.symbol}</div>
            </div>
            <div class="wallet--modal--item--amount">
              <span>Owned:</span>
              <div class="token--supply" style={`color: ${colors[0]};`}>
                {ownedToken.amount}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty--state--modal">
        <img
          src="/emptystates/connect.svg"
          class="empty--state--image--modal"
          alt="No Tokens in Wallet"
        />
        <div class="empty--state--text">
          This wallet doesn't have any tokens
        </div>
        <div class="empty--state--subtext">
          You can create them on the tokens page.
        </div>
      </div>
    {/if}
  </Modal>

  <!-- Add token modal -->
  <Modal
    bind:isOpen={isassignTokenModalOpen}
    on:close={() => (isassignTokenModalOpen = false)}
  >
    <h1 class="modal--title">Assign a Token</h1>
    <div class="modal--form">
      <div class="modal--form-title">Token</div>
      <Select
        on:change={updateToken}
        placeholder="Select a token"
        items={$workspaces[$selectedWorkspace]?.tokens.map(
          ({ symbol }) => symbol
        ) ?? []}
        class={!valid.token_symbol && formTouched.token_symbol
          ? "input--invalid"
          : ""}
      />
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
    <div class="btns--modal">
      <button
        class="btn btn--lava"
        on:click={() => {
          assignToken();
        }}>Assign</button
      >
    </div>
  </Modal>

  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--header">
        <h1
          class="common--title"
          style="margin-bottom:0"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          Wallets
        </h1>
        {#if dummyWallets && !hideWallets}
          <button
            class="btn btn--primary btn--fit btn--end"
            on:click={() => (isCreateModalOpen = true)}
            ><img
              src="./add.svg"
              alt="Add Icon"
              style="margin-right:5px;width:16px;height:16px;"
            /> Add a Wallet</button
          >
        {/if}
      </div>
      {#if $workspaces[$selectedWorkspace]?.wallets.length > 0 && !hideWallets}
        <div class="wallet--list">
          {#each $workspaces[$selectedWorkspace]?.wallets ?? [] as wallet, index}
            <div class="relative">
              <div
                class="wallet--list--item"
                on:click={() => openWalletModal(index)}
                on:mousemove={handleMousemove}
                in:fade|global={{ delay: index * 100, duration: 100 }}
                style={`--color: ${color[0]}; --color2: ${color[1]}; --bgColor: ${color[0]}10; --opacity: 0.6; --left:${m.x}; --top:${m.y}`}
              >
                <div class="token--list--item--shimmer" />
                <div class="wallet--list--content">
                  <div class="wallet--info">
                    <img
                      src={`/SOL.svg`}
                      alt={`Sol Icon`}
                      style="width:32px;height:32px"
                    />
                    <div class="wallet--name">{wallet.name}</div>
                  </div>
                  <div class="wallet--address">
                    {`${wallet.sol_balance} SOL`}
                  </div>
                  <div class="wallet--address">
                    {wallet.address}
                  </div>

                  <div class="wallet--footer">
                    <span>TOKENS</span>
                    <button
                      class="tokens-button"
                      type="button"
                      on:mouseover={() => (hoveredLink = "tokens")}
                      on:mouseleave={() => (hoveredLink = "")}
                      on:click={() => {
                        editingWallet = index;
                        isassignTokenModalOpen = true;
                      }}
                      >+

                      {#if hoveredLink === "tokens"}
                        <Popover
                          blur={25}
                          yOffset={-50}
                          title="Assign a Token"
                        />
                      {/if}</button
                    >
                    {#if wallet?.tokens?.length > 0}
                      <div class="wallet--tokens--list">
                        {#each wallet.tokens as ownedToken, index}
                          {#if index < 4}
                            <div
                              class="wallet--token"
                              on:mouseover={() => (
                                setHoveredToken(index), (popOverOpened = true)
                              )}
                              on:mouseleave={() => (
                                setHoveredToken(null), (popOverOpened = false)
                              )}
                            >
                              {#if hoveredToken === index && popOverOpened}
                                <Popover
                                  xOffset={25 * index}
                                  yOffset={-65}
                                  title={ownedToken.symbol}
                                >
                                  <!--color: ${ownedToken.color}; -->
                                  <span style={`height:26px;`}
                                    >{ownedToken.amount} owned</span
                                  >
                                </Popover>
                              {/if}
                              <!--{#if !ownedToken.userAdded}
                            <img src={`${ownedToken.ticker}.svg`} alt={ownedToken.name} style="width:24px;height:24px;display:flex;align-self:center">
                            {:else}-->
                              <TokenIcon
                                value={ownedToken.name}
                                style="shape"
                                size={26}
                                color={ownedToken.color}
                                border={true}
                                radius={7}
                              />
                              <!--{/if}-->
                            </div>
                          {/if}
                        {/each}
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
              <div
                class="trash-icon"
                on:click={() => {
                  deleteWallet(index);
                }}
              />
              <div
                class="edit-icon"
                on:click={() => {
                  editWallet(index);
                }}
              />
            </div>
          {/each}
        </div>
      {:else}
        <div class="empty--state">
          <img
            src="/emptystates/nowallets.svg"
            class="empty--state--image"
            alt="No Tokens in Wallet"
          />
          <div class="empty--state--text">You don't have any wallets</div>
          <div class="empty--state--subtext">Add a wallet to start testing</div>
          <button
            class="btn btn--primary btn--fit"
            on:click={() => (isCreateModalOpen = true)}
            ><img
              src="./add.svg"
              alt="Add Icon"
              style="margin-right:5px;width:16px;height:16px;"
            />Add a Wallet</button
          >
        </div>
      {/if}
    </div>
  </div>
{/if}
