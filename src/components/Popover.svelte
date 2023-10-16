<script>
    export let title = "";
    export let yOffset = 0;
    export let xOffset = 0;
    export let blur = 5;
    import { fly } from "svelte/transition";
</script>

<div
    class="popover"
    style={`top: ${yOffset}px !important; left: ${xOffset}px !important; backdrop-filter: blur(${blur}px); -webkit-backdrop-filter:blur(${blur}px)`}
    transition:fly={{ duration: 150, opacity: 0, y: 5 }}
>
    <p class="popover--message">{title}</p>
    <slot />
</div>
