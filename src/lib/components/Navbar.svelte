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
  class="bg-base-100 fixed top-0 left-0 z-50 flex h-full w-175 in-w-175 flex-col gap-6 overflow-x-visible overflow-y-clip p-12 shadow-lg transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:shadow-none lg:static lg:translate-x-0 lg:shadow-none {sidebarOpen
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
    <img class="w-75 sm:w-100 md:w-125 lg:w-150" alt="logolicusz" src="/assets/svg/logo.svg" />
  </a>
  <div>
    <p class="text-l uppercase opacity-50">Projects</p>
    <a href="/projects/juna" onclick={toggleOffSidebar} class="text-3xl ml-2 block unset-link no-underline hover:underline hover:text-primary"> Juna </a>
     <a href="/projects/krchv" onclick={toggleOffSidebar} class="text-3xl ml-2 block unset-link no-underline hover:underline hover:text-primary"> KRCHV </a>
  </div>
  <div>
    <p class="text-l uppercase opacity-50">Photography</p>
    <a href="/gallery/" onclick={toggleOffSidebar} class="text-3xl ml-2 block unset-link no-underline hover:underline hover:text-primary"> Gallery </a>
  </div>
  <div>
    <p class="text-l uppercase opacity-50">About</p>
    <a href="/about/" onclick={toggleOffSidebar} class="text-3xl ml-2 block unset-link no-underline hover:underline hover:text-primary"> About me </a>
    <a href="/contact/" onclick={toggleOffSidebar} class="text-3xl ml-2 block unset-link no-underline hover:underline hover:text-primary"> Contact </a>
  </div>
  <div>
    <p class="text-l uppercase opacity-50">Links</p>
    <div class="text-3xl ml-2 flex flex-col ">
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
