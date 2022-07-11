<template>
    <div class="wrapper">
        <LoginForm @handleEmitData="handleData" />
        <LoginMessage :props1="email" :props2="password"/>
    </div>
</template>
<script>
    import LoginForm from './LoginForm.vue'
    import LoginMessage from './LoginMessage.vue'
    export default {
        name: "FormLogin",
        components: { 
            LoginForm, 
            LoginMessage 
        },
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods: {
            handleData(data){
                this.email = data.email
                this.password = data.password
            }
        },
    }
</script>
<style lang="scss" scoped>
    .wrapper{
        display: flex;
        justify-content: space-between;
        width: 900px;
        margin: 0 auto;
        margin-top: 30px;
    }
</style>