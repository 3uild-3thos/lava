<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";
  import Card from "./Card/index.svelte";
  import AtaList from "./ATAList.svelte";
  import MintInfo from "./MintInfo.svelte";
  // import AssignToken from "./Modals/archive/AssignToken.svelte";
  import PdaList from "./PDAList.svelte";
  import CreateAta from "./Modals/CreateATA.svelte";
  import AtaRelationship from "./ATARelationship.svelte";
  import { fade } from "svelte/transition";

  export let walletsLength: number;
  export let accounts: any = [];
  // export let walletColors: any = [];
  // export let tokenColors: any = [];
  export let colors: any = [];
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
  let deletingATA = -1;
  let deleteTokenModal = false;
  let ataMint = -1;
  let isCreateATAModalOpen = false;
  let deleteATAModal = false;


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

  function onDeleteATA(index: number) {
    deletingATA = index;
    deleteATAModal = true;
  }

  function deleteATA(index: number) {
    dispatch("deleteATA", { index });
    deleteATAModal = false;
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

  function openCreateATAModal(index: any) {
    ataMint = index;
    isCreateATAModalOpen = true;
  }

  $:filteredAccounts = accounts.map((account, index) => {
    return {
      ...account,
      originalIndex: index,
    };
  }).filter(account => {
    return searchTerm ? account.name.includes(searchTerm) : true;
  });

  $: sortedAccounts = [
    ...filteredAccounts
  ];

  $: if (sortType === "name") {
    sortedAccounts = [...sortedAccounts].sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  } else if (sortType === "type") {
    sortedAccounts = [...sortedAccounts].sort((a, b) => {
      if (a.kind && b.kind) {
        const order = {
          wallet: 1,
          program: 2,
          pda: 3,
          mint: 4,
          ata: 5,
        };
        return order[a.kind] - order[b.kind];
      }
      return 0;
    });
  } else if (sortType === "created") {
    sortedAccounts = [...sortedAccounts].sort((a, b) => {
      return a.originalIndex - b.originalIndex;
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
  bind:isOpen={isCreateATAModalOpen}
  on:close={() => (isCreateATAModalOpen = false)}
>
  <CreateAta
  on:closeAtaModal={() => (isCreateATAModalOpen = false)}
  assigningMint={ataMint}
  tokenColors={colors}
  />
</Modal>

<!-- Delete ATA -->

<Modal
  bind:isOpen={deleteATAModal}
  on:close={() => (deleteATAModal = false)}
>
  <h1 class="modal--title">Confirm Delete</h1>
  <div class="modal--form">
    <div class="modal--form--warning">
      <img src="/alert.svg" alt="Alert Icon" />
      Please confirm you want to delete the selected ATA.
    </div>
    <div class="btns--modal" style="margin-top:20px">
      <button
        class="btn btn--primary"
        on:click={() => {
          deleteATAModal = false;
        }}>Cancel</button
      >
      <button
        class="btn btn--lava"
        on:click={() => {
          deleteATA(deletingATA);
        }}>Confirm</button
      >
    </div>
  </div></Modal
>

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

{#if sortedAccounts.length === 0}
  <div class="empty--state--search" in:fade>Oops, theres nothing here...</div>
{/if}


{#each sortedAccounts as account, index}
  {#key sortType}
    <Card
      on:mouseover={() => (hoveredCard = index)}
      on:mouseleave={() => (hoveredCard = -1)}
      on:showTokens={() =>
        dispatch("openWalletModal", { index: account.originalIndex })}
      color={colors[account.originalIndex]}
      title={account.name}
      {hoveredCard}
      kind={account.kind}
      ticker={account.symbol ? account.symbol : ""}
      cardPosition={index}
      balance={account.sol_balance}
    >
      <div slot="options">
        {#if account.kind !== "ata"}
        <div
          class="edit-icon"
          on:click={(event) => {
            if (account.kind === "wallet") {
              editWallet(account.originalIndex);
              event.stopPropagation();
            } else if (account.kind === "mint") {
              onEditToken(account.originalIndex);
            } else if (
              account.kind === "pda"
            ) {
              editPda(account.originalIndex);
            } else if (account.kind === "Program") {
              onEditProgram(account.originalIndex);
            }
          }}
        />
        {/if}
        <div
          class="trash-icon"
          on:click={(event) => {
            if (account.kind === "wallet") {
              onDeleteWallet(account.originalIndex);
              event.stopPropagation();
            } else if (account.kind === "mint") {
              onDeleteToken(account.originalIndex);
            } else if (
              account.kind === "pda"
            ) {
              onDeletePda(account.originalIndex);
            } else if (account.kind === "Program") {
              onDeleteProgram(account.originalIndex);
            } else if (account.kind === "ata") {
              onDeleteATA(account.originalIndex);
            }
          }}
        />
      </div>
      <div slot="footer">
        {#if account.kind === "wallet" || account.kind === "pda"}
          <AtaList
            accounts={accounts}
            accountIndex={account.originalIndex}
            walletTokenColors={colors}
            {hoveredCard}
          />
        {:else if account.kind === "Program"}
          <PdaList
            {hoveredCard}
            {account}
            on:openCreatePda={(event) => onCreatePda(event.detail.index)}
          />
        {:else if account.kind === "mint"}
          <MintInfo
            on:openAssign={(event) => {
              openCreateATAModal(event.detail.index);
            }}
            hovered={hoveredCard}
            {index}
            {account}
            color={colors[account.originalIndex]}
          />
        {:else if account.kind === "ata"}
            <AtaRelationship {colors} {accounts}
            ata={account}/>
        {/if}

      </div>
    </Card>
  {/key}
{/each}
