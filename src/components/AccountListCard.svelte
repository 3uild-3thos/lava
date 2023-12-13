<script lang="ts">
  import { fade } from "svelte/transition";
  import Popover from "./Popover.svelte";
  import TokenIcon from "./avatars/index.svelte";
  import { createEventDispatcher } from "svelte";

  export let walletsLength: number;
  export let accounts: any = [];
  export let color: any = [];
  export let walletColors: any = [];
  export let tokenColors: any = [];
  export let searchTerm = "";
  export let sortType = "wallets"; // or 'tokens'

  let hoveredLink = "";
  let editingWallet = -1;
  let hoveredToken = 0;
  let hoveredCard = -1;
  let popOverOpened = false;
  let hoveredCardType = "";

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

  $: filteredWallets = accounts.wallets
    .filter((wallet) =>
      wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((wallet, index) => ({ ...wallet, itemType: "wallet", index }));

  $: filteredTokens = accounts.tokens
    .filter((token) =>
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((token, index) => ({ ...token, itemType: "token", index }));

  $: sortedAccounts =
    sortType === "wallets"
      ? [...filteredWallets, ...filteredTokens]
      : [...filteredTokens, ...filteredWallets];

  $: console.log(accounts);
</script>

{#each sortedAccounts as account, index}
  {#if account.type === "wallet"}
    <div
      class="relative"
      style={`opacity: ${
        (hoveredCard === account.index && hoveredCardType === "wallet") ||
        hoveredCard === -1
          ? "1"
          : "0.2"
      }`}
    >
      <div
        class="wallet--list--item"
        on:click={() => openWalletModal(account.index)}
        on:mousemove={handleMousemove}
        on:mouseover={() => (
          (hoveredCard = account.index), (hoveredCardType = "wallet")
        )}
        on:mouseleave={() => ((hoveredCard = -1), (hoveredCardType = ""))}
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
                editingWallet = account.index;
                event.stopPropagation();
                openAssignTokenModal(account.index);
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
                        hoveredCard = account.index;
                        setHoveredToken(tokenIndex), (popOverOpened = true);
                      }}
                      on:mouseleave={() => {
                        hoveredCard = null;
                        setHoveredToken(null), (popOverOpened = false);
                      }}
                    >
                      {#if hoveredToken === tokenIndex && hoveredCard === account.index && popOverOpened}
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
                        color={walletColors[account.index][tokenIndex]}
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
          deleteWallet(account.index);
        }}
      />
      <div
        class="edit-icon"
        on:click={() => {
          editWallet(account.index);
        }}
      />
    </div>
  {:else if account.type === "token"}
    <div
      class="relative"
      style={`opacity: ${
        (hoveredCardType === "token" && hoveredCard === account.index) ||
        hoveredCard === -1
          ? "1"
          : "0.2"
      }`}
    >
      <div
        class="wallet--list--item"
        on:mousemove={handleMousemove}
        on:mouseover={() => (
          (hoveredCard = account.index), (hoveredCardType = "token")
        )}
        on:mouseleave={() => ((hoveredCard = -1), (hoveredCardType = ""))}
        in:fade|global={{
          delay: index * 100,
          duration: 100,
        }}
        style={`--color: #A0A0AB50; --color2: #A0A0AB50; --bgColor: #383A4110; --hoveredColor: ${
          tokenColors[account.index]
        }; --opacity: 1; --left:${m.x}; --top:${m.y};
        `}
      >
        <div class="token--list--item--shimmer" />
        <div class="wallet--list--content">
          <div class="token--header">
            <TokenIcon
              value={account.symbol}
              size={32}
              border={true}
              radius={7}
              color={tokenColors[account.index]}
            />

            <div class="token--ticker">
              {account.name}
            </div>
          </div>
          <div
            class="token--name"
            style={`color: ${tokenColors[account.index]}`}
          >
            {account.symbol}
          </div>
          <div class="token--owners">
            <div class="token--owner">
              <img
                src="./owner.svg"
                class="token--owner-icon"
                alt="Fingerprint Icon"
              />
            </div>
            <div class="token--owner">
              <img
                src="./freeze.svg"
                class="token--owner-icon"
                alt="Freeze Icon"
              />
            </div>
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
          deleteToken(account.index);
        }}
      />
    </div>
  {/if}
{/each}
