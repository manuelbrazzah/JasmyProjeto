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
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-home-4-line mr-3"></i> Home
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-2-line mr-3"></i> Relatório de Venda
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-box-line mr-3"></i> Relatório de Cliente
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-calendar-line mr-3"></i> Relatório de Produtos
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-settings-3-line mr-3"></i> Settings
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
      <ReltVenda />
      <!-- Cards -->

      <!-- Charts -->
    
      <!-- Table -->
      
    </div>
  </div>
  
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import ReltVenda from "../components/ReltVenda.vue";

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
    { el: chart4, color: "#3B82F6", value: 85 },
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
</style>

