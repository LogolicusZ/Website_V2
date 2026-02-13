// src/lib/photoswipe.ts
import 'photoswipe/dist/photoswipe.css';
import type { PhotoSwipeOptions } from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

let lightbox: PhotoSwipeLightbox | null = null;

export function initPhotoSwipe(gallerySelector: string) {
	if (typeof window === 'undefined') return;

	lightbox = new PhotoSwipeLightbox({
		gallery: gallerySelector,
		children: 'a',
		pswpModule: () => import('photoswipe'),
	});

	// Dynamically determine image size
	lightbox.addFilter('itemData', (itemData) => {
		if (!itemData.width || !itemData.height) {
			const img = new Image();
			img.src = itemData.src!;

			img.onload = () => {
				itemData.width = img.naturalWidth;
				itemData.height = img.naturalHeight;
			};
		}

		return itemData;
	});

	lightbox.init();
}

export function destroyPhotoSwipe() {
	if (lightbox) {
		lightbox.destroy();
		lightbox = null;
	}
}
