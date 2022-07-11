<template>
        <div class="formProduct">
            <h2>Sản phẩm</h2>
            <label for="">Tên sản phẩm <span>(*)</span></label>
            <input type="text" placeholder="Nhập tên sản phẩm" v-model="products.name" :style="borDer.name">
            <p v-if="error.name">{{ error.name }}</p>
            <label for="">Đơn giá <span>(*)</span></label>
            <input type="number" placeholder="Nhập giá sản phẩm" v-model="products.price" :style="borDer.price">
            <p v-if="error.price">{{ error.price }}</p>
            <label for="">Số lượng <span>(*)</span></label>
            <input type="number" placeholder="Nhập số lượng sản phẩm" v-model="products.quantity" :style="borDer.quantity">
            <p v-if="error.quantity">{{ error.quantity }}</p>
            <div class="btn">
                <button @click="creatProducts()">
                    {{ checkBtn == true ? 'Tạo mới':'Cập nhật'}}
                </button>
                <button @click="resetForm()">Hủy</button>
            </div>
        </div>
</template>

<script>
    export default {
        name:'ProductForm',
        props:{
            dataEdit:{
                type:Object,
                default:null
            }
        },
        data() {
            return {
                checkBtn:true,
                borDer:{
                    name:'border:1px solid gray',
                    price:'border:1px solid gray',
                    quantity:'border:1px solid gray',
                },
                products:{
                    id:'SP'+ Math.floor(Math.random()*10000),
                    name:'',
                    price:'',
                    quantity:''
                },
                error:{
                    name:'',
                    price:'',
                    quantity:''
                },
            }
        },
        methods: {
            creatProducts(){
                if(!this.products.name || !this.products.price || !this.products.quantity){
                    this.validate()
                }else{
                    this.$emit('handleEmitForm', this.products);
                    this.products ={
                        id:'SP'+ Math.floor(Math.random()*10000),
                        name:'',
                        price:'',
                        quantity:''
                    }
                    this.checkBtn = true
                }
                
            },
            validate(){
                if(!this.products.name){
                    this.error.name = 'Tên sản phẩm không được để trống'
                    this.borDer.name = 'border:1px solid red'
                }
                if(!this.products.price){
                    this.error.price = 'Giá sản phẩm không được để trống'
                    this.borDer.price = 'border:1px solid red'
                }
                if(!this.products.quantity){
                    this.error.quantity = 'Số lượng sản phẩm không được để trống'
                    this.borDer.quantity = 'border:1px solid red'
                }
            },
            resetForm(){
                // this.$emit('clearForm')
                this.checkBtn = true
                this.products ={
                        id:'SP'+ Math.floor(Math.random()*10000),
                        name:'',
                        price:'',
                        quantity:''
                }
            },
        },
        watch:{
            'products.name'(){    
                this.error.name = ''
                this.borDer.name = 'border:1px solid gray'    
            },
            'products.price'(){
                this.error.price = ''
                this.borDer.price = 'border:1px solid gray'
            },
            'products.quantity'(){
                this.error.quantity = ''
                this.borDer.quantity = 'border:1px solid gray'
            },
            dataEdit(){
                this.products = Object.assign({},this.dataEdit)
                // this.fillData()
                this.checkBtn = false
            }
        }
    }
</script>

<style lang="scss" scoped>
   .formProduct{
            padding: 20px;
            width: 38%;
            border: 0.5px solid cornflowerblue;
            h2 {
                text-align: left;
                color: rgb(19, 137, 241);
            }
            label{
                display: block;
                text-align: left;
                font-size: 20px;
                font-weight: bold;
                span{
                    color: red;
                }
            }
            input{
                width: 100%;
                height: 50px;
                margin: 10px 0;
                outline: none;
                font-size: 20px;
            }
            p{
                color: red;
                text-align: left;
            }
            .btn{
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                width: 30%;
                float: right;
                margin-top: 40px;
                button{
                    width: 100px;
                    height: 45px;
                    border: 0;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 16px;
                }
                button:nth-child(1){
                    background-color: blue;
                    color: white;
                }
            }
        }
</style>