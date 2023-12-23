<script lang="ts">
  import TokenIcon from "./avatars/index.svelte";
  import Popover from "./Popover.svelte";
  import { createEventDispatcher } from "svelte";
  export let account: any = {};
  export let hoveredCard: number = -1;

  const dispatch = createEventDispatcher();

  function openCreatePda(index) {
    dispatch("openCreatePda", {
     index: index
    });
  }
</script>

<div class="ata--assign">
  <div class="ata--title">Create PDA</div>
  <button
    class="tokens-button"
    type="button"
    on:click={(event) => {
      openCreatePda(account.originalIndex);
      event.stopPropagation();
    }}
    >+

  </button
  >
</div>