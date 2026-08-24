
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
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/blog" | "/blog/[slug]" | "/contact" | "/csirac" | "/gallery" | "/juna_vendors" | "/legal" | "/projects" | "/projects/juna" | "/projects/krchv";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined };
			"/about": Record<string, never>;
			"/blog": { slug?: string | undefined };
			"/blog/[slug]": { slug: string };
			"/contact": Record<string, never>;
			"/csirac": Record<string, never>;
			"/gallery": Record<string, never>;
			"/juna_vendors": Record<string, never>;
			"/legal": Record<string, never>;
			"/projects": Record<string, never>;
			"/projects/juna": Record<string, never>;
			"/projects/krchv": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/blog" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/contact" | "/csirac" | "/gallery" | "/juna_vendors" | "/legal" | "/projects" | "/projects/juna" | "/projects/krchv";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/assets/.DS_Store" | "/assets/fonts/daydream-readme.txt" | "/assets/fonts/daydream.ttf" | "/assets/img/.DS_Store" | "/assets/img/0001.avif" | "/assets/img/Juna_cyan.avif" | "/assets/img/about_image.avif" | "/assets/img/banner.avif" | "/assets/img/banner.jpg" | "/assets/img/blog/Gehirn-article/Gehirn1.avif" | "/assets/img/blog/Gehirn-article/Gehirn10.heic" | "/assets/img/blog/Gehirn-article/Gehirn11.webp" | "/assets/img/blog/Gehirn-article/Gehirn12.webp" | "/assets/img/blog/Gehirn-article/Gehirn13.avif" | "/assets/img/blog/Gehirn-article/Gehirn2.avif" | "/assets/img/blog/Gehirn-article/Gehirn4.heic" | "/assets/img/blog/Gehirn-article/Gehirn5.heic" | "/assets/img/blog/Gehirn-article/Gehirn6.heic" | "/assets/img/blog/Gehirn-article/Gehirn7.heic" | "/assets/img/blog/Gehirn-article/Gehirn8.heic" | "/assets/img/blog/Gehirn-article/Gehirn9.heic" | "/assets/img/blog/atherna/atherna1.webp" | "/assets/img/blog/atherna/atherna2.avif" | "/assets/img/blog/atherna/atherna3.avif" | "/assets/img/blog/atherna/atherna4.avif" | "/assets/img/blog/atherna/atherna5.avif" | "/assets/img/blog/atherna/atherna6.avif" | "/assets/img/blog/atherna/atherna7.avif" | "/assets/img/blog/noodle/noodle16.avif" | "/assets/img/blog/noodle/noodle18.avif" | "/assets/img/blog/noodle/noodle7.avif" | "/assets/img/blog/noodle/noodle8.avif" | "/assets/img/blog/protagonist-article/protagonist-1.avif" | "/assets/img/blog/protagonist-article/protagonist-10.webp" | "/assets/img/blog/protagonist-article/protagonist-11.webp" | "/assets/img/blog/protagonist-article/protagonist-12.avif" | "/assets/img/blog/protagonist-article/protagonist-13.avif" | "/assets/img/blog/protagonist-article/protagonist-14.avif" | "/assets/img/blog/protagonist-article/protagonist-2.avif" | "/assets/img/blog/protagonist-article/protagonist-4.avif" | "/assets/img/blog/protagonist-article/protagonist-5.avif" | "/assets/img/blog/protagonist-article/protagonist-9.webp" | "/assets/img/blog/rascals/MTNU-1.avif" | "/assets/img/blog/rascals/MTNU-10.avif" | "/assets/img/blog/rascals/MTNU-2.avif" | "/assets/img/blog/rascals/MTNU-4.webp" | "/assets/img/blog/rascals/MTNU-5.avif" | "/assets/img/blog/rascals/MTNU-6.gif" | "/assets/img/blog/rascals/MTNU-7.webp" | "/assets/img/blog/rascals/MTNU-8.webp" | "/assets/img/blog/rascals/MTNU-9.webp" | "/assets/img/blog/sixtyfive-article/Latticemount.avif" | "/assets/img/blog/sixtyfive-article/ModeWeights.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive1.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive2.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive3.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive4.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive6.avif" | "/assets/img/blog/sixtyfive-article/SixtyFive7.avif" | "/assets/img/blog/spyder-article/Spyder5.avif" | "/assets/img/blog/spyder-article/Spyder6.avif" | "/assets/img/blog/spyder-article/car1.avif" | "/assets/img/csirac/render1.avif" | "/assets/img/csirac/render2.avif" | "/assets/img/csirac/render3.avif" | "/assets/img/csirac/render4.avif" | "/assets/img/csirac/render5.avif" | "/assets/img/csirac/render6.avif" | "/assets/img/csirac/render7.avif" | "/assets/img/csirac/render8.avif" | "/assets/img/csirac/render9.avif" | "/assets/img/csirac/screenshot1.avif" | "/assets/img/csirac/screenshot2.avif" | "/assets/img/csirac/screenshot3.avif" | "/assets/img/csirac/screenshot4.avif" | "/assets/img/csirac/screenshot5.avif" | "/assets/img/csirac/screenshot6.avif" | "/assets/img/csirac/screenshot7.avif" | "/assets/img/gallery/0001.avif" | "/assets/img/gallery/0002.avif" | "/assets/img/gallery/0003.avif" | "/assets/img/gallery/0004.avif" | "/assets/img/gallery/0005.avif" | "/assets/img/gallery/0006.avif" | "/assets/img/gallery/0007.avif" | "/assets/img/gallery/0008.avif" | "/assets/img/gallery/0009.avif" | "/assets/img/gallery/0010.avif" | "/assets/img/gallery/0011.avif" | "/assets/img/gallery/0012.avif" | "/assets/img/gallery/0013.avif" | "/assets/img/gallery/0014.avif" | "/assets/img/gallery/0015.avif" | "/assets/img/gallery/0016.avif" | "/assets/img/gallery/0017.avif" | "/assets/img/gallery/0018.avif" | "/assets/img/gallery/0019.avif" | "/assets/img/gallery/0020.avif" | "/assets/img/gallery/0021.avif" | "/assets/img/gallery/0022.avif" | "/assets/img/gallery/0023.avif" | "/assets/img/gallery/0024.avif" | "/assets/img/gallery/0025.avif" | "/assets/img/gallery/0026.avif" | "/assets/img/gallery/0027.avif" | "/assets/img/gallery/0028.avif" | "/assets/img/gallery/0029.avif" | "/assets/img/gallery/0030.avif" | "/assets/img/gallery/0031.avif" | "/assets/img/gallery/0032.avif" | "/assets/img/gallery/0033.avif" | "/assets/img/gallery/0034.avif" | "/assets/img/gallery/0035.avif" | "/assets/img/gallery/0036.avif" | "/assets/img/gallery/0037.avif" | "/assets/img/gallery/0038.avif" | "/assets/img/gallery/0039.avif" | "/assets/img/gallery/0040.avif" | "/assets/img/gallery/0041.avif" | "/assets/img/gallery/0042.avif" | "/assets/img/gallery/0043.avif" | "/assets/img/gallery/0044.avif" | "/assets/img/gallery/0045.avif" | "/assets/img/gallery/0046.avif" | "/assets/img/gallery/0047.avif" | "/assets/img/gallery/0048.avif" | "/assets/img/gallery/0049.avif" | "/assets/img/gallery/0050.avif" | "/assets/img/gallery/0051.avif" | "/assets/img/gallery/0052.avif" | "/assets/img/gallery/0053.avif" | "/assets/img/gallery/0054.avif" | "/assets/img/gallery/0055.avif" | "/assets/img/gallery/0056.avif" | "/assets/img/gallery/0057.avif" | "/assets/img/gallery/0058.avif" | "/assets/img/gallery/0059.avif" | "/assets/img/gallery/0060.avif" | "/assets/img/gallery/0061.avif" | "/assets/img/gallery/0062.avif" | "/assets/img/gallery/0063.avif" | "/assets/img/gallery/0064.avif" | "/assets/img/gallery/0065.avif" | "/assets/img/gallery/0066.avif" | "/assets/img/gallery/0067.avif" | "/assets/img/gallery/0068.avif" | "/assets/img/gallery/0069.avif" | "/assets/img/gallery/0070.avif" | "/assets/img/gallery/0071.avif" | "/assets/img/gallery/0072.avif" | "/assets/img/gallery/0073.avif" | "/assets/img/gallery/0074.avif" | "/assets/img/gallery/0075.avif" | "/assets/img/gallery/0076.avif" | "/assets/img/gallery/0077.avif" | "/assets/img/gallery/0078.avif" | "/assets/img/gallery/0079.avif" | "/assets/img/gallery/0080.avif" | "/assets/img/gallery/0081.avif" | "/assets/img/gallery/0082.avif" | "/assets/img/krchv_screenshot.avif" | "/assets/img/preview.png" | "/assets/img/projects/juna/file_10.avif" | "/assets/img/projects/juna/file_11.avif" | "/assets/img/projects/juna/file_12.avif" | "/assets/img/projects/juna/file_13.avif" | "/assets/img/projects/juna/file_14.avif" | "/assets/img/projects/juna/file_15.avif" | "/assets/img/projects/juna/file_6.avif" | "/assets/img/projects/juna/file_7.avif" | "/assets/img/projects/juna/file_8.avif" | "/assets/img/projects/juna/file_9.avif" | "/assets/svg/Favicon.svg" | "/assets/svg/avatar.svg" | "/assets/svg/footer-mark.svg" | "/assets/svg/logo.svg" | "/robots.txt" | string & {};
	}
}