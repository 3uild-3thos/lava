<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { backInOut, expoIn, expoOut } from "svelte/easing";
  const dispatch = createEventDispatcher();

  export let isOpen = false;
  export let title = "Dropdown";
  // TODO: Make this type better defined
  export let options: any[] = [];
  import { fade, fly, scale, slide } from "svelte/transition";

  $: if (isOpen) {
    window.addEventListener("keydown", closeOnEscape);
  } else {
    window.removeEventListener("keydown", closeOnEscape);
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      isOpen = false;
      dispatch("close");
    }
  }

  function selectOption(value) {
    title = value.name;
    isOpen = false;
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

<div class="dropdown">
  <button
    class="btn btn--dropdown {isOpen ? 'btn--dropdown-open' : ''}"
    on:click={() => (isOpen = !isOpen)}
    >{title}
    <img src="./dropdown.svg" style="width:16px;height:16px;margin-left:auto" />
  </button>
  {#if isOpen}
    <div class="dropdown--content" transition:slide={{ duration: 200 }}>
      {#if options.length}
        <div class="dropdown--options">
          {#each options as option}
            <div class="dropdown--option" on:click={() => selectOption(option)}>
              {option.name}
            </div>
          {/each}
        </div>
      {/if}
      <slot />
    </div>
  {/if}
</div>
