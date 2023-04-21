<template>
  <body class="mb-0">
    <!-- <div class="container"> -->
    <header class="row py-2 mb-0 px-4">
      <a href="" class="col-3 d-flex justify-content-center align-items-center mb-0 py-0 mb-md-0 text-decoration-none fw-bolder tusena fs-4">
        <img class="ms-4" width="80" height="70" role="img" aria-label="Bootstrap"
          src="@/assets/img/logooscuro.png">TUSENA</a>

      <!-- <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                                    <li><a href="#" class="nav-link px-2 link-secondary">Home11</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">Features11</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
                                                </ul> -->
      <!-- BOTON INICIO SESION -->
      <div class="col-9 text-end py-0"> <!--TODO -->

        <button type="button" class="custom-btn btn-3" data-bs-toggle="modal" data-bs-target="#loginmodal"> <span>Iniciar
            Sesion</span></button>


        <!-- BOTON REGISTRO -->
        <button type="button" class=" custom-btn btn-3" data-bs-toggle="modal" data-bs-target="#exampleModalR">
          <span>Registrarse</span></button>

        <!-- MODALES -->
        <LoginRegisterComponent></LoginRegisterComponent>

      </div>
    </header>

    <div class="container col-xxl-8 px-4 py-0" mb-0>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">



          <img src="@/assets/img/ASTRONAUTA.png" class="d-block mx-lg-auto img-fluid mb-0" alt="TusenaTheme" width="700"
            height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-1 fw-bold lh-1 mb-3">Bienvenido a TUSENA</h1>
          <p class="lead">Si no conozco una cosa la investigaré
            -Louis Pasteur</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <!-- <i class="bi bi-google-play"></i> -->
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <a class="me-lg-3 mb-0 mb-lg-0" href="#"><img class="app-badge"
                  src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png" alt="..."
                  width="150" /></a>

            </div>

            <!-- <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> -->
          </div>

        </div>

      </div>
    </div>
    <!-- <div class="p-2 p-md-5 mb-0 rounded text-bg-success">
                                            <div class="col-md-12 px-0">
                                                <p class="lead">TUSENA es una herramienta hecha por y para la investigación, en donde podrás
                                                    encontrar
                                                    los productos resultado de proyectos de investigación del Centro de Teleinformática y Producción
                                                    Industrial - Sena Popayán</p>
                                            </div>
                                        </div> -->

    <!-- </div> -->
  </body>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import LoginRegisterComponent from '@/components/LoginRegisterComponent.vue';


export default {
  components: {
    FooterComponent,
    LoginRegisterComponent
  }
}
</script>


<style scoped>
button {
  margin: 20px;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 2px rgba(255, 255, 255, 0),
    0px 0px 10px 5px rgba(77, 255, 0, 0.364),
    4px 4px 5px 2px rgba(26, 255, 0, 0.231);
  outline: none;
}

/* 3 */
.btn-3 {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(1, 1, 1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;

}

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgb(0, 0, 0);
  transition: all 0.3s ease;
}

.btn-3:before {
  height: 0%;
  width: 2px;
}

.btn-3:after {
  width: 0%;
  height: 2px;
}

.btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:hover {
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  font-weight: bold;
}

.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  transition: all 0.9s ease;
}

.btn-3 span:before {
  width: 2px;
  height: 0%;
}

.btn-3 span:after {
  width: 0%;
  height: 2px;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}


header {
  background: rgb(12,194,16);
background: linear-gradient(90deg, rgba(12,194,16,0) 35%, rgba(0,189,42,1) 100%);
}

.tusena {
  color: #006205;
  font-family: 'Work Sans'
}

@media (max-width: 768px) {
  .tusena {
    color: #ffffff;
    font-family: Alkatra;
  }

  #iniciarSesion,
  #registro {
    color: #000000;
  }
}


@media (min-width: 550px) {

  #iniciarSesion {
    margin-left: 100px;
  }

}

@media (min-width: 200px) {

  #iniciarSesion {
    margin-left: 20px;
  }

}</style>