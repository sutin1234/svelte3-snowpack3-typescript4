<script lang="ts">
  import './main.css';
  import '@fortawesome/fontawesome-free/js/all';
  import Router from 'svelte-spa-router';
  // import { Router } from "@roxi/routify";
  import { onMount } from 'svelte'

  import Header from '@/layouts/Header.svelte';
  import routes from '@/routes';


  onMount(() =>{
    console.log('onMounted ', routes);
  })
  const routeLoaded = (event) => {
    console.log('routeLoaded ', event.detail);
  }
</script>

<div class="app">
  <Header />
  <Router {routes} on:routeLoaded={routeLoaded} />
</div>
