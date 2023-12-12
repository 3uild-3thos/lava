<script>
  import Select from "svelte-select/no-styles/Select.svelte";
</script>

<div class="accounts--filters">
  <div class="input--group">
    <div class="input--search--icon" />
    <input class="input--primary" placeholder="Search your accounts..." />
  </div>
  <Select placeholder="Sort By" searchable={false} class="cursor--pointer" />
</div>

<!-- <Select
on:change={updateToken}
placeholder="Select a token"
items={$workspaces[$selectedWorkspace]?.tokens.map(
  ({ symbol }) => symbol
) ?? []}
class={!valid.token_symbol && formTouched.token_symbol
  ? "input--invalid"
  : ""}
on:blur={() => handleInputTouch("token_symbol")}
/> -->

<style>
  :global(.cursor--pointer input) {
    cursor: pointer;
  }
</style>
