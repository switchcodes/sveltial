<script lang="ts">
	export let label: string;
	export let icon: string;
</script>

<button class="svt-button-style py-2 px-10">
	{#if label != null}
		<span class="align-middle text-2xl font-bold">{label}</span>
	{/if}
	{#if icon != null}
		<span class="mso-icon align-middle">{icon}</span>
	{/if}
</button>
