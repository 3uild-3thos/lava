<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import Select from "svelte-select/no-styles/Select.svelte";

  import JSZip from "jszip";
  import init, { get_templates, get_project_files } from "soda-wasm";

  let workspace = $workspaces[$selectedWorkspace];
  let selectedProgramIndex = 0;
  let ready = false;
  let templates = [];
  onMount(async () => {
    init().then(() => {
      templates = get_templates();
    });
    ready = true;
  });
</script>

<svelte:head>
  <title>
    {`⬡ Lava - Use Soda`}
  </title>
  <link
    href="https://unpkg.com/prism-themes@1.9.0/themes/prism-duotone-dark.min.css"
    rel="stylesheet"
  />
</svelte:head>

{#if ready}
  {#if $workspaces[$selectedWorkspace].idls.length == 0}
    <div class="common--wrapper">
      <div class="tokens">
        <div class="use_soda--view">
          <div class="use_soda--view--text">
            No programs found in this workspace.
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="common--wrapper">
      <div class="soda-select">
        <Select
          class="modal--form-select"
          items={$workspaces[$selectedWorkspace].idls.map((idl, index) => {
            return { label: idl.name, index };
          })}
          value="{{
            index: selectedProgramIndex,
            label:
              $workspaces[$selectedWorkspace].idls[selectedProgramIndex]?.name,
          }}}}"
          on:change={(e) => {
            selectedProgramIndex = e.detail.index;
          }}
          placeholder="Select Program"
        >
          <div slot="selection" class="select--option" let:selection>
            <div class="select--text">
              {$workspaces[$selectedWorkspace].idls[selectedProgramIndex]?.name}
            </div>
          </div>
          <div slot="item" class="select--option" let:item>
            <div class="select--text">{item.label}</div>
          </div>
        </Select>

        <div class="use_soda--view">
          {#if selectedProgramIndex != -1}
            {#each templates as template, index}
              <button
                class="btn btn--primary workspace--btn btn--fit"
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
          {/if}
        </div>
      </div>
    </div>
  {/if}
{/if}
