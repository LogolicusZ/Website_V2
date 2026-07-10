<script>
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/utils/inview';

  const skillGroups = [
    {
      title: 'Coding / Sysadmin',
      items: ['Web Development', 'Docker', 'Linux Server', 'Git', 'Virtualization', 'Ansible', 'Kubernetes']
    },
    {
      title: 'Design',
      items: ['Figma (Software)', 'Fusion 360 (Software)', 'Lightroom (Software)']
    },
    {
      title: 'Hobbies & Interests',
      items: ['Mechanical Keyboards', 'Photography', 'Painting']
    }
  ];
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start mb-16" in:fly={{ y: 16, duration: 500 }}>
    <img
      src="/assets/img/about_image.avif"
      alt="Logolicusz standing outdoors, wearing a Baker's Soul t-shirt"
      width="4128"
      height="5504"
      class="w-full max-w-md mx-auto md:mx-0 aspect-4/5 rounded-2xl object-cover shadow-sm"
    />

    <div>
      <h1 class="text-4xl sm:text-5xl font-serif mb-6">
        About Me
      </h1>

      <p class="text-base sm:text-lg leading-relaxed mb-4">
        At the moment, I’m in a 4-year-long apprenticeship at Adnovum, learning to be an IT System Administrator. On the side, I teach myself CAD designing, UI/UX design and programming.
      </p>

      <p class="text-base sm:text-lg leading-relaxed">
        I enjoy creating stuff from the from backend infrastructure and
        deployment to front-end systems and design direction. On the side I also teach myself CAD Designing
      </p>
    </div>
  </div>

  <div class="space-y-12 sm:space-y-16">
    {#each skillGroups as group}
      <div use:inview class="reveal">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-6">
          {group.title}
        </h2>

        <ul class="flex flex-wrap gap-2.5">
          {#each group.items as item}
            <li
              class="rounded-full border border-zinc-800/15 bg-black/2 px-4 py-2 text-sm sm:text-base transition-colors hover:border-primary/50"
            >
              {item}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

</section>
