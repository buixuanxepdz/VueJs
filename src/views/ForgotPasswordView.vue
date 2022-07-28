<template>
    <div>
        <LoginLayout>
            <template #form>
                <img src="../assets/logoflixgo.png" alt="">
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
                    <el-form-item
                        prop="email"
                        :rules="[
                        { required: true, message: 'Vui lòng nhập Email', trigger: 'blur' },
                        { type: 'email', message: 'Vui lòng nhập địa chỉ email chính xác', trigger: ['blur', 'change'] }
                        ]"
                    >
                        <el-input v-model="dynamicValidateForm.email" placeholder="Email"></el-input>
                    </el-form-item>
                    <router-link to="login"><p>Quay lại trang đăng nhập</p></router-link>
                    <el-form-item>
                        <el-button style="width:100%" type="primary" @click="submitForm('dynamicValidateForm')">Gửi email</el-button>
                    </el-form-item>
                </el-form>
            </template>
        </LoginLayout>
    </div>
</template>

<script>
import LoginLayout from '@/components/Unit05/LoginLayout.vue';
    export default {
    components: { LoginLayout },
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        key: 1,
                        value: ''
                        }],
                    email: '',
                }
            };
            
        },
            methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: 'Gửi email thành công ',
                            type: 'success'
                        });
                        this.dynamicValidateForm.email = ''
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                    });
                },
           
            }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
     img{
        width: 200px;
        margin: 0 auto;
        padding: 30px 0;
    }
    form{
        width: 90% !important;
            margin: 0 auto;
            p{
                text-align: right;
                color: blue;
                cursor: pointer;
            }
        }
</style>