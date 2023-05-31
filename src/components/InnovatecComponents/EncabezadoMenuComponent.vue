<template>
    <nav class="navbar navbar-expand-lg bg-light fw-semibold lh-sm mb-0 pb-0">
        <div class="container-fluid font-weight-bold bg-menu mx-auto px-0">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse mx-0 border-bottom border-3 border-success " id="navbarSupportedContent">
                <div class="d-flex justify-content-start mx-0 px-3d-flex align-items-center" id="navegador">
                    <ul class="navbar-nav me-0 mb-lg-0 border-1 text-center w-100 bg-dark-sm">
                        <li class="nav-item dropdown mx-2">
                            <router-link to="/" class="nav-link dropdown text-dark" href="#" role="button"
                                aria-expanded="false">
                                Inicio
                            </router-link>

                        </li>


                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>


                        <li class="nav-item dropdown mx-2">
                            <!-- <router-link to="/quienes_somos" class="nav-link dropdown text-dark" href="#" role="button"
                                data-bs-auto-close="outside" data-hover="dropdown" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Quienes Somos
                            </router-link> -->
                            <router-link to="/quienes_somos" class="nav-link dropdown text-dark" href="#" role="button">
                                Quienes Somos
                            </router-link>
                            <!-- <ul class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-top-0">
                                <li><router-link to="/quienes_somos" class="dropdown-item" href="#">Misión</router-link>
                                </li>
                                <li><router-link to="/quienes_somos" class="dropdown-item" href="#">Visión</router-link>
                                </li>
                                <li><router-link to="/quienes_somos" class="dropdown-item" href="#">Principios</router-link>
                                </li>
                                <li><router-link to="/quienes_somos" class="dropdown-item" href="#">Valores</router-link>
                                </li>
                                <li class="dropend">

                                    <router-link to="/" class="dropdown-item d-flex justify-content-between" href="#"
                                        data-bs-toggle="dropdown" aria-expanded="false" id="objetivos">
                                        Objetivos <i class="bi bi-play-fill"></i>
                                    </router-link>

                                    <ul
                                        class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-start-0 mx-0">

                                        <li>

                                            <router-link to="#myCarousel6" class="dropdown-item"
                                                href="#myCarousel6">General</router-link>
                                        </li>

                                        <li>
                                            <router-link to="/investigadores" class="dropdown-item"
                                                href="#myCarousel6">Especifico</router-link>
                                        </li>

                                    </ul>

                                </li>
                            </ul> -->
                        </li>









                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>




                        <li class="nav-item dropdown mx-2">
                            <router-link to="/investigadores" class="nav-link dropdown text-dark" href="#" role="button"
                                aria-expanded="false">
                                Investigadores
                            </router-link>
                            <!-- <ul class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-top-0">
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        EREECA</router-link></li>
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        CREAD+</router-link></li>
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        SIITIS</router-link></li>
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        SENAUTRONIC</router-link></li>
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        INNOVATELCOS</router-link></li>
                                <li><router-link to="/investigadores" class="dropdown-item" href="#">Investigadores
                                        SINAFRED</router-link></li>

                            </ul> -->
                        </li>


                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>


                        <li class="nav-item dropdown mx-2">
                            <router-link to="/roles" class="nav-link dropdown text-dark" href="#" role="button"
                                aria-expanded="false">
                                Roles Sennova
                            </router-link>
                        </li>



                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>


                        <li class="nav-item dropdown mx-2">
                            <router-link to="" class="nav-link dropdown text-dark" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Semilleros
                            </router-link>
                            <ul class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-top-0">
                                <li><router-link to="/semilleros/ereeca" class="dropdown-item" href="#">
                                        EREECA</router-link></li>
                                <li><router-link to="/semilleros/cread+" class="dropdown-item" href="#">
                                        CREAD+</router-link></li>
                                <li><router-link to="/semilleros/siitis" class="dropdown-item" href="#">
                                        SIITIS</router-link></li>
                                <li><router-link to="/semilleros/senautronic" class="dropdown-item" href="#">
                                        SENAUTRONIC</router-link></li>
                                <li><router-link to="/semilleros/innovatelcos" class="dropdown-item" href="#">
                                        INNOVATELCOS</router-link></li>
                                <li><router-link to="/semilleros/sinafred" class="dropdown-item" href="#myCarousel6">
                                        SINAFRED</router-link>
                                </li>


                            </ul>
                        </li>



                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>



                  



                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>


                        <li class="nav-item dropdown mx-2">
                            <router-link to="/proyectos" class="nav-link dropdown text-dark" href="#" role="button"
                                aria-expanded="false">
                                Proyectos
                            </router-link>

                        </li>















                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>



                        <li class="nav-item dropdown mx-2">
                            <router-link to="/buscador" class="nav-link dropdown text-dark" href="#" role="button"
                                aria-expanded="false">
                                    Productos
                            </router-link>

                        </li>



                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>




                        <li class="nav-item dropdown mx-2">
                            <router-link to="" class="nav-link dropdown text-dark" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Infraestructura
                            </router-link>
                            <ul class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-top-0">
                                <li><router-link to="/infraestructura" class="dropdown-item" href="#">Ver
                                        Infraestructura</router-link></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        <div class="divider d-none d-lg-block">
                            <div class="vr"></div>
                        </div>


                        <li class="nav-item dropdown mx-2">
                            <router-link to="" class="nav-link dropdown text-dark" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Noticias
                            </router-link>
                            <ul class="dropdown-menu fade-in border-1 border-dark rounded-bottom-2 rounded-top-0">
                                <li><router-link to="/noticias" class="dropdown-item" href="#">Ver Noticias</router-link>
                                </li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
            </div>
        </div>
    </nav>
</template>

<script>

// export default {
//     data: {

//     },
//     mounted() {

//         const $dropdown = $(".dropdown");
//         const $dropdownToggle = $(".dropdown-toggle");
//         const $dropdownMenu = $(".dropdown-menu");
//         const showClass = "show";
//         $(window).on("load resize", function () {

//             if (this.matchMedia("(min-width: 768px)").matches) {
//                 $dropdown.hover(
//                     function () {
//                         const $this = $(this);
//                         $this.addClass(showClass);
//                         $this.find($dropdownToggle).attr("aria-expanded", "true");
//                         $this.find($dropdownMenu).addClass(showClass);
//                     },
//                     function () {
//                         const $this = $(this);
//                         $this.removeClass(showClass);
//                         $this.find($dropdownToggle).attr("aria-expanded", "false");
//                         $this.find($dropdownMenu).removeClass(showClass);
//                     }
//                 );
//             } else {
//                 $dropdown.off("mouseenter mouseleave");
//             }
//         });

//     },
//     beforeDestroy() {
//         // remove pickadate according to its API
//     }
// };










</script>

<style scoped>
/* .dropend:hover .dropdown-menu {
    display: block;
   
    align-items: end;
    margin-top: 0; /* remove the gap so it doesn't close */





.dropdown-item:hover {
    background-color: #000000;
    background-image: linear-gradient(315deg, #65e95b 0%, #7ee770 74%);
    box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5) 7px 7px 20px 0px rgb(0, 0, 0),
        4px 4px 5px 0px rgb(0, 0, 0);
    transition: all 0.2s ease;
    color: #050505;
    font-weight: bolder;

}



nav {
    width: 100%;
    color: black;
}

.bg-menu {
    background-color: #d0d0d0;
}

.navbar {
    padding-top: 0;
}

@media (min-width: 993px) {
    .navbar-collapse {
        display: flex;
        justify-content: space-around;

    }



    .navbar-nav {
        align-items: center;

    }

    ;

}

;

.border-bottom {
    margin-bottom: 0;
    padding-bottom: 0;
    border-color: rgb(0, 0, 0);
}


@media (max-width: 993px) {
    #navegador {
        background-color: rgb(255, 255, 255);
    }

    ;


}

.vr {
    height: 20px;
    vertical-align: middle;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
}


.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.4s;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>



