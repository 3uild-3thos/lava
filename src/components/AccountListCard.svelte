<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";
  import Card from "./Card/index.svelte";
  import AtaList from "./ATAList.svelte";
  import MintInfo from "./MintInfo.svelte";
  import AssignToken from "./Modals/AssignToken.svelte";
  import PdaList from "./PDAList.svelte";

  export let walletsLength: number;
  export let accounts: any = [];
  export let walletColors: any = [];
  export let tokenColors: any = [];
  export let searchTerm = "";
  export let sortType = "name";
  let isAssignTokenModalOpen: boolean = false;
  let editingWallet = -1;
  let deleteProgramModal = false;
  const dispatch = createEventDispatcher();
  let deletingWallet = -1;
  let deletingProgram = -1;
  let deletingPda = -1;
  let deleteModal = false;
  let deletePdaModal = false;
  let deletingToken = -1;
  let deleteTokenModal = false;

  function deleteWallet(index: number) {
    dispatch("deleteWallet", { index });
    deleteModal = false;
  }

  function deletePda(index: number) {
    dispatch("deletePda", { index });
    deletePdaModal = false;
  }

  function editWallet(index: number) {
    dispatch("editWallet", { index });
  }

  function editPda(index: number) {
    dispatch("editPdaModal", { index });
  }

  function onEditProgram(index: number) {
    dispatch("editProgram", { index });
  }

  function onEditToken(index: number) {
    dispatch("editToken", { index });
  }

  function deleteToken(index: number) {
    dispatch("deleteToken", { index });
    deleteTokenModal = false;
  }

  function deleteProgram(index: number) {
    dispatch("deleteProgram", { index });
    deleteProgramModal = false;
  }

  const onDeleteWallet = (index: number) => {
    deletingWallet = index;
    deleteModal = true;
  };

  const onDeleteToken = (index: number) => {
    deletingToken = index;
    deleteTokenModal = true;
  };

  function onDeletePda(index: number) {
    deletingPda = index;
    deletePdaModal = true;
  }

  function onCreatePda(data) {
    dispatch("openCreatePda", { data });
  }

  function onDeleteProgram(index: number) {
    deletingProgram = index;
    deleteProgramModal = true;
  }

  function openAssignTokenModal(index: any) {
    editingWallet = index;
    isAssignTokenModalOpen = true;
  }

  function getColorByAccountType(accountType: string, originalIndex: number) {
    switch (accountType) {
      case "token":
        return tokenColors[originalIndex];
      case "wallet":
        return "#8A54FE";
      case "program":
        return "#FE6054";
      default:
        return "#5498FE";
    }
  }

  $: filteredWallets = accounts.wallets
    .map((wallet, index: number) => ({ ...wallet, originalIndex: index }))
    .filter((wallet) =>
      wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((wallet, index: number) => ({ ...wallet, itemType: "wallet", index }));

  $: filteredPrograms = accounts.programs
    .map((program, index: number) => ({ ...program, originalIndex: index }))
    .filter((program) =>
      program.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((program, index: number) => ({
      ...program,
      itemType: "program",
      index,
    }));

  $: filteredPDAs = accounts.pdas.map((pda, index: number) => ({
    ...pda,
    originalIndex: index,
    itemType: "pda",
  }));

  $: filteredTokens = accounts.tokens
    .map((token, index: number) => ({ ...token, originalIndex: index }))
    .filter((token) =>
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((token, index: number) => ({ ...token, itemType: "token", index }));

  $: sortedAccounts = [
    ...filteredWallets,
    ...filteredPrograms,
    ...filteredPDAs,
    ...filteredTokens,
  ];

  $: if (sortType === "name") {
    sortedAccounts = [...sortedAccounts].sort((a, b) => {
      if (a.name && b.name) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      }
      return 0;
    });
  } else if (sortType === "type") {
    sortedAccounts = [...sortedAccounts].sort((a, b) => {
      const typeOrder = {
        wallet: 1,
        program: 2,
        pda: 3,
        token: 4,
      };
      return typeOrder[a.itemType] - typeOrder[b.itemType];
    });
  }

  $: hoveredCard = -1;
</script>

<!-- Confirm Delete Wallet Modal -->
<Modal bind:isOpen={deleteModal} on:close={() => (deleteModal = false)}>
  <h1 class="modal--title">Confirm Delete</h1>
  <div class="modal--form">
    <div class="modal--form--warning">
      <img src="/alert.svg" alt="Alert Icon" />
      Please confirm you want to delete the selected wallet.
    </div>
    <div class="btns--modal" style="margin-top:20px">
      <button
        class="btn btn--primary"
        on:click={() => {
          deleteModal = false;
        }}>Cancel</button
      >
      <button
        class="btn btn--lava"
        on:click={() => {
          deleteWallet(deletingWallet);
        }}>Confirm</button
      >
    </div>
  </div></Modal
>

<!-- Assign ATAs -->
<Modal
  bind:isOpen={isAssignTokenModalOpen}
  on:close={() => (isAssignTokenModalOpen = false)}
>
  <AssignToken
    {tokenColors}
    {editingWallet}
    on:closeModal={() => (isAssignTokenModalOpen = false)}
  />
</Modal>

<!-- Delete Token Modal -->
<Modal
  bind:isOpen={deleteTokenModal}
  on:close={() => (deleteTokenModal = false)}
>
  <h1 class="modal--title">Confirm Delete</h1>
  <div class="modal--form">
    <div class="modal--form--warning">
      <img src="/alert.svg" alt="Alert Icon" />
      Please confirm you want to delete the selected mint token account.
    </div>
    <div class="btns--modal" style="margin-top:20px">
      <button
        class="btn btn--primary"
        on:click={() => {
          deleteTokenModal = false;
        }}>Cancel</button
      >
      <button
        class="btn btn--lava"
        on:click={() => {
          deleteToken(deletingToken);
        }}>Confirm</button
      >
    </div>
  </div></Modal
>

<!-- Confirm Delete PDA -->
<Modal bind:isOpen={deletePdaModal} on:close={() => (deletePdaModal = false)}>
  <h1 class="modal--title">Confirm Delete</h1>
  <div class="modal--form">
    <div class="modal--form--warning">
      <img src="/alert.svg" alt="Alert Icon" />
      Please confirm you want to delete the selected PDA account.
    </div>
    <div class="btns--modal" style="margin-top:20px">
      <button
        class="btn btn--primary"
        on:click={() => {
          deletePdaModal = false;
        }}>Cancel</button
      >
      <button
        class="btn btn--lava"
        on:click={() => {
          deletePda(deletingPda);
        }}>Confirm</button
      >
    </div>
  </div></Modal
>

<!-- Confirm Delete Program -->
<Modal
  bind:isOpen={deleteProgramModal}
  on:close={() => (deleteProgramModal = false)}
>
  <h1 class="modal--title">Confirm Delete</h1>
  <div class="modal--form">
    <div class="modal--form--warning">
      <img src="/alert.svg" alt="Alert Icon" />
      Please confirm you want to delete the selected program account.
    </div>
    <div class="btns--modal" style="margin-top:20px">
      <button
        class="btn btn--primary"
        on:click={() => {
          deleteProgramModal = false;
        }}>Cancel</button
      >
      <button
        class="btn btn--lava"
        on:click={() => {
          deleteProgram(deletingProgram);
        }}>Confirm</button
      >
    </div>
  </div></Modal
>

{#each sortedAccounts as account, index}
  {#key sortType}
    <Card
      on:mouseover={() => (hoveredCard = index)}
      on:mouseleave={() => (hoveredCard = -1)}
      on:showTokens={() =>
        dispatch("openWalletModal", { index: account.originalIndex })}
      color={getColorByAccountType(account.itemType, account.originalIndex)}
      title={account.name}
      {hoveredCard}
      type={account.itemType}
      ticker={account.symbol ? account.symbol : ""}
      cardPosition={index}
      balance={account.sol_balance}
    >
      <div slot="options">
        <div
          class="edit-icon"
          on:click={(event) => {
            if (account.type === "wallet") {
              editWallet(account.originalIndex);
              event.stopPropagation();
            } else if (account.type === "token") {
              onEditToken(account.originalIndex);
            } else if (
              account.type === "pda" &&
              account.itemType !== "program"
            ) {
              editPda(account.originalIndex);
            } else if (account.itemType === "program") {
              onEditProgram(account.originalIndex);
            }
          }}
        />
        <div
          class="trash-icon"
          on:click={(event) => {
            if (account.type === "wallet") {
              onDeleteWallet(account.originalIndex);
              event.stopPropagation();
            } else if (account.type === "token") {
              onDeleteToken(account.originalIndex);
            } else if (
              account.type === "pda" &&
              account.itemType !== "program"
            ) {
              onDeletePda(account.originalIndex);
            } else if (account.itemType === "program") {
              onDeleteProgram(account.originalIndex);
            }
          }}
        />
      </div>
      <div slot="footer">
        {#if account.type === "wallet"}
          <AtaList
            {account}
            walletTokenColors={walletColors}
            {hoveredCard}
            on:openAssign={(event) => {
              openAssignTokenModal(event.detail.index);
            }}
          />
        {:else if account.itemType === "program"}
          <PdaList
            {hoveredCard}
            {account}
            on:openCreatePda={(event) => onCreatePda(event.detail.data)}
          />
        {:else if account.type === "token"}
          <MintInfo
            hovered={hoveredCard}
            {index}
            {account}
            color={tokenColors[account.originalIndex]}
          />
        {/if}
      </div>
    </Card>
  {/key}
{/each}
