<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link>
    </nav> -->
    <router-view/>
    <!-- <UploadFile/> -->
    <!-- <LoginLayout/> -->
    <!-- <HomeWork01/>
    <HomeWork02/>
    <HocNhomBuoi7/> -->
  </div>
</template>
<script>
// import UploadFile from './components/Unit09/UploadFile.vue';
// import HomeWork01 from './components/Unit07/HomeWork01.vue';
// import HomeWork02 from './components/Unit07/HomeWork02.vue';
// import HocNhomBuoi7 from './components/Unit07/HocnhomBuoi7.vue';
// import LoginLayout from "./components/Unit05/LoginLayout.vue";
export default {
  components:{
    // UploadFile
}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
