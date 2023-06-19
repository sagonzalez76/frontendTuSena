<template>
  <div>
    <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
    <!-- {{ chartData }} <br><br>
    {{ chartData.labels }} <br><br>
    {{ chartData.datasets[0].data }} -->

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

import axios from 'axios'

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {

      loaded: false,

      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12],
          backgroundColor: ['#FF6384'],// '#36A2EB', '#FFCE56'
          label: "Productos por Subtipo"
        }]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Numero de Productos'
            }, ticks: {
              precision: 0,
              stepSize: 1
            }
          }


        }
      }
    }
  },

  async mounted() {

    this.loaded = false
    await axios.get('http://localhost:3000/grafica/')
      .then(response => {
        console.log(response.data);
        // Actualizar los datos del gráfico con la respuesta de la API
        this.chartData.labels = response.data.resultados.map(item => item.producto_subtipo);
        console.log(response.data);
        this.chartData.datasets[0].data = response.data.resultados.map(item => parseInt(item.cantidad));
        this.loaded = true

      })
      .catch(e => {
        console.log(e);
      });
  }

}
</script>