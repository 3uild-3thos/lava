<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<h1 class="modal--title">Delete Workspace</h1>
<div class="modal--form">
  <div class="modal--form--warning">
    <img src="/alert.svg" alt="Alert Icon" />
    Deleting your workspace will remove all things associated.
  </div>
  <div class="btns--modal" style="margin-top:20px">
    <button
      class="btn btn--primary"
      on:click={() => {
        dispatch("cancelDelete");
      }}>Cancel</button
    >
    <button
      class="btn btn--lava"
      on:click={() => {
        dispatch("deleteWorkspace");
      }}>Confirm</button
    >
  </div>
</div>
