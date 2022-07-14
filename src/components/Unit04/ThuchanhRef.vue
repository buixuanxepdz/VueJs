<template>
    <div class="container" ref="change" :style="backGround">
        <input type="number" :min="0" :max="100" v-model="checkColor">
    </div>
</template>

<script>
    export default {
        name:'ThuchanhRef',
        data() {
            return {
                backGround:'background-color:white',
                checkColor:''
            }
        },
        watch:{
            checkColor(value){
                if(value >= 0 && value <=10){
                    this.$refs.change.style.backgroundColor = 'gray'
                }
                if(value >= 11 && value <=30){
                    this.$refs.change.style.backgroundColor = 'green'
                }
                if(value >= 31 && value <=50){
                    this.$refs.change.style.backgroundColor = 'blue'
                }
                if(value >= 51 && value <= 70){
                    this.$refs.change.style.backgroundColor = 'purple'
                }
                if(value >= 71 && value <= 90){
                    this.$refs.change.style.backgroundColor = 'orange'
                }
                if(value >= 91 && value <= 100){
                    this.$refs.change.style.backgroundColor = 'red'
                }   
                if(!value){
                    this.$refs.change.style.backgroundColor = 'white'
                }
                if(value < 0 || value > 100){
                    this.$refs.change.style.backgroundColor = 'white'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 500px;
        height: 100px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        border: 1px solid black;
        input{
            width: 90%;
            margin: 0 auto;
            font-size: 20px;
            height: 40px;
        }
    }
</style>