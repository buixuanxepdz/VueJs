<template>
    <div class="container">
            <el-col :span="8" >
                <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span><slot name="tab1"></slot></span>
                </div>
                </el-card>
            </el-col>
    </div>
</template>

<script>
    export default {
        name:'ClickTab1',
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .image{
        width: 100%;
        height: 300px;
    }
</style>