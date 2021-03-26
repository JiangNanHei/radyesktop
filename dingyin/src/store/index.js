import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 控制loginDialog显示隐藏
        loginflag : false,


        // token
        token : false,

        // 工作台头部title
        worktitle : ''
    },
    
    mutations: {
        loginflagchange(state,id){
            state.loginflag = id
        },
        tokenchange(state,id){
            state.token = id
        },
        worktitlechange(state,id){
            state.worktitle = id
        }
    },
})