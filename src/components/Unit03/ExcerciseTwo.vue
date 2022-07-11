<template>
    <div class="container">
        <ProductForm @handleEmitForm="handleData" :dataEdit="product" />
        <ProductList :datas="products" @product="handleEdit"/>
    </div>
</template>

<script>
import ProductForm from './ProductForm.vue';
import ProductList from './ProductList.vue';
    export default {
    name: "ExerciseTwo",
    components: { ProductForm, ProductList },
    data() {
        return {
            products:[],
            product:{},
        }
    },
    methods: {
        handleData(data){
            let index = this.products.findIndex((c)=>c.id === data.id )
            if (index >= 0) {
                this.products.splice(index,1,data)
            } else {
                this.products.push(data)
            }
            
        },
        handleEdit(data){
            this.product = data
            // console.log(this.product);
        },
        // clearData(){
        //     this.product = {id:'SP'+ Math.floor(Math.random()*10000)}
        // }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>