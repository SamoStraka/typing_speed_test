<script>
    //imports
    import {createEventDispatcher} from  'svelte';

    //exports
    export let editForm;

    let value;

    const dispatch = createEventDispatcher();

    const submit = () => {
        dispatch('submit');

        editForm.language = document.getElementById("editFromLanguage").value;
        editForm.timeLength = document.getElementById("editFromLength").value;
        editForm.submitted = true;
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
            <option value="30000">30 sec.</option>
            <option value="60000">1 min.</option>
        </select>
        <input name="submit" type="submit" value="Submit">
    </form>
    {#if value}
        <p>
            {value}
        </p>
    {/if}
</div>