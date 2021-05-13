<template>
    <div class="todos">
        <h2>Todos</h2>
        <div class="todo" v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{'is-complete': todo.completed}">
            <input type="checkbox" @click="todo.completed = !todo.completed">
            <button @click="$emit('delete-todo',todo.id)">删除</button>
            {{todo.title}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Todos',
        props: ["todos"]
    }
</script>
<style>
    .is-complete {
        text-decoration: line-through;
    }
</style>