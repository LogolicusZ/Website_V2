import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

let lightbox: PhotoSwipeLightbox | null = null;

export function initPhotoSwipe(galleryEl: HTMLElement) {
  // Clean up any previous instance (e.g. on client-side navigation)
  destroyPhotoSwipe();

  lightbox = new PhotoSwipeLightbox({
    gallery: galleryEl,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });

  lightbox.init();
}

export function destroyPhotoSwipe() {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}	