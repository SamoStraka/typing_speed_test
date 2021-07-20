<script>
    //imports
    import {createEventDispatcher} from  'svelte';

    //exports
    export let editFrom;

    let value;

    const dispatch = createEventDispatcher();

    const submit = () => {
        dispatch('submit');

        editFrom.language = document.getElementById("editFromLanguage").value;
        editFrom.length = document.getElementById("editFromLength").value;
        editFrom.submitted = true;
    }
</script>
<style>

</style>
<div>
    <form on:submit|preventDefault={submit}>
        <select name="language" id="editFromLanguage" >
            <option value="eng">English</option>
            <option value="svk">Slovak</option>
        </select>
        <select name="length" id="editFromLength" >
            <option value="secs">30 sec.</option>
            <option value="minute">1 min.</option>
        </select>
        <input name="submit" type="submit" value="Submit">
    </form>
    {#if value}
        <p>
            {value}
        </p>
    {/if}
</div>