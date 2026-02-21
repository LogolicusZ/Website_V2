<script>
  const contact = {
    email: "logolicusz@gmail.com",
    instagram: "@logolicusz.kb",
    discord: "logolicusz"
  };
</script>

<section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
  <div class="w-full max-w-6xl">

    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        Contact Me
      </h1>
      <p class="mt-4 text-base sm:text-lg">
        Have a project, collaboration idea, or just want to say hello?
        Reach out through any of the platforms below.
      </p>
    </div>

    <div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div class="p-6 sm:p-8">
        <h2 class="text-m uppercase tracking-widest mb-3">
          Email
        </h2>

        <a
          href={`mailto:${contact.email}`}
          class="block text-lg sm:text-xl font-semibold unset-link no-underline hover:text-primary">
          {contact.email}
        </a>

        <p class="mt-3 text-sm ">
          Best for professional inquiries.
        </p>
      </div>

      <div class="group rounded-2xl p-6 sm:p-8">
        <h2 class="text-m uppercase tracking-widest mb-3">
          Instagram
        </h2>

        <a
          href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          class="block text-lg sm:text-xl font-semibold unset-link no-underline group-hover:text-primary"
        >
          {contact.instagram}
        </a>

        <p class="mt-3 text-sm">
          DM me for quick conversations.
        </p>
      </div>

      <div class="group rounded-2xl p-6 sm:p-8 ">
        <h2 class="text-m uppercase tracking-widest mb-3">
          Discord
        </h2>

        <p class="text-lg sm:text-xl font-semibold wrap-break-word">
          {contact.discord}
        </p>

        <p class="mt-3 text-sm ">
          Ideal for ongoing collaboration.
        </p>
      </div>

    </div>
  </div>
</section>