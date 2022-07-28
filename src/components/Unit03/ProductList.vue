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
                <tbody v-if="datas == ''">
                    <tr>
                        <td colspan="6">Không có dữ liệu</td>
                    </tr>
                </tbody>
                <tbody v-else v-for="(data,index) in datas" :key="index">
                    <tr v-if="index < end && index >= start">
                        <td>{{ data.id }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ numberFormat(data.price) }}</td>
                        <td>{{ data.quantity }}</td>
                        <td v-if="data.quantity > 0" :style="green">Còn hàng</td>
                        <td v-else :style="red">Hết hàng</td>
                        <td>
                            <div>
                                <button @click="editProduct(data)">Sửa</button>
                                <button @click="removeProduct(index)">Xóa</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="foot">
                <h2>{{datas.length == 0 ? 'Hiển thị 0 - 0 trên tổng 0 (0 trang)' : `Hiển thị ${start+1} - ${toPage()} trên tổng ${datas.length} (${currentPage} trang)` }}</h2>
                <div class="paginate">
                    <button v-if="currentPage == 1 || datas == ''" :style="notAllow" disabled> <i class="fa-solid fa-angle-left"></i> </button>
                    <button v-else @click="prevPage()"> <i class="fa-solid fa-angle-left"></i> </button>
                    <button v-if="currentPage == Math.ceil(datas.length/itemPage) || datas == ''" :style="notAllow" disabled> <i class="fa-solid fa-angle-right"></i> </button>
                    <button v-else @click="nextPage()" > <i class="fa-solid fa-angle-right"></i> </button>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:'ProductList',
        data() {
            return {
                red:'color:red',
                green:'color:green',
                currentPage:1,
                itemPage:5,
                start:0,
                end:5,
                notAllow:'cursor:not-allowed',
                newDatas:[]
            }
        },
        props:['datas'],
        methods: {
            numberFormat(number){
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
            },
            removeProduct(index){
                let result = this.datas
                result.splice(index,1)
            },
            editProduct(data){
                // var product = {id:data}
                // console.log(this.product)
                this.$emit('product',data);
            },
            nextPage(){
                var totalPage = Math.ceil(this.datas.length / this.itemPage)
                this.currentPage++;
                if (this.currentPage > totalPage) {
                    this.currentPage = totalPage
                }
                this.start = (this.currentPage - 1) * this.itemPage
                this.end = this.currentPage * this.itemPage
            },
            prevPage(){
                this.currentPage--;
                if (this.currentPage <= 1) {
                    this.currentPage = 1
                }
                this.start = (this.currentPage - 1) * this.itemPage
                this.end = this.currentPage * this.itemPage   
            },
            toPage() {
                let toPage = this.currentPage * this.itemPage
                return toPage < this.datas.length ? toPage : this.datas.length
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