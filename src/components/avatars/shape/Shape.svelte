<script lang="ts">
    import Geometry from "./Geometry.svelte";
    export let name: string;
    export let size = 24;
    export let color = 'currentColor';
</script>
  
<div class="shape-wrapper" role="img" style="color: {color};">
    <Geometry {name} {size} {color}/>
</div>
  
<style>
    .shape-wrapper {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
    }
</style>