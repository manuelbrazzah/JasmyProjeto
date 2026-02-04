<template>
      <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b
      from-[#1a0733] to-[#3b0ca3] text-white flex flex-col">
      <div class="p-4 text-2xl font-bold flex items-center space-x-2">
        <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
        <span>DeskApp</span>
      </div>
      <nav class="flex-1 mt-6 space-y-2">
        <a href="/" @click="AtivCor"  
        :class="[cor ,'flex items-center px-4 py-2 hover:bg-slate-800 ']">
          <i class="ri-home-4-line mr-3"></i> Home
        </a>
        <a href="/registro" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-2-line mr-3"></i> Registros
        </a>
        <a href="/relatorio" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-box-line mr-3"></i> Relatorios
        </a>
        <a href="/ferramentas" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-calendar-line mr-3"></i> Configurações
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-settings-3-line mr-3"></i> Terminar
        </a>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="flex justify-between items-center bg-white p-4 shadow-sm">
        <input
          type="text"
          placeholder="Search Here"
          class="border rounded-md px-4 py-2 w-1/3 focus:outline-none"
        />
        <div class="flex items-center space-x-4">
          <i class="ri-notification-3-line text-gray-600 text-xl"></i>
          <i class="ri-settings-4-line text-gray-600 text-xl"></i>
          <div class="flex items-center space-x-2">
           

          </div>
        </div>
      </header>

      <!-- Cards -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Produtos</span>
            <span class="text-indigo-500 font-bold">2020</span>
          </div>
          <div class="mt-3">
            <div ref="chart1" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Vendas</span>
            <span class="text-green-500 font-bold">400</span>
          </div>
          <div class="mt-3">
            <div ref="chart2" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Funcionarios</span>
            <span class="text-pink-500 font-bold">350</span>
          </div>
          <div class="mt-3">
            <div ref="chart3" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Clientes</span>
            <span class="text-blue-500 font-bold">60</span>
          </div>
          <div class="mt-3">
            <div ref="chart4" class="w-full h-16"></div>
          </div>
        </div>
      </section>

      <!-- Charts -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
        <div class="bg-white p-4 rounded-xl shadow">
          <h3 class="font-semibold text-gray-700 mb-2">Atividades</h3>
          <div ref="activityChart" class="w-full h-72"></div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <h3 class="font-semibold text-gray-700 mb-2">Lead Target</h3>
          <div ref="leadChart" class="w-full h-72"></div>
        </div>
      </section>

      <!-- Table -->
      
    </div>
  </div>
</template>

<script setup>

import { DocumentIcon } from '@heroicons/vue/24/solid';
//import ProductForm from '../components/ProductForm.vue'
  

import * as echarts from "echarts";
import { onMounted, ref } from "vue";

 // variaves de cor da nava lateral
  const mycor = ref('lado')
   const cor = ref('')
   const AtivCor = () =>{
  cor.value = mycor

   }

 
// Variaveis do dashboard

const chart1 = ref(null);
const chart2 = ref(null);
const chart3 = ref(null);
const chart4 = ref(null);
const activityChart = ref(null);
const leadChart = ref(null);

onMounted(() => {
  //  pequenos circulos de progresso, charts
  
  const smallCharts = [
    { el: chart1, color: "#6366F1", value: 80 },
    { el: chart2, color: "#22C55E", value: 70 },
    { el: chart3, color: "#EC4899", value: 75 },
    { el: chart4, color: "#3B82F6", value: 60 },
  ];

  smallCharts.forEach(({ el, color, value }) => {
    const c = echarts.init(el.value);
    c.setOption({
      series: [
        {
          type: "gauge",
          progress: { show: true, width: 6, color },
          axisLine: { lineStyle: { width: 6, color: [[1, "#E5E7EB"]] } },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          pointer: { show: false },
          detail: {
            valueAnimation: true,
            formatter: `${value}%`,
            color,
            fontSize: 14,
          },
          data: [{ value }],
        },
      ],
    });
  });

  // Bar chart
  const bar = echarts.init(activityChart.value);
  bar.setOption({
    tooltip: {},
    legend: { data: ["In Progress", "Complete"] },
    xAxis: { data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    yAxis: {},
    series: [
      { name: "In Progress", type: "bar", data: [40, 25, 50, 20, 35, 30], color: "#3B82F6" },
      { name: "Complete", type: "bar", data: [30, 20, 40, 10, 28, 22], color: "#F43F5E" },
    ],
  });

  // Lead Target (semicircular)
  const gauge = echarts.init(leadChart.value);
  gauge.setOption({
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        progress: { show: true, width: 10 },
        axisLine: { lineStyle: { width: 10 } },
        axisTick: { show: false },
        splitLine: { show: false },
        pointer: { show: false },
        detail: { valueAnimation: true, formatter: "73%\nAchieve Goals", fontSize: 16 },
        data: [{ value: 73 }],
      },
    ],
  });
});
</script>

<style scoped>
@import "remixicon/fonts/remixicon.css";

.lado{
  width: 200px;
  height: 100px;
  background-color: aqua;
}
</style>


