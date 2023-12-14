<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let workspaceName: string;

  let formTouched = { name: false };
  let valid = { name: false };

  $: valid = {
    name: workspaceName?.length > 0 && workspaceName?.length <= 32,
  };

  $: formTouched = {
    name: workspaceName?.length > 0 || formTouched.name,
  };

  function handleInputTouch(field: string) {
    formTouched[field] = true;
  }
</script>

<h1 class="modal--title">Rename Workspace</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Workspace Name</div>
    <div
      class={`modal--form--label-end${
        workspaceName?.length > 32 ? "text-lava-error" : ""
      }`}
    >
      {workspaceName?.length}/32
    </div>
  </div>
  <input
    class="input--primary {!valid.name && formTouched.name
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="Main Wallet"
    bind:value={workspaceName}
    on:blur={() => handleInputTouch("name")}
  />
  <div class="btns--modal">
    <button
      class={`btn btn--lava${!valid.name ? " btn--disabled" : ""}`}
      on:click={() => dispatch("updateWorkspace", workspaceName)}
      disabled={!valid.name}>Update</button
    >
  </div>
</div>
