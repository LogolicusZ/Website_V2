<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  let { children, data } = $props();
</script>

<svelte:head>
  <title>krchv</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://logolicusz.com/" />
  <meta property="og:title" content="Home" />
  <meta
    property="og:description"
    content="Hi! Im Logolicus and I like to make stuff!"
  />
  <meta property="og:image" content="/assets/img/preview.png" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="httlogolicusz.com/" />
  <meta property="twitter:title" content="Home" />
  <meta
    property="twitter:description"
    content="Hi! Im Logolicus and I like to make stuff!!"
  />
  <meta property="twitter:image" content="/assets/img/preview.png" />
</svelte:head>

<main class="flex h-dvh w-full overflow-hidden">
  <Navbar {data} />
  <div class="h-full w-full overflow-auto p-12 pl-12 md:pl-0 lg:pl-0">
    {@render children()}
  </div>
</main>