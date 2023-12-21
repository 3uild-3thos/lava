<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  export let editingPda = -1;
  export let pdaName = "";
  export let pdaAddress = "";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let selectedSeed = null;
  export let selectedProgram = "";
  export let seeds = [];
  const addSeed = (e) => {
    seeds = [...seeds, e.detail.value];
    selectedSeed = null;
  };
  let formData = [];
  let pdaSeeds = [];
  let formTouched = { pdaName: false };
  let valid = { pdaName: false };
  let pdaAlreadyExists = false;

  let seedsTypes = [
    "String",
    "Pubkey",
    "Bytes",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
  ];

  $: if (selectedProgram === "") {
    pdaAddress = "";
  }

  function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value;
  }

  function handleSelect(event, index) {
    const { value } = event.detail;
    formData[index] = value;
  }

  function handleSubmit() {
    const pdaExists = $workspaces[$selectedWorkspace].pdas?.some(
      (pda) => pda.name === pdaName
    );
    if (pdaExists) {
      pdaAlreadyExists = true;
      return;
    }

    pdaSeeds = seeds?.map((seed, index) => {
      return {
        value: formData[index],
        type: seed,
      };
    });
    pdaSeeds = [...pdaSeeds, { value: selectedProgram, type: "Program" }];
    if ($workspaces[$selectedWorkspace].pdas === undefined) {
      $workspaces[$selectedWorkspace].pdas = [];
    }
    $workspaces[$selectedWorkspace].pdas = [
      ...$workspaces[$selectedWorkspace].pdas,
      {
        name: pdaName,
        seeds: pdaSeeds,
      },
    ];
    dispatch("closePDAModal");
  }

  function editPda() {
    if (editingPda) {
      const pdaExists = $workspaces[$selectedWorkspace].pdas?.some(
        (pda, index) => index !== editingPda && pda.name === pdaName
      );
      if (pdaExists) {
        pdaAlreadyExists = true;

        return;
      }

      $workspaces[$selectedWorkspace].pdas[editingPda] = {
        name: pdaName,
        seeds: pdaSeeds,
      };
      dispatch("closePDAModal");
    }
  }

  function typeFromSeed(seed) {
    switch (seed) {
      case "String":
        return "text";
      case "Pubkey":
        return "text";
      case "Bytes":
        return "text";
      case "u8":
        return "number";
      case "u16":
        return "number";
      case "u32":
        return "number";
      case "u64":
        return "number";
      case "u128":
        return "number";
      default:
        return "text";
    }
  }

  $: valid = {
    pdaName: pdaName?.length > 0 && pdaName?.length <= 32,
  };

  $: formTouched = {
    pdaName: pdaName.length > 0,
  };

  $: if (editingPda === -1) {
    pdaName = "";
    seeds = [];
  }

  $: validSeeds = seeds.every((seed, index) => formData[index]?.length > 1);
</script>

<h1 class="modal--title">{editingPda === -1 ? "Create PDA" : "Edit PDA"}</h1>
<form
  on:submit|preventDefault={editingPda === -1 ? handleSubmit : editPda}
  class="modal--form"
>
  <div class="modal--form-inline">
    <div class="modal--form-title">PDA Name</div>
    <div
      class={`modal--form--label-end ${
        pdaName?.length > 32 ? "text-lava-error" : ""
      }`}
    >
      {pdaName?.length}/32
    </div>
  </div>
  <input
    class="input--primary {!valid.pdaName && formTouched.pdaName
      ? 'input--invalid'
      : ''}"
    type="text"
    placeholder="PDA"
    bind:value={pdaName}
  />

  <div class="modal--form-title">Seeds</div>

  {#each seeds as seed, index}
    <div
      class="modal--form-seed"
      style="display: flex; position:relative; justify-content: space-between; align-items: center; margin-bottom:0.5rem;"
    >
      {#if seed === "Pubkey"}
        <Select
          class="modal--form-select block"
          items={$workspaces[$selectedWorkspace]?.wallets?.map((w) =>
            w?.address.length > 0 ? w?.address : w.name
          )}
          id={`${index}`}
          on:change={(e) => handleSelect(e, index)}
          placeholder="Select wallet"
        />
      {:else}
        <input
          class="input--primary"
          type={typeFromSeed(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
        />
      {/if}
      <div
        class="remove--seed"
        style={seed === "Pubkey" ? "right: 20px;" : ""}
        on:click={() => {
          seeds = seeds.filter((s, i) => i != index);
        }}
      >
        <img src="./remove.svg" alt="Remove" />
      </div>
    </div>
  {/each}

  <Select
    class="modal--form-select"
    bind:value={selectedSeed}
    items={seedsTypes}
    on:change={addSeed}
    placeholder="Add another seed"
  />

  <div class="modal--form-title">Program</div>
  <Select
    class="modal--form-select"
    bind:value={selectedProgram}
    items={$workspaces[$selectedWorkspace]?.programs?.map(
      (p) => p?.metadata?.address ?? p.name
    )}
    placeholder="Select program"
  />

  {#if pdaAlreadyExists}
    <div class="already--exists">A PDA with this name already exists</div>
  {/if}

  <div class="btns--modal">
    <button
      disabled={!valid.pdaName ||
        !selectedProgram ||
        !seeds.length ||
        !validSeeds}
      type="submit"
      class="btn btn--lava {!valid.pdaName ||
      !selectedProgram ||
      !seeds.length ||
      !validSeeds
        ? 'btn--disabled'
        : ''}"
    >
      Create
    </button>
  </div>
</form>
