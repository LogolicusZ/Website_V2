<script lang="ts">
  import { ChevronRight, Menu, X } from "lucide-svelte";
  import { fade } from "svelte/transition";

  let sidebarOpen = $state(false);

  let toggleHidden = $state(false);
  let lastScrollY = 0;

  const toggleSidebar = () => {
    sidebarOpen = !sidebarOpen;
  };

  const toggleOffSidebar = () => {
    sidebarOpen = false;
  };

  $effect(() => {
    function handleScroll() {
      const y = window.scrollY;
      toggleHidden = y > lastScrollY && y > 80 && !sidebarOpen;
      lastScrollY = y;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const sections = [
    {
      label: "Projects",
      links: [
        { href: "/projects/juna", label: "Juna" },
        { href: "/projects/krchv", label: "KRCHV" },
      ],
    },
    {
      label: "Photography",
      links: [{ href: "/gallery/", label: "Gallery" }],
    },
    {
      label: "Blog",
      links: [{ href: "/blog/", label: "Posts" }],
    },
    {
      label: "About",
      links: [
        { href: "/about/", label: "About me" },
        { href: "/contact/", label: "Contact" },
      ],
    },
  ];
</script>

<button
  onclick={toggleSidebar}
  aria-label="Open navigation"
  class="bg-base-100 absolute top-10 left-0 z-40 cursor-pointer rounded-r-full rounded-br-full border-[1px] border-l-0 border-dashed border-gray-400 p-4 pl-5 transition-all duration-300 ease-in-out md:hidden lg:hidden {toggleHidden
    ? '-translate-x-full opacity-0'
    : 'translate-x-0 opacity-100'}"
>
  <Menu size={32} />
</button>

{#if sidebarOpen}
  <div
    role="presentation"
    onclick={toggleOffSidebar}
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-40 bg-black/40 md:hidden lg:hidden"
  ></div>
{/if}

<div
  class="bg-base-100 fixed top-0 left-0 z-50 flex h-full w-175 in-w-175 flex-col gap-6 overflow-x-visible overflow-y-clip p-12 shadow-lg transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:shadow-none lg:static lg:translate-x-0 lg:shadow-none {sidebarOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <button
    onclick={toggleOffSidebar}
    aria-label="Close navigation"
    class="absolute top-10 left-2 cursor-pointer p-3 md:hidden lg:hidden"
  >
    <X size={28} />
  </button>
  <a href="/" onclick={toggleOffSidebar}>
    <img class="w-75 sm:w-100 md:w-125 lg:w-150" alt="logolicusz" src="/assets/svg/logo.svg" />
  </a>
  {#each sections as section, i}
    <div
      class="transition-all duration-300 ease-out md:translate-x-0 md:opacity-100 {sidebarOpen
        ? 'translate-x-0 opacity-100'
        : '-translate-x-6 opacity-0'}"
      style="transition-delay: {sidebarOpen ? i * 60 : 0}ms"
    >
      <p class="text-l uppercase opacity-50">{section.label}</p>
      {#each section.links as link}
        <a
          href={link.href}
          onclick={toggleOffSidebar}
          class="unset-link ml-2 block text-3xl no-underline hover:text-primary hover:underline"
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/each}
  <div
    class="transition-all duration-300 ease-out md:translate-x-0 md:opacity-100 {sidebarOpen
      ? 'translate-x-0 opacity-100'
      : '-translate-x-6 opacity-0'}"
    style="transition-delay: {sidebarOpen ? sections.length * 60 : 0}ms"
  >
    <p class="text-l uppercase opacity-50">Links</p>
    <div class="ml-2 flex flex-col text-3xl">
      <a href="https://discord.com/users/688701393258938417" onclick={toggleOffSidebar} class="unset-link no-underline hover:underline hover:text-primary"> Discord</a>
      <a href="https://www.instagram.com/logolicusz.kb/" onclick={toggleOffSidebar} class="unset-link no-underline hover:underline hover:text-primary"> Instagram</a>
      <a href="https://github.com/LogolicusZ" onclick={toggleOffSidebar} class="unset-link no-underline hover:text-primary"> Github</a>
    </div>
  </div>
  <div class="mt-auto flex flex-col">
    <p class="text-sm uppercase opacity-50">Legal</p>
    <a
      class="text-base-content unset-link mb-0.5 no-underline hover:opacity-80"
      href="/legal/"
      onclick={toggleOffSidebar}
    >
      Privacy Policy
    </a>
    <p>&copy; 2026 LogolicusZ</p>
  </div>
</div>
