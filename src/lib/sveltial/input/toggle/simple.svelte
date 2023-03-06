<script lang="ts">
  let toggle: Boolean = false;
</script>

<!-- <span class="w-12 h-6 rounded-full bg-gray-300 shadow-inner hover:cursor-pointer grid grid-cols-2 items-center hover:bg-gray-200">
	<span class="w-5 h-5 bg-white rounded-full translate-x-0.5 shadow">
		
	</span>
	<span class="w-5 h-5 text-gray-400 mso-icon grid place-content-center">
		Close
	</span>
</span> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={()=>{toggle=!toggle}} class="select-none">
  {#if toggle}
    <span
      class="w-12 h-6 rounded-full bg-tertiary shadow-inner hover:cursor-pointer grid grid-cols-2 items-center hover:bg-gray-200"
    >
      <span class="w-5 h-5 bg-white rounded-full translate-x-0.5 shadow" />
      <span
        class="w-5 h-5 text-tertiary-dark mso-icon grid place-content-center"
      >
        Close
      </span>
    </span>
  {:else}
    <span
      class="w-12 h-6 rounded-full bg-green-300 shadow-inner hover:cursor-pointer grid grid-cols-2 items-center hover:bg-green-200"
    >
      <span
        class="w-5 h-5 text-green-500 mso-icon grid place-content-center translate-x-1"
      >
        Check
      </span>
      <span class="w-5 h-5 bg-white rounded-full translate-x-0.5 shadow" />
    </span>
  {/if}
</span>

<!-- ToggleElement -->
<!-- Check/Cross -->
<!-- Container -->
