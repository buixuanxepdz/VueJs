<template>
    <div>
        <a
        v-bind:href="url"
        class="nav-link"
        >
            <slot :data="{url,name,age}">Click Me</slot>
        </a>
    </div>
</template>

<script>
    export default {
        name:'NavigationLink',
        data() {
            return {
                url:'https://portal.zent.edu.vn/class-room/Vue.js-48h2022003/units?theory=526&unit=979',
                name:"BXX",
                age:21
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>