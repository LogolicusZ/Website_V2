<script lang="ts">
  import { ChevronRight, Menu, X } from "lucide-svelte";

  // Add state to track if sidebar is open
  let sidebarOpen = $state(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    sidebarOpen = !sidebarOpen;
  };

  const toggleOffSidebar = () => {
    sidebarOpen = false;
  };
</script>

<button
  onclick={toggleSidebar}
  class="bg-base-100 absolute top-12 left-0 z-40 cursor-pointer rounded-r-full rounded-br-full border-[1px] border-l-0 border-dashed border-gray-400 p-2 pl-3 md:hidden lg:hidden"
>
  <Menu />
</button>

<div
  class="bg-base-100 fixed top-0 left-0 z-50 flex h-full w-200 in-w-200 flex-col gap-6 overflow-x-visible overflow-y-clip p-12 shadow-lg transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:shadow-none lg:static lg:translate-x-0 lg:shadow-none {sidebarOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <button
    onclick={toggleOffSidebar}
    class="absolute top-12 left-2 cursor-pointer p-1 md:hidden lg:hidden"
  >
    <X />
  </button>
  <a href="/" onclick={toggleOffSidebar}>
    <img class="w-150" alt="krchv" src="/assets/svg/logo.svg" />
  </a>
  <div>
    <p class="text-xl uppercase opacity-50">Projects</p>
    <a href="/projects/juna" class="block hover:underline"> Juna </a>
  </div>
  <div>
    <p class="text-xl uppercase opacity-50">Photography</p>
    <a href="/gallery/" class="block hover:underline"> Gallery </a>
  </div>
  <div>
    <p class="text-xl uppercase opacity-50">About</p>
  </div>
  <div>
    <p class="text-xl uppercase opacity-50">Links</p>
    <div class="flex flex-col">
      <a href="https://github.com/LogolicusZ"> Github</a>
      <a href="https://www.instagram.com/logolicusz.kb/"> Instagram</a>
    </div>
  </div>
  <div class="mt-auto flex flex-col">
    <p class="text-sm uppercase opacity-50">Legal</p>
    <!-- <a class="text-base-content unset-link no-underline hover:opacity-80" href="/">Home</a> -->
    <a
      class="text-base-content unset-link mb-6 no-underline hover:opacity-80"
      href="/legal/"
      onclick={toggleOffSidebar}
    >
      Privacy Policy
    </a>
    <p>&copy; 2026 LogolicusZ</p>
  </div>
</div>
