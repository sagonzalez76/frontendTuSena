<template>
  <div>


    <div width="500" height="300">
      <highcharts :options="chartOptions"></highcharts>
    </div>

    <!-- <button @click="aplicarFiltrosGraficas()">CLICK</button> -->
  </div>
  <!-- <h6>{{ productosgraficas }}</h6> -->
</template>

<script>

import { mapState, mapActions } from 'vuex';
import axios from 'axios'
import { reactive } from 'vue';


export default {
  name: 'BarChart',
  components: {},


  async mounted() {

    this.actualizarGraficas()
   
  },

  data() {
    return {

      valor: 'producto_subtipo',

      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Productos en Relacion al Subtipo al que pertenecen',
          align: 'left'
        },
        xAxis: {
          categories: [],
          title: {
            text: null
          },
          gridLineWidth: 1,
          lineWidth: 0
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Numero de Productos por Subtipo',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          },
          gridLineWidth: 0
        },
        tooltip: {
          valueSuffix: ' productos'
        },
        plotOptions: {
          bar: {
            borderRadius: '20%',
            dataLabels: {
              enabled: true
            },
            groupPadding: 0.1,
            colors: ['#FFFF00', '#0000FF', '#FF0000']
          }
        },
        credits: {
          enabled: false
        },
        legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor:
             '#FFFFFF',
        shadow: true
    },
        series: [{
          name: 'Subtipo',
          data: [] // sample data
        }]
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
  watch: {
    productosgraficas() {
      this.aplicarFiltrosGraficas()

    }
  },
  methods: {

    ...mapActions({
      actualizarGraficas: 'actualizarGraficas'
    }),


    async aplicarFiltrosGraficas(valor) {
      // const filtro = valor ?? 'producto_subtipo'

      // Actualizar los datos del gráfico con la respuesta de la API
      reactive(this.chartOptions.xAxis.categories = this.productosgraficas.map(item => item.producto_subtipo));
      console.log(this.chartOptions.xAxis.categories);
      // console.log(this.datos.map(item => item.filtroSeleccionado));
      reactive(this.chartOptions.series[0].data = this.productosgraficas.map(item => parseInt(item.cantidad)));
      console.log(this.chartOptions.series[0].data);


    },

  },

}
</script>


<style scoped></style>