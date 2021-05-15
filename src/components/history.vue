<template>
    <div>
        <router-link to="/historytodos">查看历史记录，已经完成的任务列表</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    // import HistoryTodos from './HistoryTodos.vue'
    export default {
        name: "History",
        methods: {
        }
    }
</script>