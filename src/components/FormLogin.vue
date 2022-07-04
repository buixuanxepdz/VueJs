<template>
    <div class="wrapper">
        <div class="abc">
            <form action="">
                <label for="">Tên tài khoản</label>
                <input type="text">
                <label for="">Mật khẩu</label>
                <input type="text">
                <button>Đăng nhập</button>
            </form>
        </div>
        <div class="def">
            <h2>
                Xin chào
            </h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FormLogin',
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
            background-color: #f5f5f5;
            form{
                width: 80%;
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
                button{
                    background-color: blue;
                    color: white;
                    border: none;
                    font-weight: bold;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 10px;
                    font-size: 16px;
                    margin-top: 20px;
                    margin-bottom: 40px;
                }
            }
            
        }
        .def{
            width: 48%;
            border: 1px solid gray;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>