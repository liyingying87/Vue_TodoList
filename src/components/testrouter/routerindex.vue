<template>
<h3>
  我是路由主页
  <router-link  to="/first">跳转至儿子路由页面</router-link>
  <p>
  </p>
  <router-link  to="/second">跳转至儿子2路由页面</router-link>
  <router-view></router-view>
</h3>
</template>

<script>
export default {
  name: "routerindex"
}
</script>

<style scoped>

</style>
