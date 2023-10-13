<template>
    <Header></Header> 
    <!-- <Signup></Signup> -->
    <router-view></router-view>
    <!-- <Signin></Signin> -->
    <Footer></Footer> 
  
  
 
</template>
<script>
  import Header from './components/Header.vue';
  // import HomeView from './views/HomeView.vue';
  import Footer from './components/Footer.vue';
  // import Signup from './components/Signup.vue';
  // import Signin from './components/Signin.vue';

export default {
  components: 
  {
    Header,
    // HomeView,
    // Signup,
    // Signin,
    Footer,

  }

}
</script>
<style>
  
</style>