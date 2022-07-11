<template>
    <div class="container">
        <div class="search">
                <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="searchProduct" v-on:keyup.enter="resultQuery()">
                <i class="fa-solid fa-magnifying-glass icon-search"></i>
                <i class="fa-solid fa-x icon-x" :style="x" @click.prevent="clear()"></i>
        </div>
        <div class="list-products">
            <table>
                <thead>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                </thead>
                <tbody v-if="kq == '' && saveSearch">
                    <td colspan="5">Không tìm thấy sản phẩm</td>  
                </tbody>
                <tbody v-else-if="kq == ''" v-for="(product,index) in products" :key="index">
                    <td>{{ index+1 }}</td>
                    <td v-if="product.image != ''">
                        <img :src="product.image" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td v-else>
                        <img :src="imageNull" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td><span>{{ numberFormat(product.price) }}</span></td>
                    <td><span>{{ product.quantity }}</span></td>
                    <td v-if="product.isAvailable == true"><span :style="{color:'green'}">Còn hàng</span></td>
                    <td v-else><span :style="{color:'red'}">Hết hàng</span></td>
                </tbody>
                <tbody v-else v-for="(product,id) in kq" :key="id">
                    <td>{{ id+1 }}</td>
                    <td v-if="product.image != ''">
                        <img :src="product.image" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td v-else>
                        <img :src="imageNull" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td><span>{{ numberFormat(product.price) }}</span></td>
                    <td><span>{{ product.quantity }}</span></td>
                    <td v-if="product.isAvailable == true"><span :style="{color:'green'}">Còn hàng</span></td>
                    <td v-else><span :style="{color:'red'}">Hết hàng</span></td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeWork01',
        data() {
            return {
                imageNull:'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
                searchProduct:'',
                saveSearch:'',
                x:'display:none',
                clickX:'',
                products:[
                    {
                        name: 'iPhone 12 Pro Max Chính Hãng',
                        image: 'https://product.hstatic.net/1000340016/product/iphone-12-mini-red-select-2020_684ae3ca65004da18be7d151f3c9b222.png',
                        price: 32990000,
                        quantity: 566,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 12 Chính Hãng (VN/A)',
                        image: '',
                        price: 21790000,
                        quantity: 123,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 11 Chính hãng',
                        image: 'https://bizweb.dktcdn.net/100/442/323/products/f7651bda-0818-4111-a0e7-866e39216285.jpg?v=1640591271370',
                        price: 16690000,
                        quantity: 0,
                        isAvailable: false
                    },
                    {
                        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                        image: 'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-white-200-org.png',
                        price: 12190000,
                        quantity: 1023,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                        image: '',
                        price: 26500000,
                        quantity: 45,
                        isAvailable: true
                    }
                ],
                kq :[],
            }
        },
        methods: {
            numberFormat(number){
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
            },
            clear(){
                this.searchProduct = '';
                return this.kq = this.products
            },
            resultQuery(){
                this.saveSearch = this.searchProduct
                this.kq =  this.products.filter((item)=>{
                    return item.name.toLowerCase().includes(this.searchProduct.toLowerCase())
                })
            },
        },
        watch:{
            searchProduct(value){
                if(value == ''){
                    this.x = 'display:none'
                }else{
                    this.x = 'display:block'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 1200px;
        margin: 0 auto;
        .search{
            width: 250px;
            position: relative;
            .icon-search{
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 18px;
            }
            .icon-x{
                position: absolute;
                top: 10px;
                right: -35px;
                font-size: 18px;
            }
            input{
                width: 100%;
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                outline: none;
                padding-left: 40px;
            }
            input:hover{
                border: 2px solid rgb(20, 129, 238);
            }
            input:focus{
                border: 2px solid rgb(20, 129, 238);
            }
        }
        .list-products{
            width: 100%;
            margin-top: 20px;
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
    }
</style>