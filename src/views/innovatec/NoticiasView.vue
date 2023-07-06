<template>
    <div>
        <CarouselComponentVue></CarouselComponentVue>
        <encabezado-logos-component></encabezado-logos-component>
        <encabezado-menu-component></encabezado-menu-component>
        <router-view></router-view>

<!-- <NoticiasComponent></NoticiasComponent>       -->
 <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import NoticiasComponent from '@/components/InnovatecComponents/NoticiasComponent.vue';

export default {
    name: 'HomeView',
    components: {
    CarouselComponentVue,
    EncabezadoMenuComponent,
    EncabezadoLogosComponent,
    NoticiasComponent,
    FooterComponent
}
}


</script>