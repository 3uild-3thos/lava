<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Modal from "../../components/Modal.svelte";
  import Export from "../../components/Modals/Export.svelte";
  import RenameWorkspace from "../../components/Modals/RenameWorkspace.svelte";
  import DeleteWorkspace from "../../components/Modals/DeleteWorkspace.svelte";
  import { goto } from "$app/navigation";

  let workspace = $workspaces[$selectedWorkspace];

  let ready = false;
  onMount(() => {
    ready = true;
  });

  let isExportModalOpen = false;
  let isRenameModalOpen = false;
  let isDeleteModalOpen = false;

  function exportWorkspace() {
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
  }

  function updateWorkspaceName(name) {
    $workspaces[$selectedWorkspace].name = name;
    isRenameModalOpen = false;
    workspace = $workspaces[$selectedWorkspace];
  }

  function deleteWorkspace() {
    $workspaces = $workspaces.filter((w) => w.name !== workspace.name);
    isDeleteModalOpen = false;
    goto("/");
  }

  let gettingStarted = [
    {
      title: "Create your first Wallet Account",
      subtitle: "Subtitle",
      completed: workspace.wallets.length > 0,
    },
    {
      title: "Create your first Token Account",
      subtitle: "Subtitle",
      completed: workspace.tokens.length > 0,
    },
    {
      title: "Assign a token to a wallet",
      subtitle: "Subtitle",
      completed: workspace.wallets.some((tokens) => tokens.tokens.length > 0),
    },
    {
      title: "Import IDL",
      subtitle: "Subtitle",
      completed: false,
    },
  ].map((step, index, array) => {
    if (index === 0) {
      return { ...step, nextStepActive: step.completed || index === 0 };
    } else {
      return {
        ...step,
        nextStepActive: step.completed || array[index - 1].completed,
      };
    }
  });
</script>

{#if ready}
  <!-- Export Modal -->
  <Modal
    width={300}
    bind:isOpen={isExportModalOpen}
    on:close={() => (isExportModalOpen = false)}
  >
    <Export on:exportWorkspace={() => exportWorkspace()} />
  </Modal>

  <!-- Rename Modal -->
  <Modal
    width={300}
    bind:isOpen={isRenameModalOpen}
    on:close={() => (isRenameModalOpen = false)}
  >
    <RenameWorkspace
      workspaceName={workspace.name}
      on:updateWorkspace={(event) => updateWorkspaceName(event.detail)}
    />
  </Modal>

  <!-- Delete Workspace -->
  <Modal
    width={300}
    bind:isOpen={isDeleteModalOpen}
    on:close={() => (isDeleteModalOpen = false)}
  >
    <DeleteWorkspace
      on:deleteWorkspace={() => deleteWorkspace()}
      on:cancelDelete={() => (isDeleteModalOpen = false)}
    />
  </Modal>

  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--slug">Viewing Workspace</div>
      <div class="common--header" style="padding-right:0;">
        <h1
          class="common--title"
          style="margin-bottom:0;"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          {workspace.name}
        </h1>
        <div
          class="workspace--edit"
          on:click={() => (isRenameModalOpen = true)}
        />
        <div class="header--buttons">
          <button
            class="btn btn--primary workspace--btn btn--fit"
            on:click={() => (isExportModalOpen = true)}
          >
            <img src="/export.svg" alt="Export Icon" />
            Export
          </button>
          <button
            class="btn btn--lava btn--fit"
            on:click={() => (isDeleteModalOpen = true)}
          >
            Delete Workspace
          </button>
        </div>
      </div>

      <div class="workspace--view">
        <div class="workspace--stats">
          <div
            class="workspace--stat"
            style={`--color: #00FFC2`}
            in:fade={{ duration: 200 }}
          >
            <img src="./standard-wallet.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {workspace.wallets.length}
              </div>
              <div class="workspace--stat--title">Wallets</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #FFBE41`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./token-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {workspace.tokens.length}
              </div>
              <div class="workspace--stat--title">Token Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #8A54FE`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./mint-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">0</div>
              <div class="workspace--stat--title">Mint Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #5498FE`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./metadata-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">0</div>
              <div class="workspace--stat--title">Metadata Accounts</div>
            </div>
          </div>
        </div>

        <div class="workspace--items">
          <div class="workspace--getting-started">
            <div class="workspace--getting-started--title">
              Getting Started <span style="color: #A0A0AB"
                >({gettingStarted.filter((step) => step.completed)
                  .length}/{gettingStarted.length})</span
              >
            </div>
            <div class="workspace--getting-started--card">
              {#each gettingStarted as step, index}
                <div
                  class="workspace--getting-started--step"
                  style={`opacity: ${step.nextStepActive ? "100%" : "40%"}
                  
                  ;--color: ${step.completed ? "#54FE98" : "#A0A0AB40"}
                  
                  ;--opacity: ${
                    index === gettingStarted.length - 1 ? "0%" : "100%"
                  }`}
                >
                  {#if step.completed}
                    <div class="workspace--getting-started--step-icon">
                      <img src="/check.svg" />
                    </div>
                  {:else}
                    <div class="workspace--getting-started--step-icon">
                      <img src="/dash.svg" />
                    </div>
                  {/if}
                  <div class="workspace--getting-started--step--text">
                    <div class="workspace--getting-started--step--title">
                      {step.title}
                    </div>
                    <div class="workspace--getting-started--step--subtitle">
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          <div class="workspace--idl">
            <div class="workspace--idl--header">
              <div class="workspace--getting-started--title">IDL</div>
              <button
                class="btn btn--primary workspace--btn btn--fit"
                on:click={() => alert("Not implemented yet")}
              >
                <img src="/import.svg" alt="Export Icon" />
                Import
              </button>
            </div>
            <div class="workspace--idl--card" />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
