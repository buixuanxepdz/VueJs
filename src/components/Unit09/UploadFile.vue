<template>
    <div>
        <input type="file" @change="changeFile">
        <el-button size="small" type="primary" @click="handleUpload()">Click to upload</el-button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'UploadFile',
        data() {
            return {
             file:'',
             fileName:''
            };
        },
        methods: {
            changeFile(e){
                console.log(e.target.files[0])
                this.file = e.target.files[0]
                this.fileName = e.target.files[0].name
            },
            handleUpload(){
                let data = new FormData()
                data.append('file',this.file)
                data.append('file_name',this.fileName)

                axios.post('https://250d-58-187-74-149.ap.ngrok.io/api/upload',data).then(res => {
                   if(res.status == 200){
                    this.$notify({
                        title: 'Success',
                        message: 'This is a success message',
                        type: 'success'
                        });
                   }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>

</style>