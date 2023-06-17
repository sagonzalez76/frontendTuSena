<template>
    <div class="container text-center" v-if="!productos.length">


        <h2>No se encontraron productos con los filtros seleccionados</h2>

        <img src="https://th.bing.com/th/id/OIP.9LZt6qqG4o9g-chAgV82xgAAAA?pid=ImgDet&rs=1" alt="">
        <!-- {{ semillerosSeleccionados }}
{{ subtiposSeleccionados }}
{{ proyectosSeleccionados }}
{{ programasSeleccionados }}
{{ anosSeleccionados }} -->
    </div>



    <div class="row justify-content-center mb-3 fs-6" id="contenido" v-else v-for="(producto, index) in productos" :key="index">
        <div class="col-md-12">

<!-- {{ productos[0] }} -->
            <div class="card shadow-0 border border-dark rounded-3" style="--bs-border-opacity: .5;">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col-xl-3 col-md-3 d-flex justify-content-center">
                            <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0 d-flex justify-content-center"
                                id="imagen-container">
                                <!-- <img :src="imageSrc3" alt="Imagen del producto" class="my-auto" style="width: 30px; height: 30px;"> -->

                                <!-- <div v-for="imagen in imageSrc" :key="imagen"> -->
                                    <img :src="`data:image/png;base64,${producto.producto_imagen}`" alt="Imagen del producto" class="my-auto"
                                    style="width: 120px; height: 120px;">
                                <!-- </div> -->


                                <!-- <img :src=imageSrc class="my-auto" style="width: 150px; height: 150px;" /> -->
                                <!-- <a href="#!">
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                    </div>
                                </a> -->
                            </div>
                        </div>

                        <div class="col-xl-6 col-md-7 col-sm-7 ">
                            <h5 class="mb-3 " id="titulo">{{ producto.producto_titulo }}</h5>
                            <!-- {{ imageSrc3 }} -->
                            <!-- {{producto.producto_imagen }} -->
                            <!-- <div class="d-flex flex-row">
                                <div class="text-warning mb-1 me-2">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span class="ms-1"
                                        3.7
                                    </span>
                                </div>
                                <span class="text-muted">{{ producto.producto_id }} vistas</span>
                            </div> -->

                            <!-- <p class="text mb-4 mb-md-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe
                                facere nostrum minima temporibus, asperiores quidem ad, aliquam distinctio
                                tenetur error totam sit facilis molestias architecto molestiae, quas
                                deserunt voluptatibus.
                            </p> -->


                            <div class="row w-100">
                                <div class="row">

                                    <div class="col-3">
                                       <h6 class="fw-bold" style="font-size: .8rem;">Tipo:</h6>
                                    </div>
                                    <div class="col-9">
                                        <h6 style="font-size: .9rem"> {{ producto.producto_tipo }}</h6>
                                    </div>
                                </div>
                            </div>


                            <div class="row w-100">
                                <div class="row">
                                    <div class="col-3">
                                        <h6 class="fw-bold" style="font-size: .8rem;">Subtipo: </h6>
                                    </div>
                                    <div class="col-9">
                                        <h6 style="font-size: .9rem"> {{ producto.producto_subtipo }}</h6>
                                    </div>
                                </div>
                            </div>


                            <div class="row w-100">
                                <div class="row">

                                    <div class="col-3">
                                       <h6 class="fw-bold" style="font-size: .8rem;">Semillero:</h6>
                                    </div>
                                    <div class="col-9">
                                        <h6 style="font-size: .9rem"> {{ producto.semillero.semillero_nombre }}</h6>
                                    </div>
                                </div>
                            </div>


                            <div class="row w-100">
                                <div class="row">

                                    <div class="col-3">
                                       <h6 class="fw-bold" style="font-size: .8rem;">Proyecto: </h6>
                                    </div>
                                    <div class="col-9">
                                        <h6 style="font-size: .9rem"> {{ producto.proyecto.proyecto_nombre}}</h6>
                                    </div>
                                </div>
                            </div>


                            <div class="row w-100">
                                <div class="row">

                                    <div class="col-3">
                                       <h6 class="fw-bold" style="font-size: .8rem;">A&ntilde;o:</h6>
                                    </div>
                                    <div class="col-9">
                                        <h6 style="font-size: .9rem"> {{ producto.producto_ano }}</h6>
                                        <!-- {{ imageSrc3 }} -->
                                        <!-- {{ producto.producto_imagen.data }} -->
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="col-xl-3 col-md-2 col-sm-5 my-auto text-end">
                            <!-- <div class="d-flex flex-row align-items-center mb-1">
                                                <h4 class="mb-1 me-1">$34,50</h4>
                                                <span class="text-danger"><s>$49.99</s></span>
                                            </div> -->
                            <!-- <h6 class="text-success">Free shipping</h6> -->
                            <div class="">
                                <button class="btn btn-success shadow-0 me-2 me-2 product-button" type="button">
                                    <router-link to="/productos/1" type="button"
                                        @click="buscarProductoId(producto.producto_id)"
                                        class="text-decoration-none text-light ">ver mas </router-link> </button>
                                <!-- <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover "><i
                                        class="fas fa-heart fa-lg px-1"></i></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';

// Supongamos que tienes el valor de la columna "producto_imagen" almacenado en la variable 'imagenBuffer'
import { Buffer } from 'buffer';



export default {
    data() {
        return {
        }
    },


    computed: {

        ...mapState({
            productos: 'productos',
            semillerosSeleccionados: 'semillerosSeleccionados',
            subtiposSeleccionados: 'subtiposSeleccionados',
            proyectosSeleccionados: 'proyectosSeleccionados',
            programasSeleccionados: 'programasSeleccionados',
            anosSeleccionados: 'anosSeleccionados'

        }),

    },


    methods: {
        ...mapActions({
            buscarProductoId: 'buscarProductoId',
        }),

       

    },





}


</script>

<style>

#titulo{
    font-size: 1.4rem;
    font-style: italic;

};

h6{
    font-size: 1.8rem !important;

}

</style>