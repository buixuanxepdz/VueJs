<template>
    <div class="container">
        <div class="b1">
            <form action="">
                <input type="text" placeholder="Name" v-model="form.name">
                <p v-if="error.name">{{ error.name }}</p>
                <input type="text" placeholder="PhoneNumber" v-model="form.phone">
                <p v-if="error.phone">{{ error.phone }}</p>
                <input type="password" placeholder="Password" v-model="form.password">
                <p v-if="error.password">{{ error.password }}</p>
                <input type="password" placeholder="ConfirmpassWord" v-model="form.confirmPassword">
                <p v-if="error.confirmPassword">{{ error.confirmPassword }}</p>
                <button @click.prevent="submit()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HocNhomB2',
        data() {
            return {
                form:{
                    name:'',
                    phone:'',
                    password:'',
                    confirmPassword:'',
                },
               
               error:{
                    name:'',
                    phone:'',
                    password:'',
                    confirmPassword:'',
               },
            }
        },
        methods: {
            submit(){
                if(!this.form.name || !this.form.phone || !this.form.password || !this.form.confirmPassword){
                    this.validateForm()
                }else{
                    alert('ok')
                }
               
            },
            validateForm(){
                if(!this.form.name){
                    this.error.name = 'Vui lòng nhập tên'    
                }
                if(!this.form.phone){
                    this.error.phone = 'Vui lòng nhập số đt'    
                }else if(isNaN(this.form.phone)){
                    this.error.phone = 'Dữ liệu nhập vào phải là số'    
                }else{
                    this.error.phone = ''
                }
                if(!this.form.password){
                    this.error.password = 'Vui lòng nhập mật khẩu'    
                }else if(this.form.password.length < 8){
                    this.error.password = 'Mật khẩu phải lớn hơn 8 kí tự'
                }
                if(!this.form.confirmPassword){
                    this.error.confirmPassword = 'Vui lòng nhập lại mật khẩu'    
                }else if(this.form.confirmPassword !== this.form.password){
                    this.error.confirmPassword = 'Nhập lại mật khẩu chưa khớp'
                }
            },
        },
        watch:{
           'form.name'(value){
                if(value.length > 0){
                    this.error.name = ''
                }
           },
           'form.phone'(value){
                if(value.length > 0){
                    this.error.phone = ''
                }
           },
           'form.password'(value){
                if(value.length > 0){
                    this.error.password = ''
                }
           },
           'form.confirmPassword'(value){
                if(value.length > 0){
                    this.error.confirmPassword = ''
                }
           },
        }
    }
</script>

<style lang="scss" scoped>
        .container{
            width: 800px;
            margin: 0 auto;
            .b1{
                width: 400px;
                padding: 10px;
                input{
                    width: 100%;
                    outline: none;
                    margin-top: 10px;
                    height: 30px;
                    font-size: 18px;
                }
                button{
                    width: 100px;
                    background-color: rgb(40, 79, 236);
                    border: 0px;
                    color: white;
                    height: 40px;
                    margin-top: 10px;
                    border-radius: 10px;
                }
                p{
                    text-align: left;
                    margin: 10px 0;
                    color: red;
                }
            }
        }
</style>