<template>
        <div class="cart">
            <h2>Giỏ hàng</h2>
            <div class="list-cart">
                <h3 v-if="carts == ''">Không có sản phẩm trong giỏ hàng</h3>
                <table >
                        <tr v-for="cart in carts" :key="cart.id">
                            <td>
                                <div>
                                    <img v-if="cart.image" :src="cart.image" alt="">
                                    <img v-else :src="imageNull" alt="">
                                    <div>
                                        <p>{{ formatName(cart.name) }}</p>
                                        <h4>{{ formatMoney(cart.price) }}</h4>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="number" min="1" v-model="cart.quantity"> 
                            </td>
                            <td><button @click="deleteCart(cart.id)">Xóa</button></td>
                        </tr>
                </table>
            </div>
            <h2>Tổng tiền: {{ formatMoney(total) }}</h2>
    </div>
</template>

<script>
import {   mapGetters, mapMutations, mapState } from 'vuex';
import { formatMoney } from '@/helper/formatMoney';
import { formatName } from '@/helper/formatName';

    export default {
        name:'CartProduct',
        data() {
            return {
                
            };
        },
        methods:{
            formatMoney,
            formatName,
            ...mapMutations([
                'removeCart',
            ]),
            deleteCart(id){
                this.removeCart(id)
            },
        },
        computed: {
            ...mapState([
                'carts',
                'imageNull'
            ]),
            ...mapGetters([
                'total'
            ])
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
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
</style>