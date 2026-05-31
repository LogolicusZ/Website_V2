<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const vendors = [
		{ label: 'NA / Rest of World - Bowl', href: 'https://bowlkeyboards.com/collections/group-buy-preorder/products/gb-juna60' },
		{ label: 'UK - Prototypist', href: 'https://prototypist.net/products/group-buy-juna60-keyboard-kit' },
		{ label: 'EU - Delta Key Co', href: 'https://deltakeyco.com/en-ch/products/juna60-keyboard-group-buy' },
		{ label: 'Asia - Kibou', href: 'https://kibou.store/collections/group-buy/products/group-buy-juna60' }
	];

	const deadline = new Date('2026-06-10T23:59:59').getTime();

	let days = 0, hours = 0, minutes = 0, seconds = 0;
	let ended = false;
	let interval: ReturnType<typeof setInterval>;

	function tick() {
		const diff = deadline - Date.now();
		if (diff <= 0) {
			ended = true;
			days = hours = minutes = seconds = 0;
			clearInterval(interval);
			return;
		}
		days = Math.floor(diff / 86400000);
		hours = Math.floor((diff % 86400000) / 3600000);
		minutes = Math.floor((diff % 3600000) / 60000);
		seconds = Math.floor((diff % 60000) / 1000);
	}

	onMount(() => {
		tick();
		interval = setInterval(tick, 1000);
	});
	onDestroy(() => clearInterval(interval));

	$: units = [
		{ label: 'Days', value: days },
		{ label: 'Hours', value: hours },
		{ label: 'Minutes', value: minutes },
		{ label: 'Seconds', value: seconds }
	];
</script>

<svelte:head>
	<title>Juna Vendors</title>
</svelte:head>

<div class="relative min-h-screen">
	<div
		class="pointer-events-none absolute inset-0 scale-120 bg-cover bg-center blur-md"
	></div>

	<div class="relative mx-auto flex w-full max-w-xl flex-col">
		<header class="mb-8 text-center">
			<h1 class="text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl">
				Juna Vendors
			</h1>
			<p class="mt-3 text-base text-gray-700 sm:text-lg">Where to buy the keyboard</p>
		</header>

		<div class="mb-10 rounded-2xl bg-white/80 px-5 py-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
			{#if ended}
				<p class="text-center text-lg font-semibold text-gray-900">The group buy has ended.</p>
			{:else}
				<p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
					Group buy ends June 10th
				</p>
				<div class="grid grid-cols-4 gap-2 sm:gap-3">
					{#each units as unit}
						<div class="flex flex-col items-center rounded-xl bg-white py-3 ring-1 ring-black/5 ">
							<span class="text-3xl font-bold tabular-nums sm:text-4xl">
								{String(unit.value).padStart(2, '0')}
							</span>
							<span class="mt-1 text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
								{unit.label}
							</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="flex flex-col gap-4">
			{#each vendors as vendor}
				<a
					class="group flex items-center justify-between gap-3 rounded-xl bg-white/80 px-5 py-4 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:px-6 sm:py-5 sm:text-base"
					href={vendor.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{vendor.label}</span>
					<span class="transition-transform group-hover:translate-x-0.5" style="color: #f260b3;">→</span>
				</a>
			{/each}
		</div>

		<footer class="mt-10 text-center text-xs text-gray-500">© 2026 LogolicusZ</footer>
	</div>
</div>