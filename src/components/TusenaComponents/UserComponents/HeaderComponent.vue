


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
                                <p class="d-none d-md-block mb-0">Pedro Coral</p>
                            </router-link>
                            <router-link to="/userfavorite/1"
                                class="me-1 border btn btn-success rounded py-1 px-3 nav-link d-flex align-items-center border-success border-1  border-opacity-75">
                                <i class="fas fa-heart m-1 me-md-2"></i>
                                <p class="d-none d-md-block mb-0">Favoritos</p>
                            </router-link>
                            <!-- <a href="">My cart</p> </a> -->



                        </div>
                    </div>
                    <!-- Center elements -->

                    <!-- Right elements -->
                    <div class="col-lg-5 col-md-12 col-12">



                        <form class="d-flex" role="search">
                            <input v-model="titulo" class="form-control me-2" type="search" placeholder=""
                                aria-label="Search">
                            <button v-on:click="buscarProducto" class="btn btn-outline-success" type="button"><i
                                    class="fas fa-search"></i></button>
                        </form>



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
export default {
    name: 'HeaderComponent',
    data() {
        return {
            // // PASO 1. Crear variable para guardar los datos de la API
            productos: [],
            titulo: ""
        }
    },




    // PASO 2. crear el metodo para estraer los datos de la API
    async created() {
        this.producto();
    },


    methods: {
        async producto() {

            // hacer la peticion GET a la ruta de la API 
            await this.axios.get('http://localhost:3000/producto')
                // devuelve la promesa con un resultado (response)
                .then(response => {
                    // guardar en la variable usuarios la respuesta obtenida
                    this.productos = response.data.new_producto;

                    console.log(response.data.new_producto);

                    // si se quiere ver el resultado en consola
                    // console.log(response.data.new_producto[0].productos_titulo) 


                }) //Mostrar por consola el error
                .catch((e) => {
                    console.log(e)
                });

        },



        async buscarProducto() {
            const params = {
                titulo: this.titulo
            }

            await this.axios.get('http://localhost:3000/buscar', { params })
                // devuelve la promesa con un resultado (response)
                .then(response => {
                    // guardar en la variable usuarios la respuesta obtenida
                    this.productos = response.data.new_producto;

                    console.log(response.data.productos);

                    // si se quiere ver el resultado en consola
                    // console.log(response.data.new_producto[0].productos_titulo) 


                }) //Mostrar por consola el error
                .catch((e) => {
                    console.log(e)
                });



        }

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