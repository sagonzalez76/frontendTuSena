<template>
  <div>

    <div>
      <!-- {{ valor
      
       }} -->

      <div class="row text-center d-flex justify-content-center">

        <label for="#filtros" class="fs-5">Seleccione un filtro para la grafica en el eje X: </label>
        <select class="form-select text-center w-25" @:change="aplicarFiltrosGraficas(valor)" name="" v-model="valor"
          id="filtros">
          <option value='producto_tipo' selected>Tipo</option>
          <option value='producto_subtipo'>Subtipo</option>
          <option value='producto_ano'>A&ntilde;o</option>


        </select>
      </div>

      <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />


    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { mapState, mapActions } from 'vuex';
import axios from 'axios'

export default {
  name: 'BarChart',
  components: { Bar },


 
  data() {
    return {
      ...mapState({
        productosgraficas: 'productosgraficas',
      }),
      loaded: false,
      valor: 'producto_tipo',

      colores: {
        producto_tipo: '#FF6384',
        producto_subtipo: '#36A2EB',
        producto_ano: '#FFCE56',
        producto_semillero: '#4BC0C0'
      },

      chartData: {

        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: [],
            data: []
          },
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Numero de Productos',
              fontSize: 16, // Tamaño de fuente deseado
              fontStyle: "bold" // Aplicar negrita al texto
            }, ticks: {
              precision: 0,
              stepSize: 1
            }
          }
        }
      }
    }
  },


  computed: {
    ...mapState({
      productosgraficas: 'productosgraficas',
      semillerosSeleccionados: 'semillerosSeleccionados',
      subtiposSeleccionados: 'subtiposSeleccionados',
      anosSeleccionados: 'anosSeleccionados',
      proyectosSeleccionados: 'proyectosSeleccionados',
      programasSeleccionados: 'programasSeleccionados'
    }),

  },


  async mounted() {

    await axios.get("http://localhost:3000/aplicarfiltrosgraficas/")
      .then((response) => {
        this.productosgraficas = response.data.productos;
      })
      .catch((error) => {
        this.productosgraficas = []
        console.error(error);
      });
    this.aplicarFiltrosGraficas()
  },


  methods: {

    async aplicarFiltrosGraficas(valor) {
      this.loaded = false
      const filtro = valor ?? 'producto_tipo'
      console.log(filtro);
      const productosProyectos = this.proyectosSeleccionados;
      const productosSemilleros = this.semillerosSeleccionados;
      const productosSubtipos = this.subtiposSeleccionados;
      const productosAno = this.anosSeleccionados;
      const productosProgramas = this.programasSeleccionados;

      // console.log(state.semillerosSeleccionados)

      const params = {
        filtroSelect: filtro,
        proyectos_nombre: productosProyectos,
        semillero_nombre: productosSemilleros,
        producto_subtipo: productosSubtipos,
        productos_ano: productosAno,
        programas_nombre: productosProgramas

      }
      console.log(params);
      // Realizar la llamada a la API utilizando Axios u otro cliente HTTP
      // con los autores seleccionados como parámetro de consulta
      await axios.get("http://localhost:3000/aplicarfiltrosgraficas/", { params })
        .then((response) => {

          this.productosgraficas = response.data.productos;

          console.log(response.data.productos);

        })
        .catch((error) => {
          this.productosgraficas = []

          console.error(error);
        });

      await this.filtroGraficas()

    },



    async filtroGraficas() {

      const filtroSeleccionado = this.valor
      const backgroundColor = this.colores[filtroSeleccionado];

      // Actualizar los datos del gráfico con la respuesta de la API
      this.chartData.labels = this.productosgraficas.map(item => item[filtroSeleccionado]);
      // console.log(this.productosgraficas.map(item => item.filtroSeleccionado));
      this.chartData.datasets[0].data = this.productosgraficas.map(item => parseInt(item.cantidad));

      if (filtroSeleccionado == "producto_tipo") {
        this.chartData.datasets[0].label = 'Tipo'
      } else if (filtroSeleccionado == 'producto_subtipo') {
        this.chartData.datasets[0].label = 'Subtipo'
      } else {

        this.chartData.datasets[0].label = 'Ano'


      }
      this.chartData.datasets[0].backgroundColor = backgroundColor;



      this.loaded = true
      // })
      // .catch(e => {
      //   console.log(e);
      // })
    },
  },


}
</script>





<style scoped>


</style>