<template>
    <div class="container">
        <el-row>
            <el-col :span="24">
                <div class="carousel">
                    <slot name="banner"></slot>
                </div>
            </el-col>
        </el-row>
        <el-row class="row2">
            <el-col :span="24">
                <div class="nav">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">Trang chủ</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">Thể thao</template>
                        <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
                        <el-menu-item index="2-2">Bóng đá châu âu</el-menu-item>
                        <el-menu-item index="2-3">Võ thuật</el-menu-item>
                        <el-menu-item index="2-4">Các môn thể thao khác</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">Sức khỏe</template>
                        <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
                        <el-menu-item index="3-2">Làm đẹp</el-menu-item>
                        <el-menu-item index="3-3">Đại dịch covid-19</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">Pháp luật</el-menu-item>
                    <el-menu-item index="5">Du lịch</el-menu-item>
                    <el-menu-item index="6">Giáo dục</el-menu-item>
                    <el-menu-item index="7">Văn hóa</el-menu-item>
                    <el-menu-item index="8">Công nghệ</el-menu-item>
                    <el-menu-item index="9">Giải trí</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5">
                <div class="grid-content">
                    <slot name="left"></slot>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content">
                    <slot name="content"></slot>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content">
                    <slot name="right"></slot>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            carousels: [
                { image: "http://saovangholdings.com/public/upload/banner/banner tin tá»©c.jpg" },
                { image: "https://vihamark.com/images/category/category_post-1624904858-banner_congnghe.jpg" },
                { image: "https://sorellabeautyspa.com/wp-content/uploads/2021/06/TIN-TUC-BANNER.jpg" },
            ]
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    width: 1190px;
    margin: 0 auto;
    .el-row {
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 500px;
    }
    .carousel{
        min-height: 100%;
        width: 100%;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
}
    
</style>