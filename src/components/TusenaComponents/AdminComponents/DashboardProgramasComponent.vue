<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2 class="">Panel de Administracion</h2> <button type="button" class="custom-btn btn-register my-2 text-light"
        data-bs-toggle="modal" data-bs-target="#registrarproductomodal"> <i class="bi bi-plus-lg"></i> Agregar
        Programa</button>


      <!-- <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary"> Compartir</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar" class="align-text-bottom"></span>
          Esta Semana
        </button>
      </div> -->
    </div>

    <!-- <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> -->

    <h3>Programas</h3>
    <div class="table-responsive">
      <table class="table table-striped table-hover table-sm">
        <thead class="table-success text-start">
          <tr class="">
            <th scope="col">ID</th>

            <!-- <th scope="col">Autor(es)</th> -->
            <th scope="col">Nombre del Programa</th>

            <th scope="col">Acciones</th>

          </tr>
        </thead>
        <tbody class="table-group-divider text-start">
          <tr v-for="(programa, index) in programas" :key="index" class="align-middle">


            <td>{{ programa.programa_id }}</td>
            <td>{{ programa.programa_nombre }}</td>

            <td class="d-flex text-start">
              <div class="row text-start">
                <div class="col text-start">
                
                      <button class="btn btn-warning  me-2 rounded-circle" data-bs-toggle="modal" data-bs-target="#actualizarProgramaModal"
                    @:click="buscarPrograma(programa.programa_id)">
                    <i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#eliminarProgramaModal"
                    @:click="buscarPrograma(programa.programa_id)"> <i class="bi bi-trash3-fill"></i></button>



                </div>

              </div>


            </td>

          </tr>

        </tbody>
      </table>
    </div>
  </main>



  <div class="modal fade" id="registrarproductomodal" tabindex="-1" aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg rounded rounded-5">
      <div class="modal-content row mx-2 me-2 bg-light">

        <div class="modal-body py-0 mt-0 col-12 px-2">
          <div class="form-body p-0">
            <div class="row">
              <div class="form-holder p-0">
                <div class="form-content p-0 m-0">
                  <div class="form-items">
                    <h3>Registra un Programa</h3>
                    <p>Llena los campos que veras a continuacion:</p>

                    <form class="" method="POST" v-on:submit.prevent="registrarPrograma">


                      <div class="col-md-12">
                        <input v-model="nombre" class="form-control text-dark" type="text" name="name"
                          placeholder="Nombre del Programa" required>

                      </div>
                      <div class="form-button mt-3 align-items-center d-flex justify-content-between">
                        <!-- <button id="submit" type="submit" class="btn btn-primary">Register</button> -->
                        <button type="submit" class="btn btn-registrar border border-success" data-bs-dismiss="modal"
                          aria-label="Close">REGISTRAR</button>


                        <button type="button" class="btn btn-cerrar border border-danger" data-bs-dismiss="modal"
                          aria-label="Close">Cancelar</button>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>





  <div class="modal fade" id="actualizarproductomodal" tabindex="-1" aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg rounded rounded-5">
      <div class="modal-content row mx-2 me-2 bg-light">

        <div class="modal-body py-0 mt-0 col-12 px-2">
          <div class="form-body p-0">
            <div class="row">
              <div class="form-holder p-0">
                <div class="form-content p-0 m-0">
                  <div class="form-items">
                    <h3>Registra un Programa</h3>
                    <p>Llena los campos que veras a continuacion:</p>

                    <form class="" method="POST" v-on:submit.prevent="registrarPrograma">


                      <div class="col-md-12">
                        <input v-model="nombre" class="form-control text-dark" type="text" name="name"
                          placeholder="Nombres" required>

                      </div>





                      <div class="form-button mt-3 align-items-center d-flex justify-content-between">
                        <!-- <button id="submit" type="submit" class="btn btn-primary">Register</button> -->
                        <button type="submit" class="btn btn-registrar border border-success" data-bs-dismiss="modal"
                          aria-label="Close">REGISTRAR</button>


                        <button type="button" class="btn btn-cerrar border border-danger" data-bs-dismiss="modal"
                          aria-label="Close">Cancelar</button>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>



  <div class="modal fade" id="actualizarProgramaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg rounded rounded-5">
      <div class="modal-content row mx-2 me-2 bg-light">
        <!-- <div class="modal-header border border-0 d-flex justify-content-end p-2 pt-2 pe-2 m-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <!-- <div class="modal-header p-0 m-0 border border-0">
                    <img src="https://placeimg.com/600/200/animals" class="img-fluid  mx-auto d-block" alt="...">
                </div> -->
        <div class="modal-body py-0 mt-0 col-12 px-2">
          <div class="form-body p-0">
            <div class="row">
              <div class="form-holder p-0">
                <div class="form-content p-0 m-0">
                  <div class="form-items">
                    <h3>Actualiza un Programa</h3>
                    <p>Llena los campos que veras a continuacion:</p>

                    <form class="" method="POST" v-on:submit.prevent="actualizarPrograma(programa.programa_id)">

                      <div class="col-md-12 ">
                        <input v-model="programa.programa_nombre" class="form-control text-dark" type="text" required>
                        <!-- <div class="valid-feedback">Username field is valid!</div>
                        <div class="invalid-feedback">Username field cannot be blank!</div> -->
                      </div>



                      <div class="form-button mt-3 align-items-center d-flex justify-content-between">
                        <!-- <button id="submit" type="submit" class="btn btn-primary">Register</button> -->
                        <button type="submit" class="btn btn-registrar border border-success" data-bs-dismiss="modal"
                          aria-label="Close">ACTUALIZAR</button>


                        <button type="button" class="btn btn-cerrar border border-danger" data-bs-dismiss="modal"
                          aria-label="Close">Cancelar</button>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>









  <div class="modal fade" id="eliminarProgramaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-lg rounded rounded-5">
      <div class="modal-content row mx-2 me-2 bg-light">
        <!-- <div class="modal-header border border-0 d-flex justify-content-end p-2 pt-2 pe-2 m-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <!-- <div class="modal-header p-0 m-0 border border-0">
                    <img src="https://placeimg.com/600/200/animals" class="img-fluid  mx-auto d-block" alt="...">
                </div> -->
        <div class="modal-body py-0 mt-0 col-12 px-2">
          <div class="form-body p-0">
            <div class="row">
              <div class="form-holder p-0">
                <div class="form-content p-0 m-0">
                  <div class="form-items">
                    <h3>Seguro deseas eliminar el programa: {{ programa.programa_nombre }}?</h3>


                    <form class="" method="POST" v-on:submit.prevent="eliminarPrograma(programa.programa_id)">


                      <div class="form-button mt-5 align-items-center d-flex justify-content-between">
                        <!-- <button id="submit" type="submit" class="btn btn-primary">Register</button> -->
                        <button type="submit" class="btn btn-registrar border border-success" data-bs-dismiss="modal"
                          aria-label="Close">ELIMINAR</button>


                        <button type="button" class="btn btn-cerrar border border-danger" data-bs-dismiss="modal"
                          aria-label="Close">Cancelar</button>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>




<script>

export default {

  name: "DashboardFuncionarioComponent",

  data() {
    return {
      programas: [],
      programa: [],
      programa_id: null,
      nombre: ""
    }
  },

  methods: {
    async registrarPrograma() {

      let json = {
        "programa_nombre": this.nombre
      };
      await this.axios.post('https://tusena-backend.onrender.com/programa', json)
        .then(data => {
          this.buscarProgramas();
        })
    },



    async buscarPrograma(programa_id) {

      await this.axios.get('https://tusena-backend.onrender.com/programa/' + programa_id)
        .then(response => {


          console.log(response.data);

          this.programa = response.data.nuevo_programa;
          // console.log(this.semillero);

        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });
    },

    async actualizarPrograma(programa_id) {
      // console.log(id);
      let json = {
        "programa_nombre": this.programa.programa_nombre,
      };

      await this.axios.patch('https://tusena-backend.onrender.com/programa/' + programa_id, json)
        .then(response => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Programa Actualizado',

          })          // console.log(response.data.new_producto);
          console.log(this.programas);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });
      this.buscarProgramas();

    },

    async eliminarPrograma(programa_id) {
      await this.axios.delete('https://tusena-backend.onrender.com/programa/' + programa_id)
        .then(response => {
          console.log(response.data.message);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Programa Eliminado',

          })  // console.log(response.data.new_funcionario[0].funcionario_id);
          // console.log(response.data.new_funcionario[0].funcionario_id);
          // console.log(response.data.new_producto);
          // console.log(this.funcionarios);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });

      this.buscarProgramas();
    },


    async buscarProgramas() {
      await this.axios.get('https://tusena-backend.onrender.com/programa')
        .then(response => {
          this.programas = response.data.nuevo_programa
          // console.log(response.data.new_producto);
          console.log(this.programas);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });
    },


  },

  async mounted() {
    await this.buscarProgramas();
  },





}
</script>

<style scoped>


th{
font-weight:600;

}

td{
font-style: italic;

}
.custom-btn {

  width: auto;
  height: 40px;
  color: #000000;
  border-radius: 5px;
  padding-inline: 10px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgb(24, 183, 61),
    7px 7px 20px 0px rgba(230, 20, 20, 0.1),
    4px 4px 5px 0px rgba(171, 10, 10, 0.1);
  outline: none;
}

.btn-register {
  background: rgb(3, 187, 25);
  border: 1px;
  z-index: 1;

}






a {

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #09ff00;
  font-size: smaller;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

a:hover {
  background: #09ff00;
  color: #000000;
  border-radius: 0px;
  box-shadow: 0 0 1px #09ff00,
    1 0 25px #09ff00,
    1 0 50px #09ff00,
    1 0 100px #09ff00;
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #09ff00);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #09ff00);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #09ff00);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #09ff00);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }

  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap'); */
}













.btn-cerrar {

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff0000;
  font-size: smaller;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 0px;
  letter-spacing: 4px;

}

.btn-cerrar:hover {
  background: #ff0000;
  color: #000000;
  border-radius: 0px;
  box-shadow: 0 0 1px #09ff00,
    1 0 25px #09ff00,
    1 0 50px #09ff00,
    1 0 100px #09ff00;
}
.btn-registrar {

position: relative;
display: inline-block;
padding: 10px 20px;
color: #03a300;
font-size: smaller;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
transition: .5s;
margin-top: 0px;
letter-spacing: 4px;

}

.btn-registrar:hover {
background: #11a600;
color: #000000;
border-radius: 0px;
box-shadow: 0 0 1px #09ff00,
  1 0 25px #09ff00,
  1 0 50px #09ff00,
  1 0 100px #09ff00;
}
.btn-cerrar span {
  position: absolute;
  display: block;
}

.btn-cerrar span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #09ff00);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #09ff00);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #09ff00);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #09ff00);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }

  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap'); */
}






imput {

  text-transform: uppercase;
}



*,
body {
  /* font-family: 'Poppins', sans-serif; */
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  background-color: #349adf;
  overflow: hidden;
}

/* .form-holder {} */

.form-holder .form-content {

  text-align: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  max-width: 100%;
}

.form-content .form-items {
  border: 3px solid #0b6808;
  padding: 40px;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: left;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.form-content h3 {
  color: #030000;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-content h3.form-title {
  margin-bottom: 30px;
}

.form-content p {
  color: #000000;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 30px;
}


.form-content label,
.was-validated .form-check-input:invalid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
  color: #000000;

}

.form-content input[type=text],
.form-content input[type=password],
.form-content input[type=email],
.form-content input[type=phone],
.form-content input[type=number],
.form-content input[type=file],
.form-content select {
  width: 100%;
  padding: 9px 20px;
  text-align: left;
  border: 0;
  outline: 0;
  border-radius: 6px;
  background-color: #e4e4e4;
  font-size: 15px;
  font-weight: 300;
  color: #8D8D8D;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 16px;
}


.btn-primary {
  background-color: #7e7e7e;
  outline: none;
  border: 0px;
  box-shadow: none;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #00b22c;
  outline: none !important;
  border: none !important;
  box-shadow: none;
}

.form-content textarea {
  position: static !important;
  width: 100%;
  padding: 8px 20px;
  border-radius: 6px;
  text-align: left;
  background-color: #fff;
  border: 0;
  font-size: 15px;
  font-weight: 300;
  color: #8D8D8D;
  outline: none;
  resize: none;
  height: 120px;
  -webkit-transition: none;
  transition: none;
  margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
  border: 0;
  background-color: #ebeff8;
  color: #8D8D8D;
}

.mv-up {
  margin-top: -9px !important;
  margin-bottom: 8px !important;
}

.invalid-feedback {
  color: #ff606e;
}

.valid-feedback {
  color: #2acc80;
}
</style>