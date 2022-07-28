<template>
    <div>
        <BaseLayout>
            <template #title>
                Quản lý hóa đơn
            </template>
            <template #table>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="Date"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="Name"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="Address">
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
    name: "ReceiptView",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    date: "2016-05-03",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles"
                }, {
                    date: "2016-05-02",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles"
                }, {
                    date: "2016-05-04",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles"
                }, {
                    date: "2016-05-01",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles"
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>