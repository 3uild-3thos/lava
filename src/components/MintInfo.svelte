<script lang="ts">
  import Popover from "./Popover.svelte";
  export let color: string = "";
  export let account: any = {};
  let mintAuthorityHover: number = -1;
  let freezeAuthorityHover: number = -1;
  export let hovered: number = -1;
  let decimalHover: number = -1;
  function mintAuthorityHovered(index: number) {
    mintAuthorityHover = index;
  }
  function freezeAuthorityHovered(index: number) {
    freezeAuthorityHover = index;
  }
  function decimalHovered(index: number) {
    decimalHover = index;
  }

  export let index: number = -1;
</script>

<div class="token--info">
  <div class="token--name" style={`color: ${color}`}>
    {account.symbol}
  </div>
  <div class="token--owners">
    <div
      class="token--owner"
      on:mouseover={() => mintAuthorityHovered(index)}
      on:mouseout={() => (mintAuthorityHover = -1)}
    >
      {#if mintAuthorityHover === index}
        <Popover
          xOffset={0}
          yOffset={-50}
          title={account.mintAuthority
            ? `Mint: ${account?.mintAuthority}`
            : "No Mint Authority"}
        />
      {/if}
      <img src="./owner.svg" class="token--owner-icon" alt="Fingerprint Icon" />
    </div>

    <div
      class="token--owner"
      on:mouseover={() => freezeAuthorityHovered(index)}
      on:mouseout={() => (freezeAuthorityHover = -1)}
    >
      {#if freezeAuthorityHover === index}
        <Popover
          xOffset={25}
          yOffset={-50}
          title={account.freezeAuthority
            ? `Freeze: ${account?.freezeAuthority}`
            : "No Freeze Authority"}
        />
      {/if}
      <img src="./freeze.svg" class="token--owner-icon" alt="Freeze Icon" />
    </div>

    <div
      class="token--owner"
      on:mouseover={() => decimalHovered(index)}
      on:mouseout={() => (decimalHover = -1)}
    >
      {#if decimalHover === index}
        <Popover xOffset={50} yOffset={-50} title={"Number of Decimals"} />
      {/if}
      {account.decimal}
    </div>
  </div>
</div>
