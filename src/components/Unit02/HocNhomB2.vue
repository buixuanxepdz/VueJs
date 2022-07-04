<template>
    <div class="container">
        <div class="b1">
            <table>
                <thead>
                    <th>Tên</th>
                    <th>Giá</th>
                </thead>
                <tbody v-for="item in products" :key="item">
                    <td>
                        {{ item.name }}
                    </td>
                    <td>
                        {{ item.price }}
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HocNhomB2',
        data() {
            return {
                products:[
                    {
                        name: 'iPhone 12 Pro Max Chính Hãng',
                        price: 32990000,
                    },
                    {
                        name: 'iPhone 12 Chính Hãng (VN/A)',
                        price: 21790000,
                    },
                    {
                        name: 'iPhone 11 Chính hãng',
                        price: 16690000,
                    },
                    {
                        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                        price: 12190000,
                    },
                    {
                        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                        price: 26500000,
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
        .container{
            width: 800px;
            margin: 0 auto;
            .b1{
                width: 100%;
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
                    text-align: center;
                    border-left: 1px solid rgb(193, 189, 189);
                    border-bottom: 1px solid rgb(193, 189, 189);
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
                }
            }
            }
        }
</style>