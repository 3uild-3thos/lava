<script lang="ts">
  export let err;

</script>

<h1 class="modal--title">Error Generating Test</h1>
<div class="modal--form">
  <div class="modal--form-inline">
    <div class="modal--form-title">Details</div>
  </div>
  <div class="error--message">
    <p>
      {err}
    </p>
  </div>
  <div class="btns--modal">
    <button class="btn btn--lava" on:click={() => dispatch("close")}>Close</button>
  </div>
</div>
