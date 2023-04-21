<template>
  <HeaderComponent></HeaderComponent>
  <UserProfileComponent></UserProfileComponent>
  <FooterComponent></FooterComponent>
</template>
  
<script>

import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import HeaderComponent from '@/components/TusenaComponents/UserComponents/HeaderComponent.vue';
import UserProfileComponent from '@/components/TusenaComponents/UserComponents/UserProfileComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    UserProfileComponent
  }
}
</script>



<style scoped></style>
