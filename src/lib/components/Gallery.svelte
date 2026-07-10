<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { initPhotoSwipe, destroyPhotoSwipe } from '$lib/photoswipe';

	export let images: {
		src: string;
		width: number;
		height: number;
		alt?: string;
	}[];

	let galleryEl: HTMLDivElement;
	let columnCount = 3;

	function computeColumnCount() {
		const w = window.innerWidth;
		columnCount = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
	}

	// Greedy masonry: always place the next image in whichever column is
	// currently shortest, using declared width/height so no image load is
	// needed. Avoids the empty-column gaps that CSS multi-column layout
	// produces with break-inside: avoid.
	function distribute(imgs: typeof images, count: number) {
		const columns: (typeof images)[] = Array.from({ length: count }, () => []);
		const heights = new Array(count).fill(0);
		for (const image of imgs) {
			let shortest = 0;
			for (let i = 1; i < count; i++) {
				if (heights[i] < heights[shortest]) shortest = i;
			}
			columns[shortest].push(image);
			heights[shortest] += image.height / image.width;
		}
		return columns;
	}

	$: columns = distribute(images, columnCount);

	onMount(() => {
		computeColumnCount();
		window.addEventListener('resize', computeColumnCount);
		initPhotoSwipe(galleryEl);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', computeColumnCount);
		}
		destroyPhotoSwipe();
	});
</script>

{#if images && images.length > 0}
	<div class="mt-6" bind:this={galleryEl}>
		<div class="flex gap-4">
			{#each columns as column}
				<div class="flex flex-1 flex-col gap-4">
					{#each column as image}
						<a
							href={image.src}
							data-pswp-width={image.width}
							data-pswp-height={image.height}
							target="_blank"
						>
							<img
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
								loading="lazy"
								class="block w-full cursor-zoom-in rounded-sm transition-transform hover:scale-[0.985]"
							/>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}
