<template>
    <section class="pb-5">
        <div class="container">
            <div class="row gx-5">
                <h2 class=" text-dark text-center mb-4">
                    {{ producto.productos_titulo }}
                </h2>
                <aside class="col-lg-6 ">
                    <div class="border rounded-4 mb-3 d-flex justify-content-center vh-75 align-items-center">
                        <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="">
                            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit"
                                src="https://1.bp.blogspot.com/-ImfAdP03PKI/WYz03SIQHCI/AAAAAAAAMws/wplt43gBUI8Dv4aNadp4pEJS7iByMo0HACLcBGAs/s1600/IMG_3794.JPG" />
                        </a>
                    </div>
                    <!-- <div class="d-flex justify-content-center mb-3">
                        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"
                            href="#">
                            <img width="60" height="60" class="rounded-2" src="https://placeimg.com/640/480/animals" />
                        </a>
                        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"
                            href="#">
                            <img width="60" height="60" class="rounded-2" src="https://placeimg.com/640/480/people" />
                        </a>
                        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"
                            href="#">
                            <img width="60" height="60" class="rounded-2" src="https://placeimg.com/640/480/fruits" />
                        </a>
                        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"
                            href="#">
                            <img width="60" height="60" class="rounded-2" src="https://placeimg.com/640/480/people" />
                        </a>
                    </div> -->
                    <!-- thumbs-wrap.// -->
                    <!-- gallery-wrap .end// -->
                </aside>
                <main class="col-lg-6">
                    <div class="ps-lg-3">

                        <!-- <div class="d-flex flex-row my-3">
                            <div class="text-warning mb-1 me-2">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="ms-1">
                                    3.7
                                </span>
                            </div>
                            <span class="text-muted"><i class="fas fa-eye fa-sm mx-1"></i>14 vistas</span>

                        </div> -->

                        <!-- <div class="mb-3">
            <span class="h5">$75.00</span>
            <span class="text-muted">/per box</span>
          </div> -->

                        <!-- <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p> -->

                        <div class="row align-items-center">
                            <dt class="col-3">Autor(es) del Producto:</dt>
                            <dd class="col-9"> {{ producto.productos_autor }}</dd>
                            <hr>
                            <dt class="col-3">Tipo de Producto:</dt>
                            <dd class="col-9"> {{ producto.productos_tipo }}</dd>
                            <hr>
                            <dt class="col-3">Subtipo de Producto:</dt>
                            <dd class="col-9"> {{ producto.productos_subtipo }}</dd>
                            <hr>
                            <dt class="col-3">Proyecto al que pertenece:</dt>
                            <dd class="col-9">N/A</dd>
                            <hr>
                            <dt class="col-3">Codigo Proyecto:</dt>
                            <dd class="col-9">N/A</dd>
                            <hr>

                            <dt class="col-3">Linea Programatica Proyecto:</dt>
                            <dd class="col-9">N/A</dd>
                            <hr>

                            <dt class="col-3">Semillero al que pertenece:</dt>
                            <dd class="col-9">Proyecto</dd>
                        </div>

                        <hr />

                        <div class="row mb-4">
                            <!-- <div class="col-md-4 col-6">
              <label class="mb-2">Size</label>
              <select class="form-select border border-secondary" style="height: 35px;">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div> -->
                            <!-- col.// -->
                            <!-- <div class="col-md-4 col-6 mb-3">
              <label class="mb-2 d-block">Quantity</label>
              <div class="input-group mb-3" style="width: 170px;">
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div> -->
                        </div>
                        <!-- <a href="#" class="btn btn-success shadow-0 me-2"><i class="fa fa-file" aria-hidden="true"></i>
                            Soporte</a> -->
                        <a :href=computedLink target="blank" class="btn btn-primary shadow-0 me-2"> <i class="fa fa-file"
                                aria-hidden="true"></i>
                            Soporte </a>
                        <!-- <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i
                                class="me-1 fa fa-heart fa-lg"></i> Agregar a Favoritos</a> -->
                    </div>
                </main>
            </div>
        </div>
    </section>
    <!-- content -->
</template>


<script>

import { mapState, mapActions } from 'vuex';

export default {
    name: 'ProductDetailComponent',
    props: {
        // msg//
    },

    computed: {
        ...mapState({
            producto: 'producto',
        }),

        computedLink() {
            const link = this.producto.productos_url
            return link
        },


    },



}
</script>


<style></style>