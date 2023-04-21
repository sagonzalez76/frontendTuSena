<template>
    
    <div>
        <CarouselComponentVue></CarouselComponentVue>
        <encabezado-logos-component></encabezado-logos-component>
        <encabezado-menu-component></encabezado-menu-component>

        <!-- <h1>Investigadores</h1> -->
        <section>
                <fieldset>
                  
                </fieldset>   
        </section>
        <RolesComponent></RolesComponent>

        <FooterComponent></FooterComponent>      
    </div>
</template>
 
<script>
/*// eslint-disable-next-line
// @ is an alias to /src
import inicioCom from '@/components/inicioCom.vue'
 
export default {
 name: 'HomeView',
 components: {
   inicioCom 
 }
}*/


import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';


import RolesComponent from '@/components/InnovatecComponents/RolesComponent.vue'


export default {
    name: 'HomeView',
    components: {
    CarouselComponentVue,
    EncabezadoMenuComponent,
    EncabezadoLogosComponent,
    FooterComponent,
    RolesComponent
}
}
</script>