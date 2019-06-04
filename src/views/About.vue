<template>
    
    <div class="container">
        <h1>About</h1>
       <button @click="$store.commit('addByStep',{step:5})">加5</button>
    </div>
</template>
<script>
export default {
    methods: {
         
    },
}
</script>
<style scoped>

</style>
