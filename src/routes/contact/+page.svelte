<script>
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/utils/inview';

  const contact = {
    instagram: "@logolicusz.kb",
    discord: "logolicusz"
  };
</script>

<section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

  <!-- Header -->
  <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16" in:fly={{ y: 16, duration: 500 }}>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
      Contact Me
    </h1>
    <p class="mt-4 text-base sm:text-lg text-neutral-600">
      Have a project, collaboration idea, or just want to say hello?
      Reach out through any of the platforms below.
    </p>
  </div>

  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">

    <li
      use:inview={0}
      class="reveal min-w-0 rounded-2xl border border-zinc-800/15 p-6 sm:p-8"
    >
      <h2 class="text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
        Email
      </h2>
      <span
        ><code
          class="email block wrap-break-word text-lg sm:text-xl font-semibold unset-link no-underline hover:text-primary"
          >logol<b class="hidden">ASDÖFKLJASVD09N3NQIUPWRBÖAÖLSBJLLDVsadlfnasdcn823bröaföasdöfhsdca0saüodibdsaf</b>cusz@<b
            class="hidden"
            >qpwfhpq8vnpq9w849pP@asdhfo239f8zhap0whecpbvp9A83F8PBFAEF</b
          >gmail.com</code
        ></span
      >
      <p class="mt-3 text-sm text-neutral-500">
        Best for professional inquiries.
      </p>
    </li>

    <li
      use:inview={100}
      class="reveal group min-w-0 rounded-2xl border border-zinc-800/15 p-6 sm:p-8 transition-colors hover:border-primary/50"
    >
      <h2 class="text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
        Instagram
      </h2>

      <a
        href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        class="block wrap-break-word text-lg sm:text-xl font-semibold unset-link no-underline group-hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
      >
        {contact.instagram}
        <span class="sr-only"> (opens in a new tab)</span>
      </a>

      <p class="mt-3 text-sm text-neutral-500">
        DM me for quick conversations.
      </p>
    </li>

    <li
      use:inview={200}
      class="reveal min-w-0 rounded-2xl border border-zinc-800/15 p-6 sm:p-8"
    >
      <h2 class="text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
        Discord
      </h2>

      <p class="wrap-break-word text-lg sm:text-xl font-semibold">
        {contact.discord}
      </p>

      <p class="mt-3 text-sm text-neutral-500">
        Ideal for ongoing collaboration.
      </p>
    </li>

  </ul>
</section>
