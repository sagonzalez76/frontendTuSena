<template>
  <body class="">
    <header class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow ">
      <router-link to="/buscador"
        class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 border border-success text-light fw-bold">TuSena</router-link>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <input class="form-control form-control bg-light text-dark w-100 rounded-0 border-0 " type="text"
        placeholder="Buscar" aria-label="Search">
      <div class="navbar-nav">
        <div class="nav-item text-nowrap mx-4 my-2">
          <router-link to="/buscador" class="logout-button nav-link px-3 bg-light fw-bold border border-danger border-2 rounded-4 text-danger fs-6 rounded-semicircle" type="button"
            @click="logout()" href="#"><i class="bi bi-box-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
          <div class="position-sticky pt-3 sidebar-sticky bg-nav">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/admin/dashboard/administradores" class="nav-link" aria-pressed="true"
                  aria-current="page" href="#">

                  <i class="bi bi-person-gear"></i> Administradores

                </router-link>
              </li>


              <li class="nav-item">
                <router-link to="/admin/dashboard/investigadores" class="nav-link" aria-pressed="true" aria-current="page"
                  href="#">

                  <i class="bi bi-person"></i> Investigadores

                </router-link>
              </li>


              <li class="nav-item">
                <router-link to="/admin/dashboard/semilleros" class="nav-link" aria-pressed="true" href="#">
                  <i class="bi bi-flower2"></i> Semilleros


                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/admin/dashboard/proyectos" class="nav-link" aria-pressed="true" href="#">
                  <i class="bi bi-folder-check"></i> Proyectos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/dashboard/programas" type="button" class="nav-link" aria-pressed="true" href="#">
                  <i class="bi bi-inboxes-fill"></i> Programas
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/admin/dashboard/productos" class="nav-link" aria-pressed="true" href="#">

                  <i class="bi bi-file-bar-graph"></i> Productos


                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <router-view>


        </router-view>
      </div>
    </div>



  </body>
</template>




<script>
import DashboardFuncionarioComponent from './DashboardAdministradoresComponent.vue'

import { mapState, mapActions } from 'vuex';


export default {



  components: {
    DashboardFuncionarioComponent
  },



  methods: {

    // ...mapActions({
    //   buscarProductos: 'buscarProductos',

    // }),



    logout() {
      // Elimina el token del localStorage al cerrar sesión
      localStorage.removeItem('token');

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Sesion Cerrada',

      })





    }

  },


}
</script>




<style scoped>
.bg-nav {


  background-color: #cbcbcb;
}

.router-link-active {
  background-color: #45b548;
  color: #f1f1f1 !important;
  font-size: larger;
  transition: font-size 0.4s ease;
  transform: scale(1);
  /* Duración y función de transición suave */

  /* Color de fondo deseado */
}

/* .nav-link:active {
  background-color: #21b300;

} */



body {
  font-size: 0.7rem !important;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100;
  /* Behind the navbar */
  padding: 48px 0 0;
  /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 650;
  color: #000000;
  
}

.logout-button:hover{
background-color: rgb(217, 13, 13) !important;
color: white !important;

}


.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  font-size: larger;
  background-color: #21b300;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: #21b300;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
  color: #000000;
}


.form-control::placeholder {
  color: rgb(0, 0, 0) !important;
  opacity: 1;
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.form-control-dark {
  color: #ffffff;
  background-color: rgb(223, 12, 12);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

.bg-danger {
  background-color: #404040 !important;
}
</style>