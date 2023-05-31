<template>
    <body class="vh-100">


        <div class="">
            <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box">
                    <div class="col-lg-12 login-key">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div class="col-lg-12 login-title">
                        PANEL ADMINISTRADOR
                    </div>

                    <div class="col-lg-12 login-form">
                        <div class="col-lg-12 login-form">
                            <form @submit.prevent="checkAuthentication()" autocomplete="off">
                                <div class="form-group">
                                    <label class="form-control-label">NUMERO DE DOCUMENTO</label>
                                    <input type="number" class="form-control border-success"
                                        style="--bs-border-opacity: .5;" id="floatingInput" placeholder=""
                                        v-model="funcionario_iden" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label">CONTRASENA</label>
                                    <input type="password" class="form-control border-success"
                                        style="--bs-border-opacity: .5;" id="floatingInput" placeholder=""
                                        v-model="funcionario_contraseña" required>
                                </div>

                                <div class="col-lg-12 loginbttm">
                                    <div class="col-lg-6 login-btm login-text">
                                        <!-- Error Message -->
                                    </div>
                                    <div class="col-lg-6 login-btm login-button">



                                        <button v-show="!loading" type="submit" class="btn btn-outline-primary">Iniciar
                                            Sesion
                                            <!-- <router-link to="/admin/dashboard/" type="submit"
                                                            class="nav-link dropdown text-dark" role="button"
                                                            aria-expanded="false"> </router-link> -->

                                        </button>

                                        <button v-show="loading" class="btn btn-outline-primary" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm " role="status"
                                                aria-hidden="true"></span>
                                            Verificando...
                                        </button>


                                    </div>
                                    <div class="col-12 d-flex justify-content-center mt-3">


                                        <div class="alert alert-danger w-100 d-flex justify-content-center" role="alert"
                                            v-if="$store.state.errorAutenticated">
                                            {{ error_msg }}</div>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-2"></div>
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
body {
    background: #12b001;
    font-family: 'Roboto', sans-serif;
    max-height: 100vh;
    max-width: 100vw;
}

.login-box {
    margin-top: 75px;
    height: auto;
    background: #12b001;
    text-align: center;
}

.login-key {
    height: 100px;
    font-size: 80px;
    line-height: 100px;
    background: -webkit-linear-gradient(#27EF9F, #f1f3f4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login-title {
    margin-top: 15px;
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
    font-weight: bold;
    color: #ECF0F5;
}

.login-form {
    margin-top: 25px;
    text-align: left;
}

input[type=text] {
    background-color: #ffffff;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    margin-bottom: 20px;
    padding-left: 0px;
    color: #208712;
}

input[type=password] {
    background-color: #fdfdfd;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    padding-left: 0px;
    margin-bottom: 20px;
    color: #208712;
}

.form-group {
    margin-bottom: 40px;
    outline: 0px;
}

.form-control:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid #000000;
    outline: 0;
    background-color: #1A2226;
    color: #ECF0F5;
}

input:focus {
    outline: none;
    box-shadow: 0 0 0;
}

label {
    margin-bottom: 0px;
}

.form-control-label {
    font-size: 10px;
    color: #fdfcfc;
    font-weight: bold;
    letter-spacing: 1px;
}

.btn-outline-primary {
    background-color: #007706;
    border-color: #ffffff;
    color: #f9fafa;
    border-radius: 0px;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
    background-color: #000000;
    right: 0px;
}

.login-btm {
    float: left;
}

.login-button {
    padding-right: 0px;
    text-align: right;
    margin-bottom: 25px;
}

.login-text {
    text-align: left;
    padding-left: 0px;
    color: #A2A4A4;
}

.loginbttm {
    padding: 0px;
}
</style>