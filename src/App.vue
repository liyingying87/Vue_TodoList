<template>
  <div id="app">
    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <AddTodo />
    <!-- <Todos v-on:delete-todo="deleteTodo"></Todos> -->
    <Todos></Todos>
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
      }
    },
    methods: {
      // addTodo(todo) {
      //   this.todos.unshift(todo);
      // },
      // deleteTodo(id) {
      //   this.todos = this.todos.filter(todo => todo.id != id);
      // }
    },
    computed: {
    }
  };
</script>