<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  export let editingWallet = -1;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
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
  let selectedSeed = null;
  let selectedProgram = null;
  let seeds = [];
  const addSeed = (e) => {
    seeds = [...seeds, e.detail.value];
    selectedSeed = null;
  };
  let formData = [];
let pdaSeeds = [];

function handleInput(event) {
  const { name, value } = event.target;
  formData[name]= value ;
}

function handleSelect(event, index) {
  const {value} = event.detail;
  formData[index] = value;
}

  function handleSubmit() {
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
        seeds: pdaSeeds,
      },
    ];
    dispatch("closePDAModal");
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
</script>

<h1 class="modal--title">Create PDA</h1>
<form on:submit|preventDefault={handleSubmit} class="modal--form">
  <div class="modal--form-title">Seeds</div>

  {#each seeds as seed, index}
    <div
      class="modal--form-seed"
      style="display: flex; position:relative; justify-content: space-between; align-items: center; margin-bottom:0.5rem;"
    >
    {#if seed === "Pubkey"}
      <Select
        class="modal--form-select block"
        items={$workspaces[$selectedWorkspace]?.wallets?.map(
          (w) => w?.address.length > 0 ? w?.address : w.name
        )}
        id={`${index}`}
        on:change={(e) => handleSelect(e, index)}
        placeholder="Select wallet"
      />
    {:else}
      <input class="input--primary" type={typeFromSeed(seed)} placeholder={seed}  on:input={handleInput} name={`${index}`}/>
      {/if}
      <!--div
        class="remove--seed"
        on:click={() => {
          seeds = seeds.filter((s, i) => i != index);
        }}
      >
        <img src="./remove.svg" alt="Remove" />
      </div-->
    </div>
  {/each}

  <Select
    class="modal--form-select"
    bind:value={selectedSeed}
    items={seedsTypes}
    on:change={addSeed}
    placeholder="Add another seed"
  />
  <Select
    class="modal--form-select"
    bind:value={selectedProgram}
    items={$workspaces[$selectedWorkspace]?.programs?.map(
      (p) => p?.metadata?.address ?? p.name
    )}
    placeholder="Select program"
  />

<div class="btns--modal">
  <button
    type="submit"
    class="btn btn--lava"
  >
    Create
  </button>
</div>
</form>