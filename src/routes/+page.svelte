<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/utils/inview';

  let { data } = $props();

  let mounted = $state(false);
  let mx = $state(-9999);
  let my = $state(-9999);
  let h1El: HTMLHeadingElement | undefined = $state();

  $effect(() => {
    mounted = true;
  });

  function handleMove(e: MouseEvent) {
    if (!h1El) return;
    const rect = h1El.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
  }

  function handleLeave() {
    mx = -9999;
    my = -9999;
  }
</script>

<svelte:head>
  <title>logolicusz</title>
</svelte:head>

<div class="relative">
  <!-- subtle film-grain texture, purely decorative -->
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-overlay"
    style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;);"
  ></div>

  <main class="@container relative z-10 px-6 text-neutral-900 md:px-12">
    <section
      class="relative flex min-h-[min(55dvh,460px)] flex-col justify-center md:min-h-[min(62dvh,620px)]"
    >
      {#if mounted}
        <div in:fly={{ y: 20, duration: 700 }}>
          <h1
            bind:this={h1El}
            onmousemove={handleMove}
            onmouseleave={handleLeave}
            class="relative font-serif text-[clamp(2rem,6vw,6rem)] leading-[1.1] tracking-tight"
          >
            <!-- Base layer -->
            Independent designer,
            <span class="text-neutral-500 italic">crafting for passion</span>
            with occasional side projects.

            <!-- Pink layer, revealed only inside a circle at the cursor -->
            <span
              aria-hidden="true"
              class="pointer-events-none absolute inset-0"
              style="
                color: #f260b3;
                -webkit-mask-image: radial-gradient(circle 60px at {mx}px {my}px, black 55%, transparent 100%);
                mask-image: radial-gradient(circle 60px at {mx}px {my}px, black 55%, transparent 100%);
              "
            >
              Independent designer,
              <span class="italic">crafting for passion</span>
              with occasional side projects.
            </span>
          </h1>

          <p
            class="mt-4 max-w-md text-lg text-neutral-500"
            in:fly={{ y: 16, duration: 700, delay: 150 }}
          >
            Keyboards, photography and the occasional bit of code. Have a look around.
          </p>
        </div>

        {#if data.posts.length > 0 || data.projects.length > 0}
          <div
            class="mt-8 flex items-center gap-2 text-sm tracking-wide text-neutral-400"
            in:fly={{ y: 16, duration: 700, delay: 300 }}
          >
            <span class="animate-bounce">↓</span>
            <span>Recent</span>
          </div>
        {/if}
      {/if}
    </section>

    {#if data.projects.length > 0}
      <section class="pt-8 pb-16 md:pt-16">
        <h2 use:inview class="reveal mb-6 text-sm tracking-[0.2em] text-neutral-400 uppercase">
          Projects
        </h2>

        <div class="grid grid-cols-1 gap-5 @md:grid-cols-2 @md:gap-6 @4xl:grid-cols-3 @4xl:gap-8">
          {#each data.projects as project, i}
            <a
              href="/projects/{project.slug}"
              use:inview={i * 100}
              class="reveal unset-link group no-underline"
            >
              {#if project.banner}
                <img
                  src={project.banner.path}
                  alt={project.banner.alt}
                  loading="lazy"
                  class="mb-3 aspect-4/3 w-full rounded-sm border-2 border-zinc-800 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              {/if}
              <h3 class="flex items-center gap-1.5 text-lg font-semibold">
                {project.title}
                <span
                  class="inline-block -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true">→</span
                >
              </h3>
              <p class="line-clamp-2 text-sm text-neutral-500">{project.description}</p>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    {#if data.posts.length > 0}
      <section class="pb-16">
        <h2 use:inview class="reveal mb-6 text-sm tracking-[0.2em] text-neutral-400 uppercase">
          Recently written
        </h2>

        <div class="grid grid-cols-1 gap-5 @md:grid-cols-2 @md:gap-6 @4xl:grid-cols-3 @4xl:gap-8">
          {#each data.posts as post, i}
            <a
              href="/blog/{post.slug}"
              use:inview={i * 100}
              class="reveal unset-link group no-underline"
            >
              {#if post.banner}
                <img
                  src={post.banner.path}
                  alt={post.banner.alt}
                  width={post.banner.width}
                  height={post.banner.height}
                  loading="lazy"
                  class="mb-3 aspect-4/3 w-full rounded-sm border-2 border-zinc-800 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              {/if}
              <h3 class="flex items-center gap-1.5 text-lg font-semibold">
                {post.title}
                <span
                  class="inline-block -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true">→</span
                >
              </h3>
              <p class="line-clamp-2 text-sm text-neutral-500">{post.description}</p>
            </a>
          {/each}
        </div>

        <a href="/blog" class="mt-8 inline-block text-sm">View all posts →</a>
      </section>
    {/if}
  </main>
</div>
