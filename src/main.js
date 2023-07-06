import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue'


import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(HighchartsVue).use(VueAxios,axios).mount('#app')



