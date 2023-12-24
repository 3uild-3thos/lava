<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade, fly, blur } from "svelte/transition";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import Modal from "../../components/Modal.svelte";
  import CreateWallet from "../../components/Modals/CreateWallet.svelte";
  import OpenWallet from "../../components/Modals/OpenWallet.svelte";
  // import AssignToken from "../../components/Modals/archive/AssignToken.svelte";
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
      "#54FE98",
      "#DC30C0",
      "#F0FE54",
      "#FEBC2E",
      "#54FE98",
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
    let openedWallet = "";
    let openedWalletIndex = 0;
    let showTokens;
    let token;
    let programAlreadyExists = false;
    let programCreate = -1;

    function openWalletModal(index) {
      isViewModalOpen = true;
      openedWallet = $workspaces[$selectedWorkspace].accounts[index];
      openedWalletIndex = index;
    }

    onMount(() => {
      ready = true;
    });

    const deleteToken = (index) => {
      const tokenName = $workspaces[$selectedWorkspace].accounts[index].symbol;
      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.mint === tokenName
      );
      ataAccounts.forEach((account) => {
        $workspaces[$selectedWorkspace].accounts = $workspaces[
          $selectedWorkspace
        ].accounts.filter((token) => token !== account);
      });
    $workspaces[$selectedWorkspace].accounts = $workspaces[
      $selectedWorkspace
    ].accounts.filter((token, i) => i !== index);
    };
    
    const editWallet = (index) => {
    editingWallet = index;
    walletName = $workspaces[$selectedWorkspace].accounts[index].name;
    walletAddress = $workspaces[$selectedWorkspace].accounts[index].address;
    sol_balance = $workspaces[$selectedWorkspace].accounts[index].sol_balance;
    isCreateWalletModalOpen = true;
    };

    const deleteProgram = (index) => {
    const programName = $workspaces[$selectedWorkspace].accounts[index].name;
    const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
      (account) => account.kind === "ata" && account.authority === programName
    );
    ataAccounts.forEach((account) => {
      $workspaces[$selectedWorkspace].accounts = $workspaces[
        $selectedWorkspace
      ].accounts.filter((token) => token !== account);
    });
      $workspaces[$selectedWorkspace].accounts = $workspaces[
      $selectedWorkspace
    ].accounts.filter((token, i) => i !== index);
    
    $workspaces[$selectedWorkspace].idls = $workspaces[
      $selectedWorkspace
    ].idls.filter((idl) => idl.name !== programName);

    $workspaces[$selectedWorkspace].tests = $workspaces[
      $selectedWorkspace
    ].tests.filter((test) => test.programId !== programName);

    };

    const deletePda = (index) => {
      const pdaName = $workspaces[$selectedWorkspace].accounts[index].name;
      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.authority === pdaName
      );
      ataAccounts.forEach((account) => {
        $workspaces[$selectedWorkspace].accounts = $workspaces[
          $selectedWorkspace
        ].accounts.filter((token) => token !== account);
      });
      $workspaces[$selectedWorkspace].accounts = $workspaces[
      $selectedWorkspace
    ].accounts.filter((token, i) => i !== index);
    };

    const deleteWallet = (index) => {
      const walletName = $workspaces[$selectedWorkspace].accounts[index].name;
      const mintAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "mint"
      );
      mintAccounts.forEach((account) => {
        if (account.freezeAuthority === walletName || account.mintAuthority === walletName) {
          account.freezeAuthority = "";
          account.mintAuthority = "";
        }
      });
      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.authority === walletName
      );
      ataAccounts.forEach((account) => {
        $workspaces[$selectedWorkspace].accounts = $workspaces[
          $selectedWorkspace
        ].accounts.filter((token) => token !== account);
      });
      $workspaces[$selectedWorkspace].accounts = $workspaces[
        $selectedWorkspace
      ].accounts.filter((token, i) => i !== index);
    };

    function deleteATA(index) {
      $workspaces[$selectedWorkspace].accounts = $workspaces[
      $selectedWorkspace
    ].accounts.filter((token, i) => i !== index);
    }

    const updateProgram = (event) => {
      
      const programNameExists = $workspaces[$selectedWorkspace].accounts.some(
        (account) => account.name === event.name
      );
      if (programNameExists) {
        programAlreadyExists = true;
        return;
      }

      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) => account.kind === "ata" && account.authority === $workspaces[$selectedWorkspace].accounts[event.index].name
      );
      ataAccounts.forEach((account) => {
        account.authority = event.name;
        account.name = account.authority + account.mint
      });


      $workspaces[$selectedWorkspace].accounts = $workspaces[$selectedWorkspace].accounts.map((account, index) => {
        if (index === event.index) {
          account.name = event.name;
          account.metadata = {address: event?.address};
        }
        return account;
      });
      isEditProgramModalOpen = false;
    };

    function handleSortTypeChange(event) {
      sortType = event.detail;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("sortType", sortType);
      }
    }

    function editToken(index) {
      token = $workspaces[$selectedWorkspace].accounts[index];
      isCreateTokenModalOpen = true;
    }

    function editPdaModal(index) {
      selectedPda = index;
      selectedPdaName = $workspaces[$selectedWorkspace].accounts[index].name;
      isCreatePDAModalOpen = true;
      selectedPdaSeeds = $workspaces[$selectedWorkspace].accounts[index].seeds;
    }
    
    function editProgram(index) {
      editingProgram = index;
      isEditProgramModalOpen = true;
      programAddress =
        $workspaces[$selectedWorkspace].accounts[index].metadata?.address;
      programName = $workspaces[$selectedWorkspace].accounts[index].name;
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

    function getTokenColor(stringParam) {
      let sum = 0;
      for (let i = 0; i < stringParam.length; i++) {
        sum += stringParam.charCodeAt(i);
      }
      let result = sum % 7;
      let finalColor = tokenColors[result];
      return finalColor;
    }

    function getColorByAccountType(accountType, originalIndex) {
    switch (accountType) {
      case "mint":
        return getTokenColor($workspaces[$selectedWorkspace]?.accounts[originalIndex]?.symbol);
      case "wallet":
        return "#8A54FE";
      case "Program":
        return "#FE6054";
      case "ata":
        return "#A0A0AB";
      default:
        return "#5498FE";
    }
    }

    $: colors = $workspaces[$selectedWorkspace]?.accounts
      ?.map((account, index) => {
        return getColorByAccountType(account.kind, index);
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
        wallets={$workspaces[$selectedWorkspace]?.accounts.filter(account => account.kind === "wallet")}
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
        colors={colors}
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
        selectedProgram={programCreate === -1 ? $workspaces[$selectedWorkspace].accounts[selectedPda]?.seeds?.find(
          (seed) => {
            return seed?.kind === "Program"}
        )?.value: $workspaces[$selectedWorkspace].accounts[programCreate]?.name}
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
                ((editingWallet = -1), (selectedPda = -1), programCreate = -1, (token = undefined)),
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
        {#if ($workspaces[$selectedWorkspace]?.accounts?.length > 0)}
          <div class="wallet--list">
            <AccountListCard
              accounts={
                  $workspaces[$selectedWorkspace]?.accounts}
              walletsLength={$workspaces[$selectedWorkspace]?.accounts?.filter(account => account.kind === "wallet").length}
              colors={colors}
              on:openWalletModal={(event) => openWalletModal(event.detail.index)}
              on:deleteWallet={(event) => deleteWallet(event.detail.index)}
              on:editWallet={(event) => editWallet(event.detail.index)}
              on:deleteToken={(event) => deleteToken(event.detail.index)}
              on:deletePda={(event) => deletePda(event.detail.index)}
              on:deleteProgram={(event) => deleteProgram(event.detail.index)}
              on:editToken={(event) => editToken(event.detail.index)}
              on:editPdaModal={(event) => editPdaModal(event.detail.index)}
              on:editProgram={(event) => editProgram(event.detail.index)}
              on:deleteATA={(event) => deleteATA(event.detail.index)}
              on:openCreatePda={(event) => (
                (programCreate = event.detail.data), (isCreatePDAModalOpen = true)
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
