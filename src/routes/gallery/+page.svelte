<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	const images = [
		{ src: '/assets/img/gallery/DSC_10.avif', alt: 'Photo 1' },
		{ src: '/assets/img/gallery/DSC_12.avif', alt: 'Photo 2' },
		{ src: '/assets/img/gallery/DSC_11.avif', alt: 'Photo 3' },
		{ src: '/assets/img/gallery/DSC_13.avif', alt: 'Photo 4' },
		{ src: '/assets/img/gallery/DSC_14.avif', alt: 'Photo 5' },
		{ src: '/assets/img/gallery/DSC_15.avif', alt: 'Photo 6' },
		{ src: '/assets/img/gallery/DSC_16.avif', alt: 'Photo 7' },
		{ src: '/assets/img/gallery/DSC_17.avif', alt: 'Photo 8' },
		{ src: '/assets/img/gallery/DSC_18.avif', alt: 'Photo 9' },
		{ src: '/assets/img/gallery/DSC_31.avif', alt: 'Photo 10' },
		{ src: '/assets/img/gallery/DSC_32.avif', alt: 'Photo 11' },
		{ src: '/assets/img/gallery/DSC_33.avif', alt: 'Photo 12' },
		{ src: '/assets/img/gallery/DSC_34.avif', alt: 'Photo 13' },
		{ src: '/assets/img/gallery/DSC_39.avif', alt: 'Photo 14' },
		{ src: '/assets/img/gallery/DSC_40.avif', alt: 'Photo 15' },
		{ src: '/assets/img/gallery/DSC_53.avif', alt: 'Photo 16' },
		{ src: '/assets/img/gallery/DSC_54.avif', alt: 'Photo 17' },
	];
</script>

<Gallery {images} />
