<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let mounted = false;
  let mx = -9999;
  let my = -9999;
  let h1El: HTMLHeadingElement;

  onMount(() => {
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

<main class="flex h-auto items-center overflow-hidden px-6 text-neutral-900 md:px-12 md:text-right">
  {#if mounted}
    <section class="max-w-6xl" in:fly={{ y: 20, duration: 700 }}>
      <h1
        bind:this={h1El}
        on:mousemove={handleMove}
        on:mouseleave={handleLeave}
        class="relative font-serif text-[clamp(2rem,6vw,6rem)] leading-[1.1] tracking-tight"
      >
        <!-- Base layer -->
        Independent designer,
        <span class="italic text-neutral-500">crafting for passion</span>
        with occasional side projects.

        <!-- Pink layer, revealed only inside a 10px circle at the cursor -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute inset-0"
          style="
            color: #f260b3;
            -webkit-mask-image: radial-gradient(circle 50px at {mx}px {my}px, black 100%, transparent 100%);
            mask-image: radial-gradient(circle 50px at {mx}px {my}px, black 100%, transparent 100%);
          "
        >
          Independent designer,
          <span class="italic">crafting for passion</span>
          with occasional side projects.
        </span>
      </h1>
    </section>
  {/if}
</main>