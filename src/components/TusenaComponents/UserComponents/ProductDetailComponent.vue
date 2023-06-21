<template>
    <section class="pb-5">
        <div class="container">
            <div class="row gx-5">
                <h2 class=" text-dark text-center mb-4">
                    {{ producto.producto_titulo }}
                </h2>
                <aside class="col-lg-6 ">
                    <div class=" rounded-4 mb-3 d-flex justify-content-center vh-75 align-items-center">
                        <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="">
                            <img :src="`data:image/png;base64,${producto.producto_imagen}`"
                                style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" alt="Imagen Producto"/>
                              
                        </a>
                    </div>
<!-- {{ producto.producto_imagen }} -->
                </aside>  
                <main class="col-lg-6">
                    <div class="ps-lg-3">
                        <div class="row align-items-center">
                            <dt class="col-3">Autor(es) del Producto:</dt>
                            <ul class="col-9 list-unstyled">
                                <li v-for="funcionario in producto.funcionarios" :key="funcionario">
                                    {{ funcionario.funcionario_nombre }}
                                </li>
                            </ul>


                            <hr>
                            <dt class="col-3">Tipo de Producto:</dt>
                            <dd class="col-9"> {{ producto.producto_tipo }}</dd>
                            <hr>
                            <dt class="col-3">Subtipo de Producto:</dt>
                            <dd class="col-9"> {{ producto.producto_subtipo }}</dd>
                            <hr>
                            <dt class="col-3">A&ntilde;o de Creacion:</dt>
                            <dd class="col-9"> {{ producto.producto_ano }}</dd>
                            <hr>
                            <dt class="col-3">Proyecto al que pertenece:</dt>
                            <dd class="col-9"> {{  producto.proyecto ? producto.proyecto.proyecto_nombre : producto.proyecto_nombre  }}</dd>
                            <hr>
                            <dt class="col-3">Codigo Proyecto:</dt>
                            <dd class="col-9">  {{ producto.proyecto ? producto.proyecto.proyecto_codigo : producto.proyecto_codigo }}</dd>
                            <hr>

                            <dt class="col-3">Linea Programatica Proyecto:</dt>
                            <dd class="col-9">  {{ producto.proyecto ? producto.proyecto.proyecto_linea : producto.proyecto_linea }}</dd>
                            <hr>

                            <dt class="col-3">Semillero al que pertenece:</dt>
                            <dd class="col-9">  {{ producto.semillero ? producto.semillero.semillero_nombre : producto.semillero_nombre }}</dd>
                            <hr>
                            
                            <dt class="col-3">Programa(s) que impacta:</dt>
                            <ul class="col-9 list-unstyled">
                                <li  v-for="programa in producto.programas" :key="programa" >
                                    {{ programa.programa_nombre }}</li>
                            </ul>


                        </div>

                        <!-- {{ producto[0] }} -->

                        <hr />
                        <a :href=computedLink target="_blank" class="btn btn-primary shadow-0 me-2 w-100"> <i class="fa fa-file"
                                aria-hidden="true"></i>  Soporte del Producto</a>
                    </div>
                    <!-- {{ producto }} -->
                </main>
            </div>
        </div>
    </section>
</template>


<script>

import { mapState, mapActions } from 'vuex';

export default {
    name: 'ProductDetailComponent',
    props: {

    },

    computed: {
        ...mapState({
            producto: 'producto',
        }),

        computedLink() {
            const link = this.producto.producto_url
            return link
        },

    },


}
</script>


<style></style>