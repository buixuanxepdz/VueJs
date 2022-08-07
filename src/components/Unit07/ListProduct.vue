<template>
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
                    <td><span>{{ formatMoney(product.price) }}</span></td>
                    <td><span>{{ product.quantity }}</span></td>
                    <td v-if="product.quantity > 0"><span style="color:green">Còn hàng</span></td>
                    <td v-else><span style="color:red">Hết hàng</span></td>
                    <td><button @click="addToCart(product)">Thêm vào giỏ hàng</button></td>
                </tbody>
                
            </table>
        </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { formatMoney } from '@/helper/formatMoney';

    export default {
        name:'ListProduct',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState([
                'products',
                'imageNull'
            ]),
            ...mapGetters([
                
            ])
        },
        methods:{
            formatMoney,
            ...mapMutations([
                'addCart'
                ]),
            addToCart(product){
                this.addCart(product)
            }
        }
    }
</script>

<style lang="scss" scoped>
     .list-products{
          
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
</style>