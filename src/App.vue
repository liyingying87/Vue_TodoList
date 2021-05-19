<template>
  <div id="app">
<!--    &lt;!&ndash; <AddTodo v-on:add-todo="addTodo" /> &ndash;&gt;-->
<!--    <AddTodo />-->
<!--    &lt;!&ndash; <Todos v-on:delete-todo="deleteTodo"></Todos> &ndash;&gt;-->
<!--    <Todos></Todos>-->
<!--    <History> </History>-->
  <router-view name = "routerindex"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  // import History from './components/History.vue'
  // import Todos from './components/Todos.vue'
  // import AddTodo from './components/AddTodo.vue'
  export default {
    name: 'App',
    components: {
      // Todos,
      // AddTodo,
      // History
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
