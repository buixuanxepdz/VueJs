<template>
    <div class="container">
        <ProductForm/>
        <ProductList/>
    </div>
</template>

<script>
import ProductForm from './ProductForm.vue';
import ProductList from './ProductList.vue';
    export default {
    name: "HomeWork02",
    components: { ProductForm, ProductList },
    data() {
        return {
           
        }
    },
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