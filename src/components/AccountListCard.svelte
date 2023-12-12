<script lang="ts">
  import { fade } from "svelte/transition";
  import Popover from "./Popover.svelte";
  import TokenIcon from "./avatars/index.svelte";

  export let walletsLength: number;
  export let accounts: any = [];
  export let color: any = [];
  export let walletColors: any = [];
  export let tokenColors: any = [];
  let hoveredLink = "";
  let editingWallet = -1;
  let hoveredToken = 0;
  let hoveredCard;
  let popOverOpened = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function deleteWallet(index) {
    dispatch("deleteWallet", { index });
  }

  function editWallet(index) {
    dispatch("editWallet", { index });
  }

  function openAssignTokenModal(index) {
    dispatch("openAssignTokenModal", { index });
  }

  function openWalletModal(index) {
    dispatch("openWalletModal", { index });
  }

  function setHoveredToken(index) {
    hoveredToken = index;
  }

  function deleteToken(index) {
    dispatch("deleteToken", { index });
  }

  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    let bounds = event.currentTarget.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }

  $: console.log(accounts);
</script>

{#each accounts.wallets as account, index}
  <div class="relative">
    <div
      class="wallet--list--item"
      on:click={() => openWalletModal(index)}
      on:mousemove={handleMousemove}
      in:fade|global={{ delay: index * 100, duration: 100 }}
      style={`--color: ${color[0]}; --color2: ${color[1]}; --hoveredColor: ${color[0]};  --bgColor: ${color[0]}10; --opacity: 0.6; --left:${m.x}; --top:${m.y}`}
    >
      <div class="token--list--item--shimmer" />
      <div class="wallet--list--content">
        <div class="wallet--info">
          <img
            src={`/SOL.svg`}
            alt={`Sol Icon`}
            style="width:32px;height:32px"
          />
          <div class="wallet--name">{account.name}</div>
        </div>
        <div class="wallet--address">
          {`${account.sol_balance.toLocaleString()} SOL`}
        </div>
        <div class="wallet--address">
          {account.address}
        </div>
        <div class="wallet--footer">
          <span>TOKENS</span>
          <button
            class="tokens-button"
            type="button"
            on:mouseover={() => (hoveredLink = "tokens")}
            on:mouseleave={() => (hoveredLink = "")}
            on:click={(event) => {
              editingWallet = index;
              event.stopPropagation();
              openAssignTokenModal(index);
            }}
            >+

            {#if hoveredLink === "tokens"}
              <Popover blur={25} yOffset={-50} title="Assign a Token" />
            {/if}</button
          >
          {#if account?.tokens?.length > 0}
            <div class="wallet--tokens--list">
              {#each account.tokens as ownedToken, tokenIndex}
                {#if tokenIndex < 4}
                  <div
                    class="wallet--token"
                    on:mouseover={() => {
                      hoveredCard = index;
                      setHoveredToken(tokenIndex), (popOverOpened = true);
                    }}
                    on:mouseleave={() => {
                      hoveredCard = null;
                      setHoveredToken(null), (popOverOpened = false);
                    }}
                  >
                    {#if hoveredToken === tokenIndex && hoveredCard === index && popOverOpened}
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
                      color={walletColors[index][tokenIndex]}
                      border={true}
                      radius={7}
                    />
                  </div>
                {/if}
              {/each}
              {#if account.tokens.length > 3}
                <div class="wallet--token--more">
                  +{account.tokens.length - 4}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div
      class="account--type"
      in:fade|global={{
        delay: index * 100,
        duration: 100,
      }}
    >
      Wallet
    </div>
    <div
      class="trash-icon"
      on:click={() => {
        deleteWallet(index);
      }}
    />
    <div
      class="edit-icon"
      on:click={() => {
        editWallet(index);
      }}
    />
  </div>
{/each}

{#each accounts.tokens as account, index}
  <div class="relative">
    <div
      class="wallet--list--item"
      on:mousemove={handleMousemove}
      in:fade|global={{
        delay: index * 100,
        duration: 100,
      }}
      style={`--color: #A0A0AB50; --color2: #A0A0AB50; --bgColor: #383A4110; --hoveredColor: ${tokenColors[index]}; --opacity: 1; --left:${m.x}; --top:${m.y}`}
    >
      <div class="token--list--item--shimmer" />
      <div class="wallet--list--content">
        <div class="token--header">
          <TokenIcon
            value={account.symbol}
            size={32}
            border={true}
            radius={7}
            color={tokenColors[index]}
          />

          <div class="token--ticker">
            {account.symbol}
          </div>
        </div>
        <div class="token--name">{account.symbol}</div>
        <div class="token--supply" style={`color: ${tokenColors[index]}`}>
          {account.supply}
        </div>
        <div class="token--owner">
          <img
            src="./owner.svg"
            class="token--owner-icon"
            alt="Fingerprint Icon"
          />{account.creator}
        </div>
      </div>
    </div>
    <div
      class="account--type"
      in:fade|global={{
        delay: index * 100,
        duration: 100,
      }}
    >
      Token
    </div>
    <div
      class="trash-icon"
      on:click={() => {
        deleteToken(index);
      }}
    />
  </div>
{/each}
