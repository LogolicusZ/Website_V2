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

	onMount(() => {
		initPhotoSwipe(galleryEl);
	});

	onDestroy(() => {
		destroyPhotoSwipe();
	});
</script>

{#if images && images.length > 0}
	<div class="mt-6" bind:this={galleryEl}>
		<div class="columns-[3_18rem] gap-4">
			{#each images as image}
				<a
					href={image.src}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					target="_blank"
				>
					<img
						src={image.src}
						alt={image.alt}
						class="mb-4 block w-full break-inside-avoid cursor-zoom-in rounded-sm transition-transform hover:scale-[0.985]"
					/>
				</a>
			{/each}
		</div>
	</div>
{/if}
