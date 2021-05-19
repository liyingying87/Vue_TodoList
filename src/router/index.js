import Vue from "vue";
import VueRouter from "vue-router";
import routerindex from "@/components/testrouter/routerindex";
import routerboy from "@/components/testrouter/routerboy";
import routerboy2 from "@/components/testrouter/routerboy2";
// import HistoryTodos from "../components/HistoryTodos.vue";
//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
    routes: [{
        // //路由路径
        // path: '/historytodos',
        // name: 'historytodos',
        // //跳转的组件
        // component: HistoryTodos

        path: '/',
        name: 'routerindex',
        component: routerindex,
        children: [
            {
                path: '/first',
                name: 'first',
                component: routerboy
            },
            {
                path: '/second',
                name: 'second',
                component: routerboy2
            }]
    }]
})
