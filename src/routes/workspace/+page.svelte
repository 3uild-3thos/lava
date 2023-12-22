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
  import { PublicKey } from "@solana/web3.js";

  let workspace = $workspaces[$selectedWorkspace];
  let programAlreadyExists = false;
  let workspaceAlreadyExists = false;
  let programExists = false;

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
    if ($workspaces.some((w) => w.name === name)) {
      workspaceAlreadyExists = true;
      return;
    }
    $workspaces[$selectedWorkspace].name = name;
    isRenameModalOpen = false;
    workspace = $workspaces[$selectedWorkspace];
  }

  function deleteWorkspace() {
    $workspaces = $workspaces.filter((w) => w.name !== workspace.name);
    isDeleteModalOpen = false;
    $selectedWorkspace = 0;
    goto("/");
  }

  $: stat = $workspaces[$selectedWorkspace];

  $: gettingStarted = [
    {
      title: "Create a Wallet Account",
      subtitle: "A wallet account is used to sign transactions.",
      completed: $workspaces[$selectedWorkspace]?.wallets?.length > 0,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "get-started-wallet.svg",
      color: "#8A54FE",
    },
    {
      title: "Create a Mint Account",
      subtitle: "A mint account is used to create tokens.",
      completed: $workspaces[$selectedWorkspace]?.tokens?.length > 0,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "get-started-token.svg",
      color: "#FE9154",
    },
    {
      title: "Import IDL",
      subtitle: "An IDL is a JSON file that describes a program's interface.",
      completed: $workspaces[$selectedWorkspace]?.programs?.length > 0,
      buttonText: "Import",
      graphic: "import-idl.svg",
      buttonIcon: "/import.svg",
      color: "#FE6054",
    },
    {
      title: "Create a Program Test",
      subtitle: "Testing your program is the best way to ensure it works.",
      completed: $workspaces[$selectedWorkspace]?.tests?.length > 0,
      buttonText: "Create",
      buttonIcon: "/add.svg",
      graphic: "get-started-test.svg",
      color: "#54FE98",
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

  let token;

  const onClickStep = (e, index) => {
    switch (index) {
      case 0:
        isCreateWalletModalOpen = true;
        break;
      case 1:
        isCreateTokenModalOpen = true;
        break;
      case 2:
        addIDL(e);
        break;
      case 3:
        goto("/tests");
        break;
    }
  };

  let idlModal = false;
  let idlToAdd;

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
        idlModal = true;
        const content = readerEvent.target.result;
        idlToAdd = JSON.parse(content);
        customProgramId = idlToAdd?.metadata?.address; // Set customProgramId to idlToAdd.metadata.address
        customProgramName = idlToAdd?.name; // Set customProgramName to idlToAdd.name
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
  let customProgramId = "";
  let customProgramName = "";

  const isValidAddress = (address) => {
    if (address?.trim() === "") {
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

  function finishIDL() {
    if (
      (customProgramId?.length === 0 || isValidAddress(customProgramId)) &&
      customProgramName?.length > 0
    ) {
      const programAlreadyExists = $workspaces[
        $selectedWorkspace
      ].programs.some((program) => program.name === customProgramName);
      if (programAlreadyExists) {
        programExists = true; // Set programExists to true
        return;
      }

      $workspaces[$selectedWorkspace].programs = [
        ...$workspaces[$selectedWorkspace].programs,
        {
          ...idlToAdd,
          name: customProgramName,
          metadata: {
            ...idlToAdd.metadata,
            address: customProgramId.length === 0 ? undefined : customProgramId,
          },
        },
      ];

      idlModal = false;
      idlToAdd = null;
    }
  }
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
    width={400}
    bind:isOpen={isCreateTokenModalOpen}
    on:close={() => (isCreateTokenModalOpen = false)}
  >
    <CreateToken
      wallets={$workspaces[$selectedWorkspace]?.wallets ?? []}
      {token}
      on:closeTokenModal={() => (isCreateTokenModalOpen = false)}
    />
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
      workspaceExists={workspaceAlreadyExists}
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

  <!-- Add IDL Modal -->
  <Modal width={350} bind:isOpen={idlModal} on:close={() => (idlModal = false)}>
    <h1 class="modal--title">Adding IDL</h1>
    <div class="modal--form">
      <div class="modal--form-title">Name</div>
      <input
        class="input--primary"
        value={idlToAdd?.name}
        placeholder="My Program"
        on:input={(e) => (customProgramName = e.currentTarget.value)}
      />

      <div class="modal--form-title">Program ID</div>
      <input
        class="input--primary"
        placeholder="Optional"
        value={customProgramId}
        on:input={(e) => (customProgramId = e.currentTarget.value)}
      />
      {#if !customProgramId}
        <div class="anchor--provider">
          Your program will be deployed using the Anchor Provider.
        </div>
      {/if}

      {#if programExists}
        <div class="already--exists">
          A program with this name already exists.
        </div>
      {/if}

      <div class="btns--modal">
        <button
          class={`btn btn--lava ${
            (customProgramId?.length > 0 && !isValidAddress(customProgramId)) ||
            customProgramName?.length === 0
              ? " btn--disabled"
              : ""
          }`}
          disabled={(customProgramId?.length > 0 &&
            !isValidAddress(customProgramId)) ||
            customProgramName?.length === 0}
          on:click={() => finishIDL()}>Finish</button
        >
      </div>
    </div></Modal
  >

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
            <img src="./create-wallet.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {stat?.wallets?.length}
              </div>
              <div class="workspace--stat--title">Wallets</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #FFBE41`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./create-token.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {stat?.tokens?.length}
              </div>
              <div class="workspace--stat--title">Mint Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #FE6054`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./create-program.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {stat?.programs?.length}
              </div>
              <div class="workspace--stat--title">Programs</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #54FE98`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./create-test.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {stat?.tests?.length || 0}
              </div>
              <div class="workspace--stat--title">Tests</div>
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
                on:click={() => onClickStep(index)}
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
                    on:click={(e) => onClickStep(e, index)}
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
