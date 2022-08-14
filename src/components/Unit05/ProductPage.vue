<template>
    <div>
        <BaseLayout>
            <template #title>
                Quản lý sản phẩm
            </template>
            <template #table>
                <h2>{{ titleProducts }} <el-button type="primary" @click="handleChangeTitle()" icon="el-icon-edit" circle></el-button></h2>
                <el-table :data="products" border style="width: 100%">
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
import {  mapMutations, mapState } from 'vuex';
import BaseLayout from '../Unit05/BaseLayout.vue';
    export default {
    name: "ProductPage",
    components: { BaseLayout },
    data() {
        return {
             
        }
    },
    methods:{
        ...mapMutations('product', ['changeTitle']),
        handleChangeTitle(){
            this.changeTitle()
        }
    },
    computed:{
        ...mapState('product', ['products','titleProducts']),
    }
}
</script>

<style lang="scss" scoped>

</style>