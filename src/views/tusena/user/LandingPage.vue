<template>
    <HeaderComponent></HeaderComponent>
    <section class="bg-white mb-3">
        <div class="container">
            <div class="row">
                <SidebarComponent></SidebarComponent>
                <div class="col-lg-9">
                    <FilterComponent></FilterComponent>
                    <ProductComponent></ProductComponent>
                    <ProductComponent></ProductComponent>
                    <ProductComponent></ProductComponent>
                    <ProductComponent></ProductComponent>

             

                    <hr />
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
import SidebarComponent from '@/components/TusenaComponents/UserComponents/SidebarComponent.vue';
import FilterComponent from '@/components/TusenaComponents/UserComponents/FilterComponent.vue';
import ProductComponent from '@/components/TusenaComponents/UserComponents/ProductComponent.vue';
import PaginationComponent from '@/components/TusenaComponents/UserComponents/PaginationComponent.vue';

export default {
    name: 'LandingPage',
    components: {
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        FilterComponent,
        ProductComponent,
        PaginationComponent
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
