<script lang="ts">
	export let icon: string;
</script>

<button class="svt-button-style p-2 aspect-square">
	{#if icon != null}
		<span class="mso-icon align-middle">{icon}</span>
	{/if}
</button>
