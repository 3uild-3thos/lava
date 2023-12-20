<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade, fly, blur } from "svelte/transition";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import Modal from "../../components/Modal.svelte";
  import CreateWallet from "../../components/Modals/CreateWallet.svelte";
  import OpenWallet from "../../components/Modals/OpenWallet.svelte";
  import AssignToken from "../../components/Modals/AssignToken.svelte";
  import NoAccounts from "../../components/EmptyStates/NoAccounts.svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import CreateAccount from "../../components/Modals/CreateAccount.svelte";
  import CreateToken from "../../components/Modals/CreateToken.svelte";
  import AccountFilter from "../../components/AccountFilter.svelte";
  import CreatePDA from "../../components/Modals/CreatePDA.svelte";

  let color = ["#9945FF", "#19FB9B"];
  let tokenColors = [
    "#8A54FE",
    "#5498FE",
    "#FEBC2E",
    "#19FB9B",
    "#FE6054",
    "#DC30C0",
  ];

  $: colorsTokens = $workspaces[$selectedWorkspace]?.tokens.map((token) => {
    return getTokenColor(token.symbol);
  });

  $: colorsWallets = $workspaces[$selectedWorkspace]?.wallets.map((wallet) => {
    return wallet.tokens.map((token) => {
      return getTokenColor(token.symbol);
    });
  });

  let ready = false;
  onMount(() => {
    ready = true;
  });

  let isCreateAccountModalOpen = false;
  let isCreateWalletModalOpen = false;
  let isCreateTokenModalOpen = false;
  let isViewModalOpen = false;
  let hideWallets = false;
  let openedWallet = $workspaces[$selectedWorkspace]?.wallets[0];
  let openedWalletIndex = 0;
  let showTokens;

  $: searchTerm = "";
  $: sortType =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("sortType") || "wallets"
      : "wallets";
  $: showTokens =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("showTokens") === "true"
      : false;

  function openWalletModal(index) {
    isViewModalOpen = true;
    openedWallet = $workspaces[$selectedWorkspace].wallets[index];
    openedWalletIndex = index;
  }

  const deleteToken = (index) => {
    const tokenToDelete = $workspaces[$selectedWorkspace].tokens[index];
    $workspaces[$selectedWorkspace].tokens = $workspaces[
      $selectedWorkspace
    ].tokens.filter((token, i) => i !== index);

    $workspaces[$selectedWorkspace].wallets = $workspaces[
      $selectedWorkspace
    ].wallets.map((wallet) => {
      wallet.tokens = wallet.tokens.filter(
        (token) => token.symbol !== tokenToDelete.symbol
      );
      return wallet;
    });
  };

  let walletName = "";
  let walletAddress = "";
  let sol_balance = 10;

  const deleteWallet = (index) => {
    $workspaces[$selectedWorkspace].wallets = $workspaces[
      $selectedWorkspace
    ].wallets.filter((wallet, i) => i !== index);
  };

  let editingWallet = -1;
  const editWallet = (index) => {
    editingWallet = index;
    walletName = $workspaces[$selectedWorkspace].wallets[index].name;
    walletAddress = $workspaces[$selectedWorkspace].wallets[index].address;
    sol_balance = $workspaces[$selectedWorkspace].wallets[index].sol_balance;
    isCreateWalletModalOpen = true;
  };

  let isAssignTokenModalOpen = false;

  function getTokenColor(stringParam) {
    let sum = 0;
    for (let i = 0; i < stringParam.length; i++) {
      sum += stringParam.charCodeAt(i);
    }
    let result = sum % 5;
    let finalColor = tokenColors[result];
    return finalColor;
  }

  function handleSortTypeChange(event) {
    sortType = event.detail;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("sortType", sortType);
    }
  }

  function handleToggleShowTokens() {
    showTokens = !showTokens;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("showTokens", showTokens);
    }
  }

  let token;

  function editToken(index) {
    token = $workspaces[$selectedWorkspace].tokens[index];
    isCreateTokenModalOpen = true;
  }

  let isCreatePDAModalOpen = false;
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Accounts`}
  </title>
</svelte:head>

{#if ready}
  <!-- Create Account Modal -->
  <Modal
    width={400}
    bind:isOpen={isCreateAccountModalOpen}
    on:close={() => (isCreateAccountModalOpen = false)}
  >
    <CreateAccount
      on:createWallet={() => (
        (isCreateAccountModalOpen = false),
        (isCreateWalletModalOpen = true),
        (isCreatePDAModalOpen = false)
      )}
      on:createToken={() => (
        (isCreateAccountModalOpen = false),
        (isCreateTokenModalOpen = true),
        (isCreatePDAModalOpen = false)
      )}
      on:createPDA={() => (
        (isCreateAccountModalOpen = false),
        (isCreateTokenModalOpen = false),
        (isCreatePDAModalOpen = true)
      )}
    />
  </Modal>

  <!-- Create Token Modal -->
  <Modal
    width={400}
    bind:isOpen={isCreateTokenModalOpen}
    on:close={() => (isCreateTokenModalOpen = false)}
  >
    <CreateToken
      {token}
      wallets={$workspaces[$selectedWorkspace]?.wallets ?? []}
      on:closeTokenModal={() => (isCreateTokenModalOpen = false)}
    />
  </Modal>

  <!-- Create Wallet Modal -->
  <Modal
    bind:isOpen={isCreateWalletModalOpen}
    on:close={() => (isCreateWalletModalOpen = false)}
  >
    <CreateWallet
      {editingWallet}
      {walletName}
      {sol_balance}
      {walletAddress}
      on:closeModal={() => (isCreateWalletModalOpen = false)}
    />
  </Modal>

  <!-- Open Wallet Modal  -->
  <Modal
    bind:isOpen={isViewModalOpen}
    on:close={() => (isViewModalOpen = false)}
    width={450}
    modalVariant={true}
    color={"#A0A0AB"}
  >
    <OpenWallet
      bind:isOpen={isViewModalOpen}
      {openedWallet}
      colors={colorsWallets}
      {openedWalletIndex}
    />
  </Modal>

  <!-- Create PDA Modal -->
  <Modal
    bind:isOpen={isCreatePDAModalOpen}
    on:close={() => (isCreatePDAModalOpen = false)}
  >
    <CreatePDA on:closePDAModal={() => (isCreatePDAModalOpen = false)} />
  </Modal>

  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--header">
        <h1
          class="common--title"
          style="margin-bottom:0"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          Accounts
        </h1>
        <AccountFilter
          on:searchTermChange={(event) => (searchTerm = event.detail)}
          on:sortTypeChange={handleSortTypeChange}
          on:toggleShowTokens={handleToggleShowTokens}
        />
        {#if !hideWallets}
          <button
            class="btn btn--primary btn--fit btn--end"
            on:click={() => (
              ((editingWallet = -1), (token = undefined)),
              (isCreateAccountModalOpen = true)
            )}
            ><img
              src="./add.svg"
              alt="Add Icon"
              style="margin-right:5px;width:16px;height:16px;"
            /> Create an Account</button
          >
        {/if}
      </div>
      {#if ($workspaces[$selectedWorkspace]?.wallets.length > 0 || $workspaces[$selectedWorkspace]?.tokens.length > 0) && !hideWallets}
        <div class="wallet--list">
          <AccountListCard
            accounts={{
              wallets:
                $workspaces[$selectedWorkspace]?.wallets.map((wallet) => ({
                  ...wallet,
                  type: "wallet",
                })) ?? [],
              tokens:
                $workspaces[$selectedWorkspace]?.tokens.map((token) => ({
                  ...token,
                  type: "token",
                })) ?? [],
            }}
            walletsLength={$workspaces[$selectedWorkspace]?.wallets.length}
            {color}
            tokenColors={colorsTokens}
            walletColors={colorsWallets}
            on:openWalletModal={(event) => openWalletModal(event.detail.index)}
            on:deleteWallet={(event) => deleteWallet(event.detail.index)}
            on:editWallet={(event) => editWallet(event.detail.index)}
            on:deleteToken={(event) => deleteToken(event.detail.index)}
            {searchTerm}
            {sortType}
            tokensShown={showTokens}
            on:editToken={(event) => editToken(event.detail.index)}
          />
        </div>
      {:else}
        <NoAccounts on:openModal={() => (isCreateAccountModalOpen = true)} />
      {/if}
    </div>
  </div>
{/if}
