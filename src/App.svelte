<script>
  import { onMount } from "svelte";
  export let todos;
  let newTodo;
  onMount(async () => {
    todos = await (await fetch("/todos")).json();
  });

  async function onSubmit() {
    const response = await fetch("/todos", { method: "POST", body: newTodo });
    const createdTodo = response.json();
    todos.push(createdTodo);
    newTodo = "";
  }
</script>

<header>
  <h1>TODOs</h1>
</header>

<main>
  <ul id='todo-list'>
    {#each todos as item}
      <li>{item.todo}</li>
    {/each}
  </ul>
  <form on:submit|preventDefault={onSubmit}>
    <input type="text" bind:value={newTodo} />
    <button type="submit">Add</button>
  </form>
</main>

<footer>the end</footer>

<style>
  main {
    display: flex;
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

  #todo-list {
    margin-right: 2em;
  }
</style>
