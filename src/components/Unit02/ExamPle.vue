<template>
    <div>
        <h1 v-if="2 < 1">Số 2 lớn hơn số 1</h1>
        <h1 v-else>Số 2 nhỏ hơn số 1</h1>
        <div v-if="gender === 'nam'">
            Giới tính nam
        </div>
        <div v-else-if="gender  === 'nu'">
            Giới tính nữ
        </div>
        <div v-else>
            Giới tính không xác định
        </div>
        <h1 v-show="2 < 1"> Số 2 lớn 1</h1>

        <div v-for="(product,index) in products" :key="index">
            <div v-if="product.quantity <= 10">
                <p>STT: {{ index }}</p>
                <p>Id:{{ product.id }}</p>
                <p>Name: {{ product.name }}</p>
                <p>Price:{{ product.price }}</p>
                <p>Quantity:{{ product.quantity }}</p>
                <hr>
            </div>
        </div>
        <div v-for="item in items" :key="item">
            <p>{{ item }}</p>
        </div>
        <p>{{ creaA }}</p>
        <p>{{ creaB }}</p>
        <button @click="a++">increaA</button>
        <button @click="b++">increaB</button>

        <div class="bg" :style="bg">
            <input type="text" v-model="key">
        </div>
    </div>
</template>

<script>
    export default {
        name:'ExamPle',
        data() {
            return {
                gender: 'nam',
                products:[
                    {
                        id:1,
                        name:'iphone',
                        price:200000,
                        quantity:10
                    },
                    {
                        id:2,
                        name:'samsung',
                        price:30000,
                        quantity:30
                    },
                    {
                        id:3,
                        name:'xiaomi',
                        price:230000,
                        quantity:2
                    },
                ],
                items:{
                    name:'bxx',
                    age:12,
                    adress:'Ha Noi'
                },
                number:0,
                a:20,
                b:40,
                key:'',
                bg:'background-color:white'
            }
        },
        methods: {
            // creaA(){
            //     console.log('A')
            //     return this.a + this.number
            // },
            // creaB(){
            //     console.log('B')
            //     return this.b + this.number
            // }
        },
        computed: {
            creaA(){
                console.log('A')
                return this.a + this.number
            },
            creaB(){
                console.log('B')
                return this.b + this.number
            }
        },
        watch: {
            key(value){
                if(value >= 1 && value <= 10){
                    this.bg = 'background-color:red'
                }else if(value >= 11 && value <= 20){
                    this.bg = 'background-color:blue'
                }
                else if(value >= 21 && value <= 30){
                    this.bg = 'background-color:yellow'
                }
                else{
                    this.bg = 'background-color:white'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .bg{
        width: 400px;
        height: 300px;
        border: 1px solid black;
        input{
            margin: 0 auto;
        }
    }
</style>