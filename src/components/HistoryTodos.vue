<template>
    <div>
        <h3> 历史记录</h3>
        <div v-for="todo in showhistory" v-bind:key="todo.id">
            <!-- <button @click="$emit('delete-todo',todo.id)">删除</button> -->
            {{todo.title}}
            {{todo.id}}
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "HistoryTodos",
        methods: {
        },
        computed: {
            ...mapGetters(['showhistory'])
        }
    }
</script>