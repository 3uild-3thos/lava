<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let searchTerm = "";
  let sortType = "wallets"; // or 'tokens'
  let sortTypes = [
    { value: "wallets", label: "Wallets" },
    { value: "tokens", label: "Tokens" },
  ];

  function handleSearchTermChange(event) {
    searchTerm = event.target.value;
    dispatch("searchTermChange", searchTerm);
  }

  function handleSortTypeChange(event) {
    sortType = event.detail.value;
    dispatch("sortTypeChange", sortType);
  }
</script>

<div class="accounts--filters">
  <div class="input--group">
    <div class="input--search--icon" />
    <input
      class="input--primary"
      bind:value={searchTerm}
      placeholder="Search your accounts..."
      on:input={handleSearchTermChange}
    />
  </div>
  <Select
    placeholder="Sort By"
    items={sortTypes}
    searchable={false}
    class="cursor--pointer"
    clearable={false}
    bind:value={sortType}
    on:change={handleSortTypeChange}
  >
    <div slot="prepend">Sort By</div>
  </Select>
</div>

<style>
  :global(.cursor--pointer .selected-item) {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  :global(.cursor--pointer .prepend) {
    position: absolute;
    display: flex;
    align-items: center;
    left: 10px;
    height: 100%;
    @apply text-lava-mute text-xs cursor-pointer;
  }

  :global(.cursor--pointer input) {
    cursor: pointer;
    flex-shrink: 0;
    text-indent: 30px;
  }
</style>
