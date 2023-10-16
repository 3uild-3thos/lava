<script>
  import { createEventDispatcher } from "svelte";
  import { backInOut, expoIn, expoOut } from "svelte/easing";
  const dispatch = createEventDispatcher();

  export let isOpen = false;
  export let width = 300;
  export let modalVariant = false;
  export let color = "";
  import { fade, fly, scale } from "svelte/transition";

  $: if (isOpen) {
    window.addEventListener("keydown", closeOnEscape);
  } else {
    window.removeEventListener("keydown", closeOnEscape);
  }

  function closeOnEscape(event) {
    if (event.key === "Escape") {
      isOpen = false;
      dispatch("close");
    }
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if isOpen}
  <div class="modal" style={`--borderColor: ${color}`}>
    <div
      class="modal--content {modalVariant ? 'modal--variant' : ''}"
      style={`width:${width}px;`}
      transition:scale={{ opacity: 0, duration: 200, start: 0.7 }}
      on:click={(e) => e.stopPropagation()}
    >
      <slot />
    </div>
    <div
      class="modal--background"
      on:click={() => (isOpen = false)}
      transition:fade={{ duration: 200 }}
    />
  </div>
{/if}
