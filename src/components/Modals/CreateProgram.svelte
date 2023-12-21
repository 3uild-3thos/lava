<script lang="ts">
  import { PublicKey } from "@solana/web3.js";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let editingProgram = -1;
  let programId = "";
  let programName = "";
  let idlToAdd = null;
  let programAlreadyExists = false;

  const addIDL = (e) => {
    e.preventDefault();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result;
        idlToAdd = JSON.parse(content);
        programName = idlToAdd.name;
        programId = idlToAdd.metadata.address;
      };
    };
    input.click();
  };

  function createProgram() {
    if (idlToAdd) {
      const existingProgram = $workspaces[$selectedWorkspace].programs.find(
        (program) => program.name === programName
      );
      if (existingProgram) {
        programAlreadyExists = true;
        return;
      }

      $workspaces[$selectedWorkspace].programs = [
        ...$workspaces[$selectedWorkspace].programs,
        {
          ...idlToAdd,
          name: programName,
          metadata: {
            ...idlToAdd.metadata,
            address: programId,
          },
        },
      ];
      dispatch("closeProgramModal");
    } else {
      const existingProgram = $workspaces[$selectedWorkspace].programs.find(
        (program) => program.name === programName
      );
      if (existingProgram) {
        programAlreadyExists = true;
        return;
      }

      $workspaces[$selectedWorkspace].programs = [
        ...$workspaces[$selectedWorkspace].programs,
        {
          name: programName,
          metadata: {
            address: programId ? programId : undefined,
          },
        },
      ];
      dispatch("closeProgramModal");
    }
  }

  const isValidAddress = (address: string) => {
    if (address.trim() === "") {
      return true;
    } else {
      try {
        new PublicKey(address);
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  $: if (editingProgram === -1) {
    programId = "";
  }

  let formTouched = { name: false, id: false };
  let valid = { name: false, id: false };

  $: valid = {
    id: programId.length > 0,
    name: programName.length > 0 && programName.length <= 32,
  };

  function handleInputTouch(field: string) {
    formTouched[field] = true;
    console.log(formTouched);
  }
</script>

<h1 class="modal--title">
  {editingProgram == -1 ? "Create a new Program" : "Edit Program"}
</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Import IDL (Optional)</div>
  </div>
  <div class="modal--form-inline">
    <button class="btn btn--primary btn--fit" on:click={addIDL}>
      Import
    </button>
    {#if idlToAdd}
      <img src="/check.svg" alt="Check Icon" style="width:16px;height:16px;" />
    {/if}
  </div>

  <div class="modal--form-inline">
    <div class="modal--form-title">Program Name</div>
    <div
      class={`modal--form--label-end ${
        programName.length > 32 ? " text-lava-error" : ""
      }`}
    >
      {programName.length}/32
    </div>
  </div>
  <input
    class="input--primary {!valid.name && formTouched.name
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="Escrow Program"
    bind:value={programName}
    on:blur={() => handleInputTouch("name")}
  />
</div>
<div class="modal--form-title">Program ID</div>
<input
  class="input--primary {!valid.id && formTouched.id ? 'input--invalid' : ''}"
  placeholder="Optional"
  bind:value={programId}
/>

{#if !programId}
  <div class="anchor--provider">
    Your program will be deployed using the Anchor Provider.
  </div>
{/if}

{#if programAlreadyExists}
  <div class="already--exists">
    A program with this name already exists in this workspace.
  </div>
{/if}

<div class="btns--modal">
  <button
    class={`btn btn--lava ${
      (programId.length > 0 && !isValidAddress(programId)) || !valid.name
        ? " btn--disabled"
        : ""
    }`}
    disabled={(programId.length > 0 && !isValidAddress(programId)) ||
      !valid.name}
    on:click={() => {
      createProgram();
    }}>Create Program</button
  >
</div>