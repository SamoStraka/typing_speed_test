<script>
    import {pickRandomWord, createArrayOfWordSet} from "../functions";
    import {onMount} from "svelte";

    export let editForm;

    let wordSet = createArrayOfWordSet(editForm.language);

    console.log(editForm.timeLength - 1000);

    onMount(() => {
        const interval = setInterval(() => {
            if (editForm.timeLength > 0) {
                editForm.timeLength = editForm.timeLength - 1000;
            } else {
                editForm.submitted = false;
                console.log(editForm);
            }
        }, 1000);
    })

    $: timeLeft = editForm.timeLength / 1000;

</script>
<style>

</style>
<progress value="10">hello</progress>
<p>
    time left
    <span>
        {timeLeft}
    </span>
</p>