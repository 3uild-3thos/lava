<script>
    let workspaces = [
        {
            name: "Q2 Workspace",
            location: "~/Desktop",
            active: true,
        },
        {
            name: "Q1 Old Workspace",
            location: "~/Desktop",
            active: false,
        },
    ];
</script>

<div class="workspace--home">
    <div class="workspace--left">
        <div class="workspace--home--header">
            <img
                src="./lava-logo.svg"
                class="workspace--logo"
                alt="Lava Logo Colored"
            />
            <div class="workspace--home--title">
                Welcome to <span>Lava</span>
            </div>
            <div class="workspace--home--version">Version 0.2.0</div>
        </div>

        <div class="workspace--home--create">
            <div class="workspace--create--title">Workspaces</div>
            <div class="workspace--create--options">
                <div class="workspace--create--option">
                    <img
                        src="./new-workspace.svg"
                        alt="New Workspace"
                        class="workspace--option-img"
                    />
                    <div class="workspace--create--text">
                        <div class="workspace--create--text--title">
                            Create a new Workspace
                        </div>
                        <div class="workspace--create--text--subtitle">
                            Create a new blank workspace
                        </div>
                    </div>
                    <button class="btn btn--lava workspace--option-btn"
                        >Create</button
                    >
                </div>
                <hr class="divider" />
                <div class="workspace--create--option">
                    <img
                        src="./existing-workspace.svg"
                        alt="Existing Workspace"
                        class="workspace--option-img"
                    />
                    <div class="workspace--create--text">
                        <div class="workspace--create--text--title">
                            Open an existing Workspace
                        </div>
                        <div class="workspace--create--text--subtitle">
                            Browse your computer for an existing Lava workspace
                        </div>
                    </div>
                    <button class="btn btn--primary workspace--option-btn"
                        >Import</button
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="workspace--right">
        <div class="workspace--home--recents">
            <div class="workspace--create--title">Recent Workspaces</div>
            <div class="workspace--create--options">
                {#each workspaces as workspace, index}
                    <div class="workspace--create--option">
                        <div class="workspace--create--text">
                            <div class="workspace--create--text--title">
                                {workspace.name}
                            </div>
                            <div class="workspace--create--text--subtitle">
                                {workspace.location}
                            </div>
                        </div>
                        {#if workspace.active}
                            <div class="workspace--active">Active</div>
                        {/if}
                        <button
                            class="btn btn--primary workspace--option-btn {workspace.active
                                ? 'btn--disabled disabled--workspace'
                                : ''}"
                            disabled={workspace.active}>Open</button
                        >
                    </div>
                    {#if index < workspaces.length - 1}
                        <hr class="divider" />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>
