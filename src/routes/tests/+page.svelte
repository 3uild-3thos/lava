<script lang="ts">
  import { onMount } from "svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import Modal from "../../components/Modal.svelte";
  import { workspaces, selectedWorkspace, type Workspace } from "../../stores/store";
  import CreateTest from "../../components/Modals/CreateTest.svelte";
  import Icon from "../../components/avatars/index.svelte";
  import TestItem from "../../components/TestItem.svelte";
  import TestForm from "../../components/TestForm.svelte";
  import { fade, slide } from "svelte/transition";
  import DeleteTest from "../../components/Modals/DeleteTest.svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import { writable } from "svelte/store";
  import type { Idl } from "@coral-xyz/anchor"

  let programs = $workspaces[$selectedWorkspace]?.programs as any[];
  let color = ["#9945FF", "#19FB9B"];
  let isCreateTestModalOpen = false;
  let isDeleteTestModalOpen = false;
  let ready = false;
  
  onMount(() => {
    if ($workspaces[$selectedWorkspace].tests === undefined) {
      $workspaces[$selectedWorkspace].tests = [];
    }
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

  let inputValues = writable<[]>([]);

  let inputAccounts = writable<[]>([]);

  $: {
    if (selectedTest !== -1) {
      inputValues.update((values) => {
        if (!values[selectedTest]) {
          let program = $workspaces[$selectedWorkspace].programs.find(
            (program) => program.name === $workspaces[$selectedWorkspace].tests[selectedTest].programId  || program.metadata?.address === $workspaces[$selectedWorkspace].tests[selectedTest].programId
          );
          values[selectedTest] = program?.instructions[0].args.map((arg) => {
            return {
              value: "",
              type: arg.type,
              name: arg.name,
            };
          });
        }
        return values;
      });
    }
  }
  
  $: {
    if (selectedTest !== -1) {
      inputAccounts.update((accounts) => {
        if (!accounts[selectedTest]) {
          let program = $workspaces[$selectedWorkspace].programs.find(
            (program) => program.name === $workspaces[$selectedWorkspace].tests[selectedTest].programId  || program.metadata?.address === $workspaces[$selectedWorkspace].tests[selectedTest].programId
          );
          accounts[selectedTest] = program?.instructions[0].accounts.map((account) => {
            return {
              name: account.name,
              isMut: account.isMut,
              isSigner: account.isSigner,
            };
          });
        }
        return accounts;
      });
    }
  }

  $: console.log($inputValues, selectedTest, $inputValues[selectedTest], selectedProgram);

  function beforeUnload() {
    if (selectedTest !== -1) {
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = "";
      // more compatibility
      return "...";
    }
  }

  let selectedProgram: Idl|String = "";

  const updateSelectedProgram = (event) => {
    selectedProgram = event.detail.value;
  };

</script>

<svelte:head>
  <title>
    {`⬡ Lava - Tests`}
  </title>
</svelte:head>

<svelte:window on:beforeunload={beforeUnload} />

{#if ready}
  <!-- Create Test Modal -->
  <Modal
    width={350}
    bind:isOpen={isCreateTestModalOpen}
    on:close={() => (isCreateTestModalOpen = false)}
  >
    <CreateTest {selectedTest} {selectedProgram} on:updateSelectedProgram={updateSelectedProgram} />
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
        {#each $workspaces[$selectedWorkspace].tests as test, index}
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

        <!-- Accounts -->
      {:else if $inputAccounts[selectedTest]?.length > 0}
        <div class="test--content">
          <div class="test--form">
            <div class="content--header">
              <div class="test--content--title">Accounts</div>
            </div>
            <div class="instruction--list" in:fade|global={{ duration: 100 }}>
              {#each $inputAccounts[selectedTest] as account, index}
                <div class="test--form--item">
                  <div class="instruction--list--value">
                    {account.name}
                    {#if account.isMut}
                      <img src="./modify.svg" alt="Mut Icon" />
                    {/if}
                    {#if account.isSigner}
                      <img src="./signer.svg" alt="Signer Icon" />
                    {/if}
                  </div>
                  <Select />
                </div>
              {/each}
            </div>
          </div>

          <!-- Args -->
          {#if $inputValues[selectedTest].length > 0}
            <div class="test--form">
              <div class="content--header">
                <div class="test--content--title">Arguments</div>
              </div>
              <div class="instruction--list" in:fade|global={{ duration: 100 }}>
                <div class="test--content--list">
                  {#each $inputValues[selectedTest] as args, index}
                    <div class="argument">
                      {args.name}
                      <span class="arg--type">{typeof args.type === "string" ? args.type : JSON.stringify(args.type)}</span>
                    </div>
                    <input
                      class="input--primary"
                      bind:value={$inputValues[selectedTest][index].value}
                      placeholder="Value"
                    />
                  {/each}
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
