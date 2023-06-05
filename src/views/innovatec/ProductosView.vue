<template>
    <body class="vh-100">

        <div class="container ">

            <div class="row align-items-center h-75 w-100">

                <div class="col-6 mx-auto">

                    <div class="text-center">

                        <img id="profile-img" class="rounded-circle profile-img-card"
                            src="https://irp-cdn.multiscreensite.com/4b8552c4/dms3rep/multi/desktop/SENA_Logo-2179x2114.png" />

                        <p id="profile-name" class="profile-name-card"></p>

                        <form class="form-signin " @submit.prevent="checkAuthentication()" autocomplete="off">
                            <div class="my-2">

                                <input type="number" name="identificacion" id="inputPassword"
                                    class="form-control form-group" placeholder="Numero de Identificacion"
                                    v-model="funcionario_iden" required autofocus>

                            </div>

                            <div class="my-2">
                                <input type="password" name="password" id="inputPassword" class="form-control form-group"
                                    placeholder="Contrasena" v-model="funcionario_contraseña" required autofocus>

                            </div>

                            <button v-show="!loading" class="btn btn-lg btn-primary btn-block btn-signin mt-3"
                                type="submit">Iniciar
                                Sesion</button>
                            <button v-show="loading" class="btn btn-lg btn-success btn-block btn-signin" type="button"><span
                                    class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                                Verificando</button>

                        </form>
                        <div class="col-12 d-flex justify-content-center mt-3">


                            <div class="alert alert-danger w-100 d-flex justify-content-center" role="alert"
                                v-if="$store.state.errorAutenticated">
                                Error al Iniciar Sesion
                            </div>


                        </div>



                    </div>

                </div>


                <div class="w-100 d-flex justify-content-around">
                    <router-link to="/buscador" class="btn btn-success volver"> Volver al
                        Buscador</router-link>


                    <!-- <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#recuperarModal">
                        Recuperar Contrase&ntilde;a </button> -->

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Recuperar Contrase&ntilde;a
                    </button>

                </div>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    ref="staticBackdrop">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content mb-4">
                            <div class="modal-header h5 text-white bg-primary justify-content-center">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Recuperar Contrase&ntilde;a</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-4">
                                <p class="py-2">
                                    Introduce tu correo electronico y te enviaremos un codigo con el cual podras cambiar tu
                                    contrase&ntilde;a:
                                </p>
                                <form class="form-floating mb-3 was-validated" autocomplete="off"
                                    @submit.prevent="enviarCorreo()">
                                    <input type="email" class="form-control" id="floating-input"
                                        v-model="funcionario_correo" required>
                                    <label for="floatingInput">Correo Electronico</label>
                                    <div class="w-100 text-center mt-4">

                                        <button type="submit" class="btn btn-primary mx-5" data-bs-target="#staticBackdrop2"
                                            data-bs-toggle="modal">Enviar Codigo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="modal fade" id="staticBackdrop2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1" ref="staticBackdrop2">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content mb-4">
                            <div class="modal-header h5 text-white bg-primary justify-content-center">
                                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Codigo de Verificacion</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-4">
                                <p class="py-2">
                                    Introduce el codigo que enviamos a tu correo electronico:
                                </p>
                                <form class="form-floating mb-3 " autocomplete="off"
                                    @submit.prevent="actualizarContrasena()">
                                    <div class="mb-2"> <label for="floatingInput">Codigo</label>
                                        <input type="text" v-model="funcionario_recuperar" class="form-control"
                                            id="floatingInput" required>
                                    </div>

                                    <div> <label for="floatingInput">Nueva Contrase&ntilde;a</label>
                                        <input type="password" v-model="funcionario_contrasena" class="form-control"
                                            id="floating-input" required>

                                    </div>


                                    <div class="w-100 text-center mt-4">

                                        <button type="submit" class="btn btn-primary mx-5">Cambiar
                                            Contrase&ntilde;a</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>











            </div>

        </div>





    </body>
</template>

<script>
import store from '../../store'; // Importa tu archivo de Vuex store

import LoginRegisterComponent from '@/components/LoginRegisterComponent.vue';

export default {
    components: {

        LoginRegisterComponent
    },


    data() {
        return {

            funcionario_correo: '',
            funcionario_recuperar: '',
            funcionario_iden: null,
            funcionario_contrasena: '',
            error: false,
            error_msg: store.errorMessage,
            loading: false
        }
    },

    methods: {

        async enviarCorreo() {

            let json = {
                "funcionario_correo": this.funcionario_correo,
            };
            await this.axios.post('http://localhost:3000/recuperar', json)
                .then(data => {
                    console.log(data);
                    $(this.$refs.staticBackdrop).modal('hide');
                })




        },

        async actualizarContrasena() {

            let json = {
                "funcionario_recuperar": this.funcionario_recuperar,
                "funcionario_contrasena": this.funcionario_contrasena
            };

            await this.axios.patch(`http://localhost:3000/funcionario/cambiar/${this.funcionario_correo}`, json)
                .then(data => {
                    console.log(data);

                    $(this.$refs.staticBackdrop2).modal('hide');

                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Yeyyy...',
                        text: 'Cambio de Contraseña realizado con Exito!!!',
                    })
                })
                .catch(error => {
                    console.log(error);
                    $(this.$refs.staticBackdrop2).modal('hide');

                    Swal.fire({
                        icon: 'error',
                        title: 'Opsss...',
                        text: 'Algo salio mal, intenta nuevamente!!',
                    })

                })

        },



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
                this.$router.push('/admin/dashboard/administradores');

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
body,
html {
    background-image: url('https://3.bp.blogspot.com/-EuWCKXCTapw/XOhzCO5AraI/AAAAAAAAPzI/3tw4VqQOFWMP-XBN-yDZUzYmMRKgr_P-gCK4BGAYYCw/s1600/IMG_0051.JPG');
    background-color: rgb(255, 255, 255);
    height: 100%; 
    background-size: cover;
}

#profile-img {
    height: 180px;
}

.container {
    height: 100% !important;
    background-color: rgba(0, 255, 255, 0);
}


@media(max-width:900px) {

    .btn {
        font-size: 15px;
        /* Tamaño de fuente más pequeño */
        padding: 8px;
        margin: 0;
        /* Padding más pequeño */
    }
}

@media(max-width:400px) {

    .btn {
        font-size: 12px;
        /* Tamaño de fuente más pequeño */
        padding: 6px;
        margin: 0;
        /* Padding más pequeño */
    }


}
</style>