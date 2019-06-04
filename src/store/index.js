import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import product from './modules/product'
import cart from './modules/cart'
import user from './modules/user'
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        count:1,
        msg:'这是一个msg,哈哈哈，，，嗝',
        list:[]
    },
    mutations:{
        addByStep(state,{step}){
        console.log(step)
        state.count+=step;
        },
        ReduceByStep(state,{step}){
        state.count-=step;
        },
        loadDataEnd(state,payload){
        console.log(payload);
        state.list=payload;
        }
    },
    actions:{
        loadPosts({commit},payload){
        console.group('开始')
        // console.log(context);
        console.log(payload);
        console.groupEnd()
        //commit('loadDataEnd',['一','二','三'])
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res=>{
            commit('loadDataEnd',res.data)
            })
        }
    },
    modules:{
        product,
        cart,
        user,
    }
})

export default store;