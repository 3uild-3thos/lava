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
  let ready = false;
  onMount(() => {
    ready = true;
    if ($workspaces === undefined) {
      $workspaces = [
        {
          name: "Empty Workspace",
          programs: [],
          wallets: [],
          tokens: [],
        },
      ];
    }
    if ($selectedWorkspace === undefined) {
      $selectedWorkspace = 0;
    }
  });

  import Modal from "../../components/Modal.svelte";

  let isCreateModalOpen = false;
  let isViewModalOpen = false;
  let hideWallets = false;
  let openedWallet = dummyWallets[0];

  function openWalletModal(index) {
    isViewModalOpen = true;
    openedWallet = dummyWallets[index];
  }

  import Popover from "../../components/Popover.svelte";

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
  let walletAddress = "";
  /**
   * @type {any[]}
   */
  let walletTokens = [];
  let sol_balance = 0;

  const addWallet = () => {
    if (walletName) {
      $workspaces[$selectedWorkspace].wallets = [
        ...$workspaces[$selectedWorkspace].wallets,
        {
          name: walletName,
          address: walletAddress,
          tokens: [],
          sol_balance,
        },
      ];
      walletName = "";
      walletAddress = "";
      walletTokens = [];
      isCreateModalOpen = false;
      sol_balance = 0;
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
</script>

{#if ready}
  <!-- Create Wallet Modal -->

  <Modal
    bind:isOpen={isCreateModalOpen}
    on:close={() => (isCreateModalOpen = false)}
  >
    <h1 class="modal--title">Create a new Wallet</h1>
    <div class="modal--form">
      <div class="modal--form-title">Wallet Name</div>
      <input
        class="input--primary"
        placeholder="Main Wallet"
        bind:value={walletName}
      />
      <input
        class="input--primary"
        placeholder="Assing an Address"
        bind:value={walletAddress}
      />
    </div>
    <div class="modal--form">
        <div class="modal--form-title">SOL amount</div>
          <input
            class="input--primary"
            placeholder="Assing an Address"
            bind:value={sol_balance}
          />
    </div>

    <div class="btns--modal">
      <button
        class="btn btn--lava"
        on:click={() => {
          addWallet();
        }}>Create</button
      >
    </div>
  </Modal>

  <!-- Open Wallet Modal  -->

  <Modal
    bind:isOpen={isViewModalOpen}
    on:close={() => (isViewModalOpen = false)}
    width={400}
    modalVariant={true}
    color={openedWallet.color}
  >
    <div class="wallet--info">
      <TokenIcon
        value={openedWallet.name}
        size={32}
        color={openedWallet.color}
        border={true}
        radius={7}
      />
      <div class="wallet--name">{openedWallet.name}</div>
    </div>
    {#if openedWallet.tokensOwned && openedWallet.tokensOwned.length > 0}
      <div class="wallet--tokens">Tokens Owned</div>
      <div class="wallet--modal--list">
        {#each openedWallet.tokensOwned as ownedToken, index}
          <div class="wallet--modal--item">
            <div class="wallet--modal--item--header">
              <TokenIcon
                value={ownedToken.name}
                style="shape"
                size={26}
                color={ownedToken.color}
                border={true}
                radius={7}
              />
              <div class="wallet--modal--name">{ownedToken.name}</div>
            </div>
            <div class="wallet--modal--item--amount">
              <span>Owned:</span>
              <div class="token--supply" style={`color: ${ownedToken.color};`}>
                {ownedToken.amount.toLocaleString()}
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
      {#if dummyWallets && !hideWallets}
        <div class="wallet--list">
          {#each $workspaces[$selectedWorkspace]?.wallets ?? [] as wallet, index}
            <div class="relative">
              <div
                class="wallet--list--item"
                on:click={() => openWalletModal(index)}
                on:mousemove={handleMousemove}
                in:fade|global={{ delay: index * 100, duration: 100 }}
                style={`--color: ${colors[0]}; --color2: ${colors[1]};  --bgColor: ${colors[0]}10; --opacity: 0.6; --left:${m.x}; --top:${m.y}`}
              >
                <div class="token--list--item--shimmer" />
                <div class="wallet--list--content">
                  <div class="wallet--info">
                    <TokenIcon
                      value={wallet.name}
                      size={32}
                      color={colors[0]}
                      border={true}
                      radius={7}
                    />
                    <div class="wallet--name">{wallet.name}</div>
                  </div>
                  <div class="wallet--address">
                    {wallet.address}
                  </div>
                  {#if wallet?.tokens?.length > 0}
                    <div class="wallet--footer">
                      <span>TOKENS</span>
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
                    </div>
                  {/if}
                </div>
              </div>
              <div
                class="trash"
                on:click={() => {
                  deleteWallet(index);
                }}
              >
                <img src="./trash.svg" alt="Delete Icon" />
              </div>
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
