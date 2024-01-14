<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import JSZip from "jszip";
  import init, { get_templates, get_project_files } from "soda-wasm";
  import { fly } from "svelte/transition";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Prism from "prismjs";
  import "prismjs/components/prism-json";
  let code = JSON.stringify($workspaces[$selectedWorkspace], null, 2);
  import { copy } from "svelte-copy";

  let workspace = $workspaces[$selectedWorkspace];
  let selectedProgramIndex = -1;
  let ready = false;
  let templates = [];
  onMount(async () => {
    init().then(() => {
      templates = get_templates();
    });
    ready = true;
  });

  function exportWorkspace() {
    const data = JSON.stringify(workspace);
    const blob = new Blob([data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${workspace.name}.json`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Export`}
  </title>
  <link
    href="https://unpkg.com/prism-themes@1.9.0/themes/prism-duotone-dark.min.css"
    rel="stylesheet"
  />
</svelte:head>

{#if ready}
  <div class="common--wrapper">
    <div class="export--page">
      <h1
        class="common--title"
        style="margin-bottom:0"
        in:fly={{ delay: 100, duration: 100, y: -10 }}
      >
        Export
      </h1>

      <div class="export--page--grid">
        <div class="export--code">
          <div class="export--title">Export Workspace</div>
          <div class="export--code--card">
            <div class="copy--code--btn" use:copy={code}>
              <img src="/copy.svg" class="icon" />
            </div>
            <div class="export--code--btn" on:click={() => exportWorkspace()}>
              <img src="/download.svg" class="icon" />
            </div>
            <div class="export--code--box">
              <pre>
          {@html Prism.highlight(code, Prism.languages.json, "json")}
          </pre>
            </div>
          </div>
        </div>

        <div class="soda-select">
          <div class="export--title">Export IDL</div>
          <div class="soda-select--title">Program</div>
          <Select
            class="modal--form-select"
            items={$workspaces[$selectedWorkspace].idls.map((idl, index) => {
              return { label: idl.name, value: index };
            })}
            placeholder="Select a Program"
            on:change={(e) => {
              selectedProgramIndex = e.detail.value;
              console.log(selectedProgramIndex);
            }}
          >
            <div slot="selection" class="select--option" let:selection>
              <div class="select--text">
                {$workspaces[$selectedWorkspace].idls[selectedProgramIndex]
                  ?.name}
              </div>
            </div>
            <div slot="item" class="select--option" let:item>
              <div class="select--text">{item.label}</div>
            </div>
          </Select>

          <div class="use_soda--view">
            {#each templates as template, index}
              <button
                class="btn btn--primary workspace--btn btn--fit no-shrink {selectedProgramIndex ==
                -1
                  ? 'btn--disabled'
                  : ''}"
                disabled={selectedProgramIndex == -1 ||
                  $workspaces[$selectedWorkspace].idls[selectedProgramIndex]
                    .name == ""}
                on:click={() => {
                  const files = get_project_files(
                    index,
                    JSON.stringify(
                      $workspaces[$selectedWorkspace].idls[
                        selectedProgramIndex
                      ],
                    ),
                  );
                  const zip = new JSZip();
                  files.Ok.forEach((file) => {
                    const { path, content } = file;
                    const folders = path.split("/");
                    const fileName = folders.pop();
                    let folder = zip;
                    folders.forEach((folderName) => {
                      folder = folder.folder(folderName);
                    });

                    if (typeof content.String != "undefined") {
                      folder.file(fileName, content.String);
                    } else {
                      folder.file(fileName, content.Vec);
                    }
                  });

                  zip.generateAsync({ type: "blob" }).then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const downloadLink = document.createElement("a");
                    downloadLink.href = url;
                    downloadLink.download = `${
                      $workspaces[$selectedWorkspace].idls[selectedProgramIndex]
                        .name || " "
                    }.zip`;
                    downloadLink.click();

                    URL.revokeObjectURL(url);
                  });
                }}
              >
                {template.name}
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .export--title {
    @apply text-lava-secondary mt-5 text-lg font-medium;
  }

  .export--code {
    @apply col-span-3 box-border flex w-full flex-col gap-y-4;
  }

  .export--code--card {
    @apply bg-lava-card border-lava-mute relative box-border w-full flex-shrink-0 rounded-lg border border-solid border-opacity-10 p-4;
  }

  .export--code--box {
    overflow: scroll;
    position: relative;
    @apply box-border max-h-[70vh] w-full;
  }
  .copy--code--btn {
    @apply absolute right-12 top-4;
    z-index: 100;
  }
  .export--code--btn {
    @apply absolute right-4 top-4;
    z-index: 100;
  }
  .icon {
    @apply h-5 w-5 cursor-pointer;
  }
  .code {
    white-space: pre-wrap;
  }
  pre {
    @apply mt-0;
  }
  .use_soda--view {
    @apply relative flex w-full flex-wrap gap-2;
  }

  .soda-select {
    @apply relative col-span-2 flex w-full flex-col gap-y-4;
  }

  .soda-select--title {
    @apply text-lava-secondary text-sm font-medium;
  }

  .soda-select .modal--form-select {
    @apply m-3;
  }

  :global(.token:first-child) {
    @apply absolute left-0;
  }

  .no-shrink {
    @apply flex-shrink-0;
    flex: 1 0 auto;
  }
</style>
