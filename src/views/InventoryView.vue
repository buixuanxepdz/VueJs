<template>
    <div>
        <BaseLayout>
            <template #title>
                Tồn kho
            </template>
            <template #table>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Tên Sản Phẩm"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="inventory"
                        label="Tồn kho"
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
                    inventory:1000,
                    name: "Bim bim",
                }, {
                    inventory:1000,
                    name: "Banh",
                }, {
                    inventory:1000,
                    name: "Tra sua",
                }, {
                    inventory:1000,
                    name: "Tom",
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>