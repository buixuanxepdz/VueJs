<template>
  <div class="home">
         <BaseLayout>
            <template #title>
                Tổng quan
            </template>
            <template #table>
                <el-calendar v-model="value">
                </el-calendar>  
            </template>
        </BaseLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '../components/Unit05/BaseLayout.vue'

export default {
  name: 'HomeView',
  components: {
    BaseLayout
  },
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
