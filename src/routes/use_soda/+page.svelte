<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import JSZip from "jszip";
  import init, { get_templates, get_project_files } from "soda-wasm";

  let workspace = $workspaces[$selectedWorkspace];

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
  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--slug">Viewing Workspace</div>
      <div class="common--header" style="padding-right:0;">
        <h1
          class="common--title"
          style="margin-bottom:0;"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          {workspace.name}
        </h1>
      </div>

      <div class="use_soda--view">

          {#each templates as template, index}
            <button
              class="btn btn--primary workspace--btn btn--fit"
              on:click={()=>{
                const files =get_project_files(index, JSON.stringify($workspaces[$selectedWorkspace].idls[0]));
                const zip = new JSZip();

            // Iterate over each file in the response
            files.Ok.forEach((file) => {
                const { path, content } = file;
                const folders = path.split('/');
                const fileName = folders.pop();
                let folder = zip;
                folders.forEach((folderName) => {
                    folder = folder.folder(folderName)
                });

                if (typeof content.String != "undefined") {
                    folder.file(fileName, content.String);
                } else {
                    folder.file(fileName, content.Vec)
                }
            });

            zip.generateAsync({ type: 'blob' }).then(blob => {
                const url = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.download = `${$workspaces[$selectedWorkspace].name || " "}.zip`;
                downloadLink.click();

                URL.revokeObjectURL(url);
            });
                }
              }
            >
              {template.name}
              
              
            </button>
          {/each}


        </div>
      </div>
    </div>

{/if}
