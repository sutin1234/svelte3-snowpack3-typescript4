<script lang="ts">
  export let prefix: string = 'fab';
  export let name: string;
  export let size: string = 'fa-2x';
  export let color: string = null;
  export let title: string = null;
  $: className = [prefix, size, name, `fill-current ${color}`].toString().split(',').join(' ');
</script>

<i class={className} {title} />
