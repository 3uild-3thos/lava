<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import Icon from "../avatars/index.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";

  export let selectedTest: number = -1;

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

  $: console.log($workspaces[$selectedWorkspace]?.programs);

  let selectedProgram: [
    {
      name: string;
      instructions: string[];
    }
  ];

  let selectedInstruction: string;
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
    items={$workspaces[$selectedWorkspace]?.programs.map((name) => name) ?? []}
    placeholder="Select a Program"
    on:change={(e) => (selectedProgram = e.detail)}
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
    items={selectedProgram?.instructions}
    placeholder="Select an Instruction"
    disabled={!selectedProgram}
    class={`${!selectedProgram ? "input--disabled" : ""}`}
    on:change={(e) => (selectedInstruction = e.detail.value)}
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
  <button class="btn btn--lava">Create</button>
</div>