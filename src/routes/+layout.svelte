<script>
  import Sidebar from "../components/Sidebar.svelte";
  import { page } from "$app/stores";
  import { fade, fly, blur } from "svelte/transition";
  import Gradient from "../components/Gradient.svelte";
  import { onMount } from "svelte";
  import { selectedWorkspace, workspaces } from "../stores/store";
  let angle = 180;
  $: path = $page.url.pathname;

  let data = "";

  setInterval(() => {
    angle += 1;
    if (angle >= 360) {
      angle = 0;
    }
  }, 10);

  let types = [
    {
      colors: ["#00A880", "#005340", "#005340"],
    },
    {
      colors: ["#ECA51B", "#ECA51B", "#A93D00"],
    },
    {
      colors: ["#3600A9", "#3600A9", "#C2A6FF"],
    },
    {
      colors: ["#00A880", "#005340", "#005340"],
    },
  ];

  let hoveredType = types[3].colors;

  function hoveredTypeChange(index) {
    hoveredType = types[index].colors;
    document.getElementById("gradient").innerHTML += "";
  }

  let ready = false;
  let templateSelected = false;
  let creatingNewWorkspace = false;

  function newWorkspace() {
    console.log("new workspace");
    creatingNewWorkspace = true;
  }

  function selectTemplate() {
    templateSelected = true;
  }

  onMount(() => {
    ready = true;

    if ($workspaces === undefined) {
      $workspaces = [
        {
          name: "Empty Workspace",
          programs: [],
          wallets: [],
          tokens: [],
        },
      ];
    }
    if ($selectedWorkspace === undefined) {
      $selectedWorkspace = 0;
    }
  });
</script>

<div class="wrapper" in:fade>
  <Sidebar />
  {#key path}
    <div class="content" in:fade={{ duration: 100 }}>
      <slot />
    </div>
  {/key}
</div>

<style global>
  @import "../app.css";
</style>
