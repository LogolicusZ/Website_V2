<script lang="ts">
  import { fly } from "svelte/transition";
  import { inview } from "$lib/utils/inview";

  let { data } = $props();

</script>

<svelte:head>
  <title>Projects — logolicusz</title>
</svelte:head>

<section class="mx-auto max-w-5xl py-8">
  <div in:fly={{ y: 16, duration: 500 }}>
    <h1 class="font-serif text-4xl tracking-tight sm:text-5xl">Projects</h1>
    <p class="mt-4 max-w-xl text-base text-neutral-500 sm:text-lg">
      Keyboards, sites and the occasional detour. A few of the things I have built.
    </p>
  </div>

  <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
    {#each data.projects as project, i}
      <a
        href="/projects/{project.slug}"
        use:inview={i * 100}
        class="reveal unset-link group no-underline"
      >
        <img
          src={project.banner.path}
          alt={project.banner.alt}
          loading="lazy"
          class="mb-3 aspect-4/3 w-full rounded-sm border-2 border-zinc-800 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <h2 class="flex items-center gap-1.5 text-xl font-semibold">
          {project.title}
          <span
            class="inline-block -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true">→</span
          >
        </h2>
        <p class="text-sm text-neutral-500">{project.description}</p>
      </a>
    {/each}
  </div>
</section>
