import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/innovatec/HomeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import DashboardAdmin from '../views/tusena/admin/DashboardAdmin.vue'

import SemillerosView from "../views/innovatec/SemillerosView.vue"

import store from '../store'; // Importa tu archivo de Vuex store





const routes = [
  {
    path: '/:pathName(.*)',
    name: 'NotFound',
    component: PageNotFoundView
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/AboutView.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/ProyectosView.vue')
  },
  {
    path: '/roles',
    name: 'roles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/RolesView.vue')
  },
  {
    path: '/semilleros',
    name: 'semilleros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/SemillerosView.vue')
  },


  {
    path: '/semilleros',
    name: 'semilleros',
    component: SemillerosView,
    children: [

      {
        path: 'cread+',
        component:() => import('../components/InnovatecComponents/SemillerosCread+Component.vue')
      },

      {
        path: 'ereeca',
        component:() => import('../components/InnovatecComponents/SemillerosEreecaComponent.vue')
      },
      {
        path: 'siitis',
        component:() => import('../components/InnovatecComponents/SemillerosSiitisComponent.vue')
      },
      {
        path: 'senautronic',
        component:() => import('../components/InnovatecComponents/SemillerosSenautronicComponent.vue')
      },
      {
        path: 'innovatelcos',
        component:() => import('../components/InnovatecComponents/SemillerosInnovatelcosComponent.vue')
      },   {
        path: 'sinafred',
        component:() => import('../components/InnovatecComponents/SemillerosSinafredComponent.vue')
      },
      
      

    ]
  },
  {
    path: '/productos',
    name: 'productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/ProductosView.vue')
  },
  {
    path: '/quienes_somos',
    name: 'quienes_somos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/QuienesSomosView.vue')
  },

  {
    path: '/noticias',
    name: 'noticias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/NoticiasView.vue')
  },
  {
    path: '/infraestructura',
    name: 'infraestructura',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/InfraestructuraView.vue')
  },
  {
    path: '/equipo_sennova',
    name: 'equipo_sennova',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/EquipoSennovaView.vue')
  },
  {
    path: '/investigadores',
    name: 'investigadores',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/innovatec/InvestigadoresView.vue')
  },
  {
    path: '/buscador',
    name: 'buscador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tusena/user/LandingPage.vue')
  },
  {
    path: '/productos/1',
    name: 'productos/1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tusena/user/ProductDetail.vue')
  },
  {
    path: '/userprofile/1',
    name: 'userprofile/1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tusena/user/UserProfile.vue')
  },
  {
    path: '/userfavorite/1',
    name: 'userfavorite/1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tusena/user/UserFavorite.vue')
  },


  {
    path: '/admin/dashboard/',
    name: 'admin/dashboard/',
    component: DashboardAdmin, 
    meta: {
      requiresAuth: true // Esta ruta requiere autenticación
    },
 
    children: [

      {
        path: 'funcionarios',
        component:() => import('../components/TusenaComponents/AdminComponents/DashboardFuncionarioComponent.vue')
      },
      {
        path: 'semilleros',
        component:() => import('../components/TusenaComponents/AdminComponents/DashboardSemillerosComponent.vue')
      },
      {
        path: 'productos',
        component:() => import('../components/TusenaComponents/AdminComponents/DashboardProductosComponent.vue')
      },
      {
        path: 'proyectos',
        component:() => import('../components/TusenaComponents/AdminComponents/DashboardProyectosComponent.vue')
      },
      {
        path: 'programas',
        component:() => import('../components/TusenaComponents/AdminComponents/DashboardProgramasComponent.vue')
      }
      

    ]
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
},)





router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token');

  // Verifica si el usuario está autenticado antes de cada navegación
  if (to.meta.requiresAuth && !isLoggedIn) {
    // Si la ruta requiere autenticación y el usuario no está autenticado,
    // redirige a la página de inicio de sesión o a la ruta que desees
    next('/productos');
  } else {
    // Si el usuario está autenticado o la ruta no requiere autenticación,
    // permite la navegación
    next();
  }
});




export default router
