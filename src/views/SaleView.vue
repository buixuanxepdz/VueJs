<template>
    <div>
        <BaseLayout>
            <template #title>
                Doanh thu
            </template>
            <template #table>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Tên Sản Phẩm"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="sale"
                        label="Doanh số"
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
    name: "SaleView",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    sale: "100.000",
                    name: "Bim bim",
                }, {
                    sale: "200.000",
                    name: "Banh",
                }, {
                    sale: "300.000",
                    name: "Tra sua",
                }, {
                    sale: "400.000",
                    name: "Tom",
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>