<script lang="ts">
  import TokenIcon from "./avatars/index.svelte";
  import Popover from "./Popover.svelte";
  import { createEventDispatcher } from "svelte";
  export let accounts: any = {};
  export let accountIndex = -1;
  import { workspaces, selectedWorkspace } from "../stores/store";
  export let walletTokenColors: any;
  let hoveredLink: string = "";
  export let hoveredCard: number = -1;
  let popOverOpened: boolean = false;
  let hoveredToken: number = -1;

  function setHoveredToken(index: number) {
    hoveredToken = index;
  }

  $: atasOwned = accounts.filter(
    (a) => a.kind === "ata" && accounts[accountIndex].name === a.authority
  );

  $: originalIndexes = atasOwned.map((ownedToken) => {
    return accounts.findIndex((account) => account.kind === "mint" && account.name === ownedToken.mint);
  });

</script>

{#if atasOwned.length > 0}
<div class="ata--assign">
  <div class="ata--title">TOKENS</div>
</div>
  <div class="wallet--tokens--list">
    {#each atasOwned as ownedToken, tokenIndex}
      {#if tokenIndex < 4}
        <div
          class="wallet--token"
          on:mouseover={() => {
            hoveredCard = accountIndex;
            setHoveredToken(tokenIndex), (popOverOpened = true);
          }}
          on:mouseleave={() => {
            hoveredCard = -1;
            setHoveredToken(-1), (popOverOpened = false);
          }}
        >
          {#if hoveredToken === tokenIndex && hoveredCard === accountIndex && popOverOpened}
            <Popover
              xOffset={25 * tokenIndex}
              yOffset={-65}
              title={ownedToken.mint}
            >
              <span style={`height:26px;`}
                >{ownedToken.amount.toLocaleString()} owned</span
              >
            </Popover>
          {/if}
          <TokenIcon
            value={ownedToken.mint}
            style="character"
            size={26}
            color={walletTokenColors[originalIndexes[tokenIndex]]}
            border={true}
            radius={7}
          />
        </div>
      {/if}
    {/each}
    {#if atasOwned.length > 4}
      <div class="wallet--token--more">
        +{atasOwned.length - 4}
      </div>
    {/if}
  </div>
{/if}
