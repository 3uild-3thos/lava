<script lang="ts">
  import AccountListCard from "../../components/AccountListCard.svelte";
    import { workspaces, selectedWorkspace } from "../../stores/store";
    $: programs = $workspaces[$selectedWorkspace]?.programs;
    let color = ["#9945FF", "#19FB9B"];

</script>
<svelte:head>
  <title>
    {`⬡ Lava - Tests`}
  </title>
</svelte:head>

<div class="contracts--list">
    <div class="wallet--list">
        <AccountListCard
            accounts={{
            wallets:
                $workspaces[$selectedWorkspace]?.programs.map((program) => ({
                    program,
                    type: "program",
                })) ?? [],
            }}
            walletsLength={$workspaces[$selectedWorkspace]?.programs.length}
            {color}
            tokenColors={[]}
            walletColors={[]}
        />
    </div>
</div>