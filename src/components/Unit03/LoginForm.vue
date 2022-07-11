<template>
        <div class="abc">
            <form action="">
                <label for="">Tên tài khoản</label>
                <input type="text" v-model="email">
                <label for="">Mật khẩu</label>
                <input type="text" v-model="password">
                <button @click.prevent="handleClick">Đăng nhập</button>
            </form>
        </div>
</template>
<script>
    export default {
        name: 'LoginForm',
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods: {
            handleClick(){
                let data = {
                    email:this.email,
                    password:this.password
                }
                this.$emit('handleEmitData', data);
            }
        },
    }
</script>
<style lang="scss" scoped>
    .abc{
            width: 48%;
            border: 1px solid gray;
            background-color: #f5f5f5;
            form{
                width: 80%;
                margin: 0 auto;
                padding: 20px;
                label{
                    float: left;
                    font-weight: bold;
                }
                input{
                    width: 100%;
                    margin: 10px 0;
                    height: 30px;
                    outline: none;
                    font-size: 20px;
                }
                button{
                    background-color: blue;
                    color: white;
                    border: none;
                    font-weight: bold;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 10px;
                    font-size: 16px;
                    margin-top: 20px;
                    margin-bottom: 40px;
                }
            }
            
        }
</style>