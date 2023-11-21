<script>
    import Sidebar from "../components/Sidebar.svelte";
    import { page } from "$app/stores";
    import { fade, fly, blur } from "svelte/transition";
    import Gradient from "../components/Gradient.svelte";
  import { onMount } from "svelte";
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
        creatingNewWorkspace =true;
    }

    function selectTemplate() {
        templateSelected = true;
    }

    onMount(() => {
        ready = true;
    });
</script>

{#if !creatingNewWorkspace}
    {#if ready}
        <div class="welcome--page">
            <img
                class="welcome--gradient"
                src="./gradient-home.svg"
                alt="Home Gradient"
            />
            <h1 class="welcome--title" in:fly={{ duration: 300, y: -30 }}>
                Welcome to Lava
            </h1>
            <h2
                class="welcome--subtitle"
                in:fly={{ duration: 300, delay: 100, y: -15 }}
            >
                Before you get started on your journey, select or create a new
                workspace
            </h2>
            <div class="workspace" style={`--rotate:${angle}deg`}>
                <div class="workspace--options">
                    <div
                        class="workspace--option-box"
                        on:click={() => newWorkspace()}
                        in:fade={{ duration: 300, delay: 200 }}
                    >
                        <div class="workspace--option">
                            <img
                                src="./new-workspace.svg"
                                alt="New Workspace"
                            />
                            <img
                                src="./add.svg"
                                class="workspace--plus"
                                alt="Add Icon"
                            />
                        </div>
                        <h3 class="workspace--title">New Workspace</h3>
                        <h4 class="workspace--subtitle">Start from scratch</h4>
                    </div>
                    <div
                        class="workspace--option-box"
                        in:fade={{ duration: 300, delay: 300 }}
                    >
                        <div class="workspace--option">
                            <img
                                src="./existing-workspace.svg"
                                alt="Existing Workspace"
                                style="width:111px;"
                            />
                        </div>
                        <h3 class="workspace--title">Existing Workspace</h3>
                        <h4 class="workspace--subtitle">Already started?</h4>
                    </div>
                </div>
            </div>
        </div>
    {/if}
{:else if creatingNewWorkspace && !templateSelected}
    <div class="welcome--page">
        {#key hoveredType}
            <div
                id="gradient"
                style="position:absolute;top:-30%;"
                in:blur={{ duration: 500 }}
            >
                <Gradient colors={hoveredType} />
            </div>
        {/key}
        <h1
            class="welcome--title title--smaller"
            style="z-index:999"
            in:fade={{ duration: 300 }}
        >
            Select a Program Template
        </h1>
        <h2
            class="welcome--subtitle"
            in:fly={{ duration: 300, delay: 100, y: -15 }}
        >
            You can add additional programs in the dashboard later
        </h2>
        <div class="workspace" style={`--rotate:${angle}deg`}>
            <div class="workspace--options">
                <div
                    class="workspace--option-box"
                    on:mouseenter={() => hoveredTypeChange(0)}
                    on:click={() => selectTemplate()}
                    in:fade={{ duration: 300, delay: 200 }}
                >
                    <div class="workspace--option blank--program">
                        <img
                            src="./blank-program.svg"
                            class="blank--program"
                            alt="Blank Program"
                        />
                        <img
                            in:fade={{ delay: 300 }}
                            src="./blank-program-icon.svg"
                            class="workspace--sol"
                            alt="Solana Icon"
                        />
                    </div>
                    <h3 class="workspace--title">Blank Program</h3>
                    <h4 class="workspace--subtitle">
                        Skeleton program for experienced Solana devs
                    </h4>
                </div>
                <div
                    class="workspace--option-box"
                    in:fade={{ duration: 300, delay: 300 }}
                    on:mouseenter={() => hoveredTypeChange(1)}
                >
                    <div class="workspace--option token--program">
                        <img
                            src="./token-program.svg"
                            class="blank--program"
                            alt="Token Program"
                        />
                        <img
                            in:fade={{ delay: 400 }}
                            src="./token-program-icon.svg"
                            class="workspace--sol"
                            alt="Token Program Icon"
                        />
                    </div>
                    <h3 class="workspace--title">Token Program</h3>
                    <h4 class="workspace--subtitle">
                        An example program for creating Solana tokens
                    </h4>
                </div>
                <div
                    class="workspace--option-box"
                    in:fade={{ duration: 300, delay: 400 }}
                    on:mouseenter={() => hoveredTypeChange(2)}
                >
                    <div class="workspace--option nft--program">
                        <img
                            src="./nft-program.svg"
                            class="blank--program"
                            alt="Blank Program"
                        />
                        <img
                            in:fade={{ delay: 500 }}
                            src="./nft-program-icon.svg"
                            class="workspace--sol"
                            alt="Solana Icon"
                        />
                    </div>
                    <h3 class="workspace--title">NFT Program</h3>
                    <h4 class="workspace--subtitle">
                        An example program for minting NFTs
                    </h4>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="wrapper" in:fade>
        <Sidebar />
        {#key path}
            <div class="content" in:fade={{ duration: 100 }}>
                <slot />
            </div>
        {/key}
    </div>
{/if}

<style global>
    @import "../app.css";
</style>
