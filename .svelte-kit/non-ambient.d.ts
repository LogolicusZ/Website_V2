
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/gallery" | "/legal" | "/projects" | "/projects/juna" | "/projects/krchv";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/gallery": Record<string, never>;
			"/legal": Record<string, never>;
			"/projects": Record<string, never>;
			"/projects/juna": Record<string, never>;
			"/projects/krchv": Record<string, never>
		};
		Pathname(): "/" | "/gallery" | "/gallery/" | "/legal" | "/legal/" | "/projects" | "/projects/" | "/projects/juna" | "/projects/juna/" | "/projects/krchv" | "/projects/krchv/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/fonts/daydream-readme.txt" | "/assets/fonts/daydream.ttf" | "/assets/img/banner.avif" | "/assets/img/gallery/DSC_10.avif" | "/assets/img/gallery/DSC_11.avif" | "/assets/img/gallery/DSC_12.avif" | "/assets/img/gallery/DSC_13.avif" | "/assets/img/gallery/DSC_14.avif" | "/assets/img/gallery/DSC_15.avif" | "/assets/img/gallery/DSC_16.avif" | "/assets/img/gallery/DSC_17.avif" | "/assets/img/gallery/DSC_18.avif" | "/assets/img/gallery/DSC_31.avif" | "/assets/img/gallery/DSC_32.avif" | "/assets/img/gallery/DSC_33.avif" | "/assets/img/gallery/DSC_34.avif" | "/assets/img/gallery/DSC_39.avif" | "/assets/img/gallery/DSC_40.avif" | "/assets/img/gallery/DSC_53.avif" | "/assets/img/gallery/DSC_54.avif" | "/assets/img/gallery/DSC_55.avif" | "/assets/img/gallery/DSC_58.avif" | "/assets/img/gallery/DSC_61.avif" | "/assets/img/gallery/DSC_62.avif" | "/assets/img/gallery/DSC_63.avif" | "/assets/img/gallery/DSC_64.avif" | "/assets/img/gallery/DSC_65.avif" | "/assets/img/gallery/DSC_66.avif" | "/assets/img/gallery/DSC_67.avif" | "/assets/img/gallery/DSC_68.avif" | "/assets/img/gallery/DSC_69.avif" | "/assets/img/gallery/file_10.avif" | "/assets/img/gallery/file_11.avif" | "/assets/img/gallery/file_12.avif" | "/assets/img/gallery/file_13.avif" | "/assets/img/gallery/file_14.avif" | "/assets/img/gallery/file_15.avif" | "/assets/img/gallery/file_4.avif" | "/assets/img/gallery/file_6.avif" | "/assets/img/gallery/file_7.avif" | "/assets/img/gallery/file_8.avif" | "/assets/img/gallery/file_9.avif" | "/assets/img/preview.png" | "/assets/svg/Favicon.svg" | "/assets/svg/logo.svg" | "/robots.txt" | string & {};
	}
}