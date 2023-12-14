<script>
  import Modal from "../components/Modal.svelte";
  import { workspaces, selectedWorkspace } from "../stores/store";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let createModal = false;
  let name = "";
  let isValid = false;
  let formTouched = false;
  $: formTouched = name.length > 0;
  $: isValid = name.length > 0 && name.length < 32;
  let isReady = false;
  onMount(() => {
    isReady = true;
  });
  const addWorkspace = () => {
    formTouched = true;
    if (isValid) {
      $workspaces = [
        ...$workspaces,
        { name, programs: [], wallets: [], tokens: [] },
      ];
      $selectedWorkspace = $workspaces.length - 1;
      createModal = false;
      goto("/workspace");
    }
  };

  const setActiveWorkspace = (index) => {
    $selectedWorkspace = index;
    goto("/workspace");
  };
</script>

{#if isReady}
  <div class="workspace--home" in:fade|global>
    {#if createModal}
      <Modal bind:isOpen={createModal} on:close={() => (createModal = false)}>
        <h1 class="modal--title">Create a new Workspace</h1>
        <div class="modal--form">
          <div class="modal--form-title">Workspace Name</div>
          <input
            class="input--primary {!isValid && formTouched
              ? 'input--invalid'
              : ''}"
            placeholder="New Workspace"
            bind:value={name}
          />
        </div>

        <div class="btns--modal">
          <button
            class="btn btn--lava"
            on:click={() => {
              addWorkspace();
            }}>Create</button
          >
        </div>
      </Modal>
    {/if}
    <div class="workspace--left">
      <div class="workspace--home--header">
        <img
          src="./lava-logo.svg"
          class="workspace--logo"
          alt="Lava Logo Colored"
        />
        <div class="workspace--home--title">
          Welcome to <span>Lava</span>
        </div>
        <div class="workspace--home--version">Version 0.2.0</div>
      </div>

      <div class="workspace--home--create">
        <div class="workspace--create--title">Workspaces</div>
        <div class="workspace--create--options">
          <div class="workspace--create--option">
            <img
              src="./new-workspace.svg"
              alt="New Workspace"
              class="workspace--option-img"
            />
            <div class="workspace--create--text">
              <div class="workspace--create--text--title">
                Create a new Workspace
              </div>
              <div class="workspace--create--text--subtitle">
                Create a new blank workspace
              </div>
            </div>
            <button
              class="btn btn--lava workspace--option-btn"
              on:click={() => {
                createModal = true;
              }}>Create</button
            >
          </div>
          <hr class="divider" />
          <div class="workspace--create--option">
            <img
              src="./existing-workspace.svg"
              alt="Existing Workspace"
              class="workspace--option-img"
            />
            <div class="workspace--create--text">
              <div class="workspace--create--text--title">
                Open an existing Workspace
              </div>
              <div class="workspace--create--text--subtitle">
                Browse your computer for an existing Lava workspace
              </div>
            </div>
            <button
              class="btn btn--primary workspace--option-btn"
              on:click={() => {
                alert("Not implemented yet");
              }}>Import</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="workspace--right">
      <div class="workspace--home--recents">
        <div class="workspace--create--title">Workspaces</div>
        <div class="workspace--create--options">
          {#each $workspaces as workspace, index}
            <div
              class="workspace--list--item"
              in:fade|global={{ delay: index * 100, duration: 100 }}
            >
              <div
                class={`workspace--list--item--text${
                  $selectedWorkspace === index ? " active" : ""
                }`}
              >
                <div
                  on:click={() => {
                    $selectedWorkspace = index;
                  }}
                  class={`workspace--list--item--text--title`}
                >
                  {workspace.name}
                </div>
              </div>
              <!-- <button
              class="btn btn--primary workspace--option-btn"
              on:click={() => {
                const data = JSON.stringify(workspace);
                const blob = new Blob([data], { type: "text/plain" });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.setAttribute("hidden", "");
                a.setAttribute("href", url);
                a.setAttribute("download", `${workspace.name}.json`);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
              }}>Save</button
            > -->
              <button
                class="btn btn--primary workspace--option-btn"
                on:click={() => setActiveWorkspace(index)}
              >
                {#if $selectedWorkspace === index}
                  View
                {:else}
                  Use
                {/if}
              </button>
            </div>
            {#if index < $workspaces.length - 1}
              <hr class="divider" />
            {/if}
          {/each}
          {#if $workspaces.length == 0}
            <div class="workspace--create--option">
              <div class="workspace--create--text">
                <div class="workspace--create--text--title">
                  No workspaces found
                </div>
                <div class="workspace--create--text--subtitle">
                  Create a new workspace or import an existing one
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
