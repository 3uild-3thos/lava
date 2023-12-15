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
      Mint Account
    </div>
    <div class="create--account" style="opacity:0.2;">
      <div class="create--account--card">
        <img src="./new-workspace.svg" />
      </div>
      Option
    </div>
  </div>
</div>
