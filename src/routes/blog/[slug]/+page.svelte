<script lang="ts">
  let { data } = $props();
  const { content: Content, meta } = data;

  // Explicit locale — a bare toLocaleDateString() formats with the server's
  // locale during prerender and the visitor's on hydration, which mismatch.
  const date = new Date(meta.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
</script>

<svelte:head>
  <title>{meta.title} — logolicusz</title>
</svelte:head>

<article class="mx-auto max-w-3xl pb-8">
  <header class="text-center">
    <p class="text-xs tracking-[0.2em] text-neutral-500 uppercase">{date}</p>
    <h1 class="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
      {meta.title}
    </h1>
    {#if meta.description}
      <p class="mx-auto mt-5 max-w-lg text-pretty text-neutral-500 sm:text-lg">
        {meta.description}
      </p>
    {/if}
  </header>

  <div class="prose mt-[clamp(2.5rem,6vw,4rem)] max-w-none">
    <Content />
  </div>
</article>
