<script lang="ts">
  let { data } = $props();
</script>

{#each data.posts as post}
  <a class="group block text-inherit no-underline! hover:no-underline! mt-4" href="/blog/{post.slug}">
    <h1 class="mb-2 text-2xl font-semibold text-black">{post.title}</h1>
    {#if post.banner}
      <img
        class="mb-2 w-full max-w-2xl rounded-sm object-cover border-2 border-zinc-800"
        src={post.banner.path}
        alt={post.banner.alt}
        width={post.banner.width}
        height={post.banner.height}
        loading="lazy"
      />
    {/if}
    <p class="text-xm text-gray-600">{post.description}</p>
  </a>
{/each}