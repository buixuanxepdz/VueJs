<template>
    <div class="container">
        <div class="wrapper">
            <h2>Todo App</h2>
            <input type="text" class="todo" name="" id="" v-model="todos.title" placeholder="Nhập công việc và bấm enter để thêm" @keyup.enter="addTodo">
            <div class="list-todo">
                <ul>
                    <li v-if="todos == ''" class="isTrue">Chưa có task nào được thêm</li>
                    <li v-else v-for="(todo,index) in todos" :key="index"><TodoItem :title="todo.title" @handleRemove="remove(todo,index)"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: "TodoApp",
    components: { TodoItem },
    data() {
        return {
            todos:[]
        }
    },
    methods: {
        addTodo(){
            if(this.todos.title == null){
                return
            }else{
                this.isTrue = false
                this.todos.push(
                    {title:this.todos.title}
                )
                this.todos.title = ""
            }
           
            console.log(this.todos)
        },
        remove(todo,index){
            this.todos.splice(index,1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper{
        width: 750px;
        margin: 0 auto;
        height: 800px;
        border-radius: 10px;
        border: 1px solid rgb(8, 108, 238);
        h2{
            color: rgb(23, 206, 23);
        }
        .todo{
            width: 95%;
            margin: 0 auto;
            height: 50px;
            font-size: 22px;
            outline: none;
            border-radius: 5px;
            border: 1px solid gray;
        }
        .todo:focus{
            border: 1px solid rgb(8, 108, 238);
            border-radius: 5px;
        }
        .list-todo{
            width: 95%;
            margin: 0 auto;
            overflow-x: scroll;
            height: 600px;
            ul{
                padding: 0;
                li{
                    height: 120px;
                    list-style: none;
                    border-bottom: 0.5px solid gray;
                    font-size: 18px;
                }
                .isTrue{
                    width: 100% !important;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    border: 0px;
                    justify-content: center;
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
</style>