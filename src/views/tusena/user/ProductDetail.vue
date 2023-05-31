<template>
    <HeaderComponent></HeaderComponent>
    <!-- content -->
    <ProductDetailComponent></ProductDetailComponent>

    <FooterComponent></FooterComponent>
</template>
  
<script>

import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import HeaderComponent from '@/components/TusenaComponents/UserComponents/HeaderComponent.vue';
import ProductDetailComponent from '@/components/TusenaComponents/UserComponents/ProductDetailComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
      ProductDetailComponent,
       
    }
}
</script>



<style scoped>

</style>
