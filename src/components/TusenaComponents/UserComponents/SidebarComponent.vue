<template>
    <div class="col-lg-3">
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
        <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">

            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Semillero
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                        <div class="accordion-body">


                            <!-- <ul class="nav flex-column">
                                <li><a href="#" class="text-dark">CREAD+</a></li>
                                <li><a href="#" class="text-dark">EREECA</a></li>
                                <li><a href="#" class="text-dark">INNOVATELCOS</a></li>
                                <li><a href="#" class="text-dark">SENAUTRONIC</a></li>
                                <li><a href="#" class="text-dark">SIITIS</a></li>
                                <li><a href="#" class="text-dark">SINAFRED</a></li>
                            </ul> -->
                            <div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Pedro Javier Lozada" id="CREAD+"
                                        @change="actualizarSemillerosSeleccionados" />


                                    <label class="form-check-label" for="CREAD+">CREAD+ </label>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Sory" id="EREECA"
                                        v-model="autoresSeleccionados" checked @change="filtrarProductos" />
                                    <label class="form-check-label" for="flexCheckChecked2">EREECA</label>

                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="INNOVATELCOS" id="INNOVATELCOS"
                                        v-model="semillerosSeleccionados" checked @change="filtrarProductos" />
                                    <label class="form-check-label" for="flexCheckChecked3">INNOVATELCOS</label>
                                    <span class="badge badge-secondary float-end">35</span>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="SENAUTRONIC" id="SENAUTRONIC"
                                        v-model="semillerosSeleccionados" checked />
                                    <label class="form-check-label" for="flexCheckChecked4">SENAUTRONIC</label>
                                    <span class="badge badge-secondary float-end">89</span>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="SIITIS" id="SIITIS"
                                        v-model="semillerosSeleccionados" checked />
                                    <label class="form-check-label" for="flexCheckDefault">SIITIS</label>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="SINAFRED" id="SINAFRED"
                                        v-model="semillerosSeleccionados" checked />
                                    <label class="form-check-label" for="flexCheckDefault">SINAFRED</label>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>




                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Tipo de Producto
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                        aria-labelledby="headingTwo">
                        <div class="accordion-body">
                            <div>

                                <!-- Checked checkbox -->
                                <div class="form-check align-middle">
                                    <input class="form-check-input border bordered-3" type="checkbox" id="flexCheckChecked3"
                                        value="Actividades como Evaluador" @change="actualizarTiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked3">Actividades como
                                        Evaluador</label>

                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input border bordered-3" type="checkbox" id="flexCheckChecked3"
                                        value="Apropiación Social del Conocimiento y Divulgación Pública de la Ciencia"
                                        @change="actualizarTiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked3">Apropiación Social del
                                        Conocimiento y Divulgación Pública de la Ciencia</label>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked4"
                                        value="Desarrollo Tecnológico e Innovación"
                                        @change="actualizarTiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked4">Desarrollo Tecnológico e
                                        Innovación</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked4"
                                        value="Formación de Recurso Humano para la CTEI"
                                        @change="actualizarTiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked4">Formación de Recurso Humano para
                                        la CTEI</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked4"
                                        value="Generación de Nuevo Conocimiento" @change="actualizarTiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked4">Generación de Nuevo
                                        Conocimiento</label>
                                </div>
                                <!-- Default checkbox -->

                            </div>
                        </div>
                    </div>
                </div>




                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseThree">
                            Subtipo de Producto
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                        aria-labelledby="headingThree">
                        <div class="accordion-body">
                            <div>



                                <!-- Checked checkbox -->
                                <div class="form-check align-middle">
                                    <input class="form-check-input" type="checkbox"
                                        value="Artículos de Investigación A1, A2, B y C" id="flexCheckChecked1"
                                        @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckChecked1">Artículos de Investigación A1,
                                        A2, B y C</label>

                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input border bordered-3" type="checkbox"
                                        value="Consultorías Científico-Tecnológicas" id="flexCheckChecked3"
                                        @change="actualizarSubtiposSeleccionados" />

                                    <label class="form-check-label" for="flexCheckChecked3">Consultorías
                                        Científico-Tecnológicas</label>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Direcciones de Trabajo de Pregrado" id="flexCheckChecked4"
                                        @change="actualizarSubtiposSeleccionados" />

                                    <label class="form-check-label" for="flexCheckChecked4">Direcciones de Trabajo de
                                        Pregrado</label>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Divulgación Pública de la CTeI"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />

                                    <label class="form-check-label" for="flexCheckDefault">Divulgación Pública de la
                                        CTeI</label>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input value="Estrategias Pedagógicas para el Fomento a la CTI" class="form-check-input"
                                        type="checkbox" id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Estrategias Pedagógicas para el
                                        Fomento a la CTI</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Eventos Científicos con Componente de Apropiación" id="flexCheckDefault"
                                        @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Eventos Científicos con
                                        Componente de Apropiación</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Informes Finales de Investigación" id="flexCheckDefault"
                                        @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Informes Finales de
                                        Investigación</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Informes Técnicos"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Informes Técnicos</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Normas Técnicas"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Normas Técnicas</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Otro Programa Académico"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Otro Programa Académico</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Participación en Comités de Evaluación" id="flexCheckDefault"
                                        @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Participación en Comités de
                                        Evaluación</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Plantas Piloto"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Plantas Piloto</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Procesos de Apropiación Social del Conocimiento para el Fortalecimiento o Solución de Asuntos de Interés Social"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Procesos de Apropiación Social
                                        del Conocimiento para el Fortalecimiento o Solución de
                                        Asuntos
                                        de Interés Social</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Prototipos Industriales"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Prototipos Industriales</label>

                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Proyectos de Investigacion y Desarrollo" id="flexCheckDefault"
                                        @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Proyectos de Investigacion y
                                        Desarrollo</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="Proyectos de Investigación, Desarrollo e Innovación (ID+I)"
                                        id="flexCheckDefault" @change="actualizarSubtiposSeleccionados" />
                                    <label class="form-check-label" for="flexCheckDefault">Proyectos de
                                        Investigación, Desarrollo e Innovación (ID+I)</label>

                                </div>

                                {{ $store.state.subtiposSeleccionados }}


                            </div>
                        </div>
                    </div>
                </div>




                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseFive">
                            A&ntilde;o
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show"
                        aria-labelledby="headingFive">
                        <div class="accordion-body">
                            <div>
                                <!-- Checked checkbox -->

                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input border bordered-3" type="checkbox" value=""
                                        id="flexCheckChecked3" />
                                    <label class="form-check-label" for="flexCheckChecked3">2014</label>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                                    <label class="form-check-label" for="flexCheckChecked4">2015</label>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2016</label>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2017</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2018</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2019</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2020</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2021</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2022</label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">2023</label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- 
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                A&ntilde;o
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                            aria-labelledby="headingThree">
                            <div class="accordion-body">
                                <div class="range">
                                    <input type="range" class="form-range" id="customRange1" min=2012 max="2023" />
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <p class="mb-0">
                                            Desde
                                        </p>
                                        <div class="form-outline">
                                            <input type="number" id="typeNumber" class="form-control" min="2012"
                                                max="2022" />
                                            <label class="form-label" for="typeNumber"></label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">
                                            Hasta
                                        </p>
                                        <div class="form-outline">
                                            <input type="number" id="typeNumber" class="form-control" min="2012"
                                                max="2022" />
                                            <label class="form-label" for="typeNumber"></label>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-white w-100 border border-secondary">Aplicar</button>
                            </div>
                        </div>
                    </div> -->
                <!-- <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour">
                                Semillero
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show"
                            aria-labelledby="headingThree">
                            <div class="accordion-body">
                                <input type="checkbox" class="btn-check border bg justify-content-center" id="btn-check1"
                                    checked autocomplete="off" />
                                <label class="btn btn-success mb-1 px-1 mx-2" style="width: 60px;"
                                    for="btn-check1">Filtro</label>
                                <input type="checkbox" class="btn-check border justify-content-center" id="btn-check2"
                                    checked autocomplete="off" />
                                <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;"
                                    for="btn-check2">Filtro</label>
                                <input type="checkbox" class="btn-check border justify-content-center" id="btn-check3"
                                    checked autocomplete="off" />
                                <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;"
                                    for="btn-check3">Filtro</label>
                                <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4"
                                    checked autocomplete="off" />
                                <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;"
                                    for="btn-check4">Filtro</label>
                                <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4"
                                    checked autocomplete="off" />
                                <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;"
                                    for="btn-check4">Filtro</label>

                            </div>
                        </div>
                    </div> -->

                <!-- <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFive">
                                Calificacion
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show"
                            aria-labelledby="headingThree">
                            <div class="accordion-body">
                                 Default checkbox 
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        checked />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                            class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i>
                                        <i class="fa fa-star bs-warning"></i>
                                    </label> (5)
                                </div>
                               Default checkbox 
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        checked />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                            class="fa fa-star bs-warning"></i>
                                        <i class="fa fa-star bs-warning"></i>
                                        <i class="fas fa-star text-white"></i>
                                    </label> (4)
                                </div>
                                Default checkbox
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        checked />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                            class="fa fa-star bs-warning"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                    </label> (3)
                                </div>
                               Default checkbox
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        checked />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <i class="fa fa-star bs-warning"></i>
                                        <i class="fa fa-star bs-warning"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                    </label> (2)
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        checked />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <i class="fa fa-star bs-warning"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                        <i class="fas fa-star text-white"></i>
                                    </label> (1)
                                </div>
                            </div>
                        </div>
                    </div> -->

            </div>
        </div>
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
            semillerosSeleccionados: [],
            semillerosSeleccionadosJson: "",
            autoresSeleccionados: ["defaultValue"]
        }
    },

    methods: {

        ...mapActions({
            actualizarSemillerosSeleccionados: 'actualizarSemillerosSeleccionados',
            actualizarTiposSeleccionados: 'actualizarTiposSeleccionados',
            actualizarSubtiposSeleccionados: 'actualizarSubtiposSeleccionados'

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
.form-check-input {
    border-radius: 2em;
    /* background-color: rgb(0, 208, 14); */
}

;

.form-check-input:active {
    background-color: rgb(0, 208, 14);


}
</style>