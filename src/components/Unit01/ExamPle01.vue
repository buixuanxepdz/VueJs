<template>
    <div class="wrapper">
         <div class="abc">
            <form action="">
                <label for="">Nhập tiêu đề</label>
                <input type="text" v-model="title">
                <label for="">Nhập nội dung</label>
                <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
            </form>
        </div>
        <div class="def">
            <div class="content">
                <h2>{{ title }}</h2>
                <p v-html="content"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ExamPle01',
        data (){
            return {
                title:'',
                content:''
            }
        }
    }
</script>

<style lang="scss" scoped>
     .wrapper{
        display: flex;
        justify-content: space-between;
        width: 900px;
        margin: 0 auto;
        margin-top: 30px;
        .abc{
            width: 48%;
            border: 1px solid gray;
            border-radius: 10px;
            form{
                width: 90%;
                margin: 0 auto;
                padding: 20px;
                label{
                    float: left;
                    font-weight: bold;
                }
                input{
                    width: 100%;
                    margin: 10px 0;
                    height: 30px;
                    outline: none;
                    font-size: 20px;
                }
                textarea{
                    width: 100%;
                    outline: none;
                }
            }
            
        }
        .def{
            width: 48%;
            border: 1px dotted gray;
            border-radius: 10px;
            .content{
                width: 90%;
                margin: 0 auto;
                text-align: left;
            }
        }
    }
</style>