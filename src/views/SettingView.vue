<template>
    <div>
         <BaseLayout>
            <template #title>
                Cài đặt
            </template>
            <template #table>
                <el-button :plain="true" @click="open2">success</el-button>
                <el-button :plain="true" @click="open3">warning</el-button>
                <el-button :plain="true" @click="open1">message</el-button>
                <el-button :plain="true" @click="open4">error</el-button>
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from '../components/Unit05/BaseLayout.vue';
    export default {
        name:'SettingView',
        components:{
            BaseLayout
        },
        methods: {
            open1() {
                this.$message('This is a message.');
            },
            open2() {
                this.$message({
                message: 'Congrats, this is a success message.',
                type: 'success'
                });
            },

            open3() {
                this.$message({
                message: 'Warning, this is a warning message.',
                type: 'warning'
                });
            },

            open4() {
                this.$message.error('Oops, this is a error message.');
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>