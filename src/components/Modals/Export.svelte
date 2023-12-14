<script lang="ts">
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<h1 class="modal--title">Export</h1>
<div class="modal--form">
  <div class="export--grid">
    <div class="create--account">
      <div
        class="create--account--card"
        on:click={() => dispatch("exportWorkspace")}
      >
        <img src="./existing-workspace.svg" />
      </div>
      Workspace
    </div>
    <div class="create--account" style="opacity:0.4;">
      <div
        class="create--account--card"
        on:click={() => dispatch("exportMocha")}
      >
        <img src="./mocha.svg" />
      </div>
      Mocha Tests
    </div>
  </div>
</div>
