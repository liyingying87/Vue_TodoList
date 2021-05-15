import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [{
                id: 1,
                title: "todo one",
                completed: false
            },
            {
                id: 2,
                title: "todo two",
                completed: true
            }
        ]
    },
    getters: {},
    mutations: {
        addtodo(state, payload) {
            state.todos.push(payload);
        },
        is_ok(state, id) {
            state.todos.find(item => item.id == id).completed = true;
        },
        delete(state, id) {
            state.todos = state.todos.filter(item => item.id != id);
        }
    },
    modules: {}
})