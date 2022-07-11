<template>
    <div class="wrap">
        <div class="detail-todo"><input type="checkbox" class="check" :checked="check" @click="handleCheck"> <span>{{ title }}</span> </div><button :style="btn" @click="remove">Xóa</button>
    </div>
</template>

<script>

    export default {
        name:'TodoItem',
        data() {
            return {
                btn:'display:none',
                check:false
            }
        },
        methods: {
            handleCheck(){
                if(this.check == false){
                    this.check = true
                    this.btn = 'display:block' 
                }else{
                    this.btn = 'display:none' 
                    this.check = false
                }
               
            },
            remove(){
                this.$emit('handleRemove', this.removeTodo);
            }
        },
        props:['title']
    }
</script>

<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .detail-todo{
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
        display: flex;
            .check{
                margin-right: 20px;
            }
            .check:checked + span{
                text-decoration-line: line-through;
            }
        }
        button{
            border: 0;
            width: 80px;
            height: 50px;
            background-color: red;
            color: white;
            font-size: 20px;
            border-radius: 10px;
            font-weight: bold;
            display: none;
        }
    }
    
</style>