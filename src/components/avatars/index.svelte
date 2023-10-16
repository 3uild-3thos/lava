<script lang="ts">
  import randiman from './lib/random';
  import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from './lib/colors';
  import Shape from './shape/Shape.svelte';

  let DEFAULTS = {
    style: "character",
    size: 32,
    shadow: false,
    border: false,
    borderSize: 2,
    borderColor: "#fff"
  };

  export let displayValue = "";
  export let value = "";
  export let size = DEFAULTS.size;
  export let shadow = DEFAULTS.shadow;
  export let style = DEFAULTS.style;
  export let border = DEFAULTS.border;
  export let borderSize = DEFAULTS.borderSize;
  export let borderColor = DEFAULTS.borderColor;
  export let color = "#ffffff";
  export let radius = 5;

  let name, key, shapeKey, wrapperStyle, borderStyle;
  
  $: {
    name = String(displayValue || value).substring(0, 2);
    key = randiman({ value, min: 0, max: 19 });
    shapeKey = randiman({ value, min: 1, max: 60 });
    wrapperStyle = `width: ${size}px; height: ${size}px; border-radius: ${radius || size}px; background-color: ${color}09; border: 1px solid ${color}40;`;

    if (shadow) {
      wrapperStyle += 'box-shadow: 0px 3px 8px rgba(18, 18, 18, 0.04), 0px 1px 1px rgba(18, 18, 18, 0.02);';
    }

  }
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .wrapper:hover {
    z-index: 3;
  }

  .text {
    margin: 0;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
    font-size: var(--text-size);
    color: var(--color);
    line-height: 0;
    text-transform: uppercase;
    font-weight: 500;
  }
</style>

<div class="wrapper" style={wrapperStyle}>
  {#if style === 'character'}
    <p class="text" style={`font-size: ${Math.round(size / 100 * 37)}px; color: ${color};`}>{name}</p>
  {:else}
    <Shape name={`Shape${shapeKey}`} color={color} size={Math.round((size) / 100 * 50)} />
  {/if}
</div>
