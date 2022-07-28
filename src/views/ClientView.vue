<template>
    <div>
        <BaseLayout>
            <template #title>
                Khách Hàng
            </template>
            <template #table>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Tên"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="date"
                        label="Ngày sinh"
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
    name: "ClientView",
    components: { BaseLayout },
    data() {
        return {
             tableData: [{
                    date: "2016-05-03",
                    name: "Bùi Xuân Xếp",
                }, {
                    date: "2016-05-02",
                    name: "Trần Sỹ Hà",
                }, {
                    date: "2016-05-04",
                    name: "Trần Đình Nghĩa",
                }, {
                    date: "2016-05-01",
                    name: "Nguyễn Đình Thành",
                }],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>