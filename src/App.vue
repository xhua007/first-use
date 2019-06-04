<template>
  <div id="app">
      <h4>{{msg}}</h4>
      <h5>当前的count值：{{$store.state.count}}</h5>
      <h3>当前利用mapstate count值：{{count}}</h3>
      <h3>当前利用mapstate count值：{{c}}</h3>
      <router-link :to="{
        name:'Home'
      }">首页</router-link>|----
      <router-link :to="{
        name:'About'
      }">关于</router-link>|----
      <router-link :to="{
        name:'List'
      }">列表</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['count','msg']),
    ...mapState({
        c:'count'
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
