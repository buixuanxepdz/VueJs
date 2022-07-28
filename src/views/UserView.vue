<template>
    <div>
       User
       <button @click="about()">go to about</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name:'UserView',
        methods:{
            about(){
                this.$router.push({name:'about'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>