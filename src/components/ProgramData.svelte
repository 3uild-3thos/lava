<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import { fade } from "svelte/transition";

  export let program: any;
  $: console.log(program);
  let instructionsOpened = false;
  let accountsOpened = false;
  let instructionAccountsOpened = false;
  let instructionArgumentsOpened = false;
</script>

<!-- Accounts -->
{#if program.accounts}
  <div class="test--content">
    <div class="test--content--title">Accounts</div>
    <div class="test--content--list">
      {#each program?.accounts as account}
        <div
          class="content--header"
          on:click={() => (accountsOpened = !accountsOpened)}
        >
          <div class="content--name">
            {account.name}
          </div>
          <div class="caret {accountsOpened ? 'caret--rotated' : ''}" />
        </div>
        {#if accountsOpened}
          <div class="test--nested">
            <div class="test--content--title">Fields</div>
            <div class="instruction--list" in:fade|global={{ duration: 100 }}>
              {#each account.type.fields as accountFields, index}
                <div class="instruction--list--value">
                  {accountFields.name}
                  <span class="arg--type">{accountFields.type}</span>
                </div>
                <Select />
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/if}

<!-- Instructions -->
{#if program.instructions[0]}
  <div class="test--content">
    <div class="test--content--title">Instructions</div>
    <div class="test--content--list">
      <div
        class="content--header"
        on:click={() => (instructionsOpened = !instructionsOpened)}
      >
        <div class="content--name">
          {program.instructions[0].name}
        </div>
        <div class="caret {instructionsOpened ? 'caret--rotated' : ''}" />
      </div>

      <!-- Instructions Opened -->
      {#if instructionsOpened}
        <div class="test--nested">
          <div
            class="content--header"
            on:click={() =>
              (instructionAccountsOpened = !instructionAccountsOpened)}
          >
            <div class="test--content--title">Accounts</div>
            <div
              class="caret {instructionAccountsOpened ? 'caret--rotated' : ''}"
            />
          </div>
          {#if instructionAccountsOpened}
            <div class="instruction--list" in:fade|global={{ duration: 100 }}>
              {#each program.instructions[0].accounts as account, index}
                <div class="instruction--list--value">
                  {account.name}
                  {#if account.isMut}
                    <img src="./modify.svg" alt="Mut Icon" />
                  {/if}
                  {#if account.isSigner}
                    <img src="./signer.svg" alt="Signer Icon" />
                  {/if}
                </div>
                <Select />
              {/each}
            </div>
          {/if}

          <div class={instructionAccountsOpened ? "nest--break" : ""} />

          {#if program.instructions[0].args}
            <div
              class="content--header"
              on:click={() =>
                (instructionArgumentsOpened = !instructionArgumentsOpened)}
            >
              <div class="test--content--title">Arguments</div>
              <div
                class="caret {instructionArgumentsOpened
                  ? 'caret--rotated'
                  : ''}"
              />
            </div>
            {#if instructionArgumentsOpened}
              <div class="instruction--list" in:fade|global={{ duration: 100 }}>
                <div class="test--content--list">
                  {#each program.instructions[0].args as args}
                    <div class="argument">
                      {args.name}
                      <span class="arg--type">{args.type}</span>
                    </div>
                    <input class="input--primary" placeholder="Value" />
                  {/each}
                </div>
              </div>
            {/if}
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
