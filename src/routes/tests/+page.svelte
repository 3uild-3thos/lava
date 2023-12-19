<script lang="ts">
  import { onMount } from "svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import Modal from "../../components/Modal.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import CreateTest from "../../components/Modals/CreateTest.svelte";
  $: programs = $workspaces[$selectedWorkspace]?.programs;
  let color = ["#9945FF", "#19FB9B"];
  let isCreateTestModalOpen = false;
  let ready = false;
  onMount(() => {
    ready = true;
    isCreateTestModalOpen = true;
  });
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Tests`}
  </title>
</svelte:head>

{#if ready}
  <Modal
    width={350}
    bind:isOpen={isCreateTestModalOpen}
    on:close={() => (isCreateTestModalOpen = false)}
  >
    <CreateTest />
  </Modal>

  <div class="contracts--list">
    <div class="wallet--list">
      <!-- <AccountListCard
            accounts={{
            wallets:
                $workspaces[$selectedWorkspace]?.programs.map((program) => ({
                    program,
                    type: "program",
                })) ?? [],
            }}
            walletsLength={$workspaces[$selectedWorkspace]?.programs.length}
            {color}
            tokenColors={[]}
            walletColors={[]}
        /> -->
    </div>
  </div>
{/if}
