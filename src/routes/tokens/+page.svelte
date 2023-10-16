<script>
    import { createEventDispatcher, onMount } from "svelte";
    import TokenIcon from "../../components/avatars/index.svelte";
    import { fade, fly, blur } from "svelte/transition";
    import Select from "svelte-select/no-styles/Select.svelte";
    import Icon from "../../components/avatars/index.svelte";

    let dummyTokens = [
        {
            name: "USDCoin",
            ticker: "USDC",
            owner: "Wallet Temp",
            supply: 10000000,
            decimals: 7,
            color: ["#2775CA","#2775CA"],
            userAdded: false
        },
        {
            name: "Solana",
            ticker: "SOL",
            owner: "Wallet Temp",
            supply: 500000000,
            decimals: 10,
            color: ["#9945FF","#19FB9B"],
            userAdded: false
        },
        {
            name: "KenOath",
            ticker: "KEN",
            owner: "Wallet Temp",
            supply: 1000000,
            decimals: 7,
            color: ["#30DCB2","#30DCB2"],
            userAdded: true
        },
        {
            name: "EpicMarz",
            ticker: "MARZ",
            owner: "Wallet Temp",
            supply: 100000000,
            decimals: 9,
            color: ["#8A54FE", "#8A54FE"],
            userAdded:true,
        },
        {
            name: "Bob",
            ticker: "BOB",
            owner: "Wallet Temp",
            supply: 1000000000,
            decimals: 10,
            userAdded: true,
            color: ["#FEBC2E", "#FEBC2E"],
        },
    ];

    let wallets = [
        {
            label: "yes",
            value: 0,
            color: "#DC30C0",
        },
        {
            label: "yesBUTINCAPS",
            value: 1,
            color: "#CEDC30",
        },
    ];

    let assignedList = [];

    let ready = false;
    onMount(() => {
        ready = true;
    });

    import Modal from "../../components/Modal.svelte";
    import Dropdown from "../../components/Dropdown.svelte";
    import Index from "../../components/avatars/index.svelte";
    let isCreateModalOpen = false;
    let isViewModalOpen = false;
    let isDropdownOpen = false;
    let selectedOption = "None";
    let hideTokens = false;
    let openedToken = dummyTokens[0];

    function openViewModal(index) {
        isViewModalOpen = true;
        openedToken = dummyTokens[index];
    }

    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        let bounds = event.currentTarget.getBoundingClientRect();
        m.x = event.clientX - bounds.left;
        m.y = event.clientY - bounds.top;
    }

    let isAssignedButtonDisabled = true;

    $: if (Object.keys(selectedWallet).length !== 0 && tokenAmount > 0) {
        isAssignedButtonDisabled = false;
    }

    let selectedWallet = {};
    let tokenAmount = 1000;

    function clearSelectedWallet(e) {
        selectedWallet = {};
        selectedWallet = selectedWallet;
        isAssignedButtonDisabled = true;
    }

    function updateSelectedWallet(e) {
        selectedWallet = e.detail;
        selectedWallet = selectedWallet;
        isAssignedButtonDisabled = true;
    }

    function addWallet() {
        for (let i = 0; i < assignedList.length; i++) {
            if (assignedList[i].selectedWallet.value === selectedWallet.value) {
                console.log("This wallet has already been added.");
                isAssignedButtonDisabled = true;
                return;
            }
        }
        assignedList.push({ selectedWallet, tokenAmount });
        assignedList = assignedList;
        console.log(assignedList);
    }

    function removeWallet(index) {
        assignedList.splice(index, 1);
        assignedList = assignedList;
        console.log(assignedList);
    }
</script>

{#if ready}
    <!-- Create Token Modal -->
    <Modal
        bind:isOpen={isCreateModalOpen}
        on:close={() => (isCreateModalOpen = false)}
    >
        <h1 class="modal--title">Create a new Token</h1>
        <div class="modal--form">
            <div class="modal--form-title">Name</div>
            <input class="input--primary" placeholder="My New Token" />
            <div class="modal--form-title">Ticker</div>
            <input class="input--primary" placeholder="$TKN" />
            <div class="modal--form-title">Decimals</div>
            <input
                class="input--primary"
                type="number"
                max="10"
                value={6}
                placeholder="1-10"
            />
            <div class="modal--form--group">
                <div class="modal--form-title">Authority (Optional)</div>

                <Select
                    items={wallets}
                    focused={true}
                    placeholder="Wallet Name"
                >
                    <div slot="item" class="select--option" let:item>
                        <div class="select--text">{item.label}</div>
                    </div>
                </Select>
            </div>
        </div>
        <div class="btns--modal">
            <button
                class="btn btn--lava"
                on:click={() => (isCreateModalOpen = false)}>Create</button
            >
        </div>
    </Modal>

    <!-- Assign Tokens Modal -->

    <Modal
        bind:isOpen={isViewModalOpen}
        on:close={() => (isViewModalOpen = false)}
        modalVariant={true}
        color={openedToken.color}
        width={400}
    >
        <h1 class="modal--title">
            Assign <span style={`color: ${openedToken.color[0]}`}
                >{openedToken.name}</span
            > to Wallets
        </h1>
        <div class="assign--tokens--wrapper">
            <div class="assign--tokens">
                <div class="assign--tokens--wallet">
                    <Select
                        items={wallets}
                        focused={true}
                        placeholder="Select Wallet"
                        on:change={updateSelectedWallet}
                        on:clear={clearSelectedWallet}
                    >
                        <div
                            slot="selection"
                            class="select--option"
                            let:selection
                        >
                            <Icon
                                size={24}
                                value={selection.label}
                                color={selection.color}
                                border={true}
                                radius={7}
                            />
                            <div class="select--text">{selection.label}</div>
                        </div>

                        <div slot="item" class="select--option" let:item>
                            <Icon
                                size={24}
                                value={item.label}
                                color={item.color}
                                border={true}
                                radius={7}
                            />
                            <div class="select--text">{item.label}</div>
                        </div>
                    </Select>
                </div>
                <div class="assign--tokens--amount">
                    <input
                        class="input--primary"
                        bind:value={tokenAmount}
                        style="height:45px"
                        type="number"
                        step="100"
                        placeholder="Amount"
                    />
                </div>
            </div>
            <button
                class="assign--button"
                disabled={isAssignedButtonDisabled}
                style={isAssignedButtonDisabled ? "opacity:0.2" : "opacity:1"}
                on:click={() => addWallet()}
            >
                <img src="./add.svg" class="assign--button--image" />
            </button>
        </div>

        {#if assignedList.length > 0}
            <div class="assigned--header" transition:fade={{ duration: 200 }}>
                Wallets Assigned
            </div>
            <div class="assigned--tokens">
                {#each assignedList as assigned, index}
                    <div
                        class="assigned--token"
                        transition:fade={{ duration: 200 }}
                    >
                        <Icon
                            size={24}
                            value={assigned.selectedWallet.label}
                            color={assigned.selectedWallet.color}
                            border={true}
                            radius={7}
                        />
                        <div class="assigned--wallet--name">
                            {assigned.selectedWallet.label}
                        </div>
                        <div class="assigned--wallet--amount">
                            {assigned.tokenAmount}
                        </div>
                        <button
                            class="assign--button"
                            style="padding:0.25rem"
                            on:click={() => removeWallet(index)}
                        >
                            <img
                                src="./remove.svg"
                                style="width:14px;height:14px"
                            />
                        </button>
                    </div>
                {/each}
            </div>
        {/if}

        <div class="btns--modal">
            <button
                class="btn btn--primary"
                on:click={() => (isViewModalOpen = false)}>Assign</button
            >
        </div>
    </Modal>

    <div class="common--wrapper">
        <div class="tokens">
            <div class="common--header">
                <h1
                    class="common--title"
                    style="margin-bottom:0px !important"
                    in:fly|global={{ delay: 100, duration: 100, y: -10 }}
                >
                    Tokens
                </h1>
                {#if dummyTokens && !hideTokens}
                    <button
                        class="btn btn--primary btn--fit btn--end"
                        on:click={() => (isCreateModalOpen = true)}
                        ><img
                            src="./add.svg"
                            alt="Add Icon"
                            style="margin-right:5px;width:16px;height:16px;"
                        /> Add a Token</button
                    >
                {/if}
            </div>
            {#if dummyTokens && !hideTokens}
                <div class="token--list">
                    {#each dummyTokens as token, index}
                        <div
                            class="wallet--list--item"
                            on:click={() => openViewModal(index)}
                            on:mousemove={handleMousemove}
                            in:fade|global={{
                                delay: index * 100,
                                duration: 100,
                            }}
                            style={`--color: ${token.color[0]}; --color2: ${token.color[1]}; --bgColor: ${token.color[0]}10; --opacity: 0.6; --left:${m.x}; --top:${m.y}`}
                        >
                            <div class="token--list--item--shimmer" />
                            <div class="wallet--list--content">
                                <div class="token--header">
                                    {#if !token.userAdded}
                                        <img src={`/${token.ticker}.svg`} alt={`${token.name} Icon`} style="width:32px;height:32px">
                                     {:else}
                                        <TokenIcon
                                        value={token.name}
                                        style="shape"
                                        size={32}
                                        color={token.color[0]}
                                        border={true}
                                        radius={7}
                                        />
                                    {/if}
                                    <div class="token--ticker">
                                        ${token.ticker}
                                    </div>
                                </div>
                                <div class="token--name">{token.name}</div>
                                <div class="token--supply">
                                    {token.supply.toLocaleString()}
                                </div>
                                <div class="token--owner">
                                    <img
                                        src="./owner.svg"
                                        class="token--owner-icon"
                                        alt="Fingerprint Icon"
                                    />{token.owner}
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else}
                <div class="empty--state">
                    <img
                        src="/emptystates/notokens.svg"
                        class="empty--state--image"
                        alt="No Tokens in Wallet"
                    />
                    <div class="empty--state--text">
                        You don't have any tokens, yet
                    </div>
                    <div class="empty--state--subtext">
                        Create and assign to your wallets here
                    </div>
                    <button
                        class="btn btn--primary btn--fit"
                        on:click={() => (isCreateModalOpen = true)}
                        ><img
                            src="./add.svg"
                            alt="Add Icon"
                            style="margin-right:5px;width:16px;height:16px;"
                        /> Create a Token</button
                    >
                </div>
            {/if}
        </div>
    </div>
{/if}
