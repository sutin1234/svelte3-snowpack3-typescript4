<script lang="ts">
  import BrandLogo from '@/components/BrandLogo.svelte';
  const textColor: Array<string> = ['no-underline', 'text-blue-800', 'hover:text-black'];
  import Icon from '@/components/Icon.svelte';
   import { link } from 'svelte-spa-router'

</script>

<header class="p-4 pb-0 border-b shadow-lg md:flex md:items-center md:justify-between md:pb-4">
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <BrandLogo textTitle="Svelte3" textColorArray={textColor} textLink="/" />

    <a class="text-black hover:text-orange md:hidden" href="#">
      <Icon name="fa-dev" color="text-blue-600" />
    </a>
  </div>
  <!-- END Logo text or image -->

  <!-- Search field -->
  <form class="w-full mb-4 md:mb-0 md:w-1/4">
    <label class="hidden" for="search-form">Search</label>
    <input
      class="w-full p-2 border-2 rounded-lg shadow-inner bg-grey-lightest focus:border-orange"
      placeholder="Search"
      type="text"
    />
    <button class="hidden">Submit</button>
  </form>
  <!-- END Search field -->

  <!-- Global navigation -->
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a
          class="block py-2 no-underline border-t hover:underline text-grey-darkest hover:text-black md:border-none md:p-0"
          href="/about" use:link> About </a>
      </li>
      <li class="md:ml-4">
        <a
          class="block py-2 no-underline border-t hover:underline text-grey-darkest hover:text-black md:border-none md:p-0"
          href="/contact" use:link> Contact </a>
      </li>
    </ul>
  </nav>
  <!-- END Global navigation -->
</header>
