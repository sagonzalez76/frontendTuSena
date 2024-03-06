<template>
    <div class="col-lg-3 body">
        <!-- Toggle button -->
        <button class="btn btn-outline-secondary mb-3 w-100 d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span>Filtros</span>

        </button>

        <h5 class="text-start d-none d-lg-block"><i class="bi bi-funnel"></i> Filtrar</h5>
        <!-- {{ semillerosSeleccionados }} -->
        <!-- {{ $store.state.semillerosSeleccionados }}
        {{ $store.state.subtiposSeleccionados }} -->

        <!-- {{ $store.state.productos[0] }} -->

        <!-- {{ semillerosSeleccionadosJson }} -->
        <!-- Collapsible wrapper -->
        <div class="card d-lg-block mb-5" id="navbarSupportedContent">

            <div class="accordion m-0 p-0" id="accordionExample">

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Semillero </button>
                            <!-- {{ $store.state.semillerosSeleccionados }} -->
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div>
                                    <div class="form-check m-0" v-for="semillero in semilleros" :key="semillero">
                                        <input class="form-check-input my-0" type="checkbox"
                                            :value="semillero.semillero_nombre" id="TODOS"
                                            @change="actualizarSemillerosSeleccionados" />
                                        <label class="form-check-label" for="TODOS">{{ semillero.semillero_nombre }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Tipo de Producto
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div>

                                    <div class="form-check m-0">
                                        <input class="form-check-input my-0" type="checkbox"
                                            value="Actividades como Evaluador" id="flexCheckChecked1"
                                            @change="actualizarTiposSeleccionados" />
                                        <label class="form-check-label" for="flexCheckChecked1">Actividades como Evaluador</label>

                                    </div>

                                    <div class="form-check m-0">
                                        <input class="form-check-input border bordered-3" type="checkbox"
                                            value="Apropiación Social del Conocimiento y Divulgación Pública de la Ciencia" id="flexCheckChecked3"
                                            @change="actualizarTiposSeleccionados" />

                                        <label class="form-check-label" for="flexCheckChecked3">Apropiación Social del Conocimiento y Divulgación Pública de la Ciencia</label>
                                    </div>
                                    <!-- Checked checkbox -->
                                    <div class="form-check m-0">
                                        <input class="form-check-input my-0" type="checkbox"
                                            value="Desarrollo Tecnologico e Innovacion" id="flexCheckChecked4"
                                            @change="actualizarTiposSeleccionados" />

                                        <label class="form-check-label" for="flexCheckChecked4">Desarrollo Tecnológico e Innovación</label>
                                    </div>
                                    <!-- Default checkbox -->
                                    <div class="form-check m-0">
                                        <input class="form-check-input my-0" type="checkbox"
                                            value="Formación de Recurso Humano para la CTEI" id="flexCheckDefault"
                                            @change="actualizarTiposSeleccionados" />

                                        <label class="form-check-label" for="flexCheckDefault">Formación de Recurso Humano para la CTEI</label>
                                    </div>
                                    <!-- Default checkbox -->
                                    <div class="form-check my-0">
                                        <input value="Generación de Nuevo Conocimiento"
                                            class="form-check-input" type="checkbox" id="flexCheckDefault"
                                            @change="actualizarTiposSeleccionados" />
                                        <label class="form-check-label" for="flexCheckDefault">Generación de Nuevo Conocimiento</label>
                                    </div>
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                A&ntilde;o
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div>
                                    <div class="form-check my-0" v-for="ano in anosDisponibles" :key="ano">
                                        <input class="form-check-input" type="checkbox" :value="ano" id="flexCheckDefault"
                                            @change="actualizarAnosSeleccionados" />
                                        <label class="form-check-label" for="flexCheckDefault">{{ ano }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Proyecto </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div>
                                    <div class="form-check my-0" v-for="proyecto in proyectos" :key="proyecto">
                                        <input class="form-check-input" type="checkbox" :value="proyecto.proyecto_nombre"
                                            id="flexCheckDefault" @change="actualizarProyectosSeleccionados" />
                                        <label class="form-check-label" for="flexCheckDefault">{{
                                            proyecto.proyecto_nombre }}</label>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Programa
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div>
                                    <div class="form-check my-0" v-for="programa in programas" :key="programa">
                                        <input class="form-check-input" type="checkbox" :value="programa.programa_nombre"
                                            id="flexCheckDefault" @change="actualizarProgramasSeleccionados" />
                                        <label class="form-check-label" for="flexCheckDefault">{{
                                            programa.programa_nombre }}</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>


            <router-link v-if="!isEstadisticaRoute" to="estadistica" class="btn btn-primary w-100"><i class="bi bi-bar-chart-line-fill"></i> Conoce las graficas INNOVATEC </router-link>
            <router-link v-if="isEstadisticaRoute" to="buscador" class="btn btn-primary w-100"><i class="bi bi-search"></i> volver al Buscador </router-link>



    </div>
</template>

<script>


// import { mapState, mapActions } from 'vuex';
import { mapActions } from 'vuex'

import axios from 'axios';

export default {
    name: 'SidebarComponent',
    data() {
        return {

            anosDisponibles: [],
            proyectos: [],
            programas: [],
            semilleros: [],
            semillerosSeleccionados: [],
            semillerosSeleccionadosJson: "",
            autoresSeleccionados: ["defaultValue"]
        }
    },


    async created() {
        //para que me arroje los anos a hoy
        const currentYear = new Date().getFullYear();
        this.anosDisponibles = Array.from({ length: currentYear - 2012 + 1 }, (_, index) => currentYear - index);

        //para buscar los proyectos
        await this.axios.get('https://tusena-backend.onrender.com/proyecto')
            .then(response => {
                this.proyectos = response.data.nuevo_proyecto
            })
            .catch((e) => {
                console.log(e)
            });

        await this.axios.get('https://tusena-backend.onrender.com/semillero')
            .then(response => {
                this.semilleros = response.data.nuevo_semillero
            })
            .catch((e) => {
                console.log(e)
            });


        await this.axios.get('https://tusena-backend.onrender.com/programa')
            .then(response => {
                this.programas = response.data.nuevo_programa
            })
            .catch((e) => {
                console.log(e)
            });

    },



    computed: {
        obtenerAno() {
            if (this.ano) {
                const fechaObj = new Date(this.ano);
                return fechaObj.getFullYear();
            } else {
                return '';
            }
        },
        isEstadisticaRoute() {
      return this.$route.path === '/estadistica';
    },
    },
    methods: {

        ...mapActions({
            actualizarSemillerosSeleccionados: 'actualizarSemillerosSeleccionados',
            actualizarTiposSeleccionados: 'actualizarTiposSeleccionados',
            actualizarSubtiposSeleccionados: 'actualizarSubtiposSeleccionados',
            actualizarAnosSeleccionados: 'actualizarAnosSeleccionados',
            actualizarProyectosSeleccionados: 'actualizarProyectosSeleccionados',
            actualizarProgramasSeleccionados: 'actualizarProgramasSeleccionados'



        }),

        // PARA CONVERTIR A JSON


        // json() {

        //     const json = Object.assign({}, this.semillerosSeleccionados);

        //     this.semillerosSeleccionadosJson = json;

        // },








    },


}

</script>

<style scoped>
.accordion-button {
    font-size: 0.9rem;

}

.form-check-input {
    border-radius: 4em;
}

;

.form-check-input:active {
    background-color: rgb(0, 208, 14);


}
</style>