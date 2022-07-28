<template>
    <div class="container">
        <div class="tab">
            <div @click="btn = true" style="cursor: pointer;">Tab1</div>
            <div @click="btn = false" style="cursor: pointer;">Tab2</div>
        </div>
        <div class="content">
            <div class="tab1" v-if="btn == true" ref="tab1">
                <ClickTab1 v-for="user in users" :key="user" :users="users">
                    <template #tab1>
                        {{ user }}
                    </template>
                </ClickTab1>
            </div>
            <div class="tab2" v-else ref="tab2">
                <ClickTab2 :tableData="tableData"/>
            </div>
        </div>
    </div>
</template>

<script>
import ClickTab1 from "./ClickTab1.vue";
import ClickTab2 from "./ClickTab2.vue";
    export default {
    name: "HocnhomB3",
    data() {
        return {
            btn:true,
            users:[
                'Bùi Xuân Xếp',
                'Trần Đình Nghĩa',
                'Trần Sỹ Hà',
                'Nguyễn Thị Hảo Hằng'
            ],
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
        };
    },
    methods: {
      
    },
    components: { ClickTab1, ClickTab2 }
}
</script>

<style lang="scss" scoped>
.container{
    width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
    .tab{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background-color: rgb(35, 35, 221);
        div{
            width: 50%;
            text-align: center;
            line-height: 60px;
            color: white;
            font-weight: bold;
        }
        div:nth-child(1){
            border-right: 1px solid aqua;
        }
       
    }
    .content{
        width: 100%;
        position: relative;
        height: 600px;
        .tab1{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
        }
        .tab2{
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
    
</style>