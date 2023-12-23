<script>
    export let ata = {};
    export let accounts = [];
    export let colors = [];
    import Avatar from "./avatars/index.svelte";
    import Popover from "./Popover.svelte";

    $: mintIndex = accounts.findIndex((account) => account.kind === "mint" && account.symbol === ata.mint);
    $: authorityIndex = accounts.findIndex((account) => account.name === ata.authority);
    let mintPopOverOpened = false;
    let authorityPopOverOpened = false;
</script>

<div class="ata--relationship">
    <div style="position:relative" on:mouseover={() => mintPopOverOpened = true} on:mouseleave={() => mintPopOverOpened = false}>
    {#if mintPopOverOpened}
        <Popover xOffset={-0} yOffset={-45} title={ata.mint} on:mouseleave={() => popOverOpened = false}/>
    {/if}
        <Avatar size={32} color={colors[mintIndex]} value={ata.mint} />
    </div>
    <div class="ata--line" style={`--color1: ${colors[mintIndex]}; --color2: ${colors[authorityIndex]}`}></div>

    <div style="position:relative" on:mouseover={() => authorityPopOverOpened = true} on:mouseleave={() => authorityPopOverOpened = false}>
    {#if authorityPopOverOpened}
        <Popover xOffset={-75} yOffset={-45} title={ata.authority} on:mouseleave={() => popOverOpened = false}/>
    {/if}
    <Avatar size={32} color={colors[authorityIndex]} value={ata.authority} />
    </div>
    
</div>

<style lang="scss">
    .ata--relationship {
        @apply flex items-center w-full relative
    }

    .ata--line {
        @apply h-[1px] w-full rounded-full;
        background-image: linear-gradient(90deg, var(--color1), #383A41, #383A41, var(--color2));
    }

</style>