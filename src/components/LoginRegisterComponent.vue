<template>
    <div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        ref="loginModal">
        <div class="modal-dialog modal-md rounded rounded-5">
            <div class="modal-content row mx-2 me-2 bg-light">
                <div class="modal-header border border-0 d-flex justify-content-end">
                    <h4 class="text-center d-flex justify-content-center text-align-center">Inicio de Sesion</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-header p-0 m-0 border border-0">
                    <img src="https://th.bing.com/th/id/R.456a7cef2e6a4b0faf1c6a4a8fcd8d5b?rik=Yej8DtLUaUbVqw&pid=ImgRaw&r=0"
                        class="img-fluid  mx-auto d-block" alt="...">
                </div>
                <div class="modal-body py-0 mt-0 col-12">
                    <section id="login" class="pt-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form col" id="">
                                        <h1 class="pb-2 m-0 ">inicia sesion con tu numero de identificacion</h1>
                                        <form class="mb-2 col-12" @submit.prevent="checkAuthentication()">
                                            <!-- Email input -->
                                            <div class="form-floating mb-3">
                                                <input type="number" class="form-control border-success"
                                                    style="--bs-border-opacity: .5;" id="floatingInput"
                                                    placeholder="Identificacion" v-model="funcionario_iden" required>
                                                <label for="floatingInput">Numero de Identificacion</label>
                                            </div>




                                            <!-- Password input -->
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control border-success"
                                                    style="--bs-border-opacity: .5;" id="floatingInput"
                                                    placeholder="Contrase &ntilde;a" v-model="funcionario_contraseña"
                                                    required>
                                                <label for="floatingInput">Contrase&ntilde;a</label>
                                            </div>

                                            <!-- 2 column grid layout for inline styling -->
                                            <div class="row mb-0">


                                                <!-- <div class="col-12">
                                                                <a href="#!">Forgot password?</a>
                                                            </div> -->

                                                <div class="col-12 d-flex justify-content-center"> <button v-show="!loading"
                                                        type="submit"
                                                        class="custom-btn btn-iniciar btn-block mt-4 mb-0 px-2 w-100">Iniciar
                                                        Sesion
                                                        <!-- <router-link to="/admin/dashboard/" type="submit"
                                                            class="nav-link dropdown text-dark" role="button"
                                                            aria-expanded="false"> </router-link> -->

                                                    </button>
                                                    <button v-show="loading"
                                                        class="custom-btn btn-iniciar btn-block mt-4 mb-0 px-2 w-100"
                                                        type="button" disabled>
                                                        <span class="spinner-border spinner-border-sm " role="status"
                                                            aria-hidden="true"></span>
                                                        Verificando...
                                                    </button>

                                                </div>


                                                <div class="col-12 d-flex justify-content-center mt-3">


                                                    <div class="alert alert-danger w-100 d-flex justify-content-center"
                                                        role="alert" v-if="$store.state.errorAutenticated">
                                                        {{ error_msg }}</div>


                                                </div>


                                            </div>


                                            <hr>
                                            <!-- Submit button -->

                                            <!-- Register buttons -->
                                            <!-- <div class="text-center mt-0 mb-1">
                                                <p class="mb-1">No te has registrado aun? </p>

                                                <button type="button"
                                                    class="custom-btn btn-register bg-opacity-70 px-2 ms-0 mt-0 mb-3"
                                                    id="registro" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalR">Registrarme</button> -->




                                            <!-- 
                                                            <div class="modal fade" id="exampleModalR" tabindex="-1"
                                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog modal-xl">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h1 class="modal-title fs-5"
                                                                                id="exampleModalLabel">REGISTRO</h1>
                                                                            <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div> -->

                                            <!-- 
                                                <p class="mb-1">o inicia sesion con:</p>
                                                <button type="button" class="btn btn-outline-success btn-floating mx-1">
                                                    <i class="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-success btn-floating mx-1">
                                                    <i class="fab fa-google"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-success btn-floating mx-1">
                                                    <i class="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-success btn-floating mx-1">
                                                    <i class="fab fa-github"></i>
                                                </button>
                                            </div> -->






                                            <!-- <hr> -->
                                            <div class="row mb-3 mt-3">
                                                <div class="col-12 d-flex justify-content-end">
                                                    <button type="button" class="custom-btn btn-olvido px-2" id="forgot"
                                                        data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Olvido
                                                        su
                                                        Contrase&ntilde;a?</button>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                </div> <!-- /.col-xs-12 -->
                            </div> <!-- /.row -->
                        </div> <!-- /.container -->
                    </section>

                    <!-- <div class="modal fade forget-modal" tabindex="-1" role="dialog"
                                    aria-labelledby="myForgetModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">
                                                    <span aria-hidden="true">×</span>
                                                    <span class="sr-only">Cerrar</span>
                                                </button>
                                                <h4 class="modal-title">Recuperar Contrasena</h4>
                                            </div>
                                            <div class="modal-body">
                                                <p>Type your email account</p>
                                                <input type="email" name="recovery-email" id="recovery-email"
                                                    class="form-control" autocomplete="off">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default"
                                                    data-dismiss="modal">Cancelar</button>
                                                <button type="button" class="btn btn-custom">Recuperar</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>  -->

                    <!-- <footer id="footer">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-12"> -->
                    <!-- <p>Page © - 2014</p>
                                                        <p>Powered by <strong><a href="http://www.facebook.com/tavo.qiqe.lucero"
                                                                    target="_blank">TavoQiqe</a></strong></p> -->
                    <!-- </div>
                                        </div>
                                    </div>
                                </footer> -->
                </div>

            </div>
        </div>
    </div>





    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Recuperar Contrasena</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="modal-body">
                    <p class="d-flex justify-content-start">Introduce tu correo electronico:</p>
                    <input type="email" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off">
                    <button type="button" class="btn btn-default mt-3" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-custom mt-3">Recuperar</button>
                </div>


                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#loginmodal" data-bs-toggle="modal">Volver
                        al inicio de sesion</button>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="exampleModalR" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content bg-light">
                <div class="modal-header d-flex justify-content-end">

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-header p-0 m-0">
                    <img src="https://placeimg.com/600/200/animals" class="img-fluid  mx-auto d-block" alt="...">

                </div>
                <div class="modal-body">
                    <form>
                        <!-- 2 column grid layout with text inputs for the first and last names -->
                        <div class="row mb-2">
                            <div class="col">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-success" style="--bs-border-opacity: .5;"
                                        id="floatingInput" placeholder="Nombre">
                                    <label for="floatingInput">Nombre</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-success" style="--bs-border-opacity: .5;"
                                        id="floatingInput" placeholder="Apellido">
                                    <label for="floatingInput" class="">Apellido</label>
                                </div>
                            </div>
                        </div>

                        <!-- Email input -->
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control border-success" style="--bs-border-opacity: .5;"
                                id="floatingInput" placeholder="Correo Electronico">
                            <label for="floatingInput">Correo Electronico</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="number" class="form-control border-success" style="--bs-border-opacity: .5;"
                                id="floatingInput" placeholder="Numero de Identificacion">
                            <label for="floatingInput">Numero de Identificacion</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control border-success" style="--bs-border-opacity: .5;"
                                id="floatingInput" placeholder="Contrasena">
                            <label for="floatingInput">Contrase&ntilde;a</label>
                        </div>

                        <!-- <div class="form-check d-flex justify-content-center mb-1">
                           <div class="col-12">
                              
                                <div class="form-check d-flex justify-content-start">
                                    <input class="form-check-input me-1 bg-success" type="checkbox" value=""
                                        id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31">
                                        Recordarme </label>
                                </div>
                            </div> 
                        </div> -->
                        <!-- <div class="row">
                            <div class="col-12"> <button type="submit"
                                    class="btn btn-success btn-block mb-4 d-flex justify-content-center">Registrarse</button>
                            </div>
                        </div> -->

                        <div class="row ">
                            <div class="col d-flex justify-content-center"> <button type="submit"
                                    class="custom-btn btn-iniciar btn-block mb-3 mt-0 px-2 w-100">Registrarme</button></div>
                        </div>

                        <!-- Submit button -->


                        <!-- Register buttons -->
                        <div class="text-center">
                            <p>o registrate con:</p>
                            <button type="button" class="btn btn-success btn-floating mx-1">
                                <i class="bi bi-facebook"></i>
                            </button>

                            <button type="button" class="btn btn-success btn-floating mx-1">
                                <i class="bi bi-google"></i>
                            </button>

                            <button type="button" class="btn btn-success btn-floating mx-1">
                                <i class="bi bi-twitter"></i>
                            </button>
                            <!--                                   
                                                                      <button type="button" class="btn btn-secondary btn-floating mx-1">
                                                                        <i class="fab fa-github"></i>
                                                                      </button> -->
                        </div>
                    </form>
                </div>
                <!-- <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                            </div> -->
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';



import { mapState, mapActions } from 'vuex';



import store from '../store'; // Importa tu archivo de Vuex store



export default {
    name: 'LoginRegisterComponent',


    computed: {

        ...mapState({

            productos: 'productos',
        }),
    },


    data() {
        return {
            funcionario_iden: '',
            funcionario_contraseña: '',
            error: false,
            error_msg: "Numero de Identificacion y/o Contrasena Incorrectos",
            loading: false
        }
    },

    methods: {

        checkAuthentication() {
            this.loading = true

            this.$store.dispatch('checkAuthentication', {
                identificacion: this.funcionario_iden,
                contrasena: this.funcionario_contraseña
            });

            setTimeout(this.navigateToPage, 1000);
            setTimeout(this.loadingSpinner, 1000);

        },

        navigateToPage() {

            if (store.state.token) {
                $(this.$refs.loginModal).modal('hide');
                this.$router.push('/admin/dashboard/funcionarios');

                console.log("Funciona");
            }
            // Realiza la navegación a la página deseada usando $router de Vue Router
        },

        loadingSpinner() {
            this.loading = false
        },

    },












}
</script>



<style scoped>
.custom-btn {

    width: auto;
    height: 40px;
    color: #000000;
    border-radius: 5px;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.1s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-register {
    background: rgb(3, 187, 25);
    border: 1px;
    z-index: 1;

}

.btn-iniciar {
    background: rgb(3, 187, 25);
    border: 1px;
    z-index: 1;

}

.btn-olvido {
    background: rgb(57, 186, 255);
    border: 10px;
    z-index: 1;

}


.modal {
    transition: opacity .8s;
}



#form {
    display: block;
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

}

/*    --------------------------------------------------
	:: Login Section
	-------------------------------------------------- */
#login {
    padding-top: 50px
}

#login .form-wrap {
    width: 20%;
    margin: 0 auto;
}

#login h1 {
    color: #088f1a;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    padding-bottom: 20px;
}

#login .form-group {
    margin-bottom: 25px;
}

#login .checkbox {
    margin-bottom: 20px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

#login .checkbox.show:before {
    content: '\e013';
    color: #1fa67b;
    font-size: 17px;
    margin: 1px 0 0 3px;
    position: absolute;
    pointer-events: none;
    font-family: 'Glyphicons Halflings';
}

#login .checkbox .character-checkbox {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #ccc;
    vertical-align: middle;
    display: inline-block;
}

#login .checkbox .label {
    color: #6d6d6d;
    font-size: 13px;
    font-weight: normal;
}

#login .btn.btn-custom {
    font-size: 14px;
    margin-bottom: 20px;
}

#login .forget {
    font-size: 13px;
    text-align: center;
    display: block;
}

/*    --------------------------------------------------
	:: Inputs & Buttons
	-------------------------------------------------- */
.form-control {
    color: #212121;
}

.btn-custom {
    color: #fff;
    background-color: #1fa67b;
}

.btn-custom:hover,
.btn-custom:focus {
    color: #fff;
}

/*    --------------------------------------------------
    :: Footer
	-------------------------------------------------- */
#footer {
    color: #6d6d6d;
    font-size: 12px;
    text-align: center;
}

#footer p {
    margin-bottom: 0;
}

#footer a {
    color: inherit;
}
</style>