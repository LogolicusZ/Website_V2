<script>
  const contact = {
    email: "logolicusz@gmail.com",
    instagram: "@logolicusz.kb",
    discord: "logolicusz"
  };
</script>

<div class="min-h-auto flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
  <div class="w-full max-w-5xl">
    
    <div class="p-6 sm:p-10 md:p-14">

      <!-- Header -->
      <div class="mb-10 md:mb-14 text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Contact Me
        </h1>
        <p class="mt-3 sm:mt-4 text-base sm:text-lg">
          Feel free to reach out through any platform below.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        <!-- Email -->
        <div class="space-y-2">
          <h2 class="text-xs sm:text-sm uppercase tracking-widest text-neutral-500">
            Email
          </h2>
          <a
            href={`mailto:${contact.email}`}
            class="break-words text-lg sm:text-xl font-medium 
                   unset-link no-underline 
                   hover:underline hover:text-primary transition"
          >
            {contact.email}
          </a>
        </div>

        <!-- Instagram -->
        <div class="space-y-2">
          <h2 class="text-xs sm:text-sm uppercase tracking-widest ">
            Instagram
          </h2>
          <a
            href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
            target="_blank"
            class="text-lg sm:text-xl font-medium 
                   unset-link no-underline 
                   hover:underline hover:text-primary transition"
          >
            {contact.instagram}
          </a>
        </div>

        <!-- Discord -->
        <div class="space-y-2">
          <h2 class="text-xs sm:text-sm uppercase tracking-widest ">
            Discord
          </h2>
          <p class="text-lg sm:text-xl font-medium break-words">
            {contact.discord}
          </p>
        </div>

      </div>

    </div>
  </div>
</div>
