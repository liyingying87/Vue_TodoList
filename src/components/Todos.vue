<template>
    <div>
        <h2>Todos 打对勾表示任务已经完成</h2>
        <div class="todo" v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{'is-complete': todo.completed}">
            <input type="checkbox" @click="$store.commit('is_ok', todo.id)">
            <!-- <button @click="$emit('delete-todo',todo.id)">删除</button> -->
            <button @click="$store.commit('delete',todo.id)">删除</button>
            {{todo.title}}
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Todos',
        computed: {
            ...mapState(['todos'])
        },
        methods: {
        }
    }
</script>
<style>
    .is-complete {
        text-decoration: line-through;
    }
</style>