
<template>
  <div class="bg-white p-6 rounded-2xl shadow-sm border">
    <h2 class="text-gray-700 text-lg font-semibold mb-4">📈 Vendas Mensais</h2>
    <apexchart type="bar" height="300" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts"

const series = [
  {
    name: "Vendas (Kz)",
    data: [12000, 15000, 8000, 17000, 14000, 19000, 22000],
  },
]

const chartOptions = {
  chart: {
    toolbar: { show: false },
  },
  colors: ["#3b82f6"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "30%",
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    labels: { style: { colors: "#6b7280" } },
  },
  yaxis: {
    labels: { style: { colors: "#6b7280" } },
  },
  tooltip: {
    y: { formatter: (val) => val + " Kz" },
  },
}
</script>

<script>
export default {
  components: {
    apexchart: VueApexCharts,
  },
}
</script>

