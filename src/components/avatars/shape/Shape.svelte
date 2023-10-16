<script>
    import Shapes from './Shapes.svelte';
  
    export let name;
    export let size = 24;
    export let color = 'currentColor';
</script>
  
<div class="shape-wrapper" role="img" style="color: {color};">
    <Shapes {name} {size} {color}/>
</div>
  
<style>
    .shape-wrapper {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
    }
</style>