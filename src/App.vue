<template>
  <div id="">
    <HeaderLayout />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
import HeaderLayout from './components/Header.vue';
// import HelloWorld from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderLayout
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
