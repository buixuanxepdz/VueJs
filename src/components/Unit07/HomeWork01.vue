<template>
    <div class="container">
        <ListProduct/>
        <CartProduct/>
    </div>
</template>

<script>
import ListProduct from './ListProduct.vue';
import CartProduct from './CartProduct.vue';
    export default {
    components: { ListProduct, CartProduct }
}
</script>

<style lang="scss" scoped>
 .container{
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
    }
</style>