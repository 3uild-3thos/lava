<script lang="ts">
  import { PublicKey } from "@solana/web3.js";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let editingProgram = -1;
  let programId = "";
  let programName = "";

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
  type="number"
  placeholder="1234567890"
  bind:value={programId}
/>

<div class="btns--modal">
  <button
    class={`btn btn--lava ${valid.id && valid.name ? "" : " btn--disabled"}`}
    disabled={true}
    on:click={() => {
      handleInputTouch("id");
      handleInputTouch("name");
    }}>Create Program</button
  >
</div>
