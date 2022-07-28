<template>
    <div>
        <BaseLayout>
            <template #title>
                Quản lý sản phẩm
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
                        prop="description"
                        label="Mô tả">
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
import BaseLayout from '../Unit05/BaseLayout.vue';
    export default {
    name: "ProductPage",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    date: "2016-05-03",
                    name: "Tom",
                    description: "Đây là sản phẩm 1"
                }, {
                    date: "2016-05-02",
                    name: "Tom",
                    description: "Đây là sản phẩm 2"
                }, {
                    date: "2016-05-04",
                    name: "Tom",
                    description: "Đây là sản phẩm 3"
                }, {
                    date: "2016-05-01",
                    name: "Tom",
                    description: "Đây là sản phẩm 4"
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>