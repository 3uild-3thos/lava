<script>
  export let isOpen = false;
  export let openedWallet = {};
  export let colors = [];
  export let openedWalletIndex = 0;
  import TokenIcon from "../avatars/index.svelte";
</script>

<div class="wallet--info">
  <img src={`/SOL.svg`} alt={`Sol Icon`} style="width:32px;height:32px" />
  <div class="wallet--name">{openedWallet.name}</div>
</div>
{#if openedWallet.tokens && openedWallet.tokens.length > 0}
  <div class="wallet--tokens">Tokens Assigned</div>
  <div class="wallet--modal--list">
    {#each openedWallet.tokens as ownedToken, index}
      <div class="wallet--modal--item">
        <div class="wallet--modal--item--header">
          <TokenIcon
            value={ownedToken.symbol}
            style="character"
            size={26}
            color={colors[openedWalletIndex][index]}
            border={true}
            radius={7}
          />
          <div class="wallet--modal--name">{ownedToken.symbol}</div>
        </div>
        <div class="wallet--modal--item--amount">
          <span>Owned:</span>
          <div
            class="token--supply--modal"
            style={`color: ${colors[openedWalletIndex][index]};`}
          >
            {ownedToken.amount.toLocaleString()}
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="empty--state--modal">
    <img
      src="/emptystates/connect.svg"
      class="empty--state--image--modal"
      alt="No Tokens in Wallet"
    />
    <div class="empty--state--text">This wallet doesn't have any tokens</div>
    <div class="empty--state--subtext">
      You can create them on the tokens page.
    </div>
  </div>
{/if}
