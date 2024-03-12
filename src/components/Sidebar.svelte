<script lang="ts">
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  import { selectedWorkspace, workspaces } from "../stores/store";
  let path: string;

  $: path = $page.url.pathname;
  import NodeConnection from "./NodeConnection.svelte";
  import Popover from "./Popover.svelte";
  let routes = [
    {
      title: "Workspace",
      link: "/workspace",
      icon: "workspace.svg",
    },
    {
      title: "Accounts",
      link: "/accounts",
      icon: "tokens.svg",
    },
    {
      title: "Tests",
      link: "/tests",
      icon: "tests.svg",
    },
    {
      title: "Export",
      link: "/export",
      icon: "export.svg",
    },
  ];

  let m = { x: 0, y: 0 };

  function handleMousemove(event: MouseEvent) {
    let bounds = (event.currentTarget as HTMLElement)?.getBoundingClientRect();
    m.x = event.clientX - bounds.left;
    m.y = event.clientY - bounds.top;
  }

  let hoveredLink: number | null;

  function hovered(index: number | null) {
    hoveredLink = index;
  }
</script>

<div class="sidebar">
  <div class="sidebar--nav">
    <a href="/">
      <img class="sidebar--logo" src="./logo-glyph.svg" alt="Logo Glyph" />
    </a>
    {#if $workspaces.length > 0}
      {#each routes as route, index}
        <div class="sidebar--link-wrapper">
          {#if route.link === path}
            <div class="sidebar--active-link" in:fade={{ duration: 150 }} />
          {/if}
          {#if hoveredLink === index}
            <Popover title={route.title} xOffset={55} yOffset={2.5} blur={25} />
          {/if}
          <a
            class="sidebar--link"
            href={route.link}
            on:mouseover={() => hovered(index)}
            on:mouseleave={() => hovered(null)}
            on:mousemove={handleMousemove}
            style={`--left:${m.x}; --top:${m.y}`}
          >
            <img
              class="sidebar--link-icon"
              src={`./${route.icon}`}
              alt={`${route.link} Icon`}
            />
          </a>
        </div>
      {/each}
    {/if}
    <div class="sidebar--bottom">
      <NodeConnection />
    </div>
  </div>
</div>
