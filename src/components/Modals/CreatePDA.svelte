<script>
  import Select from "svelte-select/no-styles/Select.svelte";
  import { workspaces, selectedWorkspace } from "../../stores/store";
  export let editingWallet = -1;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let seedsTypes = [
    "String","Pubkey","Bytes","u8","u16","u32","u64","u128",
  ]
  let seeds = [];
  
</script>

<h1 class="modal--title">Create PDA</h1>
<div class="modal--form">
  <div class="modal--form-title">Seeds</div>
  <Select
    items={seedsTypes}
    on:change={()=>console.log("addSeed")}
    placeholder="Add a seed"
    
  >
  <div slot="selection" class="select--option" let:selection>
    <div class="select--text">{selection.label}</div>
  </div>
  <div slot="item" class="select--option" let:item>
    <div class="select--text">{item.label}</div>
  </div>
</Select>
</div>
<div class="btns--modal">
  <button class="btn btn--lava" on:click={()=>{console.log("pp")}}>Create</button>
</div>
