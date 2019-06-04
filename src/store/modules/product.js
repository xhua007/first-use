import { getProducts } from '../../api/product'
 export default {
    namespaced:true,
    state:{
        list:[],
        pages:1,
        totalCount:1
    },
    mutations:{
        loadDataEnd(state,payload){
            console.group('开始--product--loadDataEnd')
            console.log(state);
            console.log(payload);
            console.groupEnd();
            state.list=payload.products;
            state.totalCount=payload.totalCount;
            state.pages=payload.pages;
        }
    },
    actions:{
        async loadData({commit}){
            // commit('loadDataEnd',{
            //     msg:'我也不知会结果竟是如此,,,'
            // });
            //-----------
            // getProducts().then(res=>{
            //     commit('loadDataEnd',res.data)
            //     //console.log(res.data)
            // })
            //----------跟下面的代码等价的，下面的方法更好的点
            const result= await getProducts()
            commit('loadDataEnd',result.data)
            console.log(result.data)
        }
    }
 }