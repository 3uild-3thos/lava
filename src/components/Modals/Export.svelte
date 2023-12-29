<script lang="ts">
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Prism from 'prismjs';  
  import 'prismjs/components/prism-json';
  let code = JSON.stringify($workspaces[$selectedWorkspace], null, 2);
  import { copy } from 'svelte-copy';
</script>


<h1 class="modal--title">Export</h1>
<div class="export--code">
  <div class="btn btn--primary export--code--btn btn--fit" use:copy={code}>Copy</div>
    <div class="export--code--box">
    <pre>
    {@html Prism.highlight(code, Prism.languages.json, "json")}
    </pre>
  </div>
</div>
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

<style lang="scss">
  .export--code {
    @apply bg-lava-card relative border-lava-mute border-solid border border-opacity-10 rounded-lg p-4 mt-5 
  }
  .export--code--box {
    max-height: 300px;
    overflow-y: scroll;
    position:relative;
  }
  .export--code--btn {
    @apply absolute top-4 right-4
  }
  .code { white-space: pre-wrap;  }
  pre {
    @apply mt-0
  }
  :global(.token:first-child) {
    @apply absolute left-0
  }
</style>