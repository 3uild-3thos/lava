<script>
  import { workspaces, selectedWorkspace } from "../../stores/store";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  let workspace = $workspaces[$selectedWorkspace];

  let ready = false;
  onMount(() => {
    ready = true;
  });
</script>

{#if ready}
  <div class="common--wrapper">
    <div class="tokens">
      <div class="common--slug">Viewing Workspace</div>
      <div class="common--header">
        <h1
          class="common--title"
          style="margin-bottom:0"
          in:fly={{ delay: 100, duration: 100, y: -10 }}
        >
          {workspace.name}
          <div class="workspace--edit" />
        </h1>
        <!-- <button class="btn btn--primary btn--fit btn--end"
        ><img
          src="./add.svg"
          alt="Add Icon"
          style="margin-right:5px;width:16px;height:16px;"
        /> Create an Account</button
      > -->
      <button
      class="btn btn--primary workspace--option-btn"
      on:click={() => {
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
      }}>Download</button
    >
      </div>

      <div class="workspace--view">
        <div class="workspace--stats">
          <div
            class="workspace--stat"
            style={`--color: #00FFC2`}
            in:fade={{ duration: 200 }}
          >
            <img src="./standard-wallet.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {workspace.wallets.length}
              </div>
              <div class="workspace--stat--title">Wallets</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #FFBE41`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./token-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">
                {workspace.tokens.length}
              </div>
              <div class="workspace--stat--title">Token Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #8A54FE`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./mint-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">0</div>
              <div class="workspace--stat--title">Mint Accounts</div>
            </div>
          </div>
          <div
            class="workspace--stat"
            style={`--color: #5498FE`}
            in:fade={{ delay: 100, duration: 200 }}
          >
            <img src="./metadata-account.svg" class="workspace--stat--icon" />
            <div class="workspace--stat--content">
              <div class="workspace--stat--value">0</div>
              <div class="workspace--stat--title">Metadata Accounts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
