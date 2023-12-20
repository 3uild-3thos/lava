<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Icon from "./avatars/index.svelte";
  import { fade, fly, slide } from "svelte/transition";
  export let title: any;
  export let index: number = 0;
  export let type: string = "test";
  export let version: string = "0.0.0";
  export let isSelected = false;
  $: console.log(index);
</script>

<div class="tests--list--item">
  <div
    class="tests--list--item--card"
    style={isSelected ? "border-color: #54FE9850;" : ""}
    in:slide|global={{ axis: "x", delay: 100 * index, duration: 150 }}
    on:click={() => dispatch("updateSelectedTest", { index })}
  >
    <div class="test--info">
      <Icon
        size={36}
        color={type === "test" ? "#54FE98" : "#FE6054"}
        value={title}
        style={type === "test" ? "symbol" : "character"}
      />
      <div class="test--title" in:fade|global>{title}</div>
      <slot name="content" />
    </div>
  </div>
</div>
