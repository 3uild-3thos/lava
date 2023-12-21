<script lang="ts">
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

  let formData = editingPda!==-1 ? seeds.filter((s)=>s.type!="Program").map(({value})=>value) : [];
  let pdaSeeds = editingPda!==-1 ? seeds.filter((s)=>s.type!="Program").map(({type})=>type) : [];
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
  let invalid_fields = [];

  function isStringArrayInRange(str) {
    const trimmedStr = str.replace(/[\[\]]/g, '');
    const numbersArray = trimmedStr.split(',');
    const numericArray = numbersArray.map(Number);
    console.log(numericArray)
    const isInRange = numericArray.every(num => typeof num === 'number' && num >= 0 && num <= 255);
    console.log(isInRange)
    if (isInRange) {
      return numericArray;
    } else {
      return false;
    }
}

  function handleInput(event) {
    const { name, value } = event.target;
    if (seeds[name]=== "String"){
    formData[name] = value as string;
    } else if (seeds[name]=== "Pubkey"){
      formData[name] = value as string;
    } else if (seeds[name]=== "Bytes"){
      // Check if it's a valid hexadecimal string with "0x" appended
    const hexRegex = /^0x([0-9A-Fa-f]+)$/;

      // Check if it's a valid array of numbers

      if (hexRegex.test(value)) {
        console.log('hex')
        formData[name] = value;
        invalid_fields = invalid_fields.filter((field) => field !== name);
    } else if (isStringArrayInRange(value)) {
        formData[name] = value;
        invalid_fields = invalid_fields.filter((field) => field !== name);
    } else {
      invalid_fields = [...invalid_fields, name];
    }


    } else if (seeds[name]=== "u8"){
      formData[name] = value as number;
    } else if (seeds[name]=== "u16"){
      formData[name] = value as number;
    } else if (seeds[name]=== "u32"){
      formData[name] = value as number;
    } else if (seeds[name]=== "u64"){
      formData[name] = value as number;
    } else if (seeds[name]=== "u128"){
      formData[name] = value as number;
    }
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

  $: validSeeds = seeds.every((seed, index) => formData[index]?.length > 1) && invalid_fields.length == 0;
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

  {#each seeds.filter((s)=>s.type!="Program") as seed, index}
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
          value={formData[index]}
        />
      {:else if seed === "Bytes"}
        <input
          class={"input--primary" + (invalid_fields.includes(index) ? " input--invalid" : "")}
          type={typeFromSeed(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
          value={formData[index]}
        />
      {:else if seed === "Bytes"}
        <input
          class={"input--primary" + (invalid_fields.includes(index) ? " input--invalid" : "")}
          type={typeFromSeed(seed)}
          placeholder={seed}
          on:input={handleInput}
          name={`${index}`}
        />
      {:else}
        <input
          class="input--primary"
          type={typeFromSeed(seed)}
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
