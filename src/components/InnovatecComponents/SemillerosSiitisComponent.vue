<template>
    <main class="container mt-4 pt-0 text-dark">

        <h1 class="text-center">SIITIS</h1>

        <div class="container table-responsive pt-4 px-2 mb-5">
            <table class="table table-bordered table-hover">

                <tbody>
                    <tr class="hover-header">
                        <th class="">Nombre del Semillero</th>
                        <td>SIITIS: Semillero de Investigación de Innovación Tecnológica de la Industria y Sostenibilidad

                        </td>

                    </tr>
                    <tr>
                        <th>Fecha de Creación</th>
                        <td>20/03/2015





                        </td>

                    </tr>
                    <tr>
                        <th>Líder del Semillero</th>
                        <td>Ana Isabel Bravo Ospina





                        </td>

                    </tr>
                    <tr>
                        <th>Correo de Contacto</th>
                        <td>aibravoo@sena.edu.co


                        </td>

                    </tr>
                    <tr>
                        <th>Grupo de Investigación al que Pertenece</th>
                        <td>INNOVATEC CTPI</td>
                    </tr>
                    <tr>
                        <th>Institución</th>
                        <td>Servicio Nacional de Aprendizaje - SENA</td>

                    </tr>
                    <tr>
                        <th>Centro de Formación</th>
                        <td>Centro de Teleinformática y Producción Industrial</td>

                    </tr>
                    <tr>
                        <th>Línea de Investigación</th>
                        <td>Tecnologías de la Energía, Software y las Telecomunicaciones</td>
                    </tr>
                    <tr>
                        <th>Ciudad y Departamento</th>
                        <td> Popayán - Cauca
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>


        <div class="container">

            <div class="container">
                <div class="bg-subtitulo">
                    <div class="align-items-center">
                        <h6 class="text-center pb-3 align-middle ">MISIÓN</h6>
                    </div>
                </div>                <p>El Semillero de investigación SIITIS trabaja de forma cooperativa y permanente, con instructores y
                    personal experto en proyectos de I+D+i, para impulsar la investigación formativa de los y las
                    aprendices, de tal forma que se pueda facilitar la interacción entre lo académico y lo práctico, a
                    través de la investigación interdisciplinaria focalizada en las tecnologías relacionadas con el
                    desarrollo tecnológico y la sostenibilidad.



                </p>
            </div>

            <br>

            <div class="container">

                <div class="bg-subtitulo">
                    <div class="align-items-center">
                        <h6 class="text-center pb-3 align-middle ">VISIÓN</h6>
                    </div>
                </div>                <p>Para el año 2025, el semillero de investigación SIITIS será un equipo de trabajo fortalecido, a partir de
                    la adquisición de competencias relacionadas con el proceso de I+D+I, orientadas a procesos de
                    investigación aplicada a la innovación y la sostenibilidad de la industria, basado en el trabajo
                    interdisciplinario de áreas como ambiental, construcción, mecánica, actividad física y transformación,
                    del Centro de formación, teniendo siempre como eje los objetivos de desarrollo sostenible (ODS).





                </p>


            </div>

            <br>


            <div class="">

                <div class="bg-subtitulo">
                    <div class="align-items-center">
                        <h6 class="text-center pb-3 align-middle ">OBJETIVOS</h6>
                    </div>
                </div>
                <p>
                <ul>

                    <li>Objetivo General:

                        <p>
                            Desarrollar competencias en investigación, en los instructores y aprendices de las áreas de
                            mecánica, ambiental, construcción y transformación, como fuente principal del proceso de
                            formación para el trabajo, forjando un carácter crítico, reflexivo y constructivo para la
                            aprehensión de la educación científica en actividades investigativas, que promuevan el uso del
                            método científico y las metodologías de investigación.




                        </p>

                    </li>


                    <li>Objetivos Específicos:

                        <ul>


                            <li>Fomentar una cultura de investigación e innovación en los aprendices asociados al semillero
                                SIITIS.


                            </li>
                            <li>Apoyar la formación de los aprendices en cultura científica, para el desarrollo de
                                competencias relacionadas con el proceso de investigación, innovación y desarrollo
                                tecnológico.


                            </li>
                            <li>Fortalecer los procesos de transferencia de conocimientos de los resultados de los proyectos
                                de investigación entre los aprendices del semillero de investigación.


                            </li>


                            <li>Promover la participación de los aprendices en proyectos de investigación y desarrollo tecnológico, para el desarrollo de sus competencias.



                            </li>

                        </ul>


                    </li>



                </ul>



                </p>

            </div>
            <br>
            <div class="bg-subtitulo">
                    <div class="align-items-center">
                        <h6 class="text-center pb-3 align-middle ">PLANES</h6>
                    </div>
                </div>

            <div class="container table-responsive pt-4 px-2 mb-5">
                <table class="table table-bordered table-hover">

                    <tbody>
                        <tr class="hover-header">
                            <th class="">Plan Estratégico

                            </th>
                            <td>CREAD+:Semillero de Investigación de Creativas y ADSI

                            </td>

                        </tr>
                        <tr>
                            <th>Plan Operativo

                            </th>
                            <td>20/04/2020

                            </td>

                        </tr>




                    </tbody>
                </table>
            </div>



        </div>






        <h2 class="text-center text-dark">Instructores</h2>

        <div class="bg-carrusel mt-0 px-3 mb-5 pt-0 d-flex justify-content-center d-inline align-middle"
            v-for="semillero in semilleros" :key="semillero">



            <div class="bg-carrusel ">






                <div class="container marketing d-inline ">


                    <div class="row d-flex justify-content-evenly align-middle">


                        <div class="col-lg-4" v-for="investigador in semillero.investigadores" :key="investigador">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140"
                                src="https://mlfrr70d8qnk.i.optimole.com/WplFako-W-Nf0iW-/w:auto/h:auto/q:auto/https://vendasbradescosaude.com.br/wp-content/uploads/2020/09/3.png"
                                role="svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice"
                                focusable="false"> <!-- TODO -->

                            <!-- <img :src="!null ? img : "@/assets/img/investigador.jpg"" class="bd-placeholder-img rounded-circle"> -->
                            <!-- src="@/assets/img/investigador.jpg" role="svg" aria-label="Placeholder: 140x140" -->




                            <title>Investigador</title>
                            <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
                                dy=".3em"></text>


                            <h2 class="fw-normal text-dark"> {{ investigador.name }} {{ investigador.lastname }}</h2>
                            <!-- <p> <i class="bi bi-star-fill"></i> Lider INNOVATEC CTPI</p> -->




                            <button type="button" class="custom-btn btn-14" data-bs-toggle="modal"
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
                                                                    <img class="img-fluid"
                                                                        src="https://th.bing.com/th/id/R.e08d687a618f1816305e84096321cbb2?rik=0EWR%2fmoT%2b2YFKg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-PUHQOiv_sik%2fUcCbuOBcOXI%2fAAAAAAAAEwc%2fKHskdyomUWI%2fs1600%2fDescargar%2bPack%2bBellos%2bFondos%2bde%2bpaisajes%2bHD%2b(172).jpg&ehk=VdyLgBLEvb7UK35XMzphlyK4nFExW4O9BEghRwVDVEE%3d&risl=&pid=ImgRaw&r=0"
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
                                                                                    investigador.name }} {{
        investigador.lastname }} CVLAC</a>


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

                                            <button type="button" class="custom-btn btn-15"
                                                data-bs-dismiss="modal">Cerrar</button>



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



        <h2 class="text-center">PROYECTOS </h2>



        <table width="100%" border="1" style="margin:auto" class="">	
						<tr class="text-center text-white">
                          				<td width="30" height="20" bgcolor="#00324D">
                              					<p class="textocentrado"><b>AÑO</b></p>
                          				</td>
							<td width="40" height="20" bgcolor="#00324D">
                              					<p class="textocentrado"><b>CÓDIGO</b></p>
                          				</td>
							<td width="220" height="20" bgcolor="#00324D">
                              					<p class="textocentrado"><b>TÍTULO DEL PROYECTO</b></p>
                          				</td>
							<td width="150" height="20" bgcolor="#00324D">
                              					<p class="textocentrado"><b>LÍNEA PROGRAMÁTICA SENNOVA</b></p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#00324D">
                              					<p class="textocentrado"><b>RESPONSABLES</b></p>
                          				</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2015</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SIN CÓDIGO</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Fortalecimiento del Laboratorio de Análisis Ambientales del Centro de Teleinformática y Producción Industrial</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Victoria Eugenia Pizo Perafán</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2017</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SIGP-625</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Modernización de los Ambientes de Formación del Área de Construcción del Centro de Teleinformática y Producción Industrial del SENA Regional Cauca.</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">23 - Actualización y Modernización Tecnológica de los Centros de Formación</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Eduardo Antonio Benavides Rosero</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2017</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SIGP-308</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Prospección y Viabilidad del Uso de Residuos Industriales (Cenizas y Lodos) para la Evaluación y Potencial Reutilización en la Generación de Nuevos Materiales Cerámicos para Uso Industrial en el Departamento del Cauca</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">82 - Fomento de la Innovación y Desarrollo Tecnológico en las Empresas y Centros del SENA</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Victoria Eugenia Pizo Perafán</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2017</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SIGP-786</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Fortalecimiento y Actualización del Laboratorio de Análisis Ambientales del Centro de Teleinformatica y Producción Industrial Regional Cauca</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas </p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Victoria Eugenia Pizo Perafán</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2019</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-4103</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Fortalecimiento de la Capacidad Analítica y Acreditación del Laboratorio en Análisis Ambientales del CTPI para la Prestación de Servicios Tecnológicos a las Empresas del Sector Productivo del Departamento del Cauca</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Victoria Eugenia Pizo Perafán</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2020</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-6043</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Diseñar e Implementar un Sistema de Gestión Bajo la Norma NTC-ISO/IEC 17025, en el Laboratorio de Análisis Ambientales</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Ana Cristina Narváez</p>
								<p class="texto-inv2">Juan David Arcos Rojas</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2021</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2"> SGPS-8702</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Caracterización Técnico - Ambiental del Reciclaje de Residuos de Concreto Hidráulico y Material Cerámico Provenientes de la Construcción y Demolición, en el Marco de la Economía Circular, la Eficiencia Energética y los ODS (Caso de Estudio CTPI)</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">66-Investigación Aplicada, Grupos y Semilleros de Investigación</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Ana Isabel Bravo Ospina</p>
								<p class="texto-inv2">Viviana Paola Cerón Rosero</p>
								<p class="texto-inv2">Rodrigo Alberto Montaño Fuentes</p>
								<p class="texto-inv2">Jonathan Orlando Rivera Cuaspud</p>
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2021</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-8169</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Fortalecimiento de los Servicios Tecnológicos del Laboratorio de Análisis Ambientales del CTPI, Optimizando el Sistema de Gestión en 2021</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Ana Cristina Narváez</p>
								<p class="texto-inv2">Juan David Arcos Rojas</p>
								<p class="texto-inv2">Diana Carolina Vidal Barco</p>	
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2022</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-9576</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Desarrollo de un Plan Metodológico de un Sistema Piloto de Unidad de Vivienda Enfocado en el Acceso a Agua Potable, Autonomía Energética Respeto al Interés Cultural en Zonas Dispersas y No Interconectadas del Litoral Pacífico Colombiano (Región Cauca)</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">66-Investigación Aplicada, Grupos y Semilleros de Investigación</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Victoria Eugenia Pizo Perafán </p>
								<p class="texto-inv2">Rodrigo Alberto Montaño Fuentes</p>
								<p class="texto-inv2">Henry Eduardo Bastidas Paruma</p>
								<p class="texto-inv2">Julián Paz Alarcon</p>	
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2022</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-9456</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Desarrollo de un Prototipo a Manera de Stand con Prefabricados Tipo Lego Elaborados con RCD Provenientes de la Construcción</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">82 - Fomento de la Innovación y Desarrollo Tecnológico en las Empresas y Centros del SENA</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Ana Isabel Bravo Ospina </p>
								<p class="texto-inv2">Viviana Paola Cerón Rosero</p>
								<p class="texto-inv2">Rodrigo Alberto Montaño Fuentes</p>
								<p class="texto-inv2">Jonathan Orlando Rivera Cuaspud</p>	
							</td>
						</tr>
						<tr>
                          				<td width="30" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">2022</p>
                          				</td>
							<td width="40" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">SGPS-9150</p>
                          				</td>
							<td width="220" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">Fortalecimiento en la Vigencia 2022 de la Oferta de Servicios Tecnológicos del Laboratorio de Análisis Ambientales del CTPI, con la Implementación y Aseguramiento del Sistema de Gestión, Cumpliendo con los Requisitos de NTC-ISO/IEC 17025:2017, Legales y Reglamentarios</p>
                          				</td>
							<td width="150" height="20" bgcolor="#D8D6B2">
                              					<p class="texto-inv2">68 - Fortalecimiento de Servicios Tecnológicos para las Empresas</p>
                          				</td>
                          				<td width="130" height="20" bgcolor="#D8D6B2">
								<p class="texto-inv2">Ana Cristina Narváez </p>
								<p class="texto-inv2">Juan David Arcos Rojas</p>
								<p class="texto-inv2">Ivan David Escobar Hernández</p>
							</td>
						</tr>	
					</table>





    </main>
</template>


<script>



const semilleros = [
   
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
    }
  
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

.bg-subtitulo {

background-color: #39A900;
color: white;

}
th {
    background-color: #00324D;
    color: white
}

.bg-carrusel {
    background-color: #e7e7e7;
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
    box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
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
    box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5) 7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
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
    box-shadow: inset 2px 2px 2px 0px rgba(3, 0, 0, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
}



.modal {
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

.carrusel-titulo {
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



