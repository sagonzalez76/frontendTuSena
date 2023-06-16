<template>


  


  <!-- <CarouselComponent />
  <EncabezadoLogosComponent />
  <EncabezadoMenuComponent /> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
     <router-link to="/quienes_somos2"></router-link>
    
  </nav> -->

  <router-view />

<!-- 
  <button class="back-to-top">

    <a href="#">  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="back-to-top-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 11l5-5m0 0l5 5m-5-5v12"/>
  </svg></a>



</button> -->

</template>


<script>


// import CarouselComponent from '@/components/CarouselComponent.vue';
// import EncabezadoLogosComponent from '@/components/EncabezadoLogosComponent.vue';
// import EncabezadoMenuComponent from '@/components/EncabezadoMenuComponent.vue';

import 'material-icons/iconfont/material-icons.css'


export default {
  name: "App",
  components: {
    // CarouselComponent,
    // EncabezadoLogosComponent,
    // EncabezadoMenuComponent


  }
}
</script>











<style>


.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 100%;
  background: #39ca3e;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 100%;
  transition: opacity 0.5s;
}
.back-to-top-icon {
  width: 2rem;
  height: 2rem;
  color: #000000;
}

.hidden {
  opacity: 0%;
}

#app {
  font-family: 'Work Sans';
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

  /* color: #000000; */
  background-color: #39ca3e00;
  font-size: 0.75rem;
  /* margin: 0;
  padding: 0; */
}

/*
 nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>


