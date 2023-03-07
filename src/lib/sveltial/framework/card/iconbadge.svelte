<script lang="ts">
	export let icon: string;
</script>

<div
	class="flex flex-col md:flex-row items-center bg-secondary p-4 rounded-2xl shadow-lg text-tertiary font-medium hover:shadow-xl transition ease-in-out duration-200"
>
	<div class="p-2 mr-2 bg-primary dark:bg-primary-dark h-fit rounded-lg aspect-square">
		<span class="mso-icon align-middle text-secondary">{icon}</span>
	</div>
	<slot />
</div>
