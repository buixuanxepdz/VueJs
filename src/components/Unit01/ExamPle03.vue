<template>
    <div class="container">
        <div class="screen">
            {{ currentValue || 0 }}
        </div>
        <div class="btn-parent">
           <div class="btn-child" v-for="btn in btns" :key="btn" 
           :class="{'btn-orange': ['/','*','-','+','='].includes(btn),'btn-0':['0'].includes(btn)}"
           @click="click(btn)"
           >
            {{ btn }}
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ExamPle03',
    data () {
        return {
            currentValue : '',
            btns : ['C','Del','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='],
        }
    },
    methods: {
        click(btn) {
            if (!isNaN(btn) || btn === "." || ["/", "*", "-", "+"].includes(btn)) {
                this.currentValue += btn;
            }
            if (btn === "C") {
                this.currentValue = "";
            }
            if (btn === "%") {
                this.currentValue = this.currentValue / 100;
            }
            if(btn === "Del"){
                this.currentValue = this.currentValue.toString().slice(0, -1)
            }
            if (btn === "=") {
                this.currentValue = eval(
                    this.currentValue
                );
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .container{
        width: 500px;
        margin: 0 auto;
        background-color: black;
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        .screen{
            width: 100%;
            margin: 0 auto;
            background-color: rgb(43, 41, 41);
            height: 80px;
            border-radius: 10px;
            text-align: right;
            line-height: 80px;
            font-size: 50px;
            color: white;
            margin-right: 10px;
        }
        .btn-parent{
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                color: white;
                .btn-child{
                    width: 24%;
                    height: 80px;
                    line-height: 80px;
                    background-color: gray;
                    margin-top: 10px;
                    border-radius: 10px;
                    font-size: 50px;
                    font-weight: bold;
                }
                .btn-child:hover{
                    background-color: rgb(53, 76, 76);
                    cursor: pointer;
                }
                .btn-orange{
                    background-color: orange;
                }
                .btn-0{
                    width: 49%;
                }
            }
    }
</style>