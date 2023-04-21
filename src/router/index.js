import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/innovatec/HomeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';



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
    path: '/productosmain',
    name: 'productosmain',
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
    path: '/admin/dashboard',
    name: 'admin/dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tusena/admin/DashboardAdmin.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
