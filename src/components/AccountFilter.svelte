<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let searchTerm = "";
  let sortType = "type";
  let sortTypes = [
    { value: "name", label: "Name" },
    { value: "type", label: "Type" },
  ];

  $: sortType =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("sortType") || "name"
      : "name";

  function handleSearchTermChange(event) {
    searchTerm = event.target.value;
    dispatch("searchTermChange", searchTerm);
  }

  function handleSortTypeChange(event) {
    sortType = event.detail.value;
    dispatch("sortTypeChange", sortType);
  }

  $: showTokens =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("showTokens") === "true"
      : true;

  function handleToggleShowTokens(event) {
    showTokens = event.target.checked;
    dispatch("toggleShowTokens", showTokens);
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

  <!-- <div class="show--tokens">
    <label class="toggle--checkbox">
      <input
        bind:checked={showTokens}
        on:change={handleToggleShowTokens}
        type="checkbox"
      />
      <div class="checkmark" />
    </label>
    Show Tokens
  </div> -->
</div>

<style>
  :global(.cursor--pointer .selected-item) {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @apply truncate;
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

  .show--tokens {
    @apply relative flex items-center text-sm font-medium text-lava-mute gap-x-2 ml-4 flex-shrink-0;
  }
  /* Hide the default checkbox */
  .toggle--checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    box-shadow: rgb(254, 96, 84) 0px 0px 0px 2px;
    background-color: rgba(16, 16, 16, 0.5);
    height: 16px;
    width: 16px;
    flex-shrink: 0;
    margin-top: -1px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    transform-origin: 0px 10px;
    border-radius: 4px;
    padding: 0px;
    box-sizing: border-box;
  }

  .toggle--checkbox input:checked ~ .checkmark {
    box-shadow: rgb(254, 96, 84) 0px 0px 0px 2px;
    background-color: rgba(245, 96, 84, 0.3);
    height: 16px;
    width: 16px;
    flex-shrink: 0;
    margin-top: -1px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    transform-origin: 0px 10px;
    padding: 0px;
    box-sizing: border-box;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .toggle--checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 0.4em;
    top: 0.2em;
    width: 0.2em;
    height: 0.4em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
    transition: all 500ms ease-in-out;
  }
</style>
