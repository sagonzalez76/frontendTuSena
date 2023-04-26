import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {

    productos: []

  },
  getters: {


  },
  mutations: {

    // REALIZA LA BUSQUEDA DE TODOS LOS PRODUCTOS EN DB
    async  ['buscarProductos'](state) {
      await axios.get('http://localhost:3000/producto')
        .then(response => {
          state.productos = response.data.new_producto
          // console.log(response.data.new_producto);
          // console.log(this.state.productos);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
        });
    },


    // REALIZA LA BUSQUEDA DE LOS PRODUCTOS QUE CONTENGAN EL PARAMETRO QUE LLEGA DESDE LA BARRA DE BUSQUEDA 

    async ['buscarProductoName'](state, titulo) {

      const params = {
        titulo: titulo
      }
     
      await axios.get('http://localhost:3000/buscar', { params })
        .then(response => {
          state.productos = response.data.productos
          // console.log(this.state.productos);

          // LIMPIA LA BUSQUEDA
          const params = {
            titulo: ""
          }

          console.log(params);
        }) //Mostrar por consola el error
        .catch((e) => {
          console.log(e)
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



  },
  modules: {
  }
})
