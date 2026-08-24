<script lang="ts">
  const links = [
    { href: "https://www.instagram.com/logolicusz.kb/", label: "Instagram" },
    { href: "https://discord.com/users/688701393258938417", label: "Discord" },
    { href: "https://github.com/LogolicusZ", label: "Github" },
    { href: "https://krchv.logolicusz.com", label: "krchv" },
  ];
</script>

<footer class="px-gutter mt-[clamp(2.5rem,5.5vw,5rem)] pb-[clamp(2rem,4vw,3.5rem)]">
  <a
    href="/contact/"
    class="unset-link text-contact mx-auto block w-fit text-center leading-[1.1] no-underline transition-opacity duration-200 hover:opacity-60"
  >
    Contact
  </a>

  <div
    class="mt-[clamp(2rem,4.5vw,4rem)] flex flex-col items-center gap-y-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[clamp(1.25rem,2.6vw,2.5rem)]"
  >
    <a href="/" class="unset-link no-underline" aria-label="logolicusz — home">
      <img
        src="/assets/svg/logomark.svg"
        alt=""
        width="1362"
        height="1362"
        class="w-[clamp(3rem,4.6vw,4.5rem)]"
      />
    </a>

    {#each links as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        class="unset-link text-social leading-[1.1] no-underline transition-opacity duration-200 hover:opacity-60"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <div
    class="mt-[clamp(1.75rem,3.5vw,2.75rem)] flex flex-col items-center gap-y-1 border-t border-black/10 pt-5 text-sm text-neutral-500 sm:flex-row sm:justify-between"
  >
    <p>&copy; 2026 LogolicusZ</p>
    <a href="/legal/" class="unset-link no-underline hover:underline">Privacy Policy</a>
  </div>
</footer>
