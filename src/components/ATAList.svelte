<script lang="ts">
  import TokenIcon from "./avatars/index.svelte";
  import Popover from "./Popover.svelte";
  import { createEventDispatcher } from "svelte";
  export let account: any = {};
  export let walletTokenColors: any;
  let hoveredLink: string = "";
  export let hoveredCard: number = -1;
  let popOverOpened: boolean = false;
  let hoveredToken: number = -1;

  const dispatch = createEventDispatcher();

  function setHoveredToken(index: number) {
    hoveredToken = index;
  }

  function openAssignToken(index) {
    dispatch("openAssign", {
      index,
    });
  }
</script>

<div class="ata--assign">
  <div class="ata--title">TOKENS</div>
  <button
    class="tokens-button"
    type="button"
    on:mouseover={() => (hoveredLink = "tokens")}
    on:mouseleave={() => (hoveredLink = "")}
    on:click={() => {
      openAssignToken(account.originalIndex);
    }}
    >+

    {#if hoveredLink === "tokens"}
      <Popover blur={25} yOffset={-50} title="Assign a Token" />
    {/if}</button
  >
</div>
{#if account?.tokens?.length > 0}
  <div class="wallet--tokens--list">
    {#each account.tokens as ownedToken, tokenIndex}
      {#if tokenIndex < 4}
        <div
          class="wallet--token"
          on:mouseover={() => {
            hoveredCard = account.originalIndex;
            setHoveredToken(tokenIndex), (popOverOpened = true);
          }}
          on:mouseleave={() => {
            hoveredCard = -1;
            setHoveredToken(-1), (popOverOpened = false);
          }}
        >
          {#if hoveredToken === tokenIndex && hoveredCard === account.originalIndex && popOverOpened}
            <Popover
              xOffset={25 * tokenIndex}
              yOffset={-65}
              title={ownedToken.symbol}
            >
              <span style={`height:26px;`}
                >{ownedToken.amount.toLocaleString()} owned</span
              >
            </Popover>
          {/if}
          <TokenIcon
            value={ownedToken.symbol}
            style="character"
            size={26}
            color={walletTokenColors[account.originalIndex][tokenIndex]}
            border={true}
            radius={7}
          />
        </div>
      {/if}
    {/each}
    {#if account.tokens.length > 4}
      <div class="wallet--token--more">
        +{account.tokens.length - 4}
      </div>
    {/if}
  </div>
{/if}
