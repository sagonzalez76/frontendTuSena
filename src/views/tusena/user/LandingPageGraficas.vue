<template>
    <HeaderComponent></HeaderComponent>
    <section class="bg-white mb-3">
        <div class="container">
            <div class="row">
                <SidebarComponentGraficas></SidebarComponentGraficas>
                <div class="col-lg-9">
                    <FilterComponent></FilterComponent>
                    <GraficasComponent></GraficasComponent>
                    <!-- <hr /> -->
                </div>
                <PaginationComponent></PaginationComponent>
            </div>
        </div>
    </section>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import HeaderComponent from '@/components/TusenaComponents/UserComponents/HeaderComponent.vue';
import SidebarComponentGraficas from '@/components/TusenaComponents/UserComponents/SidebarComponentGraficas.vue';
import FilterComponent from '@/components/TusenaComponents/UserComponents/FilterComponent.vue';
// import ProductComponent from '@/components/TusenaComponents/UserComponents/ProductComponent.vue';
import GraficasComponent from '@/components/TusenaComponents/UserComponents/GraficasComponent.vue';


import PaginationComponent from '@/components/TusenaComponents/UserComponents/PaginationComponent.vue';

export default {
    name: 'LandingPageGraficas',
    components: {
        HeaderComponent,
        FooterComponent,
        SidebarComponentGraficas,
        FilterComponent,
        // ProductComponent,
        PaginationComponent,
        GraficasComponent
    }
}
</script>



<style scoped>

</style>
