<template>
    <div class="container">
        <div class="list-products">
            <table>
                <thead>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </thead>
                <tbody v-for="(product,index) in products" :key="index">
                    <td>{{ index+1 }}</td>
                    <td v-if="product.image != ''">
                        <img :src="product.image" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td v-else>
                        <img :src="imageNull" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td><span>{{ numberFormat(product.price) }}</span></td>
                    <td><span>{{ product.quantity }}</span></td>
                    <td v-if="product.quantity > 0"><span :style="{color:'green'}">Còn hàng</span></td>
                    <td v-else><span :style="{color:'red'}">Hết hàng</span></td>
                    <td><button @click="addToCart(product.id)">Thêm vào giỏ hàng</button></td>
                </tbody>
                
            </table>
        </div>
        <div class="cart">
            <h2>Giỏ hàng</h2>
            <div class="list-cart">
                <h3 v-if="carts == ''">Không có sản phẩm trong giỏ hàng</h3>
                <table v-else>
                        <tr v-for="cart in carts" :key="cart.id">
                            <td>
                                <div>
                                    <img v-if="cart.image" :src="cart.image" alt="">
                                    <img v-else :src="imageNull" alt="">
                                    <div>
                                        <p>{{ checkName(cart.name) }}</p>
                                        <h4>{{ numberFormat(cart.price) }}</h4>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="number" min="1" v-model="cart.quantity"> 
                            </td>
                            <td><button @click="deleteCard(cart.id)">Xóa</button></td>
                        </tr>
                </table>
            </div>
            <h2>Tổng tiền: {{ numberFormat(total) }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeWork02',
        data() {
            return {
                imageNull:'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
                carts:[],
                products:[
                    {   
                        id:1,
                        name: 'iPhone 12 Pro Max Chính Hãng',
                        image: 'https://product.hstatic.net/1000340016/product/iphone-12-mini-red-select-2020_684ae3ca65004da18be7d151f3c9b222.png',
                        price: 32990000,
                        quantity: 566,
                    },
                    {
                        id:2,
                        name: 'iPhone 12 Chính Hãng (VN/A)',
                        image: '',
                        price: 21790000,
                        quantity: 123,
                    },
                    {   
                        id:3,
                        name: 'iPhone 11 Chính hãng',
                        image: 'https://bizweb.dktcdn.net/100/442/323/products/f7651bda-0818-4111-a0e7-866e39216285.jpg?v=1640591271370',
                        price: 16690000,
                        quantity: 0,

                    },
                    {   
                        id:4,
                        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                        image: 'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-white-200-org.png',
                        price: 12190000,
                        quantity: 1023,
                    },
                    {
                        id:5,
                        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                        image: '',
                        price: 26500000,
                        quantity: 45,
                    }
                ],
                kq :[],
            }
        },
        methods: {
            numberFormat(number){
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
            },
            addToCart(id) {
                let index;
                for (let i = 0;i< this.products.length ; i++){
                    if (this.products[i].id === id){
                    index = i;
                    }
                }
                if (this.products[index].quantity <= 0) {
                    alert('Sản phẩm hết hàng');
                }else {
                    if (this.checkList(id)) {
                        for (let i = 0;i< this.carts.length ; i++){
                            if (this.carts[i].id === id){
                                this.carts[i].quantity ++;
                                this.products[index].quantity--;
                            }
                        }
                    }else {
                        this.carts.push(
                            {
                                id: this.products[index].id,
                                name: this.products[index].name,
                                image: this.products[index].image,
                                price: this.products[index].price,
                                quantity: 1,
                            }
                        );
                        this.products[index].quantity--;
                    }
                }
            },
            checkList (id) {
                for (let i = 0;i< this.carts.length ; i++){
                    if (this.carts[i].id === id){
                        return true;
                    }
                }
                return false;
            },
            deleteCard (id) {
                for (let i = 0;i< this.carts.length ; i++){
                    if (this.carts[i].id === id){
                        this.carts.splice(i,1);
                    }
                }
            },
            checkName(name){
                if(name.length > 25){
                   return name.slice(undefined,25) + '...'

                }
            }
        },
        computed: {
           
            total() {
                var total = 0;
                for(var i = 0; i < this.carts.length; i++) {
                    total += this.carts[i].price*this.carts[i].quantity;
                }
                return total;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        .list-products{
            width:65%;
            table{
                width: 100%;
                border-spacing: 0px !important;
                border: 1px solid rgb(193, 189, 189);
                th{
                    padding: 20px;
                    background-color: #f2f6fe;
                    border-left: 1px solid rgb(193, 189, 189);
                    border-bottom: 1px solid rgb(193, 189, 189);
                }
                th:nth-child(1){
                    border-left: 0px;
                }
                td{
                    font-weight: bold;
                    padding: 20px;
                    border-left: 1px solid rgb(193, 189, 189);
                    img{
                        width: 60px;
                        height: 60px;
                    }
                    span{
                        margin-left: 10px;
                    }
                    button{
                        border: 0px;
                        border-radius: 5px;
                        padding: 10px;
                        background-color: rgb(62, 62, 238);
                        color: white;
                    }
                }
                td:nth-child(1){
                    border-left: 0px;
                }
                td:nth-child(2){
                    text-align: left;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .cart{
            width: 34%;
            height: 600px;
            border: 1px solid  rgb(193, 189, 189);
            h2:nth-child(1){
                text-align: left;
                margin-left: 30px;
            }
            h2:nth-child(3){
                text-align: right;
                margin-right: 70px;
                color: red;
            }
            .list-cart{
                width: 95%;
                margin: 0 auto;
                height: 400px;
                table{
                    width: 100%;
                    tr{
                        width: 100%;
                        border-bottom: 1px solid green;
                        td{
                            div{
                                display: flex;
                                justify-content: space-between;
                                img{
                                    width: 14%;
                                }
                                div{
                                    width: 85%;
                                    display: block;
                                    p{
                                        text-align: left;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        font-weight: bold;
                                    }
                                    h4{
                                        margin: 0;
                                        text-align: left;
                                    }
                                }
                            }
                            input{
                                width: 100px;
                                height: 30px;
                                outline: none;
                            }
                            button{
                                border: 0px;
                                border-radius: 5px;
                                width: 60px;
                                background-color: red;
                                color: white;
                                height: 30px;
                            }
                        }
                    }
                }
                h3{
                    margin-top: 70px;
                }
            }
        }
    }
</style>