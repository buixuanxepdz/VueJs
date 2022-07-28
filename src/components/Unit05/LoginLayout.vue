<template>
    <div class="container">
        <div class="form">
            <slot name="form"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LoginLayout',
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(to bottom right,blue, #39e5e5);
        display: flex;
        align-items: center;
        .form{
            width: 400px;
            margin: 0 auto;
            background-color: white;
            border-radius: 5px;
        }
    }
</style>