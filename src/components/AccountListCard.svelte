<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";
  import Card from "./Card/index.svelte";
  import AtaList from "./ATAList.svelte";
  import MintInfo from "./MintInfo.svelte";

  export let walletsLength: number;
  export let accounts: any = [];
  export let walletColors: any = [];
  export let tokenColors: any = [];
  export let searchTerm = "";
  export let sortType = "name";

  import AssignToken from "./Modals/AssignToken.svelte";
  let isAssignTokenModalOpen: boolean = false;

  let editingWallet = -1;
  $: hoveredCard = -1;

  const dispatch = createEventDispatcher();

  function deleteWallet(index: number) {
    dispatch("deleteWallet", { index });
    deleteModal = false;
  }

  function editWallet(index: number) {
    dispatch("editWallet", { index });
  }

  function onEditToken(index: number) {
    dispatch("editToken", { index });
  }

  function deleteToken(index: number) {
    dispatch("deleteToken", { index });
    deleteTokenModal = false;
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
      program.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  let deletingWallet = -1;
  let deleteModal = false;

  const onDeleteWallet = (index: number) => {
    deletingWallet = index;
    deleteModal = true;
  };

  let deletingToken = -1;
  let deleteTokenModal = false;

  const onDeleteToken = (index: number) => {
    deletingToken = index;
    deleteTokenModal = true;
  };

  function openAssignTokenModal(index: any) {
    editingWallet = index;
    isAssignTokenModalOpen = true;
  }

  $: console.log(sortedAccounts);
</script>

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

{#each sortedAccounts as account, index}
  {#key sortType}
    <Card
      color={account.type === "token"
        ? tokenColors[account.originalIndex]
        : account.type === "wallet"
        ? "#8A54FE"
        : "#FE6054"}
      title={account.name}
      type={account.itemType}
      ticker={account.symbol ? account.symbol : ""}
      cardPosition={index}
    >
      <div slot="options">
        <div
          class="edit-icon"
          on:click={() => {
            if (account.type === "wallet") {
              editWallet(account.originalIndex);
            } else if (account.type === "token") {
              onEditToken(account.originalIndex);
            }
          }}
        />
        <div
          class="trash-icon"
          on:click={() => {
            if (account.type === "wallet") {
              onDeleteWallet(account.originalIndex);
            } else if (account.type === "token") {
              onDeleteToken(account.originalIndex);
            }
          }}
        />
      </div>
      <div slot="footer">
        {#if account.type === "wallet" || account.type === "pda"}
          <AtaList
            {account}
            walletTokenColors={walletColors}
            {hoveredCard}
            on:openAssign={(event) => {
              openAssignTokenModal(event.detail.index);
            }}
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
