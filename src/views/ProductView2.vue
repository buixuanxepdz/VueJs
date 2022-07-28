<template>
    <div>
        <BaseLayout>
            <template #title>
                Sản phẩm
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
    name: "ProductView2",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    date: "2016-05-03",
                    name: "Bim bim",
                }, {
                    date: "2016-05-02",
                    name: "Banh",
                }, {
                    date: "2016-05-04",
                    name: "Tra sua",
                }, {
                    date: "2016-05-01",
                    name: "Tom",
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>