import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        //加工形成新的数据
        showhistory(state) {
            return state.todos.filter(item => item.completed == true);
        }
    },
    mutations: {
        addtodo(state, payload) {
            if (payload.title == "") {
                alert("你输入的内容为空，请重新输入后提交！");
            } else {
                state.todos.push(payload);
            }
        },
        is_ok(state, id) {
            state.todos.find(item => item.id == id).completed = true;
        },
        delete(state, id) {
            if (confirm("确定要删除这个任务吗？删除就找不到了！")) {
                state.todos = state.todos.filter(item => item.id != id);
            } else {
                return
            }

        }
    },
    modules: {}
})