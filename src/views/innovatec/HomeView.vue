<template>
  <main>
    <div>
      <CarouselComponentVue></CarouselComponentVue>
      <encabezado-logos-component></encabezado-logos-component>
      <encabezado-menu-component></encabezado-menu-component>
     
      <InicioComponent></InicioComponent>

    </div>
    <FooterComponent></FooterComponent>
  </main>
</template>

<script>
// @ is an alias to /src

import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import InicioComponent from '@/components/InnovatecComponents/InicioComponent.vue';

export default {
  name: 'HomeView',
  components: {

    CarouselComponentVue,
    EncabezadoMenuComponent,
    EncabezadoLogosComponent,
    FooterComponent,
    InicioComponent
}
}
</script>

<style scoped>

main {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

</style>
