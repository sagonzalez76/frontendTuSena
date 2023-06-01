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


                <div class="w-100 text-end ">
                    <router-link to="/buscador" class="btn btn-success volver"> Volver al
                        Buscador</router-link>
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
            funcionario_iden: '',
            funcionario_contraseña: '',
            error: false,
            error_msg: store.errorMessage,
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
    height: 100%;
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