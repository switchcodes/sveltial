<script lang="ts">
	let in_focus = false;
	let raise_label = false;
	export let label = "Label";
	export let placeholder = "placeholder...";
	let text = "";

	let infocus = () => {
		in_focus = true;
		raise_label = true;
	};
	let outfocus = () => {
		in_focus = false;
		if (text.length == 0) raise_label = false;
	};
</script>

<label class="font-primary text-tertiary focus:flex focus:flex-col relative m-1">
	<span
		class="absolute pointer-events-none w-fit h-fit left-2 pl-2 pr-2 top-3 bg-secondary transition-transform"
		class:text-primary={in_focus}
		class:-translate-y-6={raise_label}>{label}</span
	>
	<input
		class="border-4 p-2 placeholder:opacity-0 placeholder:transition-opacity placeholder:select-none focus:placeholder:opacity-100 placeholder:fade rounded-md shadow-md focus:outline-0 hover:shadow-lg focus:ring-offset-2 focus:ring-2 focus:ring-primary"
		{placeholder}
		bind:value={text}
		on:focusin={infocus}
		on:focusout={outfocus}
	/>
</label>
