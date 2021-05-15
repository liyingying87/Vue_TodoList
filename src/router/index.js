import Vue from "vue";
import VueRouter from "vue-router";
import HistoryTodos from "../components/HistoryTodos.vue";
//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
    routes: [{
        //路由路径
        path: '/historytodos',
        name: 'historytodos',
        //跳转的组件
        component: HistoryTodos
    }]
})