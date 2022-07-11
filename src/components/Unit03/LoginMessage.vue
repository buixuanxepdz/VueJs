<template>
        <div class="def">
            <div class="content">
                <h2>
                    Email: {{ props1 }}
                </h2>

                <h2>
                    Mật khẩu:{{ props2 }}
                </h2>
            </div>
            
        </div>
</template>
<script>
    export default {
        name: 'LoginMessage',
        // data() {
        //     return {
        //         email:'',
        //         password:''
        //     }
        // },
        props: ['props1','props2'],
    }
</script>
<style lang="scss" scoped>
        .def{
            width: 48%;
            border: 1px solid gray;
            .content{
                width: 90%;
                margin: 0 auto;
                text-align: left;
                margin-top: 50px;
            }
        }
</style>