<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";
  import JSZip from "jszip";
  import init, { get_templates, get_project_files } from "soda-wasm";
  import initSync, { json_to_mocka } from "lava-core";
  import { fly } from "svelte/transition";

  import { createEventDispatcher } from "svelte";
  import Prism from "prismjs";
  import "prismjs/components/prism-json";
  let code = JSON.stringify($workspaces[$selectedWorkspace], null, 2);
  import { copy } from "svelte-copy";

  let workspace = $workspaces[$selectedWorkspace];
  let selectedProgramIndex = -1;
  let ready = false;
  let templates = [];
  onMount(async () => {
    await init().then(() => {
      templates = get_templates();
    }).catch((e) => {
      console.log(e)
    })
    ready = true;
    await initSync();
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

  let exportColors = ["#1371DA", "#FF858B", "#535353", "#61DAFB", "#03569B"];
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
      <div class="common--header">
        <h1
          class="common--title"
          style="margin-bottom:0"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          Export
        </h1>
      </div>
      <div class="export--page--grid">
        <div class="export--code">
          <div class="export--header">
            <div class="export--title">Export Workspace</div>
            <button
              class="btn btn--primary btn--fit btn--end"
              on:click={() => {
                let mocka = json_to_mocka(
                  JSON.stringify($workspaces[$selectedWorkspace]),
                );
                // create a test.mocha.ts file
                const blob = new Blob([mocka], { type: "text/plain" });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.setAttribute("hidden", "");
                a.setAttribute("href", url);
                a.setAttribute("download", `test.mocka.ts`);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
              }}
            >
              <img src="/mocha-glyph.svg" class="icon" /><span
                class="export--button--text">Export Tests to Mocha</span
              ></button
            >
          </div>
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
            {#each templates.sort( (a, b) => a.name.localeCompare(b.name), ) as template, index}
              <div
                style={`--export: ${exportColors[index]};`}
                class="export--card {selectedProgramIndex === -1
                  ? 'card--disabled'
                  : ''}"
              >
                <div class="export--card--title">
                  <img
                    src={`/${template.name.substring(2).replace(/\s/g, "").toLowerCase()}.svg`}
                    class="export--card--icon"
                  />
                  <span>{template.name.substring(2)}</span>
                </div>
                <button
                  style="z-index:10000"
                  class="btn btn--primary workspace--btn btn--fit {selectedProgramIndex ==
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
                        $workspaces[$selectedWorkspace].idls[
                          selectedProgramIndex
                        ].name || " "
                      }.zip`;
                      downloadLink.click();

                      URL.revokeObjectURL(url);
                    });
                  }}
                >
                  Export
                </button>
              </div>
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

  .export--header {
    @apply flex items-center justify-between;
  }

  .export--code {
    @apply col-span-7 box-border flex w-full flex-col gap-y-4;
  }

  .export--card--icon {
    @apply h-5 w-5;
  }

  .export--code--card {
    @apply bg-lava-card border-lava-mute relative box-border w-full flex-shrink-0 rounded-lg border border-solid border-opacity-10 p-4;
  }

  .export--card--title {
    @apply text-lava-secondary z-10 flex items-center space-x-2 font-medium;
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
    @apply relative flex h-[70vh] w-full flex-col gap-2;
  }

  .soda-select {
    @apply relative col-span-3 flex w-full flex-col gap-y-4;
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

  .card--disabled {
    @apply opacity-50;
    cursor: default !important;
  }
</style>
