<script lang="ts">
  import { fade } from "svelte/transition";

  export let program: any;
  $: console.log(program);
  let instructionsOpened = false;
  let accountsOpened = false;
</script>

<!-- Accounts -->
<div class="test--content">
  <div class="test--content--title">Accounts</div>
  <div class="test--content--list">
    {#each program?.accounts as account}
      <div
        class="content--header"
        on:click={() => (accountsOpened = !accountsOpened)}
      >
        <div class="content--title">
          {account.name}
        </div>
        <div class="caret {accountsOpened ? 'caret--rotated' : ''}" />
      </div>
      {#if accountsOpened}
        {#each account.type.fields as accountFields, index}
          <div
            class="instruction--list"
            in:fade|global={{ duration: 100, delay: index * 10 }}
          >
            {accountFields.name}
            <span class="arg--type">{accountFields.type}</span>
          </div>
        {/each}
      {/if}
    {/each}
  </div>
</div>

<!-- Instructions -->
<div class="test--content">
  <div class="test--content--title">Instructions</div>
  <div class="test--content--list">
    <div
      class="content--header"
      on:click={() => (instructionsOpened = !instructionsOpened)}
    >
      <div class="content--title">
        {program.instructions[0].name}
      </div>
      <div class="caret {instructionsOpened ? 'caret--rotated' : ''}" />
    </div>
    {#if instructionsOpened}
      {#each program.instructions[0].accounts as account, index}
        <div
          class="instruction--list"
          in:fade|global={{ duration: 100, delay: index * 10 }}
        >
          {account.name}
          {#if account.isMut}
            <img src="./modify.svg" alt="Mut Icon" />
          {/if}
          {#if account.isSigner}
            <img src="./signer.svg" alt="Signer Icon" />
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

<!-- Arguments -->
<div class="test--content">
  <div class="test--content--title">Arguments</div>
  <div class="test--content--list">
    {#each program.instructions[0].args as args}
      <div class="argument">
        {args.name}
        <span class="arg--type">{args.type}</span>
      </div>
    {/each}
  </div>
</div>
