<script>
  import { onMount } from "svelte";
  export let todos;
  onMount(async () => {
    todos = await (await fetch("/todos")).json();
  });
</script>

<main>
  <h1>TODOs</h1>
  <ul>
    {#each todos as todo}
    <li>{todo.name}</li>
    {/each}
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
