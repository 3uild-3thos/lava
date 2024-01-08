<script lang="ts">
  import Select from "svelte-select/no-styles/Select.svelte";
  import { fade } from "svelte/transition";

  export let program: any;
</script>

<!-- Instructions -->
{#key program}
  {#if program.instructions[0]}
    <div class="test--content">
      <div class="test--form">
        <div class="content--header">
          <div class="test--content--title">Accounts</div>
        </div>
        <div class="instruction--list" in:fade|global={{ duration: 100 }}>
          {#each program.instructions[0].accounts as account, index}
            <div class="test--form--item">
              <div class="instruction--list--value">
                {account.name}
                {#if account.isMut}
                  <img src="/modify.svg" alt="Mut Icon" />
                {/if}
                {#if account.isSigner}
                  <img src="/signer.svg" alt="Signer Icon" />
                {/if}
              </div>
              <Select />
            </div>
          {/each}
        </div>
      </div>

      {#if program.instructions[0].args}
        <div class="test--form">
          <div class="content--header">
            <div class="test--content--title">Arguments</div>
          </div>
          <div class="instruction--list" in:fade|global={{ duration: 100 }}>
            <div class="test--content--list">
              {#each program.instructions[0].args as args, index}
                <div class="argument">
                  {args.name}
                  <span class="arg--type">{args.type}</span>
                </div>
                <input class="input--primary" placeholder="Value" />
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/if}
{/key}
