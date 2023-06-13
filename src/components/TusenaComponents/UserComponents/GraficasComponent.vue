<template>
  <div>
    <select v-model="selectedOption" @change="fetchChartData">
      <option value="semilleros">Semilleros</option>
      <option value="proyectos">Proyectos</option>
      <option style="text-transform: uppercase;" value="programas">Programas</option>
    </select>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

export default {
  data() {
    return {
      selectedOption: 'semilleros',
      chart: null,
    };
  },
  mounted() {
    this.fetchChartData();
  },
  methods: {
    fetchChartData() {
      axios.get(`http://localhost:3000/grafica/${this.selectedOption}`).then((response) => {
        const data = response.data;

        // Transformar los datos de respuesta en el formato necesario para la gráfica
        const labels = data.map((item) => item.label);
        const values = data.map((item) => item.value);

        this.renderChart(labels, values);

      });
    },
    renderChart(labels, values) {
      const ctx = this.$refs.chartCanvas.getContext('2d');

      if (this.chart) {
        this.chart.destroy(); // Destruir la instancia del gráfico anterior si existe
      }

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Número de productos',
              data: values,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
            },
          ],
        },
        options: {
          // Opciones de configuración del gráfico
        },
      });
    },
  },
};
</script>