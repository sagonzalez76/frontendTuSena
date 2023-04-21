<template>
  <main>
  <nav>


    <Carousel-component></Carousel-component>
    <EncabezadoLogosComponent></EncabezadoLogosComponent>
   <EncabezadoMenuComponent></EncabezadoMenuComponent>
  </nav>

  <div>
    <QuienesSomosComponent></QuienesSomosComponent>
  </div>
  <div>
    <FooterComponent></FooterComponent>
  </div></main>
</template>
<script>


import CarouselComponent from "@/components/InnovatecComponents/CarouselComponent.vue";
import EncabezadoLogosComponent from "@/components/InnovatecComponents/EncabezadoLogosComponent.vue";
import EncabezadoMenuComponent from "@/components/InnovatecComponents/EncabezadoMenuComponent.vue"
import FooterComponent from "@/components/InnovatecComponents/FooterComponent.vue";
import QuienesSomosComponent from '@/components/InnovatecComponents/QuienesSomosComponent.vue';



export default {
  components: {
    CarouselComponent,
    EncabezadoLogosComponent,
    EncabezadoMenuComponent,
    QuienesSomosComponent,
    FooterComponent



  },
};
</script>

<style scoped>



</style>