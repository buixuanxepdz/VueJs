<template>
    <div>
        Learn VueX2 - Gia tri:{{ count }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name:'LearnVuex2',
        computed: {
            ...mapState([
                'count'
            ])
        }
    }
</script>

<style scoped>

</style>