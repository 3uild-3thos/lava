<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let ticker: string = "";
  export let kind: string = "";
  export let footer: any = null;
  export let balance: string = "";
  export let color: string = "";
  export let cardPosition: number;
  export let title: string = `${kind}`;
  export let hoveredCard: number = -1;
  import TokenIcon from "../avatars/index.svelte";
  let m = { x: 0, y: 0 };
  function handleMousemove(event: MouseEvent) {
    let bounds = (event.currentTarget as HTMLElement)?.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }
  import { fade } from "svelte/transition";

  function showTokens() {
    if (kind === "wallet") {
      dispatch("showTokens");
    }
  }
</script>

<div
  class="card"
  on:mouseleave
  on:mouseover
  on:mousemove={handleMousemove}
  in:fade|global={{ delay: cardPosition * 50, duration: 100 }}
  style={`--hoveredColor: ${color}; --bgColor: ${color}10; --left:${
    m.x
  }; --top:${m.y};
  opacity: ${hoveredCard !== -1 && hoveredCard !== cardPosition ? 0.2 : 1}`}
>
  <div class="card--shimmer" />
  <div class="card--content">
    <div class="card--header">
      {#if kind === "wallet"}
        <img src={`/SOL.svg`} alt={`Sol Icon`} style="width:32px;height:32px" />
      {:else}
        <TokenIcon
          style={"character"}
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
          src={`/${kind.toLowerCase()}.svg`}
          alt={`${kind} Icon`}
          style="width:16px;height:16px"
        />
        {kind === "mint" ? "Mint" : kind}
      </div>
      <div class="card--options">
        <slot name="options" />
      </div>
    </div>
    {#if kind === "wallet"}
      <div class="card--balance">
        {balance} SOL
      </div>
    {/if}
    <div class="card--footer">
      <slot name="footer" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "./styles.scss";
</style>
