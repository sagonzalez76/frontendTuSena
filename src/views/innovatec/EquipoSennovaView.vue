<template>
    <div>

        <CarouselComponentVue></CarouselComponentVue>
        <encabezado-logos-component></encabezado-logos-component>
        <encabezado-menu-component></encabezado-menu-component>
        <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <h1>EQUIPO SENNOVA</h1>

        <FooterComponent></FooterComponent>
    </div>
</template>
  
<script>
// @ is an alias to /src
import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';


export default {
    name: 'HomeView',
    components: {
    CarouselComponentVue,
    EncabezadoMenuComponent,
    EncabezadoLogosComponent,
    FooterComponent
}
}
</script>