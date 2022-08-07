<template>
    <div>
        Learn VueX - Gia tri:{{ count }}
        <button @click="change()">Click Me</button>
        <br>
        <span v-for="todo in getTodoDone" :key="todo.id">
            {{ todo.name }}
        </span>
        <br>
        Co {{ getCountTodoDone }} cong viec duoc hoan thanh
        <br>
        {{ $store.getters.getIndexTodo(4) }}
        
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        name:'LearnVuex',
        computed: {
            ...mapState([
                'count',
            ]),
            ...mapGetters([
                'getTodoDone',
                'getCountTodoDone',
            ])
        },
        mounted(){
            console.log(this.$store.getters)
        },
        methods: {
            ...mapMutations([
                'incre'
            ]),
            change(){
                var data = {
                    name:'BXX',
                    number:5
                }
                this.incre(data)
            }
        },
    }
</script>

<style scoped>

</style>