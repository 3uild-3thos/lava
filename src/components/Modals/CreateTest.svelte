<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import type { Idl } from "@coral-xyz/anchor";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let nameAlreadyExists = false;
  export let selectedTest: number = -1;

  let testName = $workspaces[$selectedWorkspace]?.tests[selectedTest]?.name ?? "";

  let formTouched: any = { name: false };
  let valid: any = { name: false };

  $: valid = {
    name: testName?.length > 0 && testName?.length <= 32,
  };

  $: formTouched = {
    name: testName?.length > 0 || formTouched.name,
  };

  function handleInputTouch(field: string) {
    formTouched[field] = true;
  }

  const updateTest = () => {
    const testNameExists = $workspaces[$selectedWorkspace].tests.some(test => test.name === testName);
    if (valid.name && !testNameExists) {
      $workspaces[$selectedWorkspace].tests[selectedTest] = {
        name: testName,
        programId: selectedProgram?.metadata?.address ?? selectedProgram.name,
        instruction: selectedInstruction.name,
        accounts: [],
        args: [],
      };
      dispatch("closeModal");
      dispatch("updateSelectedTest");
    } else {
      nameAlreadyExists = true;
    }
  };

  const createTest = () => {
    const testNameExists = $workspaces[$selectedWorkspace].tests.some(test => test.name === testName);
    if (valid.name && !testNameExists) {
      $workspaces[$selectedWorkspace].tests = [
        ...$workspaces[$selectedWorkspace].tests,
        {
          name: testName,
          programId: selectedProgram?.metadata?.address ?? selectedProgram.name,
          instruction: selectedInstruction?.name,
          accounts: [],
          args: [],
        },
      ];
      dispatch("closeModal");
      dispatch("updateSelectedTest");
    } else {
      nameAlreadyExists = true;
    }
  };

  $: selectedProgram = 
  $workspaces[$selectedWorkspace]?.accounts?.find(test => $workspaces[$selectedWorkspace]?.tests[selectedTest]?.programId == test.name) ?? "";
  $: selectedInstruction = 
  $workspaces[$selectedWorkspace]?.idls?.find(idl => idl.name == selectedProgram.name)?.instructions?.find(instruction => instruction.name == $workspaces[$selectedWorkspace]?.tests[selectedTest]?.instruction) ?? "";
</script>

<h1 class="modal--title">
  {selectedTest === -1 ? "Create a Test" : "Edit Test"}
</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Test name</div>
    <div
      class={`modal--form--label-end ${
        testName?.length > 32 ? "text-lava-error" : ""
      }`}
    >
      {testName?.length}/32
    </div>
  </div>
  <input
    class="input--primary {!valid.name && formTouched.name
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="Escrow Test"
    bind:value={testName}
    on:blur={() => handleInputTouch("name")}
  />

  <div class="modal--form-title">Program</div>
  <Select
    items={$workspaces[$selectedWorkspace]?.accounts.filter(
      (account) => account.kind === "Program"
    ).map(
      (program, index) => ({
        ...program,
        value: index
      })
    ) ?? []}
    value={selectedProgram}
    placeholder="Select a Program"
    on:change={(e) => {
      selectedProgram = e.detail;
    }}
  >
    <div slot="selection" class="select--option" let:selection>
      <Icon
        size={24}
        value={selection.name}
        color={"#FE6054"}
        border={true}
        radius={7}
      />
      <div class="select--text">{selection.name}</div>
    </div>
    <div slot="item" class="select--option" let:item>
      <Icon
        size={24}
        value={item.name}
        color={"#FE6054"}
        border={true}
        radius={7}
      />
      <div class="select--text">{item.name}</div>
    </div>
  </Select>

  <div class="modal--form-title">Instructions</div>
  <Select
    items={($workspaces[$selectedWorkspace]?.idls?.find((idl)=>idl.name == selectedProgram.name)?.instructions.map(
      (instruction, index) => ({
        ...instruction,
        value: index
      })
    ) ?? [])}
    placeholder="Select an Instruction"
    value={selectedInstruction}
    on:change={(e) => {
      selectedInstruction = e.detail;
    }}
    on:clear={() => (selectedInstruction = [])}
  >
    <div slot="selection" class="select--option" let:selection>
      <Icon
        size={24}
        value={selection.name}
        color={"#FE6054"}
        border={true}
        radius={7}
      />
      <div class="select--text">{selection.name}</div>
    </div>
    <div slot="item" class="select--option" let:item>
      <Icon
        size={24}
        value={item.name}
        color={"#FE6054"}
        border={true}
        radius={7}
      />
      <div class="select--text">{item.name}</div>
    </div>
  </Select>
</div>

{#if nameAlreadyExists}
  <div class="already--exists">
    A test with this name already exists
  </div>
{/if}
<div class="btns--modal">
  <button class="btn btn--lava {!valid.name || !selectedProgram || !selectedInstruction ? 'btn--disabled' : ''}" 
  disabled={!selectedProgram || !selectedInstruction || !testName || testName?.length > 32}
  on:click={selectedTest === -1 ? createTest : updateTest}>
  {selectedTest === -1 ? 'Create' : 'Update'}
</button>
</div>
