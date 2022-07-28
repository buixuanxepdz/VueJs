<template>
    <div>
        <BaseLayout>
            <template #title>
                Đơn hàng
            </template>
            <template #table>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Tên Sản Phẩm"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="date"
                        label="Ngày tạo"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="status"
                        label="Trạng thái"
                        width="180">
                        </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                    background
                    layout="total,prev, pager, next, jumper"
                    :total="50" style="float: right;margin-top: 30px;">
                    </el-pagination>
                </div>
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from '../components/Unit05/BaseLayout.vue';
    export default {
    name: "OrderView",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    date: "2016-05-03",
                    name: "Bim bim",
                    status:'Đã xác nhận'
                }, {
                    date: "2016-05-02",
                    name: "Banh",
                    status:'Đã xác nhận'
                }, {
                    date: "2016-05-04",
                    name: "Tra sua",
                    status:'Đã xác nhận'
                }, {
                    date: "2016-05-01",
                    name: "Tom",
                    status:'Đã xác nhận'
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>