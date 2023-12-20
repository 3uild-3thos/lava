<script lang="ts">
  export let ticker: string = "";
  export let type: string = "";
  export let footer: any = null;
  export let color: string = "";
  export let cardPosition: number;
  export let title: string = `${type}`;
  $: hoveredCard = -1;
  import TokenIcon from "../avatars/index.svelte";
  let m = { x: 0, y: 0 };
  function handleMousemove(event: MouseEvent) {
    let bounds = (event.currentTarget as HTMLElement)?.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }
  import { fade } from "svelte/transition";
</script>

<div
  class="card"
  on:mousemove={handleMousemove}
  in:fade|global={{ delay: cardPosition * 50, duration: 100 }}
  style={`--hoveredColor: ${color}; --bgColor: ${color}10; --left:${m.x}; --top:${m.y};`}
>
  <div class="card--shimmer" />
  <div class="card--content">
    <div class="card--header">
      {#if type === "wallet"}
        <img src={`/SOL.svg`} alt={`Sol Icon`} style="width:32px;height:32px" />
      {:else}
        <TokenIcon
          style={type === "token" ? "character" : "symbol"}
          value={ticker ? ticker : title}
          size={32}
          border={true}
          radius={7}
          {color}
        />
      {/if}
      <div class="card--title">{title}</div>
      <div class="card--type">
        <img
          src={`./${type}.svg`}
          alt={`${type} Icon`}
          style="width:16px;height:16px"
        />
        {type === "token" ? "Mint" : type}
      </div>
      <div class="card--options">
        <slot name="options" />
      </div>
    </div>
    <div class="card--footer">
      <slot name="footer" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "./styles.scss";
</style>
