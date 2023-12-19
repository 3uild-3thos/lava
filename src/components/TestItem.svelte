<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Icon from "./avatars/index.svelte";
  import { fade } from "svelte/transition";
  export let title: any;
  export let index: number = 0;
  export let type: string = "test";
  export let version: string = "0.0.0";
  $: console.log(index);
</script>

<div class="tests--list--item">
  <div
    class="tests--list--item--card"
    in:fade|global={{ delay: 100 * (index + 1), duration: 100 }}
    on:click={() => dispatch("updateSelectedTest", { index })}
  >
    <div class="test--info">
      <Icon
        size={36}
        color={type === "test" ? "#54FE98" : "#FE6054"}
        value={title}
        style={type === "test" ? "symbol" : "character"}
      />
      <div style="display:flex;flex-direction:column;">
        <div class="test--title" in:fade|global>{title}</div>
        {#if type === "program"}
          <div class="test--version" in:fade|global>{version}</div>
        {/if}
      </div>
    </div>

    <div class="test--slot">
      <slot name="content" />
    </div>
  </div>
</div>

<style lang="scss">
  .test--slot {
    @apply flex items-start h-full w-full;
  }
</style>
