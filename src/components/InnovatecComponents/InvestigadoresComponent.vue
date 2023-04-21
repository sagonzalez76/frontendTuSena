<template>
    <main class="container mt-4 pt-0 bg-carrusel">

        <h3 class="fw-bold text-center text-dark">Investigadores</h3>

        <h6 class="fw-bold text-center text-dark">Estos son los integrantes del grupo de investigación INNOVATEC CTPI:</h6>


        <div class="bg-carrusel mt-0 px-3 mb-1 pt-0 d-flex justify-content-center d-inline align-middle" v-for="semillero in semilleros" :key="semillero">
            
            <div class="">


                <div class="container text-center mb-4">
                    <!-- <h1>Investigadores</h1> -->

                </div>

                <div class="container marketing d-inline ">


                    <div class="row d-flex justify-content-evenly align-middle">


                        <div class="col-lg-4" v-for="investigador in semillero.investigadores" :key="investigador">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140"
                                src="https://mlfrr70d8qnk.i.optimole.com/WplFako-W-Nf0iW-/w:auto/h:auto/q:auto/https://vendasbradescosaude.com.br/wp-content/uploads/2020/09/3.png" role="svg" aria-label="Placeholder: 140x140"
                                preserveAspectRatio="xMidYMid slice" focusable="false"> <!-- TODO -->

                            <!-- <img :src="!null ? img : "@/assets/img/investigador.jpg"" class="bd-placeholder-img rounded-circle"> -->
                            <!-- src="@/assets/img/investigador.jpg" role="svg" aria-label="Placeholder: 140x140" -->




                            <title>Investigador</title>
                            <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
                                dy=".3em"></text>


                            <h2 class="fw-normal text-dark"> {{ investigador.name }} {{ investigador.lastname }}</h2>
                            <!-- <p> <i class="bi bi-star-fill"></i> Lider INNOVATEC CTPI</p> -->


                         

                            <button type="button"  class="custom-btn btn-14" data-bs-toggle="modal"
                                :data-bs-target="`#${investigador.id}`">Ver mas...</button>


                            <!-- MODAL INVESTIGADOR -->

                            <!-- MODAL INVESTIGADOR -->

                            <div class="modal fade" :id="`${investigador.id}`" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content p-0 m-0">
                                        <!-- <div class="modal-header m-0 pt-1 pe-1 border border-0">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div> -->
                                        <div class="modal-body m-0 p-0 border border-0">

                                            <section class="p-0 border border-0">
                                                <div class="">
                                                    <div class="row">
                                                        <!--Profile Card-->
                                                        <div class="col-md-4 m-0 w-100">
                                                            <div class="card profile-card-4 border border-0">
                                                                <div class="card-img-block">
                                                                    <div class="info-box">{{ investigador.name }} es
                                                                        Instructor e investigador #OrgulloSena, que con su
                                                                        saber contribuye al Conocimiento y Emprendimiento
                                                                        para todos los colombianos</div>
                                                                    <img class="img-fluid" src="https://th.bing.com/th/id/R.e08d687a618f1816305e84096321cbb2?rik=0EWR%2fmoT%2b2YFKg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-PUHQOiv_sik%2fUcCbuOBcOXI%2fAAAAAAAAEwc%2fKHskdyomUWI%2fs1600%2fDescargar%2bPack%2bBellos%2bFondos%2bde%2bpaisajes%2bHD%2b(172).jpg&ehk=VdyLgBLEvb7UK35XMzphlyK4nFExW4O9BEghRwVDVEE%3d&risl=&pid=ImgRaw&r=0"
                                                                        alt="imagensemillero">
                                                                </div>
                                                                <div class="card-body pt-5 pb-0">
                                                                    <img src="https://mlfrr70d8qnk.i.optimole.com/WplFako-W-Nf0iW-/w:auto/h:auto/q:auto/https://vendasbradescosaude.com.br/wp-content/uploads/2020/09/3.png"
                                                                        alt="profile-image" class="profile" />
                                                                    <h5 class="card-title text-center">{{ investigador.name
                                                                    }} {{ investigador.lastname }}</h5>

                                                                    <hr class="mt-1 mb-1" />
                                                                    <h4>Formacion</h4>
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item border border-0">{{
                                                                            investigador.formacion.pregrado }}</li>
                                                                        <li class="list-group-item border border-0">{{
                                                                            investigador.formacion.postgrado }}</li>
                                                                    </ul>

                                                                    <hr class="mt-1 mb-1" />

                                                                    <h4>Linea de Investigacion</h4>
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item border border-0">{{
                                                                            investigador.linea }}</li>
                                                                    </ul>

                                                                    <hr class="mt-1 mb-1" />


                                                                    <h4>Semillero de Investigacion</h4>
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item border border-0">{{
                                                                            semillero.name }}</li>

                                                                    </ul>

                                                                    <hr class="mt-1 mb-1" />

                                                                    <h4>Correo Electronico</h4>
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item border border-0">
                                                                            {{ investigador.email }}</li>

                                                                    </ul>

                                                                    <hr class="mt-1 mb-1" />

                                                                    <h4>CVLAC</h4>
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item border border-0">
                                                                            <a :href="`${investigador.cvlac}`"
                                                                                target="_blank" rel="noopener noreferrer">{{
                                                                                    investigador.name }} {{investigador.lastname }} CVLAC</a>


                                                                        </li>

                                                                    </ul>


                                                                    <!-- <p class="card-text text-center"></p> -->


                                                                    <!-- <div class="icon-block text-center"><a href="#"><i
                                                                                class="fa fa-facebook"></i></a><a href="#">
                                                                            <i class="fa fa-twitter"></i></a><a href="#"> <i
                                                                                class="fa fa-google-plus"></i></a></div> -->
                                                                </div>
                                                            </div>
                                                            <!--                                                             
                                                            <p class="mt-3 w-100 float-left text-center"><strong>Info block
                                                                    with hover</strong></p> -->
                                                        </div>



                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div class="modal-footer border border-0 pt-1">
                            
                                                <button type="button"  class="custom-btn btn-15" data-bs-dismiss="modal">Cerrar</button>



                                            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--FIN  MODAL INVESTIGADOR #1 -->
                        </div><!-- /.col-lg-4 -->

                    </div><!-- /.row -->

                </div><!-- /.container -->
            </div>
        </div>
    </main>
</template>


<script>



const semilleros = [
    {
        name: 'EREECA',
        img: {
            img1: 'https://placeimg.com/2000/500/arch',
            img2: 'https://placeimg.com/2000/500/animals',
            img3: 'https://placeimg.com/2000/500/nature',
        },

        investigadores: [{
            id: 1,
            name: 'Rodrigo Alberto',
            lastname: 'Montano Fuentes',
            formacion: {
                pregrado: 'Ingeniero Fisico',
                postgrado: 'Magíster en Física y Tecnología de los Láseres'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'EREECA',
            email: 'rmontano@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000411892',
            pic: '@/assets/img/investigador.jpg'

        },
        {
            id: 2,
            name: 'Olga Liliana',
            lastname: 'Sánchez Medina',
            formacion: {
                pregrado: 'Ingeniería Eléctrica',
                postgrado: 'Magister en Ingenieria'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'EREECA',
            email: 'osanchezm@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000347515',
            pic: '@/assets/img/investigador.jpg'
        }
        ]
    },





    {

        name: 'CREAD+',
        img: {
            img1: 'https://placeimg.com/1999/500/arch',
            img2: 'https://placeimg.com/1999/500/animals',
            img3: 'https://placeimg.com/1999/500/nature',
        },

        investigadores: [
            {
                id: 3,
                name: 'Rider Geovanny',
                lastname: 'Benavides Barcenas',
                formacion: {
                    pregrado: 'Ingeniero Sistemas',
                    postgrado: 'Magister en Gestion de la Informática Educativa'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'CREAD+',
                email: 'rbenavidesb@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001513764',
                pic: '@/assets/img/investigador.jpg'
            },
            {
                id: 4,
                name: 'Zulema Yidney',
                lastname: 'León Escobar',
                formacion: {
                    pregrado: 'Ingeniera Sistemas',
                    postgrado: 'Especialista en Administración de la Información y Bases de Datos'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'EREECA',
                email: 'zleon@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001761643',
                pic: '@/assets/img/investigador.jpg'
            },
            {
                id: 5,
                name: 'Pedro Javier',
                lastname: 'Lozada Villota',
                formacion: {
                    pregrado: 'Ingeniero Sistemas',
                    postgrado: 'Especialista en Diseño Gráfico Multimedial'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'CREAD+',
                email: 'plozada@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001685826',
                pic: '@/assets/img/investigador.jpg'
            },
            {
                id: 6,
                name: 'Henry Eduardo',
                lastname: 'Bastidas Paruma',
                formacion: {
                    pregrado: 'Ingeniero Sistemas',
                    postgrado: 'Especialista en Seguridad Informatica'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'CREAD+',
                email: 'hbastidasp@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001556099',
                pic: '@/assets/img/investigador.jpg'
            },
            {
                id: 7,
                name: 'Yimi Hilario',
                lastname: 'Pinzon Ortega',
                formacion: {
                    pregrado: 'Ingeniero Sistemas',
                    postgrado: 'Especialista en Seguridad Informatica'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'CREAD+',
                email: 'yhpinzono@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001481839',
                pic: '@/assets/img/investigador.jpg'
            },
            {
                id: 7,
                name: 'Yimi Hilario',
                lastname: 'Pinzon Ortega',
                formacion: {
                    pregrado: 'Ingeniero Sistemas',
                    postgrado: 'Especialista en Seguridad Informatica'
                },
                linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
                semillero: 'CREAD+',
                email: 'yhpinzono@sena.edu.co',
                cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001481839',
                pic: '@/assets/img/investigador.jpg'
            },
        ],

    },



    {
        name: 'SIITIS',
        img: {
            img1: 'https://placeimg.com/1998/500/arch',
            img2: 'https://placeimg.com/1998/500/animals',
            img3: 'https://placeimg.com/1998/500/nature',
        },

        investigadores: [{
            id: 8,
            name: 'Victoria Eugenia ',
            lastname: 'Pizo Perafán',
            formacion: {
                pregrado: 'Quimica',
                postgrado: 'Magister de Recursos Hídrico y Continentales '
            },
            linea: 'Innovación Tecnológica y Sostenibilidad para la Industria',
            semillero: 'SIITIS',
            email: 'vpizo@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000411892',
            pic: '@/assets/img/investigador.jpg'
        },
        {
            id: 9,
            name: 'Jonathan Orlando',
            lastname: 'Rivera Suescun',
            formacion: {
                pregrado: 'Ingeniero Civil',
                postgrado: ''
            },
            linea: 'Innovación Tecnológica y Sostenibilidad para la Industria',
            semillero: 'SIITIS',
            email: 'jorivera@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001844629',
            pic: '@/assets/img/investigador.jpg'
        },
        {
            id: 10,
            name: 'Ana Isabel',
            lastname: 'Bravo Ospina',
            formacion: {
                pregrado: 'Ingeniera Ambiental',
                postgrado: 'Especialización Gerencia de la Salud Ocupacional'
            },
            linea: 'Innovación Tecnológica y Sostenibilidad para la Industria',
            semillero: 'SIITIS',
            email: 'aibravoo@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001844627',
            pic: '@/assets/img/investigador.jpg'
        }
            ,]
    },
    {
        name: 'SENAUTRONIC',
        img: {
            img1: 'https://placeimg.com/2001/500/arch',
            img2: 'https://placeimg.com/2001/500/animals',
            img3: 'https://placeimg.com/2001/500/nature',
        },

        investigadores: [{
            id: 11,
            name: 'Eduar',
            lastname: 'Benavides Villamarín',
            formacion: {
                pregrado: 'Ingeniero Fisico',
                postgrado: 'Magister en Ciencias Mecánicas'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'SENAUTRONIC',
            email: 'ebenavidesv@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000042199',
            pic: '@/assets/img/investigador.jpg'
        },
        {
            id: 12,
            name: 'Jean Alejandro',
            lastname: 'Cubillos Rojas',
            formacion: {
                pregrado: 'Ingeniero en automatización Industrial',
                postgrado: 'Magister en Gestion de la Informática Educativa'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'SENAUTRONIC',
            email: 'jacubillosr@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000003893',
            pic: '@/assets/img/investigador.jpg'
        },]
    },
    {
        name: 'SINAFRED',
        img: {
            img1: 'https://placeimg.com/2002/500/arch',
            img2: 'https://placeimg.com/2002/500/animals',
            img3: 'https://placeimg.com/2002/500/nature',
        },

        investigadores: [{
            id: 13,
            name: 'Martin Alirio',
            lastname: 'Dorado Tobar',
            formacion: {
                pregrado: 'Licenciado en Educación Física y Salud',
                postgrado: ''
            },
            linea: 'Actividad Física, Recreación y Deportes',
            semillero: 'SINAFRED',
            email: 'mdoradot@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000411892',
            pic: '@/assets/img/investigador.jpg'
        },
        {
            id: 14,
            name: 'Gerardo Andrés',
            lastname: 'Certuche Guzmán',
            formacion: {
                pregrado: 'Licenciatura en Educación Básica con Énfasis en Educación Física Recreación y Deporte',
                postgrado: 'Magister en Gestion de la Informática Educativa'
            },
            linea: 'Actividad Física, Recreación y Deportes',
            semillero: 'SINAFRED',
            email: 'gacertuche@misena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000148915',
            pic: '@/assets/img/investigador.jpg'
        }, {
            id: 15,
            name: 'Diana Carolina',
            lastname: 'Cuarán Coral',
            formacion: {
                pregrado: 'Licenciatura en Educación Básica con Énfasis en Educación Física Recreación y Deporte',
                postgrado: 'Maestría en Educación Estudios del Cuerpo y Motricidad'
            },
            linea: 'Actividad Física, Recreación y Deportes',
            semillero: 'SINAFRED',
            email: 'dcuaran@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001237209',
            pic: '@/assets/img/investigador.jpg'
        },]
    },
    {
        name: 'INNOVATELCOS',
        img: {
            img1: 'https://placeimg.com/1995/500/arch',
            img2: 'https://placeimg.com/1995/500/animals',
            img3: 'https://placeimg.com/1995/500/nature',
        },

        investigadores: [{
            id: 16,
            name: 'Wilson Yecit',
            lastname: 'Ortiz Sánchez',
            formacion: {
                pregrado: 'Ingeniero en Electrónica y Telecomunicaciones',
                postgrado: 'Magister en Diseño y Gestión de Proyectos Tecnológicos'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'INNOVATELCOS',
            email: 'wortiz@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001554606',
            pic: '@/assets/img/investigador.jpg'
        },
        {
            id: 17,
            name: 'David Guillermo ',
            lastname: 'Rivera Fierro',
            formacion: {
                pregrado: 'Ingeniero en Electrónica y Telecomunicaciones',
                postgrado: 'Especialista en Redes y Servicios Telemáticos'
            },
            linea: 'Tecnologías de la Energía, Software y las Telecomunicaciones',
            semillero: 'INNOVATELCOS',
            email: 'dgriveraf@sena.edu.co',
            cvlac: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000011881',
            pic: '@/assets/img/investigador.jpg'
        },]
    },
]



export default {

    data() {
        return {
            semilleros
        }
    },

}


</script>



<style scoped>
.bg-carrusel{
    background-color: #e1fae1;
}

img {
    max-height: 50vh;
}

button {
  margin: 5px;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #000000;
  border-radius: 5px;
  padding: 10px 25px;

  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(183, 183, 183, 0.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 14 */
.btn-14 {
  background: rgb(105, 199, 116);
  border: none;
  z-index: 1;

}
.btn-14:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #000000 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5)
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.4s ease;
}
.btn-14:hover {
  color: #ffffff;
}
.btn-14:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-14:active {
  top: 2px;
}


.btn-15 {
  background: rgb(0, 0, 0);
  border: none;
  z-index: 1;  
  color: #ffffff;
  box-shadow:inset 2px 2px 2px 0px rgba(3, 0, 0, 0.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
}



.modal{
    transition: opacity 1.2s;
}



main {
    padding-top: 5rem;
    padding-bottom: 3rem;
    color: #5a5a5a;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
    margin-bottom: 4rem;
   
}

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
    bottom: 3rem;
    z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
    height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
}

/* rtl:begin:ignore */
.marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
}

/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
    margin: 5rem 0;
    /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
    letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {

    /* Bump up size of carousel content */
    .carousel-caption p {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        line-height: 1.4;
    }

    .featurette-heading {
        font-size: 50px;
    }
}

@media (min-width: 62em) {
    .featurette-heading {
        margin-top: 7rem;
    }
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}


/* @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700'); */

body {
    font-family: 'Open Sans', sans-serif;
}

*:hover {
    -webkit-transition: all 2s ease;
    transition: all .3s ease;
}

section {
    float: left;
    width: 100%;
    background: #fff;
    /* fallback for old browsers */
    padding: 30px 0;
}

h1 {
    width: 100%;
    color: #000000;
}

h4 {
  
    color: #000000;
}

.carrusel-titulo{
    color: #ffffff;
}





/*Profile card 4*/
.profile-card-4 .card-img-block {
    float: left;
    width: 100%;
    height: 150px;
    overflow: hidden;
}

.profile-card-4 .card-body {
    position: relative;
}

.profile-card-4 .profile {
    border-radius: 50%;
    position: absolute;
    top: -62px;
    left: 50%;
    width: 100px;
    border: 3px solid rgba(255, 255, 255, 1);
    margin-left: -50px;
}

.profile-card-4 .card-img-block {
    position: relative;
}

.profile-card-4 .card-img-block>.info-box {
    position: absolute;
    background: #249c2c;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 14px;
    -webkit-transition: 1s ease;
    transition: 1s ease;
    opacity: 0;
}

.profile-card-4 .card-img-block:hover>.info-box {
    opacity: 1;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
}

.profile-card-4 h5 {
    font-weight: 600;
    color: #249c2c;
}

.profile-card-4 .card-text {
    font-weight: 300;
    font-size: 15px;
}

.profile-card-4 .icon-block {
    float: left;
    width: 100%;
}

.profile-card-4 .icon-block a {
    text-decoration: none;
}

.profile-card-4 i {
    display: inline-block;
    font-size: 16px;
    color: #249c2c;
    text-align: center;
    border: 1px solid #249c2c;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin: 0 5px;
}

.profile-card-4 i:hover {
    background-color: #249c2c;
    color: #fff;
}

/*Profile Card 5*/
</style>



