<template>
    <div>
        <BaseLayout>
            <template #title>
                Quản lý hóa đơn
            </template>
            <template #table>
                <h2>{{ titleOrders }}<el-button type="primary" @click="handleChangeTitle()" icon="el-icon-edit" circle></el-button></h2>
                <el-table :data="receipt" border style="width: 100%">
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
import { mapMutations, mapState } from 'vuex';
import BaseLayout from '../components/Unit05/BaseLayout.vue';
    export default {
    name: "ReceiptView",
    components: { BaseLayout },
    data() {
        return {
           
        }
    },
    methods: {
        ...mapMutations('order', ['changeTitle']),
        handleChangeTitle(){
            this.changeTitle()
        }
    },
    computed:{
        ...mapState('order', ['receipt','titleOrders']),
    }
}
</script>

<style lang="scss" scoped>

</style>