import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    /////////////////////////////////////////////////////////////////////////////////////
    // BUSCADOR BUSCADOR BUSCADOR

    productos: [],
    semillero: [""],

    /////////////////////////////////////////////////////////////////////////////////////
    // FILTROS FILTROS FILTROS
    semillerosSeleccionados: [],
    tiposSeleccionados: [],
    subtiposSeleccionados: [],



  },
  getters: {


  },
  mutations: {


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // BUSCADOR BUSCADOR BUSCADOR

    // REALIZA LA BUSQUEDA DE TODOS LOS PRODUCTOS EN DB
    async  ['buscarProductos'](state) {
      await axios.get('http://localhost:3000/producto')
        .then(response => {
          state.productos = response.data.new_producto
          // console.log(response.data.new_producto);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          state.productos=[]

          console.log(e)
        });
    },


    // REALIZA LA BUSQUEDA DE LOS PRODUCTOS QUE CONTENGAN EL PARAMETRO QUE LLEGA DESDE LA BARRA DE BUSQUEDA 

    async ['buscarProductoName'](state, titulo) {

      const params = {
        titulo: titulo,
        semillero: state.semillero
      }




      console.log(titulo);

      await axios.get('http://localhost:3000/buscar', { params })
        .then(response => {
          state.productos = response.data.productos
          console.log(this.state.productos);

          // LIMPIA LA BUSQUEDA
          const params = {
            titulo: ""
          }

          console.log(params);
        }) //Mostrar por consola el error
        
        .catch((e) => {
         state.productos=[]
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
            state.productos=[]

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
          state.productos= []
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
        state.productos= []

          console.error(error);
      });
},
  

  },

  actions: {


    async buscarProductos({ commit }) {
      commit('buscarProductos')
    },


    async buscarProductoName({ commit }, titulo) {
      commit('buscarProductos')
      commit('buscarProductoName', titulo)
    },




    actualizarSemillerosSeleccionados({ commit }, valorSeleccionado) {
      commit('setSemillerosSeleccionados', valorSeleccionado),
      commit('filtrarProductos' )

    },


    actualizarTiposSeleccionados({ commit }, tipoSeleccionado) {
      commit('setTiposSeleccionados', tipoSeleccionado),
      commit('filtrarProductosTipo' )

    },

    actualizarSubtiposSeleccionados({ commit }, subtipoSeleccionado) {
      commit('setSubtiposSeleccionados', subtipoSeleccionado),
      commit('filtrarProductosSubtipo' )

    }

  },
  modules: {

  }
})
