<script lang="ts">
  let { data } = $props();
</script>

<div class="mx-auto max-w-3xl px-4 py-12">
  {#each data.posts as post}
    <a
      class="group mb-10 block text-inherit no-underline! hover:no-underline! last:mb-0"
      href="/blog/{post.slug}"
    >
      <h1 class="mb-2 text-2xl font-semibold text-black">{post.title}</h1>
      {#if post.banner}
        <img
          class="mb-2 aspect-video w-full rounded-md border-2 border-zinc-800 object-cover"
          src={post.banner.path}
          alt={post.banner.alt}
          width={post.banner.width}
          height={post.banner.height}
          loading="lazy"
        />
      {/if}
      <p class="text-sm text-gray-600">{post.description}</p>
    </a>
  {/each}
</div>