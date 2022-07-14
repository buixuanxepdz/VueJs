<template>
    <div>
        <BaseLayout02>
            <template #banner>
                <!-- <slot name="banner"> -->
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="(item,index) in carousels" :key="index">
                            <img :src="item.image" alt="">
                        </el-carousel-item>
                    </el-carousel>
                <!-- </slot> -->
            </template>
            <template #left>
                <img class="banner" :src="bannerLeft" alt="">
            </template>
            <template #right>
                <img class="banner" :src="bannerRight" alt="">
            </template>
            <template #content>
                <div class="content">
                    <p>Trang chủ / Văn hóa / Điều gì sẽ xảy ra khi euro ngang giá USD</p>
                    <img src="https://i1-kinhdoanh.vnecdn.net/2022/07/12/usdeuro-1657622290-9979-1657622297.jpg?w=180&h=108&q=100&dpr=1&fit=crop&s=F03UEyJuB1IPf7IP5IG1Aw" alt="">
                    <h4>
                        Euro yếu sẽ khiến hàng nhập khẩu vào châu Âu đắt đỏ hơn, kéo lạm phát lên cao, nhưng lại có lợi cho các hãng xuất khẩu khu vực này.
                        Đồng tiền chung châu Âu hôm 12/7 lần đầu tiên trong 20 năm có giá tương đương USD. Hiện tại, giá euro đã nhích lên. Mỗi euro đổi được 1,04 USD. 
                        Cũng như các đồng tiền khác, euro yếu đi sẽ gây ra nhiều tác động với nền kinh tế khu vực này.
                    </h4>
                </div>
            </template>
        </BaseLayout02>
            
    </div>
</template>

<script>
import BaseLayout02 from './BaseLayout02.vue'
    export default {
    name: "NewsDetailPage",
    data() {
        return {
            carousels: [
                { image: "https://img.timviecthietke.com/2021/06/kich-thuoc-banner-website-1.png" },
                { image: "https://vihamark.com/images/category/category_post-1624904858-banner_congnghe.jpg" },
                { image: "https://sorellabeautyspa.com/wp-content/uploads/2021/06/TIN-TUC-BANNER.jpg" },
            ],
            bannerLeft:'https://i.imgur.com/rvOe5sB.png',
            bannerRight:'https://i.imgur.com/8UH4j2q.png'
        };
    },
    components: { BaseLayout02 }
}
</script>

<style lang="scss" scoped>
    .el-carousel__item img {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        width: 100%;
        height: 100%;
    }
    .grid-content .banner{
        width:100%;
        height: 600px;
    }
    .content{
        width: 100%;
        text-align: left;
        img{
            width: 100%;
            height: 400px;
            border-radius: 10px;
        }
    }
</style>