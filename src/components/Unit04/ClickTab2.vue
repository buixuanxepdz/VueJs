<template>
    <div>
        <el-table
        :data="table"
        stripe
        style="width: 100%">
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
    </div>
</template>

<script>
    export default {
        name:'ClickTab2',
        props:['tableData'],
        data() {
            return {
                table:this.tableData
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>