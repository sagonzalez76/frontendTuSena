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
    tiposSeleccionados: [],
    subtiposSeleccionados: [],
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
      console.log(id);

      await axios.get('http://localhost:3000/producto/' + id)
        .then(response => {


          console.log(response.data);
          state.producto = response.data.nuevo_producto;
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
      await axios.get('http://localhost:3000/producto')
        .then(response => {
          state.productos = response.data.nuevo_producto
          // console.log(response.data.new_producto);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          state.productos = []

          console.log(e)
        });
    },


    // REALIZA LA BUSQUEDA DE LOS PRODUCTOS QUE CONTENGAN EL PARAMETRO QUE LLEGA DESDE LA BARRA DE BUSQUEDA 

    async ['buscarProductoName'](state, titulo) {

      const params = {
        titulo: titulo,
        semillero: state.semillero
      }

      console.log(params);
      await axios.get('http://localhost:3000/producto/buscar', { params })
        .then(response => {

          console.log(response);
          state.productos = response.data.productos
          console.log(this.state.productos);

          // LIMPIA LA BUSQUEDA
          const params = {
            titulo: ""
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
    setTiposSeleccionados(state, tipoSeleccionado) {
      const index = state.tiposSeleccionados.indexOf(tipoSeleccionado.target.value)
      if (index === -1) {
        state.tiposSeleccionados.push(tipoSeleccionado.target.value)
      } else {
        state.tiposSeleccionados.splice(index, 1)
      }

    },

    setSubtiposSeleccionados(state, subtipoSeleccionado) {
      const index = state.subtiposSeleccionados.indexOf(subtipoSeleccionado.target.value)
      if (index === -1) {
        state.subtiposSeleccionados.push(subtipoSeleccionado.target.value)
      } else {
        state.subtiposSeleccionados.splice(index, 1)
      }

    },



    filtrarProductos(state) {
      const productosSemilleros = state.semillerosSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        productos_autores: productosSemilleros


      }

      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroProducto", { params })
        .then((response) => {
          state.productos = response.data;
        })
        .catch((error) => {
          state.productos = []

          console.error(error);
        });
    },




    filtrarProductosTipo(state) {

      const productosTipos = state.tiposSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        productos_tipo: productosTipos


      }

      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroProductoTipo", { params })
        .then((response) => {





          state.productos = response.data;



        })
        .catch((error) => {
          state.productos = []
          console.error(error);
        });
    },


    filtrarProductosSubtipo(state) {
      const productosSubtipos = state.subtiposSeleccionados;
      // console.log(state.semillerosSeleccionados)

      const params = {
        productos_subtipo: productosSubtipos
      }

      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      axios.get("http://localhost:3000/filtroProductoSubtipo", { params })
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


    async buscarProductoName({ commit }, titulo) {
      commit('buscarProductos')
      commit('buscarProductoName', titulo)
    },

    async buscarProductoId({ commit }, id) {
      commit('buscarProductoId', id)
    },




    actualizarSemillerosSeleccionados({ commit }, valorSeleccionado) {
      commit('setSemillerosSeleccionados', valorSeleccionado),
        commit('filtrarProductos')

    },


    actualizarTiposSeleccionados({ commit }, tipoSeleccionado) {
      commit('setTiposSeleccionados', tipoSeleccionado),
        commit('filtrarProductosTipo')

    },

    actualizarSubtiposSeleccionados({ commit }, subtipoSeleccionado) {
      commit('setSubtiposSeleccionados', subtipoSeleccionado),
        commit('filtrarProductosSubtipo')

    }

  },














  modules: {

  }
})
