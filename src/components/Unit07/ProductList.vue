<template>
        <div class="formList">
            <table>
                <thead>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </thead>
                <tbody v-if="newDatas == ''">
                    <tr>
                        <td colspan="6">Không có dữ liệu</td>
                    </tr>
                </tbody>
                <tbody v-else v-for="(data,index) in newDatas" :key="index">
                    <tr v-if="index < end && index >= start">
                        <td>{{ data.id }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ formatMoney(data.price) }}</td>
                        <td>{{ data.quantity }}</td>
                        <td v-if="data.quantity > 0" :style="green">Còn hàng</td>
                        <td v-else :style="red">Hết hàng</td>
                        <td>
                            <div>
                                <button @click="edit(data)">Sửa</button>
                                <button @click="removeProduct(data.id)">Xóa</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="foot">
                <h2>{{newDatas.length == 0 ? 'Hiển thị 0 - 0 trên tổng 0 (0 trang)' : `Hiển thị ${start+1} - ${toPage()} trên tổng ${newDatas.length} (${currentPage} trang)` }}</h2>
                <div class="paginate">
                    <button v-if="currentPage == 1 || newDatas == ''" :style="notAllow" disabled> <i class="fa-solid fa-angle-left"></i> </button>
                    <button v-else @click="prevPage()"> <i class="fa-solid fa-angle-left"></i> </button>
                    <button v-if="currentPage == Math.ceil(newDatas.length/itemPage) || newDatas == ''" :style="notAllow" disabled> <i class="fa-solid fa-angle-right"></i> </button>
                    <button v-else @click="nextPage()" > <i class="fa-solid fa-angle-right"></i> </button>
                </div>
            </div>
        </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { formatMoney } from '@/helper/formatMoney';

    export default {
        name:'ProductList',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState([
                'newDatas',
                'red',
                'green',
                'currentPage',
                'itemPage',
                'start',
                'end',
                'notAllow'
            ])
        },
        methods: {
            ...mapMutations([
                'deleteProduct',
                'editProduct',
                'next',
                'to',
                'prev'
            ]),
            formatMoney,
            removeProduct(id){
               this.deleteProduct(id)
            },
            edit(data){
              this.editProduct(data)
            },
            nextPage(){
                this.next()
            },
            prevPage(){
                this.prev()
            },
            toPage() {
                let toPage = this.$store.state.currentPage * this.$store.state.itemPage
                return toPage < this.$store.state.newDatas.length ? toPage : this.$store.state.newDatas.length
            }
        },
    }
</script>

<style lang="scss" scoped>
  .formList{
            width: 59%;
            table{
                width: 100%;
                border: 1px solid gray;
                border-spacing: 0;
                border-collapse: collapse;
                thead{
                    background-color: rgb(203, 225, 252);
                    th{
                        padding: 20px;
                        border: 1px solid black;
                    }
                }
                tbody{
                    tr{
                        td{
                            border: 1px solid black;
                            padding: 20px;
                            div{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: space-between;
                                button{
                                    border: 0;
                                    width: 80px;
                                    height: 40px;
                                    border-radius: 5px;
                                }
                                button:nth-child(1){
                                    background-color: orange;
                                    color: white;
                                    font-size: 18px;
                                    font-weight: bold;
                                }
                                button:nth-child(2){
                                    background-color: red;
                                    color: white;
                                    font-size: 18px;
                                    font-weight: bold;
                                }
                            }
                        }
                        td:nth-child(2){
                            color: rgb(52, 93, 243);
                        }
                    }
                }
            }   
            .foot{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                h2{
                    width: 50%;
                    font-size: 16px;
                    text-align: left;
                }
                .paginate{
                    width: 10%;
                    display: flex;
                    justify-content: space-between;
                    button{
                        width: 45px;
                        height: 45px;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
            }
        }
</style>