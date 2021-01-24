<h1 class="text-2xl leading-none text-grey-darkest">
  <a class={textColor} href={textLink} use:link>{textTitle}</a>
</h1>
<script lang="ts">
    import { onMount } from 'svelte';
    import { link } from 'svelte-spa-router'

    // props
    export let textTitle: string;
    export let textLink: string;
    export let textColorArray: any;
    
    let textColor: string  = ''

    onMount(() => {
        textColor = textColorArray.splice(",").join(" ")
    })
</script>