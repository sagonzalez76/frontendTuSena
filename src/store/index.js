import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    /////////////////////////////////////////////////////////////////////////////////////
    // BUSCADOR BUSCADOR BUSCADOR
    producto: [],
    productos: [],
    semillero: [""],

    /////////////////////////////////////////////////////////////////////////////////////
    // FILTROS FILTROS FILTROS

    semillerosSeleccionados: [],
    subtiposSeleccionados: [],
    anosSeleccionados: [],
    proyectosSeleccionados: [],
    programasSeleccionados: [],



    // semillerosSeleccionados: [],
    // subtiposSeleccionados: ['Informes Finales de Investigación'],
    // anosSeleccionados: ['2022'],
    // proyectosSeleccionados: ["Proyecto Estandar"],

    // programasSeleccionados: ["Tecnico en Sistemas"],




    /////////////////////////////////////////////////////////////////////////////////////
    // AUTENTICACION USUARIO
    token: localStorage.getItem('token') || null,
    // isAuthenticated: false,
    errorAutenticated: false
  },



  getters: {
    isLoggedIn: state => !!state.token
  },



  mutations: {

    setAuthentication(state, token) {
      state.token = token
      state.errorAutenticated = false;

    },

    setAuthenticationError(state, errorAutenticated) {
      state.errorAutenticated = errorAutenticated;
    },



    async ['buscarProductoId'](state, id) {
      const producto_id = id
      await axios.get('http://localhost:3000/producto/' + producto_id)
        .then(response => {


          console.log(response.data);
          state.producto = response.data.producto[0];
          console.log(state.producto);
          // console.log(response.data.new_funcionario[0].funcionario_id);
          // console.log(response.data.new_producto);
          // console.log(this.funcionarios);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });
    },


    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // BUSCADOR BUSCADOR BUSCADOR

    // REALIZA LA BUSQUEDA DE TODOS LOS PRODUCTOS EN DB
    async  ['buscarProductos'](state) {
      await axios.get('http://localhost:3000/')
        .then(response => {
          state.productos = response.data.nuevo_producto[0]
          console.log(response.data.nuevo_producto[0]);





          
        }) //Mostrar por consola el error
        .catch((e) => {
          state.productos = []

          console.log(e)
        });
    },

    // REALIZA LA BUSQUEDA DE LOS PRODUCTOS QUE CONTENGAN EL PARAMETRO QUE LLEGA DESDE LA BARRA DE BUSQUEDA 

    async ['buscarProductoName'](state, payload) {

      const params = {
        titulo: payload.titulo
      }

      const body = {
        categoria: payload.categoria
      }

      console.log(params);
      console.log(body);

      await axios.get('http://localhost:3000/producto/buscar/', { params }, { body })
        .then(response => {
          console.log(response.data);
          state.productos = response.data.productos


          // LIMPIA LA BUSQUEDA
          const params = {
            titulo: undefined
          }

          console.log(params);
        }) //Mostrar por consola el error

        .catch((e) => {
          state.productos = []
          console.log(e)
        });
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // FILTROS FILTROS FILTROS

    setSemillerosSeleccionados(state, valorSeleccionado) {
      const index = state.semillerosSeleccionados.indexOf(valorSeleccionado.target.value)
      if (index === -1) {
        state.semillerosSeleccionados.push(valorSeleccionado.target.value)
      } else {
        state.semillerosSeleccionados.splice(index, 1)
      }

    },
    // setTiposSeleccionados(state, tipoSeleccionado) {
    //   const index = state.tiposSeleccionados.indexOf(tipoSeleccionado.target.value)
    //   if (index === -1) {
    //     state.tiposSeleccionados.push(tipoSeleccionado.target.value)
    //   } else {
    //     state.tiposSeleccionados.splice(index, 1)
    //   }

    // },

    setSubtiposSeleccionados(state, subtipoSeleccionado) {
      const index = state.subtiposSeleccionados.indexOf(subtipoSeleccionado.target.value)
      if (index === -1) {
        state.subtiposSeleccionados.push(subtipoSeleccionado.target.value)
      } else {
        state.subtiposSeleccionados.splice(index, 1)
      }

    },


    setAnosSeleccionados(state, anoSeleccionado) {
      const index = state.anosSeleccionados.indexOf(anoSeleccionado.target.value)
      if (index === -1) {
        state.anosSeleccionados.push(anoSeleccionado.target.value)
      } else {
        state.anosSeleccionados.splice(index, 1)
      }

    },


    setProyectosSeleccionados(state, proyectoSeleccionado) {
      const index = state.proyectosSeleccionados.indexOf(proyectoSeleccionado.target.value)
      if (index === -1) {
        state.proyectosSeleccionados.push(proyectoSeleccionado.target.value)
      } else {
        state.proyectosSeleccionados.splice(index, 1)
      }

    },

    setProgramasSeleccionados(state, programaSeleccionado) {
      const index = state.programasSeleccionados.indexOf(programaSeleccionado.target.value)
      if (index === -1) {
        state.programasSeleccionados.push(programaSeleccionado.target.value)
      } else {
        state.programasSeleccionados.splice(index, 1)
      }

    },



    filtrarProductosSemillero(state) {
      const productosSemilleros = state.semillerosSeleccionados;
      const params = {
        semillero_nombre: productosSemilleros
      }
      console.log(params)

      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtrosemillero", { params })
        .then((response) => {
          state.productos = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },


    // filtrarProductosTipo(state) {

    //   const productosTipos = state.tiposSeleccionados;
    //   // console.log(state.semillerosSeleccionados)

    //   const params = {
    //     productos_tipo: productosTipos


    //   }

    //   // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
    //   // con los autores seleccionados como parámetro de consulta
    //   axios.get("http://localhost:3000/filtroProductoTipo", { params })
    //     .then((response) => {

    //       state.productos = response.data;



    //     })
    //     .catch((error) => {
    //       state.productos = []
    //       console.error(error);
    //     });
    // },


    filtrarProductosSubtipo(state) {
      const productosSubtipos = state.subtiposSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        producto_subtipo: productosSubtipos
      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroproducto", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },



    filtrarProductosAno(state) {
      const productosAnos = state.anosSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        productos_ano: productosAnos
      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroano", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },





    filtrarProductosProyecto(state) {
      const productosProyectos = state.proyectosSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        proyectos_nombre: productosProyectos
      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroproyecto", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },



    filtrarProductosPrograma(state) {
      const productosProgramas = state.programasSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        programas_nombre: productosProgramas
      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroprograma", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },


    aplicarFiltros(state) {
      const productosProyectos = state.proyectosSeleccionados;
      const productosSemilleros = state.semillerosSeleccionados;
      const productosSubtipos = state.subtiposSeleccionados;
      const productosAno = state.anosSeleccionados;
      const productosProgramas = state.programasSeleccionados;

      // console.log(state.semillerosSeleccionados)

      const params = {
        proyectos_nombre: productosProyectos,
        semillero_nombre: productosSemilleros,
        producto_subtipo: productosSubtipos,
        productos_ano: productosAno,
        programas_nombre: productosProgramas

      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/aplicarfiltros", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },




  },







  actions: {

    checkAuthentication({ commit }, payload) {

      let json = {
        "funcionario_iden": payload.identificacion,
        "funcionario_contrasena": payload.contrasena
      }



      axios.post('http://localhost:3000/login', json)
        .then(response => {
          console.log(response);

          Swal.fire({
            icon: 'success',
            title: 'Bienvenido...',
            text: 'Administrador TuSena!',
          })

          localStorage.setItem('token', response.data.token)
          // console.log(this.state.productos); 

          commit('setAuthentication', response.data.token);

        })

        .catch(response => {
          const errormsg = response.response.data.error;

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errormsg,
          })

          const errorAutenticated = true
          // console.log(this.state.productos); 
          commit('setAuthenticationError', errorAutenticated);
        })

    },


    async buscarProductos({ commit }) {
      commit('buscarProductos')
    },


    async buscarProductoName({ commit }, payload) {

      commit('buscarProductos')
      commit('buscarProductoName', payload)
    },



    async buscarProductoId({ commit }, id) {
      commit('buscarProductoId', id)
    },




    actualizarSemillerosSeleccionados({ commit }, valorSeleccionado) {
      commit('setSemillerosSeleccionados', valorSeleccionado),
        commit('aplicarFiltros')

    },


    actualizarTiposSeleccionados({ commit }, tipoSeleccionado) {
      commit('setTiposSeleccionados', tipoSeleccionado),
        commit('aplicarFiltros')

    },

    actualizarSubtiposSeleccionados({ commit }, subtipoSeleccionado) {
      commit('setSubtiposSeleccionados', subtipoSeleccionado),
        commit('aplicarFiltros')

    },

    actualizarAnosSeleccionados({ commit }, anoSeleccionado) {
      commit('setAnosSeleccionados', anoSeleccionado),
        commit('aplicarFiltros')
    },

    actualizarProyectosSeleccionados({ commit }, proyectoSeleccionado) {
      commit('setProyectosSeleccionados', proyectoSeleccionado),
        commit('aplicarFiltros')

    },
    actualizarProgramasSeleccionados({ commit }, programaSeleccionado) {
      commit('setProgramasSeleccionados', programaSeleccionado),
        commit('aplicarFiltros')

    }

  },









  modules: {

  }
})
