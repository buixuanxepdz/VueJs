<template>
    <div>
         <BaseLayout>
            <template #title>
                Quản lý thống kê
            </template>
            <template #table>
                 <div class="block">
                    <span class="demonstration">Default value</span>
                    <el-slider v-model="value1"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Customized initial value</span>
                    <el-slider v-model="value2"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Hide Tooltip</span>
                    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Format Tooltip</span>
                    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Disabled</span>
                    <el-slider v-model="value5" disabled></el-slider>
                </div>
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from '../components/Unit05/BaseLayout.vue';
    export default {
        name:'ChartView',
        components:{
            BaseLayout
        },
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 48,
                value5: 42
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>