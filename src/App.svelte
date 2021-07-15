<script>
	import EditForm from "./components/EditForm.svelte";

	let editForm = {
		language : '',
		length : 0,
		submitted : false
	}
</script>

<main>
	<h1>Welcome</h1>
	<h2>This is</h2>
	<h3>Typing Speed Test</h3>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
{#if !editForm.submitted}
	<EditForm bind:editFrom={editForm}></EditForm>
{:else}
	<p>
		{editForm.language} ano toto je language a bude to trvat: {editForm.length}
	</p>
{/if}
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		margin: 0 0 -.4em 0;
		padding: 0;
	}

	h2 {
		color: #dddddd;
		font-size: 1.5em;
		font-weight: 200;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
	}

	h3 {
		color: #ff3e00;
		font-size: 6em;
		font-weight: 900;
		text-transform: uppercase;
		margin: -.45em 0 0 0;
		padding: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>