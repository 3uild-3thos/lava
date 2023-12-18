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
  let seeds = [];
  const addSeed = (e) => {
    seeds = [...seeds, e.detail.value];
    // reset the selected value
    selectedSeed = null;
  };
</script>

<h1 class="modal--title">Create PDA</h1>
<div class="modal--form">
  <div class="modal--form-title">Seeds</div>
  {#each seeds as seed, index}
    <div
      class="modal--form-seed"
      style="display: flex; position:relative; justify-content: space-between; align-items: center; margin-bottom:0.5rem;"
    >
      <input class="input--primary" type={seed} placeholder={seed} />
      <div
        class="remove--seed"
        on:click={() => {
          seeds = seeds.filter((s, i) => i != index);
        }}
      >
        <img src="./remove.svg" alt="Remove" />
      </div>
    </div>
  {/each}
  <!--dropdow with an option to add each type of seed-->
  <Select
    class="modal--form-select"
    bind:value={selectedSeed}
    items={seedsTypes}
    on:change={addSeed}
    placeholder="Add another seed"
  />
</div>
<div class="btns--modal">
  <button
    class="btn btn--lava"
    on:click={() => {
      console.log("pp");
    }}>Create</button
  >
</div>
