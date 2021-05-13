<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="请输入任务" v-model="title">
        <input type="submit" value="添加">
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                title: ""
            }
        },
        methods: {
            submit() {
                const todo = {
                    id: new Date().getTime(),
                    title: this.title,
                    completed: false
                };
                this.title = ""
                this.$emit("add-todo", todo);//触发事件
            }
        }
    }
</script>

<style>

</style>