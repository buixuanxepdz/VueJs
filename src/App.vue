<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <FormLogin/>
    <ExamPle01/>
    <ExamPle02/>
    <ExamPle03/> -->
    <!-- <HocnhomB1/> -->
    <!-- <ExamPle/> -->
    <!-- <HomeWork01/> -->
    <!-- <HomeWork02/> -->
    <!-- <HocNhomB2/> -->
    <!-- <FormLogin/> -->
    <TodoApp/>
    <ExcerciseTwo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FormLogin from './components/FormLogin.vue'
// import ExamPle01 from './components/Unit01/ExamPle01'
// import ExamPle02 from './components/Unit01/ExamPle02'
// import ExamPle03 from './components/Unit01/ExamPle03'
// import HocnhomB1 from './components/Unit01/HocnhomB1'
//import ExamPle from './components/Unit02/ExamPle'
// import HomeWork01 from './components/Unit02/HomeWork01'
// import HomeWork02 from './components/Unit02/HomeWork02'
// import HocNhomB2 from './components/Unit02/HocNhomB2'
// import FormLogin from './components/Unit03/Login'
import TodoApp from './components/Unit03/TodoApp' 
import ExcerciseTwo from './components/Unit03/ExcerciseTwo.vue'      
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // FormLogin,
    // ExamPle01,
    // ExamPle02,
    // ExamPle03,
    // HocnhomB1,
    // ExamPle,
    // HomeWork01,
    // HomeWork02,
    // HocNhomB2,
    // FormLogin,
    TodoApp,
    ExcerciseTwo
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
