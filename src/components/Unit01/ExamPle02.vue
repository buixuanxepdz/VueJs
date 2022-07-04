<template>
    <div class="wrapper">
        <div class="abc">
            <form action="">
                <label for="">Họ và tên</label>
                <input type="text" v-model="input.name">
                <label for="">Ngày sinh</label>
                <input type="date" v-model="input.date">
                <label for="">Số điện thoại</label>
                <input type="text" v-model="input.phone">
                <label for="">Link facebook</label>
                <input type="text" v-model="input.facebook">
                <div class="btn">
                    <button v-on:click.prevent="save()">Save</button>
                    <button v-on:click.prevent="clear()">Clear</button>
                </div>
               
            </form>
        </div>
        <div class="def">
           <div class="content">
                <h4>Họ tên: <span>{{ output.name }}</span></h4>
                <h4>Ngày sinh: <span>{{ output.date }}</span></h4>
                <h4>Số điện thoại: <span>{{ output.phone }}</span></h4>
                <h4>Link facebook: <span><a :href="output.facebook" target="_blank">{{ output.facebook }}</a></span></h4>
           </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FormLogin',
        data (){
            return{
                input:{
                    name:'',
                    date:'',
                    phone:'',
                    facebook:'',
                },
                output:{
                    name:'',
                    date:'',
                    phone:'',
                    facebook:'',
                },
            }
        },
        methods: {
            save(){
                this.output.name = this.input.name
                this.output.date = this.input.date
                this.output.phone = this.input.phone
                this.output.facebook = this.input.facebook
            },
            clear(){
                this.input.name = '';
                this.input.date = '';
                this.input.phone = '';
                this.input.facebook = '';
                this.output.name = '';
                this.output.date = '';
                this.output.phone = '';
                this.output.facebook = '';
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
                .btn{
                    display: flex;
                    justify-content: space-between;
                    width: 60%;
                    button:nth-child(1){
                        background-color: blue;
                        color: white;
                        border: none;
                        font-weight: bold;
                        width: 48%;
                        height: 40px;
                        line-height: 40px;
                        border-radius: 10px;
                        font-size: 16px;
                        margin-top: 20px;
                    }
                    button:nth-child(2){
                        background-color: red;
                        color: white;
                        border: none;
                        font-weight: bold;
                        width: 48%;
                        height: 40px;
                        line-height: 40px;
                        border-radius: 10px;
                        font-size: 16px;
                        margin-top: 20px;
                    }
                }
                
            }
            
        }
        .def{
            width: 48%;
            border: 1px solid gray;
            .content{
                width: 90%;
                margin: 0 auto;
                text-align: left;
                h4{
                    color: blue;
                    span{
                        font-weight: normal;
                        color: black;
                        word-wrap: break-word;
                    }
                }
            }
        }
    }
</style>