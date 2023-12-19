<script lang="ts">
  import { onMount } from "svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import Modal from "../../components/Modal.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import CreateTest from "../../components/Modals/CreateTest.svelte";
  import Icon from "../../components/avatars/index.svelte";
  import TestItem from "../../components/TestItem.svelte";
  import ProgramData from "../../components/ProgramData.svelte";
  let programs = $workspaces[$selectedWorkspace]?.programs;
  let color = ["#9945FF", "#19FB9B"];
  let isCreateTestModalOpen = false;
  let ready = false;
  onMount(() => {
    ready = true;
  });

  let selectedTest: number = -1;
  let fakeTests = [
    {
      name: "Test 1",
      program: programs[0],
    },
  ];
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Tests`}
  </title>
</svelte:head>

{#if ready}
  <!-- Create Test Modal -->
  <Modal
    width={350}
    bind:isOpen={isCreateTestModalOpen}
    on:close={() => (isCreateTestModalOpen = false)}
  >
    <CreateTest />
  </Modal>
  <div class="tests">
    <div class="tests--sidebar">
      <div class="tests--sidebar-header">
        <div class="tests--sidebar-back" on:click={() => (selectedTest = -1)}>
          <img src="./arrow-back.svg" />
        </div>
        <div class="tests--sidebar-title">
          {selectedTest !== -1 ? fakeTests[selectedTest].name : "Tests"}
        </div>
      </div>
      <div class="tests--list" style={`--color: #54FE98`}>
        {#if selectedTest === -1}
          {#each fakeTests as test, index}
            {#key index}
              <TestItem
                title={test.name}
                {index}
                on:updateSelectedTest={(event) =>
                  (selectedTest = event.detail.index)}
                type={"test"}
              />
            {/key}
          {/each}
        {:else}
          <div class="tests--title">Program</div>
          {#if fakeTests[selectedTest]?.program}
            <TestItem
              title={fakeTests[selectedTest]?.program?.name}
              on:updateSelectedTest={(event) =>
                (selectedTest = event.detail.index)}
              version={fakeTests[selectedTest]?.program?.version}
              type={"program"}
            >
              <div slot="content" style="width:100%;">
                <ProgramData program={fakeTests[selectedTest].program} />
              </div>
            </TestItem>
          {/if}
        {/if}
      </div>
      {#if selectedTest === -1}
        <div class="tests--bottom">
          <button
            class="btn btn--primary"
            on:click={() => (isCreateTestModalOpen = true)}
          >
            Create a Test
          </button>
        </div>
      {/if}
    </div>

    <div class="test--builder">
      {#if selectedTest === -1}
        <div class="test--builder--empty-state">
          <img src="./select-test.svg" alt="Select a Test" />
        </div>
      {/if}
    </div>
  </div>
{/if}
