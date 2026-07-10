
<script lang="ts">
  import { fly } from 'svelte/transition';

  let { data } = $props();
  const { content: Content, meta } = data;
</script>

<article class="prose mx-auto max-w-3xl px-4 py-12" in:fly={{ y: 16, duration: 500 }}>
  <h1>{meta.title}</h1>
  <p class="text-sm text-gray-500">{new Date(meta.date).toLocaleDateString()}</p>
  <Content />
</article>