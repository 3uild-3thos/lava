<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import type { Idl } from "@coral-xyz/anchor";
  import { createEventDispatcher } from "svelte";
  import filter from "svelte-select/filter";
  const dispatch = createEventDispatcher();

  export let selectedTest: number = -1;
  export let selectedProgram: Idl;

  let testName: string = "";

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

  let selectedInstruction;

  const createTest = () => {
    if (valid.name) {
      $workspaces[$selectedWorkspace].tests = [
        ...$workspaces[$selectedWorkspace].tests,
        {
          name: testName,
          programId: selectedProgram?.metadata?.address ?? selectedProgram.name,
          instruction: selectedInstruction,
          accounts: [],
          args: [],
        },
      ];
    }
    dispatch("closeModal");
    dispatch("updateSelectedTest");
  };
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
    ) ?? []}
    placeholder="Select a Program"
    on:change={(e) => {
      dispatch("updateSelectedProgram", e.detail);
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
    items={($workspaces[$selectedWorkspace]?.idls?.find((idl)=>idl.name == selectedProgram.name)?.instructions ?? [])}
    placeholder="Select an Instruction"
    bind:value={selectedInstruction}
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

<div class="btns--modal">
  <button class="btn btn--lava" on:click={createTest}>Create</button>
</div>
