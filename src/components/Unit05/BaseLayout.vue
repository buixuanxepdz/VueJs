<template>
    <div class="container">
        <el-container>
            <el-aside width="300px">
                <el-menu
                class="el-menu-vertical-demo"
                background-color="#001529"
                router
                text-color="#fff"
                :default-active="$route.name"
                active-text-color="#ffd04b">
                    <!-- <router-link to="/"> -->
                        <el-menu-item index="home" :route="{path:'/'}">
                            <i class="el-icon-menu"></i>
                            <span>Tổng quan</span>
                        </el-menu-item>
                    <!-- </router-link> -->
                    
                    <router-link to="product">
                        <el-menu-item index="product">
                            <i class="el-icon-s-shop"></i>
                            <span>Quản lý sản phẩm</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="receipt">
                        <el-menu-item index="receipt">
                            <i class="el-icon-document"></i>
                           <span>Quản lý hóa đơn</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="chart">
                        <el-menu-item index="chart">
                            <i class="el-icon-s-data"></i>
                            <span>Báo cáo thống kê</span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Quản lý chi nhánh</span>
                        </template>
                        <el-menu-item-group title="Hoạt động">
                        <el-menu-item index="productsmall" :route="{name:'productsmall'}">Sản phẩm</el-menu-item>
                        <el-menu-item index="order" :route="{name:'order'}">Đơn hàng</el-menu-item>
                        <el-menu-item index="client" :route="{name:'client'}">Khách hàng</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Báo cáo">
                        <el-menu-item index="sale" :route="{name:'sale'}">Doanh thu</el-menu-item>
                        <el-menu-item index="inventory" :route="{name:'inventory'}">Tồn kho</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <router-link to="settings">
                        <el-menu-item index="settings">
                            <i class="el-icon-setting"></i>
                            <span>Cài đặt hệ thống</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-aside>
        <el-container>
            <el-header style=" font-size: 12px">
                <h2>
                    <slot name="title"></slot>
                </h2>
                <div class="right-head">
                    <el-badge :value="99" :max="99" class="item">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar :src="url"></el-avatar>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                        <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                        <el-dropdown-item>Cấu hình</el-dropdown-item>
                        <router-link to="login"><el-dropdown-item>Đăng xuất</el-dropdown-item></router-link>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
                
            </el-header>
            <el-main>
                <slot name="table"></slot>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
    name: "BaseLayout",
    data() {
        return {
            url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        };
    }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: white;
}
.container{
    width: 100%;
    height: 100vh;
    .el-container{
        height: 100%;
        .el-aside{
            height: 100%;
            background-color: #001529;
            .el-menu{
                border: none;
                text-align: left;
            }
        }
        .el-header {
            background-color: #f2f6fe;
            color: #333;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2{
                text-align: left;
            }
            .right-head{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .item {
                font-size: 25px;
                width: 30px;
                vertical-align: baseline;
                height: 30px;
                margin-right: 50px;
                position: relative;
                i{
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                .el-badge__content.is-fixed {
                    position: absolute !important;
                    top: 20px;
                    right: 10px;
                    transform: translateY(-50%) translateX(100%);
                }
            }
            .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
                display: flex;
                align-items: center;
            }
            .el-icon-arrow-down {
                font-size: 12px;
            }
            }
           
        }
    }
    
}
</style>