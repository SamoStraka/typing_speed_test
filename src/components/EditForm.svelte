<script>
    let value;

    const submit = () => {
        alert(value);

    }
</script>
<style>

</style>
<div>
    <form action="index.html" on:submit={submit} method="post" >
        <input type="text" bind:value={value}>
        <input type="submit" value="Submit me now">
    </form>
    {#if value}
        <p>
            {value}
        </p>
    {/if}
</div>