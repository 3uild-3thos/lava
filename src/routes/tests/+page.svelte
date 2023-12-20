<script lang="ts">
  import { onMount } from "svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import Modal from "../../components/Modal.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import CreateTest from "../../components/Modals/CreateTest.svelte";
  import Icon from "../../components/avatars/index.svelte";
  import TestItem from "../../components/TestItem.svelte";
  import TestForm from "../../components/TestForm.svelte";
  import { fade, slide } from "svelte/transition";
  import DeleteTest from "../../components/Modals/DeleteTest.svelte";
  let programs = $workspaces[$selectedWorkspace]?.programs;
  let color = ["#9945FF", "#19FB9B"];
  let isCreateTestModalOpen = false;
  let isDeleteTestModalOpen = false;
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
    {
      name: "Test 2",
      program: programs[0],
    },
    {
      name: "Test 3",
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
    <CreateTest {selectedTest} />
  </Modal>

  <!-- Delete Test Modal -->
  <Modal
    width={350}
    bind:isOpen={isDeleteTestModalOpen}
    on:close={() => (isDeleteTestModalOpen = false)}
  >
    <DeleteTest on:cancelDelete={() => (isDeleteTestModalOpen = false)} />
  </Modal>

  <div class="tests">
    <div class="tests--sidebar">
      <div class="tests--sidebar-header">
        <div class="tests--sidebar-title">Tests</div>
      </div>
      <div class="tests--list" style={`--color: #54FE98`}>
        {#each fakeTests as test, index}
          {#key index}
            <TestItem
              title={test.name}
              isSelected={selectedTest === index}
              {index}
              on:updateSelectedTest={(event) =>
                (selectedTest = event.detail.index)}
              type={"test"}
            >
              <div slot="content" class="test--slot">
                <div
                  class="edit-icon always--shown"
                  on:click={() => (isCreateTestModalOpen = true)}
                />
                <div
                  class="trash-icon always--shown"
                  on:click={() => (isDeleteTestModalOpen = true)}
                />
              </div>
            </TestItem>
          {/key}
        {/each}
      </div>
      <div class="tests--bottom">
        <button
          class="btn btn--primary"
          on:click={() => {
            (selectedTest = -1), (isCreateTestModalOpen = true);
          }}
        >
          Create a Test
        </button>
      </div>
    </div>

    <div class="test--builder">
      {#if selectedTest === -1}
        <div class="test--builder--empty-state">
          <img src="./select-test.svg" alt="Select a Test" />
          <div class="test--builder--empty-state--title">
            Select a test to get started
          </div>
        </div>
      {:else}
        <TestForm program={fakeTests[selectedTest].program} />
      {/if}
    </div>
  </div>
{/if}
