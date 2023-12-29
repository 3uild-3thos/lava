<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  export let editingPda = -1;
  export let pdaName = "";
  export let pdaAddress = "";
  export let selectedProgram = "";
  export let seeds = [];

  import { createEventDispatcher } from "svelte";
  import getInputTypes from "../../helpers/getInputTypes";
  import isStringArrayInRange from "../../helpers/isArrayInRange";
  const dispatch = createEventDispatcher();

   $: if(editingPda !== -1) {
     selectedProgram = $workspaces[$selectedWorkspace]?.accounts[editingPda].program;
     formData =
      editingPda !== -1
        ? seeds.filter((s) =>s?.kind != "Program")?.map((s) => s?.value)
        : [];
    }

  let selectedSeed = null;
  const addSeed = (e) => {
    seeds = [...seeds, e.detail.value];
    selectedSeed = null;
  };

  let formData =
    editingPda !== -1
      ? seeds.filter((s) => s?.kind != "Program")?.map((s) => s?.value)
      : [];
  let pdaSeeds =
    editingPda !== -1
      ? seeds.filter((s) => s?.kind != "Program").map((s) => s?.kind)
      : [];
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

  let invalid_fields = [];

  function handleInput(event) {
    const { name, value } = event.target;
    if (seeds[name] == "String") {
      formData[name] = value as string;
    } else if (seeds[name] == "Pubkey") {
      formData[name] = value as string;
    } else if (seeds[name] == "Bytes") {
      const hexRegex = /^0x([0-9A-Fa-f]+)$/;
      if (hexRegex.test(value)) {
        formData[name] = value;
        invalid_fields = invalid_fields.filter((field) => field !== name);
      } else if (isStringArrayInRange(value)) {
        formData[name] = value;
        invalid_fields = invalid_fields.filter((field) => field !== name);
      } else {
        invalid_fields = [...invalid_fields, name];
      }
    } else if (seeds[name] == "u8") {
      formData[name] = value as number;
    } else if (seeds[name] == "u16") {
      formData[name] = value as number;
    } else if (seeds[name] == "u32") {
      formData[name] = value as number;
    } else if (seeds[name] == "u64") {
      formData[name] = value as number;
    } else if (seeds[name] == "u128") {
      formData[name] = value as number;
    } else{
      formData[name] = value as string;
    }
  }

  function handleSelect(event, index) {
    const { value } = event.detail;
    formData[index] = value;
  }

  function handleSubmit() {
    const pdaExists = $workspaces[$selectedWorkspace].accounts?.some(
      (account) => account.name === pdaName
    );
    if (pdaExists) {
      pdaAlreadyExists = true;
      return;
    }

    pdaSeeds = seeds?.map((seed, index) => {
      return {
        value: formData[index],
        kind: seed,
      };
    });
    pdaSeeds = [...pdaSeeds];
    if ($workspaces[$selectedWorkspace].accounts === undefined) {
      $workspaces[$selectedWorkspace].accounts = [];
    }
    $workspaces[$selectedWorkspace].accounts = [
      ...$workspaces[$selectedWorkspace].accounts,
      {
        name: pdaName,
        seeds: pdaSeeds,
        kind: "pda",
        program: selectedProgram,
      },
    ];
    dispatch("closePDAModal");
  }

  function editPda() {
    if (editingPda !== -1) {
      const pdaExists = $workspaces[$selectedWorkspace].accounts?.some(
        (account, index) => index !== editingPda && account.name === pdaName
      );
      if (pdaExists) {
        pdaAlreadyExists = true;
        return;
      }

      const ataAccounts = $workspaces[$selectedWorkspace].accounts.filter(
        (account) =>
          account.kind === "ata" &&
          account.authority ===
            $workspaces[$selectedWorkspace].accounts[editingPda].name
      );
      ataAccounts.forEach((account) => {
        account.authority = pdaName;
        account.name = account.authority + account.mint;
      });
      pdaSeeds = seeds?.filter((s)=>s.kind != "Program").map((seed, index) => {
      return {
        value: formData[index],
        kind: seed.kind,
      };
    });

    pdaSeeds = [...pdaSeeds];
    if ($workspaces[$selectedWorkspace].accounts === undefined) {
      $workspaces[$selectedWorkspace].accounts = [];
    }

      $workspaces[$selectedWorkspace].accounts[editingPda] = {
        name: pdaName,
        seeds: pdaSeeds,
        kind: "pda",
        program: selectedProgram,
      };
      dispatch("closePDAModal");
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

  $: validSeeds =
    editingPda === -1
      ? seeds.every((seed, index) => formData[index]?.length > 1) &&
        invalid_fields.length == 0
      : true;
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

  {#each seeds.filter((s) => s?.kind != "Program") as seed, index}
    <div
      class="modal--form-seed"
      style="display: flex; position:relative; justify-content: space-between; align-items: center; margin-bottom:0.5rem;"
    >
      {#if seed === "Pubkey"}
        <Select
          class="modal--form-select block"
          items={$workspaces[$selectedWorkspace]?.accounts
            ?.filter((a) => a.kind === "wallet")
            .map((w) => (w?.address.length > 0 ? w?.address : w.name))}
          id={`${index}`}
          on:change={(e) => handleSelect(e, index)}
          placeholder="Select wallet"
          value={formData[index]}
        />
      {:else if seed === "Bytes"}
        <input
          class={"input--primary" +
            (invalid_fields.includes(index) ? " input--invalid" : "")}
          type={getInputTypes(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
          value={formData[index]??""}
        />
      {:else if seed === "u8"}
        <input
          class={"input--primary" +
            (invalid_fields.includes(index) ? " input--invalid" : "")}
          type={getInputTypes(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
          value={formData[index]}
        />
        {:else if seed == "String"}
        <input
          class="input--primary"
          type={getInputTypes(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
          value={formData[index]??""}
        />
      {:else}
        <input
          class="input--primary"
          type={getInputTypes(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
          value={formData[index]}
        />
      {/if}
      <div
        class="remove--seed"
        style={seed === "Pubkey" ? "right: 20px;" : ""}
        on:click={() => {
          invalid_fields = invalid_fields.filter((field) => field !== index);
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
    value={selectedProgram}
    items={$workspaces[$selectedWorkspace]?.accounts
      ?.filter((a) => a.kind === "Program")
      .map((p) => p.name)}
    placeholder="Select program"
    on:change={(e) => (selectedProgram = e.detail.value)}
    on:clear={() => (selectedProgram = "")}
  />

  {#if pdaAlreadyExists}
    <div class="already--exists">An account with this name already exists</div>
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
      Save
    </button>
  </div>
</form>
