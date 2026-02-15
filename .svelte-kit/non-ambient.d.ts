
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
		RouteId(): "/" | "/about" | "/gallery" | "/legal" | "/projects" | "/projects/juna" | "/projects/krchv";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/gallery": Record<string, never>;
			"/legal": Record<string, never>;
			"/projects": Record<string, never>;
			"/projects/juna": Record<string, never>;
			"/projects/krchv": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/gallery" | "/gallery/" | "/legal" | "/legal/" | "/projects" | "/projects/" | "/projects/juna" | "/projects/juna/" | "/projects/krchv" | "/projects/krchv/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/assets/.DS_Store" | "/assets/fonts/daydream-readme.txt" | "/assets/fonts/daydream.ttf" | "/assets/img/.DS_Store" | "/assets/img/about_image.avif" | "/assets/img/banner.avif" | "/assets/img/gallery/.DS_Store" | "/assets/img/gallery/0001.avif" | "/assets/img/gallery/0002.avif" | "/assets/img/gallery/0003.avif" | "/assets/img/gallery/0004.avif" | "/assets/img/gallery/0005.avif" | "/assets/img/gallery/0006.avif" | "/assets/img/gallery/0007.avif" | "/assets/img/gallery/0008.avif" | "/assets/img/gallery/0009.avif" | "/assets/img/gallery/0010.avif" | "/assets/img/gallery/0011.avif" | "/assets/img/gallery/0012.avif" | "/assets/img/gallery/0013.avif" | "/assets/img/gallery/0014.avif" | "/assets/img/gallery/0015.avif" | "/assets/img/gallery/0016.avif" | "/assets/img/gallery/0017.avif" | "/assets/img/gallery/0018.avif" | "/assets/img/gallery/0019.avif" | "/assets/img/gallery/0020.avif" | "/assets/img/gallery/0021.avif" | "/assets/img/gallery/0022.avif" | "/assets/img/gallery/0023.avif" | "/assets/img/gallery/0024.avif" | "/assets/img/gallery/0025.avif" | "/assets/img/gallery/0026.avif" | "/assets/img/gallery/0027.avif" | "/assets/img/gallery/0028.avif" | "/assets/img/gallery/0029.avif" | "/assets/img/gallery/0030.avif" | "/assets/img/gallery/0031.avif" | "/assets/img/gallery/0032.avif" | "/assets/img/gallery/0033.avif" | "/assets/img/gallery/0034.avif" | "/assets/img/gallery/0035.avif" | "/assets/img/gallery/0036.avif" | "/assets/img/gallery/0037.avif" | "/assets/img/gallery/0038.avif" | "/assets/img/gallery/0039.avif" | "/assets/img/gallery/0040.avif" | "/assets/img/gallery/0041.avif" | "/assets/img/gallery/0042.avif" | "/assets/img/gallery/0043.avif" | "/assets/img/gallery/0044.avif" | "/assets/img/gallery/0045.avif" | "/assets/img/gallery/0046.avif" | "/assets/img/gallery/0047.avif" | "/assets/img/gallery/0048.avif" | "/assets/img/gallery/0049.avif" | "/assets/img/gallery/0050.avif" | "/assets/img/gallery/0051.avif" | "/assets/img/gallery/0052.avif" | "/assets/img/gallery/0053.avif" | "/assets/img/gallery/0054.avif" | "/assets/img/gallery/0055.avif" | "/assets/img/gallery/0056.avif" | "/assets/img/gallery/0057.avif" | "/assets/img/gallery/0058.avif" | "/assets/img/gallery/0059.avif" | "/assets/img/gallery/0060.avif" | "/assets/img/gallery/0061.avif" | "/assets/img/gallery/0062.avif" | "/assets/img/gallery/0063.avif" | "/assets/img/gallery/0064.avif" | "/assets/img/gallery/0065.avif" | "/assets/img/gallery/0066.avif" | "/assets/img/gallery/0067.avif" | "/assets/img/gallery/0068.avif" | "/assets/img/gallery/0069.avif" | "/assets/img/gallery/0070.avif" | "/assets/img/gallery/0071.avif" | "/assets/img/krchv_screenshot.avif" | "/assets/img/preview.png" | "/assets/img/projects/.DS_Store" | "/assets/img/projects/juna/file_10.avif" | "/assets/img/projects/juna/file_11.avif" | "/assets/img/projects/juna/file_12.avif" | "/assets/img/projects/juna/file_13.avif" | "/assets/img/projects/juna/file_14.avif" | "/assets/img/projects/juna/file_15.avif" | "/assets/img/projects/juna/file_6.avif" | "/assets/img/projects/juna/file_7.avif" | "/assets/img/projects/juna/file_8.avif" | "/assets/img/projects/juna/file_9.avif" | "/assets/svg/Favicon.svg" | "/assets/svg/logo.svg" | "/robots.txt" | string & {};
	}
}