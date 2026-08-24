<script lang="ts">
  import { inview } from '$lib/utils/inview';
</script>

<svelte:head>
  <title>logolicusz</title>
</svelte:head>

<div class="flex flex-col items-center">
  <img
    src="/assets/img/banner.avif"
    alt="A keyboard build photographed on a desk"
    width="5504"
    height="4128"
    fetchpriority="high"
    class="aspect-video w-full rounded-sm object-cover"
  />

  <p
    use:inview
    class="reveal mt-[clamp(3rem,7vw,6rem)] max-w-2xl text-center font-serif text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.35] tracking-tight text-balance"
  >
    Independent designer, crafting for passion with occasional side projects.
  </p>

  <p use:inview={120} class="reveal mt-6 max-w-md text-center text-neutral-500">
    Keyboards, photography and the occasional bit of code. Have a look around.
  </p>
</div>
