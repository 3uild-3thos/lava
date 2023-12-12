<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="empty--state">
  <img
    src="/emptystates/nowallets.svg"
    class="empty--state--image"
    alt="No Tokens in Wallet"
  />
  <div class="empty--state--text">You don't have any wallets</div>
  <div class="empty--state--subtext">Add a wallet to start testing</div>
  <button
    class="btn btn--primary btn--fit"
    on:click={() => dispatch("openModal")}
    ><img
      src="./add.svg"
      alt="Add Icon"
      style="margin-right:5px;width:16px;height:16px;"
    />Add a Wallet</button
  >
</div>
