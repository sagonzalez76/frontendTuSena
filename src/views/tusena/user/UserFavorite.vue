<template>
  <HeaderComponent></HeaderComponent>
  <UserFavoriteComponent></UserFavoriteComponent>
  <FooterComponent></FooterComponent>
</template>
  
<script>

import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import HeaderComponent from '@/components/TusenaComponents/UserComponents/HeaderComponent.vue';
import UserFavoriteComponent from '@/components/TusenaComponents/UserComponents/UserFavoriteComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    UserFavoriteComponent
  }
}
</script>



<style scoped></style>
