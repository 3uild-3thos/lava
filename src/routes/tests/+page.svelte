<script lang="ts">
  import { onMount } from "svelte";
  import AccountListCard from "../../components/AccountListCard.svelte";
  import Modal from "../../components/Modal.svelte";
  import {
    workspaces,
    selectedWorkspace,
    type Workspace,
  } from "../../stores/store";
  import CreateTest from "../../components/Modals/CreateTest.svelte";
  import Icon from "../../components/avatars/index.svelte";
  import TestItem from "../../components/TestItem.svelte";
  import TestForm from "../../components/TestForm.svelte";
  import { fade, slide } from "svelte/transition";
  import DeleteTest from "../../components/Modals/DeleteTest.svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import { readonly, writable } from "svelte/store";
  import type { Idl } from "@coral-xyz/anchor";
  import { SubmitForm } from "@restspace/svelte-schema-form";
  import getInputTypes from "../../helpers/getInputTypes";
  import isStringArrayInRange from "../../helpers/isArrayInRange";

  const getSchema = (args: any[]) => {
    let schema = {
      type: "object",
      properties: {},
    };
    args.forEach((arg) => {
      if (arg.type.vec) {
        schema.properties[arg.name] = {
          type: "object",
          properties: { [arg.type.vec]: { type: "string" } },
        };
      } else {
        schema.properties[arg.name] = { type: arg.type };
      }
    });
    return schema;
  };

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
  let value = {};

  let inputValues = writable<[]>([]);

  let inputAccounts = writable<[]>([]);

  let instruction;

  $: {
    if (selectedTest !== -1) {
      instruction =
        $workspaces[$selectedWorkspace].idls?.find(program => {
          if (typeof program === "string") {
            return false;
          } else {
            return (
              program.name ===
                $workspaces[$selectedWorkspace].tests[selectedTest]?.programId ||
              program.metadata?.address ===
                $workspaces[$selectedWorkspace].tests[selectedTest]?.programId
            );
          }
        })?.instructions?.find(
          (instruction) => instruction.name ==
            $workspaces[$selectedWorkspace].tests[selectedTest]?.instruction
        );

      inputValues.update((values) => {
        if (values?.length == 0) {
          values = instruction?.args?.map((arg) => {
            switch (arg.type) {
              case "u8":
                return 0;
              case "u16":
                return 0;
              case "u32":
                return 0;
              case "u64":
                return 0;
              case "u128":
                return 0;
              default:
                return "";
            }
          });
        }
        return values;
      });
      inputAccounts.update((accounts) => {
        if (!accounts?.length > 0) {
          accounts = instruction?.accounts?.map((account) =>
            [
              "systemProgram",
              "associatedTokenProgram",
              "tokenProgram",
              "tokenProgram",
              "tokenProgram2022",
            ].includes(account.name)
              ? account.name
              : "",
          );
        }
        return accounts;
      });
    }
  }

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

  let selectedProgram: Idl | String = "";

  const updateSelectedProgram = (e) => {
    selectedProgram = e.detail;
  };

  const saveTest = () => {
    $workspaces[$selectedWorkspace].tests[selectedTest].accounts =
      $inputAccounts;
    $workspaces[$selectedWorkspace].tests[selectedTest].args = $inputValues;
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
    <CreateTest
      {selectedTest}
      {selectedProgram}
      on:closeModal={() => (isCreateTestModalOpen = false)}
      on:updateSelectedProgram={updateSelectedProgram}
      on:updateSelectedTest={() =>
        (selectedTest = $workspaces[$selectedWorkspace].tests.length - 1)}
    />
  </Modal>

  <!-- Delete Test Modal -->
  <Modal
    width={350}
    bind:isOpen={isDeleteTestModalOpen}
    on:close={() => (isDeleteTestModalOpen = false)}
  >
    <DeleteTest on:cancelDelete={() => (isDeleteTestModalOpen = false)} />
  </Modal>

  <div class="tests" in:fade|global>
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
              on:updateSelectedTest={(event) => {
                selectedTest = event.detail.index;
                $inputAccounts =
                  $workspaces[$selectedWorkspace].tests[selectedTest]
                    ?.accounts ?? [];
                $inputValues =
                  $workspaces[$selectedWorkspace].tests[selectedTest]?.args ??
                  [];
              }}
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
          <img src="/select-test.svg" alt="Select a Test" />
          <div class="test--builder--empty-state--title">
            Select a test to get started
          </div>
        </div>
      {:else if $workspaces[$selectedWorkspace].tests?.length > 0}
        <form on:submit|preventDefault={saveTest} class="modal--form">
          <!-- Accounts -->
          <div class="test--content">
            <div class="test--form">
              <div class="content--header">
                <div class="test--content--title">Accounts</div>
              </div>
              <div class="instruction--list" in:fade|global={{ duration: 100 }}>
                {#each instruction.accounts as account, index}
                  <div class="test--form--item">
                    <div class="instruction--list--value">
                      {account.name}
                      {#if account.isMut}
                        <img src="/modify.svg" alt="Mut Icon" />
                      {/if}
                      {#if account.isSigner}
                        <img src="/signer.svg" alt="Signer Icon" />
                      {/if}
                    </div>
                    {#if account.name === "systemProgram"}
                      <Select disabled value={`systemProgram`}></Select>
                    {:else if account.name === "associatedTokenProgram"}
                      <Select disabled value={`associatedTokenProgram`} />
                    {:else if account.name === "tokenProgram"}
                      <Select
                        items={["tokenProgram", "tokenProgram2022"]}
                        value={$inputAccounts[index] ?? "tokenProgram"}
                        on:change={(e) => {
                          ($inputAccounts[index] = e.detail.value),
                          saveTest();
                        }}
                      />
                    {:else}
                      <Select
                        items={$workspaces[$selectedWorkspace]?.accounts.map(
                          ({ name }) => name,
                        )}
                        id={`${index}`}
                        placeholder="Select wallet"
                        value={$workspaces[$selectedWorkspace]?.tests[
                          selectedTest
                        ]?.accounts[index] ?? ""}
                        on:change={(event) => {
                          $inputAccounts[index] = event.detail.value;
                          saveTest();
                        }}
                      />
                    {/if}
                  </div>
                {/each}
              </div>
            </div>

            <!-- Args -->
            {#if instruction.args?.length > 0}
              <div class="test--form">
                <div class="content--header">
                  <div class="test--content--title">Arguments</div>
                </div>
                <div
                  class="instruction--list"
                  in:fade|global={{ duration: 100 }}
                >
                  <div class="test--content--list">
                    {#each instruction.args as args, index}
                      <div class="argument">
                        {args.name}
                        <span class="arg--type"
                          >{typeof args.type === "string"
                            ? args.type
                            : JSON.stringify(args.type)}</span
                        >
                      </div>
                      <input
                        class="input--primary"
                        value={`${$inputValues[index]}`}
                        placeholder="Value"
                        on:input={(event) => {
                          if (args.type === "Bytes") {
                            const hexRegex = /^0x([0-9A-Fa-f]+)$/;
                            if (hexRegex.test(event.target.value)) {
                              $inputValues[index] = event.target.value;
                            } else if (
                              isStringArrayInRange(event.target.value)
                            ) {
                              $inputValues[index] = event.target.value;
                            }
                          } else {
                            $inputValues[index] = event.target.value;
                          }
                          saveTest();
                        }}
                        type={getInputTypes(args.type)}
                      />
                    {/each}
                    <!--SubmitForm schema={getSchema(($workspaces[$selectedWorkspace].programs.find(
                    (program) => {
                      if (typeof program === "string") {
                        return false
                      }else {
                      return program.name === $workspaces[$selectedWorkspace].tests[selectedTest]?.programId  || program .metadata?.address === $workspaces[$selectedWorkspace].tests[selectedTest]?.programId}
                    }
                  ))?.instructions[0].args)} {value} on:submit={submit} /-->
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}
