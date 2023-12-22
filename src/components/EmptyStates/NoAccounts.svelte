<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { fade } from "svelte/transition";
</script>

<div class="empty--state" in:fade|global>
  <img
    src="/emptystates/nowallets.svg"
    class="empty--state--image"
    alt="No Accounts"
  />
  <div class="empty--state--text">You don't have any accounts</div>
  <div class="empty--state--subtext">Add an account to start testing</div>
  <button
    class="btn btn--primary btn--fit"
    on:click={() => dispatch("openModal")}
    ><img
      src="/add.svg"
      alt="Add Icon"
      style="margin-right:5px;width:16px;height:16px;"
    />Add an Account</button
  >
</div>
