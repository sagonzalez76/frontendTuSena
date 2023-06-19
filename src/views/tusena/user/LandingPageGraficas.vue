<template>
    <HeaderComponent></HeaderComponent>
    <section class="bg-white mb-3">
        <div class="mx-2 d-flex justify-content-center">
            <div class="row d-flex justify-content-center w-75">
                <div class="col-lg-10">
                    <GraficasComponent></GraficasComponent>
                    <hr />
                </div>
            </div>
        </div>
    </section>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import HeaderComponent from '@/components/TusenaComponents/UserComponents/HeaderComponent.vue';
import SidebarComponent from '@/components/TusenaComponents/UserComponents/SidebarComponent.vue';
import FilterComponent from '@/components/TusenaComponents/UserComponents/FilterComponent.vue';
// import ProductComponent from '@/components/TusenaComponents/UserComponents/ProductComponent.vue';
import GraficasComponent from '@/components/TusenaComponents/UserComponents/GraficasComponent.vue';


import PaginationComponent from '@/components/TusenaComponents/UserComponents/PaginationComponent.vue';

export default {
    name: 'LandingPageGraficas',
    components: {
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        FilterComponent,
        // ProductComponent,
        PaginationComponent,
        GraficasComponent
    }
}
</script>



<style scoped>
.page-item:active {
    background-color: #00A500;

}

.barra {
    background-color: #00A500;

}

.icon-hover:hover {
    border-color: #00A500 !important;
    background-color: rgb(255, 255, 255) !important;
}

.icon-hover:hover i {
    color: #00A500 !important;
}

.product-button:hover {
    border-color: #00A500 !important;
    background-color: #00A500;
}

.page-item-active {

    background-color: #00A500;
}
</style>
