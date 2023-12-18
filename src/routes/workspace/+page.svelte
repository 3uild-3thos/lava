<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Modal from "../../components/Modal.svelte";
  import Export from "../../components/Modals/Export.svelte";
  import RenameWorkspace from "../../components/Modals/RenameWorkspace.svelte";
  import DeleteWorkspace from "../../components/Modals/DeleteWorkspace.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import CreateWallet from "../../components/Modals/CreateWallet.svelte";
  import CreateToken from "../../components/Modals/CreateToken.svelte";

  let workspace = $workspaces[$selectedWorkspace];

  let ready = false;
  onMount(() => {
    ready = true;
  });

  let isExportModalOpen = false;
  let isRenameModalOpen = false;
  let isDeleteModalOpen = false;

  let hoveredStep = -1;

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
      title: "Create a Wallet Account",
      subtitle: "A wallet account is used to sign transactions.",
      completed: workspace.wallets.length > 0,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "create-wallet.svg",
      color: "#8A54FE",
    },
    {
      title: "Create a Mint Account",
      subtitle: "A mint account is used to create tokens.",
      completed: workspace.tokens.length > 0,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "create-token.svg",
      color: "#FE9154",
    },
    {
      title: "Import IDL",
      subtitle: "An IDL is a JSON file that describes a program's interface.",
      completed: false,
      buttonText: "Import",
      graphic: "import-idl.svg",
      buttonIcon: "/import.svg",
      color: "#0066FF",
    },
    {
      title: "Create a Program Test",
      subtitle: "Testing your program is the best way to ensure it works.",
      completed: false,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "create-test.svg",
      color: "#FE6054",
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

  const onClickStep = (index) => {
    switch (index) {
      case 0:
        isCreateWalletModalOpen = true;
        break;
      case 1:
        isCreateTokenModalOpen = true;
        break;
      case 2:
        addIDL();
        break;
      case 3:
        goto("/tests");
        break;
      default:
        alert("Not implemented yet");
    }
  };

  const addIDL = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result;
        const idl = JSON.parse(content);
        $workspaces[$selectedWorkspace].programs = [
          ...$workspaces[$selectedWorkspace].programs,
          idl,
        ];
      };
    };
    input.click();
  };

  let isCreateWalletModalOpen = false;
  let isCreateTokenModalOpen = false;
  let editingWallet = -1;
  let walletName = "";
  let walletAddress = "";
  let sol_balance = 10;
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Workspace`}
  </title>
</svelte:head>

{#if ready}
  <!-- Create Walllet -->
  <Modal
    width={300}
    bind:isOpen={isCreateWalletModalOpen}
    on:close={() => (isCreateWalletModalOpen = false)}
  >
    <CreateWallet
      {editingWallet}
      {walletName}
      {sol_balance}
      {walletAddress}
      on:closeModal={() => (isCreateWalletModalOpen = false)}
    />
  </Modal>
  <!-- Create Token-->
  <Modal
    width={350}
    bind:isOpen={isCreateTokenModalOpen}
    on:close={() => (isCreateTokenModalOpen = false)}
  >
    <CreateToken on:closeTokenModal={() => (isCreateTokenModalOpen = false)} />
  </Modal>

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
            style={`--color: #8A54FE`}
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
              <div class="workspace--stat--title">Mint Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #00FFC2`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./metadata-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">0</div>
              <div class="workspace--stat--title">Metadata Accounts</div>
            </div>
          </div>
        </div>

        <div class="workspace--getting-started">
          <div class="workspace--getting-started--title">
            Getting Started <span style="color: #A0A0AB"
              >({gettingStarted.filter((step) => step.completed)
                .length}/{gettingStarted.length})</span
            >
          </div>
          <div class="workspace--getting-started--grid">
            {#each gettingStarted as step, index}
              <div
                class="workspace--getting-started--card"
                on:mouseover={() => (hoveredStep = index)}
                on:mouseout={() => (hoveredStep = -1)}
                style={`--color: ${step.color}; opacity: ${
                  hoveredStep !== -1 && hoveredStep !== index ? 0.2 : 1
                }`}
                in:fade|global={{ delay: (index + 1) * 100, duration: 200 }}
              >
                {#if step.completed}
                  <div class="completed--badge">Completed</div>
                {/if}
                <div class="workspace--getting-started--step">
                  <img
                    src={step.graphic}
                    class="workspace--getting-started--graphic"
                  />
                  <!-- {#if step.completed}
                    <div class="workspace--getting-started--step-icon">
                      <img src="/check.svg" />
                    </div>
                  {:else}
                    <div class="workspace--getting-started--step-icon">
                      <img src="/dash.svg" />
                    </div>
                  {/if} -->
                  <div class="workspace--getting-started--step--title">
                    {step.title}
                  </div>
                  <div class="workspace--getting-started--step--subtitle">
                    {step.subtitle}
                  </div>
                  <button
                    class="btn btn--primary btn--fit getting-started--btn"
                    on:click={() => onClickStep(index)}
                    ><img
                      style="width:16px;height:16px;margin-right:5px;"
                      src={step.buttonIcon}
                      alt="Step Icon"
                    />{step.buttonText}</button
                  >
                </div>
              </div>
            {/each}
          </div>
          <!-- <div class="workspace--idl">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
{/if}
