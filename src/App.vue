<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"></Todos>
  </div>
</template>

<script>
  import Todos from './components/Todos.vue'
  import AddTodo from './components/AddTodo.vue'
  export default {
    name: 'App',
    components: {
      Todos,
      AddTodo
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: "todo one",
            completed: false
          },
          {
            id: 2,
            title: "todo two",
            completed: true
          }
        ]
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo);
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
      }
    }
  };
</script>

<style>

</style>