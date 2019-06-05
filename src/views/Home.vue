<template>
<div class="container">
    <h1>Home</h1>
    <p>{{$store.state.count}}</p>
    <button @click="clickHandle">加2</button>
    <button @click="addByStep({step:3})">加3</button>
    <button @click="a({step:2})">加2</button>
    <button @click="ReduceByStep({step:1})">减1</button>
</div>
    
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name:'Home',
    methods: {
        clickHandle(){
            this.$store.commit('addByStep',{step:2});
        },
        ...mapMutations(['addByStep','ReduceByStep']),
        ...mapMutations({
            a:'addByStep'
        })
    },
}
</script>
<style scoped>

</style>
