<template>
    <div class="container">
        <h1>List</h1>
        <ul>
            <li v-for="(item,index) in products" :key="index">
                <h1>{{item.name}}</h1>
                <img :src="item.coverImg | coverImgUrl" style="width:180px" height="180px">
            </li>
            
        </ul>
        <!-- <button @click="$store.dispatch('loadPosts')">加载数据</button> -->
        <button @click="loadPosts">加载数据</button>
        <button @click="$store.dispatch('product/loadData')">获取商品信息</button>
        <button @click="loadProducts">获取商品信息1</button>
        <button @click="loadMore()">加载更多</button>
    </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
    data(){
        return {
            currentPage:1
        }
    },
    computed: {
        ...mapState('product',{
            products:'list'
        })
    },
    methods: {
        ...mapActions(['loadPosts']),
        ...mapActions('product',{
            loadProducts:'loadData'
        }),
        loadMore(){
            this.loadProducts({
                page:this.currentPage
            });
            this.currentPage+=1;
        }
    },
    filters:{
        coverImgUrl(val){
            if(val){
                return `http://api.cat-shop.penkuoer.com${val}`
            }else{
                return 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2299113196,3410006479&fm=27&gp=0.jpg'
            }
        }
    }
}
</script>
<style scoped>

</style>
