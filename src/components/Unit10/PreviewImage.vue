<template>
    <div>
        <div class="preview" v-if="img || imgUpdate">
            <img :src="img" alt="" v-if="img">
            <img :src="`http://vuecourse.zent.edu.vn/storage/${imgUpdate}`" alt="" v-else>
            <i class="fa-solid fa-xmark" @click="close"></i>
        </div>
        <div class="changeImg" @click="selectFile" v-else>
            <input ref="file" type="file" @change="handlePreview" v-show="false">
            <i class="el-icon-picture"></i>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img:'',
                file:'',
                imgUpdate:this.fileUpdate
            };
        },
        props:['fileUpdate'],
        methods: {
            handlePreview(e){
                const file = e.target.files[0]
                this.img = URL.createObjectURL(file)
                this.file = file
                this.$emit('preview',this.file)
            },
            selectFile(){
                this.$refs.file.click()
            },
            close(){
                this.file = ''
                this.img = ''
                this.imgUpdate = ''
            }
        },
    }
</script>

<style lang="scss" scoped>
.preview{
    width: 100px;
    position: relative;
    height: 100px;
    img{
        width: 100%;
        height: 100%;
    }
    i{
        position: absolute;
        top: 5px;
        display: none;
        right: 5px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        z-index: 100;
        cursor: pointer;
    }
}
.preview::before{
    content:'';
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background: #00000054;
    z-index: 4;
    cursor: pointer;
}
.preview:hover::before,.preview:hover i{
    display: block;

}
.changeImg{
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid gray;
}
</style>