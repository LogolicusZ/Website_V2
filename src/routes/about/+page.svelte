<script>
  const codingSkills = [
    "Web Development",
    "Docker",
    "Linux Server",
    "Git",
    "Virtualization",
    "Ansible",
    "Kubernetes",
  ];

  const designSkills = [
    "Figma (Software)",
    "Fusion 360 (Software)",
    "Lightroom (Software)"
  ];

  const hobbies = [
    "Mechanical Keyboards",
    "Photography",
    "Painting"
  ];
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div class="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div class="w-full">
      <img
        src="/assets/img/about_image.avif"
        alt="Profile photo"
        class="w-full max-w-md mx-auto md:mx-0 rounded-2xl shadow-sm"
      />
    </div>

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

  <div class="space-y-16">

    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold mb-6">
        Coding / Sysadmin
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each codingSkills as skill}
          <div class="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm sm:text-base">
            {skill}
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold mb-6">
        Design
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each designSkills as skill}
          <div class="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm sm:text-base">
            {skill}
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold mb-6">
        Hobbies & Interests
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each hobbies as hobby}
          <div class="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm sm:text-base">
            {hobby}
          </div>
        {/each}
      </div>
    </div>

  </div>

</section>
