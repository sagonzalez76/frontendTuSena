<template>
    <DashboardComponent></DashboardComponent>
</template>

<script>
import DashboardComponent from '@/components/TusenaComponents/AdminComponents/DashboardComponent.vue'



export default {
    name: 'DashboardAdmin',
    components: {
        DashboardComponent

    }
}
</script>



<style scoped>

.custom-btn {

width: auto;
height: 40px;
color: #f8f8f8;
border-radius: 5px;
padding-inline: 10px;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.1s ease;
position: relative;
display: inline-block;
box-shadow: inset 2px 2px 2px 0px rgb(24, 183, 61),
  7px 7px 20px 0px rgba(230, 20, 20, 0.1),
  4px 4px 5px 0px rgba(171, 10, 10, 0.1);
outline: none;
}


</style>
