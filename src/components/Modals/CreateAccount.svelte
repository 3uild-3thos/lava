<script lang="ts">
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<h1 class="modal--title">Create an Account</h1>
<div class="modal--form">
  <div class="create--account--grid">
    <div class="create--account">
      <div
        class="create--account--card"
        on:click={() => dispatch("createWallet")}
      >
        <img src="./standard-wallet.svg" />
      </div>
      Wallet
    </div>
    <div class="create--account">
      <div
        class="create--account--card"
        on:click={() => dispatch("createToken")}
      >
        <img src="./token-account.svg" />
      </div>
      Mint
    </div>
    <div class="create--account">
      <div
        class="create--account--card"
        on:click={() => dispatch("createProgram")}
      >
        <img src="./create-pda.svg" />
      </div>
      Program
    </div>
    <div class="create--account">
      <div class="create--account--card" on:click={() => dispatch("createPDA")}>
        <img src="./create-pda.svg" />
      </div>
      PDA
    </div>
  </div>
</div>
