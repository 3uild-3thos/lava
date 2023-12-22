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
  import CreateProgram from "../../components/Modals/CreateProgram.svelte";
  import EditProgram from "../../components/Modals/EditProgram.svelte";
  import AtaList from "../../components/ATAList.svelte";

  let tokenColors = [
    "#FEBC2E",
    "#19FB9B",
    "#DC30C0",
    "#F0FE54",
    "#FEBC2E",
    "#19FB9B",
    "#DC30C0",
    "#F0FE54",
  ];
  let isCreatePDAModalOpen = false;
  let editingProgram = -1;
  let programAddress = "";
  let programName = "";
  let walletName = "";
  let walletAddress = "";
  let pdaAddress = "";
  let sol_balance = 10;
  let selectedPda = -1;
  let selectedPdaName = "";
  let selectedPdaSeeds = [];
  let editingWallet = -1;
  let ready = false;
  let isCreateAccountModalOpen = false;
  let isCreateWalletModalOpen = false;
  let isCreateTokenModalOpen = false;
  let isCreateProgramModalOpen = false;
  let isViewModalOpen = false;
  let isEditProgramModalOpen = false;
  let hideWallets = false;
  let openedWallet = $workspaces[$selectedWorkspace]?.wallets[0];
  let openedWalletIndex = 0;
  let showTokens;
  let token;
  let programAlreadyExists = false;

  function openWalletModal(index) {
    isViewModalOpen = true;
    openedWallet = $workspaces[$selectedWorkspace].wallets[index];
    openedWalletIndex = index;
  }

  onMount(() => {
    ready = true;
  });

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

  const deleteProgram = (index) => {
    $workspaces[$selectedWorkspace].programs = $workspaces[
      $selectedWorkspace
    ].programs.filter((program, i) => i !== index);
  };

  const deletePda = (index) => {
    $workspaces[$selectedWorkspace].pdas = $workspaces[
      $selectedWorkspace
    ].pdas.filter((pda, i) => i !== index);
  };

  const deleteWallet = (index) => {
    $workspaces[$selectedWorkspace].wallets = $workspaces[
      $selectedWorkspace
    ].wallets.filter((wallet, i) => i !== index);
  };

  const editWallet = (index) => {
    editingWallet = index;
    walletName = $workspaces[$selectedWorkspace].wallets[index].name;
    walletAddress = $workspaces[$selectedWorkspace].wallets[index].address;
    sol_balance = $workspaces[$selectedWorkspace].wallets[index].sol_balance;
    isCreateWalletModalOpen = true;
  };

  function updateProgram(event) {
    const programNameExists = $workspaces[$selectedWorkspace].programs.some(
      (program) => program.name === event.name
    );
    if (programNameExists) {
      programAlreadyExists = true;
      return;
    }

    $workspaces[$selectedWorkspace].programs[event.index] = {
      ...$workspaces[$selectedWorkspace].programs[event.index],
      name: event.name,
      metadata: {
        ...$workspaces[$selectedWorkspace].programs[event.index].metadata,
        address: event.address,
      },
    };
    isEditProgramModalOpen = false;
  }

  function getTokenColor(stringParam) {
    let sum = 0;
    for (let i = 0; i < stringParam.length; i++) {
      sum += stringParam.charCodeAt(i);
    }
    let result = sum % 7;
    let finalColor = tokenColors[result];
    return finalColor;
  }

  function handleSortTypeChange(event) {
    sortType = event.detail;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("sortType", sortType);
    }
  }

  function editToken(index) {
    token = $workspaces[$selectedWorkspace].tokens[index];
    isCreateTokenModalOpen = true;
  }

  function editPdaModal(index) {
    selectedPda = index;
    selectedPdaName = $workspaces[$selectedWorkspace].pdas[index].name;
    isCreatePDAModalOpen = true;
    selectedPdaSeeds = $workspaces[$selectedWorkspace].pdas[index].seeds;
  }
  function editProgram(index) {
    editingProgram = index;
    isEditProgramModalOpen = true;
    programAddress =
      $workspaces[$selectedWorkspace].programs[index].metadata.address;
    programName = $workspaces[$selectedWorkspace].programs[index].name;
  }

  $: searchTerm = "";
  $: sortType =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("sortType") || "name"
      : "name";

  $: showTokens =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("showTokens") === "true"
      : false;

  $: colorsTokens = $workspaces[$selectedWorkspace]?.tokens.map((token) => {
    return getTokenColor(token.symbol);
  });

  $: colorsWallets = $workspaces[$selectedWorkspace]?.wallets.map((wallet) => {
    return wallet.tokens.map((token) => {
      return getTokenColor(token.symbol);
    });
  });
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Accounts`}
  </title>
</svelte:head>

{#if ready}
  <!-- Create Account Modal -->
  <Modal
    width={300}
    bind:isOpen={isCreateAccountModalOpen}
    on:close={() => (isCreateAccountModalOpen = false)}
  >
    <CreateAccount
      on:createWallet={() => (
        (isCreateAccountModalOpen = false),
        (isCreateWalletModalOpen = true),
        (isCreatePDAModalOpen = false),
        (isCreateProgramModalOpen = false)
      )}
      on:createToken={() => (
        (isCreateAccountModalOpen = false),
        (isCreateTokenModalOpen = true),
        (isCreatePDAModalOpen = false),
        (isCreateProgramModalOpen = false)
      )}
      on:createPDA={() => (
        (isCreateAccountModalOpen = false),
        (isCreateTokenModalOpen = false),
        (isCreatePDAModalOpen = true),
        (isCreateProgramModalOpen = false)
      )}
      on:createProgram={() => (
        (isCreateAccountModalOpen = false),
        (isCreateTokenModalOpen = false),
        (isCreatePDAModalOpen = false),
        (isCreateProgramModalOpen = true)
      )}
    />
  </Modal>

  <!-- Create Program Modal -->
  <Modal
    width={350}
    bind:isOpen={isCreateProgramModalOpen}
    on:close={() => (isCreateProgramModalOpen = false)}
  >
    <CreateProgram
      on:closeProgramModal={() => (isCreateProgramModalOpen = false)}
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

  <!-- Edit Program Modal -->
  <Modal
    bind:isOpen={isEditProgramModalOpen}
    on:close={() => (isEditProgramModalOpen = false)}
    width={300}
    modalVariant={true}
    color={"#A0A0AB"}
  >
    <EditProgram
      on:updateProgram={(event) => updateProgram(event.detail)}
      programExists={programAlreadyExists}
      {editingProgram}
      {programName}
      {programAddress}
    />
  </Modal>

  <!-- Create PDA Modal -->
  <Modal
    bind:isOpen={isCreatePDAModalOpen}
    on:close={() => (isCreatePDAModalOpen = false)}
  >
    <CreatePDA
      on:closePDAModal={() => (
        (isCreatePDAModalOpen = false), (pdaAddress = "")
      )}
      editingPda={selectedPda}
      pdaName={selectedPdaName}
      selectedProgram={$workspaces[$selectedWorkspace]?.pdas[selectedPda]?.seeds.find(
        (seed) => {
          return seed.type === "Program"}
      )?.value.value}
      seeds={selectedPdaSeeds}
    />
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
        />
        {#if !hideWallets}
          <button
            class="btn btn--primary btn--fit btn--end"
            on:click={() => (
              ((editingWallet = -1), (selectedPda = -1), (token = undefined)),
              (isCreateAccountModalOpen = true)
            )}
            ><img
              src="/add.svg"
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
              pdas:
                $workspaces[$selectedWorkspace]?.pdas.map((pda) => ({
                  ...pda,
                  type: "pda",
                })) ?? [],
              programs:
                $workspaces[$selectedWorkspace]?.programs.map((program) => ({
                  ...program,
                  type: "pda",
                })) ?? [],
              tokens:
                $workspaces[$selectedWorkspace]?.tokens.map((token) => ({
                  ...token,
                  type: "token",
                })) ?? [],
            }}
            walletsLength={$workspaces[$selectedWorkspace]?.wallets.length}
            tokenColors={colorsTokens}
            walletColors={colorsWallets}
            on:openWalletModal={(event) => openWalletModal(event.detail.index)}
            on:deleteWallet={(event) => deleteWallet(event.detail.index)}
            on:editWallet={(event) => editWallet(event.detail.index)}
            on:deleteToken={(event) => deleteToken(event.detail.index)}
            on:deletePda={(event) => deletePda(event.detail.index)}
            on:deleteProgram={(event) => deleteProgram(event.detail.index)}
            on:editToken={(event) => editToken(event.detail.index)}
            on:editPdaModal={(event) => editPdaModal(event.detail.index)}
            on:editProgram={(event) => editProgram(event.detail.index)}
            on:openCreatePda={(event) => (
              (pdaAddress = event.detail.data), (isCreatePDAModalOpen = true)
            )}
            {searchTerm}
            {sortType}
          />
        </div>
      {:else}
        <NoAccounts on:openModal={() => (isCreateAccountModalOpen = true)} />
      {/if}
    </div>
  </div>
{/if}
