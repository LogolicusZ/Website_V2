<script lang="ts">
  import { onMount } from 'svelte';
  import Carousel from '$lib/components/Carousel.svelte';   
  import Gallery from '$lib/components/Gallery.svelte';
  import { getImageSize } from '$lib/utils/getImageSize';

  const junaImages = [
    { src: '/assets/img/projects/juna/file_10.avif', alt: 'Juna keyboard render' },
    { src: '/assets/img/projects/juna/file_9.avif',  alt: 'Juna keyboard detail' },
    { src: '/assets/img/projects/juna/file_11.avif', alt: 'Juna keyboard aesthetic shot' }
  ];

	const sources = [
        { src: '/assets/img/projects/juna/file_6.avif', alt: 'Photo 1' },
        { src: '/assets/img/projects/juna/file_7.avif', alt: 'Photo 2' },
        { src: '/assets/img/projects/juna/file_8.avif', alt: 'Photo 3' },
        { src: '/assets/img/projects/juna/file_9.avif', alt: 'Photo 4' },
        { src: '/assets/img/projects/juna/file_10.avif', alt: 'Photo 5' },
        { src: '/assets/img/projects/juna/file_11.avif', alt: 'Photo 6' },
        { src: '/assets/img/projects/juna/file_12.avif', alt: 'Photo 7' },
        { src: '/assets/img/projects/juna/file_13.avif', alt: 'Photo 8' },
        { src: '/assets/img/projects/juna/file_14.avif', alt: 'Photo 9' },
        { src: '/assets/img/projects/juna/file_15.avif', alt: 'Photo 10' },
    ];
  let images: { src: string; width: number; height: number; alt?: string }[] = [];

  onMount(async () => {
    images = await Promise.all(
      sources.map(async (s) => {
        const { width, height } = await getImageSize(s.src);
        return { ...s, width, height };
      })
    );
  });
</script>

<section class="w-full px-2.5 py-2.5">
<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-3 text-gray-500">
  <h1 class="text-2xl sm:text-2xl md:text-4xl mb-6 sm:mb-2 order-2 md:order-1">Juna Mechanical Keyboard</h1>
   <h1 class="text-2xl sm:text-2xl md:text-4xl mb-6 sm:mb-2 order-1 md:order-2 md:text-right">Product</h1>

</div>

  <Carousel images={junaImages} />

<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mt-4 mb-4">
  <div class="text-sm sm:text-base uppercase opacity-50 shrink-0">
    <div class="flex flex-col gap-1">
      <span>geekhack</span>
      <span>status: Preparing for Group Buy</span>
      <span>layout: 60%</span>
      <span>typing angle: 7.5°</span>
      <span>mounting: Top mount and gasket o-ring</span>
    </div>
  </div>
  <div class="max-w-3xl text-base sm:text-lg leading-relaxed md:text-right space-y-4">
    <p>
      Juna is a 60% keyboard available in WKL, WK and HHKB layouts. While at first glance it sits on the stiffer side of keyboards, you'd be surprised how forgiving the top mount can feel while also having the option of gummy o-ring mounting for those who prefer a bouncier typing experience.
    </p>
    <p>
      As one of my earliest designs, Juna reflects my appreciation for classic kustoms from the mid-2000s, specifically pulling inspiration from the OTD 360c, while Clairo's Charm album lends the board its theme across its name, engravings and three colorways: Apple Silver, Sage Mint and Bondi Cyan.
    </p>
  </div>
</div>

{#if images.length > 0}
<Gallery {images} />
{/if}

  <div class="mt-8 space-y-3">
    <p class="text-sm uppercase opacity-50">Links</p>
    <a href="https://geekhack.org/index.php?topic=125384.0" class="block hover:underline break-words">Geekhack</a>
    <a href="https://www.youtube.com/watch?v=mXtgXobv9MA" class="block hover:underline break-words">Soundtest</a>
  </div>
</section>
