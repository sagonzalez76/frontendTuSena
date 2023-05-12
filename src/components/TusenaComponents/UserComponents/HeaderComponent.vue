<template>
    <header>
        <!-- Jumbotron -->
        <div class="p-3 text-center bg-white border-bottom">
            <div class="container">
                <div class="row gy-3">
                    <!-- Left elements -->
                    <div class="col-lg-2 col-sm-4 col-4">
                        <router-link to="/productosmain" class="float-start">
                            <img src="@/assets/img/TUSENALOGO.png" height="40" />
                        </router-link>
                    </div>
                    <!-- Left elements -->

                    <!-- Center elements -->
                    <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                        <div class="d-flex float-end">

                            <router-link to="/userprofile/1"
                                class="me-4 border btn btn-success rounded py-1 px-3 nav-link d-flex align-items-center border-success border-1  border-opacity-75"><i
                                    class="fas fa-user-alt m-1 me-md-2"></i>
                                <p class="d-none d-md-block mb-0">Iniciar Sesion</p>
                            </router-link>
                            <router-link to="/userfavorite/1"
                                class="me-1 border btn btn-success rounded py-1 px-3 nav-link d-flex align-items-center border-success border-1  border-opacity-75">
                                <i class="fas fa-heart m-1 me-md-2"></i>
                                <p class="d-none d-md-block mb-0">Favoritos</p>
                            </router-link>
                            <!-- <a href="">My cart</p> </a> -->
                            <!-- <h4>{{ productos }}</h4> -->


                        </div>
                    </div>
                    <!-- Center elements -->

                    <!-- Right elements -->
                    <div class="col-lg-5 col-md-12 col-12">



                        <div class="d-flex" role="">
                            <input v-model="titulo" @keydown.enter="buscarProductoName(titulo)" class="form-control me-2" type=""
                                placeholder="Busca un producto" aria-label="Search">
                            <button v-on:click="buscarProductoName(titulo)" class="btn btn-outline-success" type="button"><i
                                    class="fas fa-search"></i></button>
                        </div>



                    </div>
                    <!-- Right elements -->
                </div>
            </div>
        </div>
        <!-- Jumbotron -->

        <!-- Heading -->
        <div class="barra mb-4">
            <div class="container pb-2 pt-3 align-middle">
                <!-- <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i> -->

                <nav class="d-flex mb-2">
                    <h6 class="mb-0">
                        <a href="" class="text-white-50">TUSENA</a>
                        <span class="text-white-50 mx-2"> > </span>
                        <a href="" class="text-white-50">Productos</a>
                        <span class="text-white-50 mx-2"> > </span>
                        <a href="" class="text-white"><u>Producto 1</u></a>


                    </h6>
                </nav>
                <!-- Breadcrumb -->
            </div>
        </div>
        <!-- Heading -->
    </header>
</template>



<script>
import { mapState, mapActions } from 'vuex';

export default {

    name: 'HeaderComponent',

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    data() {
        return {
      
        }
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    computed: {  
        
      
        ...mapState({

            productos: 'productos',
        }),

     

    },


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    async mounted() {
        await this.buscarProductos();
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    methods: {

        ...mapActions({
            buscarProductos: 'buscarProductos',
            buscarProductoName: 'buscarProductoName',

        }),

        // async buscarProducto() {
        //    await this.$store.dispatch('searchProduct', this.titulo);

        // }

    }

}
</script>





<style scoped>
.barra {
    background-color: #00A500;

}

.navbar-brand {
    color: black;
}




/* <!--TODO--> */
.btn-success {

    background-color: #9dffa583;

}
</style>