<script>
    import Avvvatars from "../../components/avatars/index.svelte";
    import { fly } from "svelte/transition";
    let tests = [
        {
            name: "Escrow",
            address: "EsYVZzhZJjxXjUKEKKbqwk3yA1DvhbFnQXnvFtC7XHm6",
            value: "example-test",
            testing_for: "Success"
        },
        {
            name: "NFT",
            address: "5X3VihDKHb9JG3tos82gicZXoNpMWYD3eGqKYjLqyQCk",
            value: "example-test2",
            testing_for: "Fail"
        },
    ];
    let collection = [
        {
            value: 1,
            label: "one",
            color: "#FEBC2E",
            address: "e9128490125h21b5h12h5u12u59125012",
        },
        {
            value: 2,
            label: "two",
            color: "#FEBC2E",
            address: "e9128490125h21b5h12h5u12u59125012",
        },
        {
            value: 3,
            label: "three",
            color: "#FEBC2E",
            address: "e9128490125h21b5h12h5u12u59125012",
        },
    ];

    import Icon from "../../components/avatars/index.svelte";
    let selectedViewType = "flow";
    let selectedTest;
    import Select from "svelte-select/no-styles/Select.svelte";
    import { onMount } from "svelte";
    let isCreateModalOpen = false;
    import Modal from "../../components/Modal.svelte";

    function handleSelect(index) {
        selectedTest = tests[index];
    }
    function handleOpenModal() {
        isCreateModalOpen = true;
    };
    onMount(() => {
        setTimeout(() => {
        handleOpenModal();
        }, 500);
    })
    let resultSelected = "success";
</script>

 
<Modal
bind:isOpen={isCreateModalOpen}
on:close={() => (isCreateModalOpen = false)}
>
<h1 class="modal--title">Create a new Test</h1>
<div class="modal--form">
  <div class="modal--form-title">Test name</div>
  <input class="input--primary" placeholder="Escrow Test" />
  <div class="modal--form-title">Desired test result</div>
  <div class="test--result">
    <div on:click={() => resultSelected = 'success'} class="test--result--success {resultSelected === 'success' ? 'result--selected' : ''}">
        <img src="./success.svg" alt="Check Icon" class="test--result--icon">
        Pass
    </div>
    <div on:click={() => resultSelected = 'fail'} class="test--result--fail {resultSelected === 'fail' ? 'result--selected' : ''}">
        <img src="./fail.svg" alt="Cross Icon" class="test--result--icon">
        Fail
    </div>
  </div>
</div>
<div class="btns--modal">
  <button class="btn btn--lava" on:click={() => (isCreateModalOpen = false)}
    >Create</button
  >
</div>
</Modal>

<div class="accounts">
    <div class="accounts--sidebar">
        <div class="accounts--sidebar-header">
                {#if !selectedTest}
                <div class="accounts--sidebar-title">
                    Tests
                    </div>
                {:else}
                <div class="accounts--sidebar-back" on:click={() => selectedTest = null}>
                    <img src="./arrow-back.svg" alt="Back Icon" />
                    </div>
                <div class="accounts--sidebar-title">
                    {selectedTest.name}
                </div>
                {/if}
        </div>

        {#if !selectedTest}
            <div class="accounts--sidebar--search">
                <div class="accounts--search--icon">
                    <img src="./search.svg" alt="Search Icon" />
                </div>
                <input
                    class="accounts--sidebar--input"
                    type="text"
                    placeholder="Search your accounts"
                />
            </div>
            <div class="accounts--list">
                {#each tests as test, index}
                    {#key index}
                        <div
                            class="account"
                            on:click={() => handleSelect(index)}
                            in:fly|global={{ y: -20, delay: index * 200 }}
                        >
                            <div class="account--image">
                                <Avvvatars
                                    style="shape"
                                    value={test.name}
                                    radius={5}
                                    size={40}
                                    border={true}
                                />
                            </div>
                            <div class="account--info">
                                <div class="account--info--header">
                                <p class="account--name">{test.name}</p>
                                <div class="account--testing--for {test.testing_for === 'Success' ? 'testing--for--success': 'testing--for--fail'}">
                                    {test.testing_for}
                                </div>
                            </div>
                                <p class="account--address">{test.address}</p>
                            </div>
                        </div>
                    {/key}
                {/each}
            </div>
            <div class="accounts--bottom">
                <div class="accounts--buttons">
                    <button class="btn btn--primary new--account" on:click={() => isCreateModalOpen = true}>
                        <img src="./add.svg" alt="Add Icon" class="new--test--icon">
                        Create New Test
                    </button>
                </div>
            </div>   
        {:else}
        {#key selectedTest}
        <!-- <div class="tests--config" in:fly|global={{y:-20}}>
            <div class="accounts--list">
                <p class="accounts--subheading">Wallet</p>
            </div>

            <Select
                items={collection}
                focused={true}
                placeholder="Icons and Stuff"
            >
                <div slot="selection" class="select--option" let:selection>
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
                    <div class="select--address">{item.address}</div>
                </div>
            </Select>

            <div class="accounts--list">
                <p class="accounts--subheading">Easy Mode Dropdown</p>
            </div>
            <Select
                items={collection}
                focused={true}
                placeholder="Basic Implementation"
            >
                <div slot="item" class="select--option" let:item>
                    <div class="select--text">{item.label}</div>
                    <div class="select--address">{item.address}</div>
                </div>
            </Select>

            <div class="accounts--list">
                <p class="accounts--subheading">Basic Input</p>
            </div>
            <input
                class="input--primary"
                type="text"
                placeholder="Search your tests"
            />
        </div> -->
        <div class="accounts--bottom">
            <div class="accounts--buttons">
                <button class="btn btn--primary new--account" on:click={() => isCreateModalOpen = true}>
                    <img src="./add.svg" alt="Add Icon" class="new--test--icon">
                    Add instruction
                </button>
            </div>
        </div>   
        {/key}
        
        
        {/if}
       
    </div>

    <div class="account--view-type">
        <div
            on:click={() => (selectedViewType = "flow")}
            class="account--view-option {selectedViewType === 'flow'
                ? 'view--selected'
                : ''}"
        >
            <img
                class="account--view-icon"
                src="./cursor.svg"
                alt="Flow Icon"
            />
            <div
                class={selectedViewType === "flow" ? "view--text" : "no--text"}
            >
                Flow
            </div>
        </div>
        <div
            on:click={() => (selectedViewType = "data")}
            class="account--view-option {selectedViewType === 'data'
                ? 'view--selected'
                : ''}"
        >
            <img class="account--view-icon" src="./data.svg" alt="Data Icon" />
            <div
                class={selectedViewType === "data" ? "view--text" : "no--text"}
            >
                Data
            </div>
        </div>
        <div
            on:click={() => (selectedViewType = "script")}
            class="account--view-option {selectedViewType === 'script'
                ? 'view--selected'
                : ''}"
        >
            <img
                class="account--view-icon"
                src="./code.svg"
                alt="Script Icon"
            />
            <div
                class={selectedViewType === "script"
                    ? "view--text"
                    : "no--text"}
            >
                Script
            </div>
        </div>
    </div>
</div>
