
   <template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Cabeçalho -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4 md:mb-0">📊 Relatório de Vendas</h1>
      <div class="flex flex-wrap items-center gap-3">
        <input
          type="date"
          class="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          class="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <select
          class="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option>Forma de Pagamento</option>
          <option>Dinheiro</option>
          <option>Cartão</option>
          <option>Transferência</option>
        </select>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Filtrar
        </button>
        <button
          class="bg-white border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          Exportar PDF
        </button>
        <button
          class="bg-white border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          Exportar Excel
        </button>
      </div>
    </div>

    <!-- Cartões de resumo -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Total Vendido</p>
          <h2 class="text-xl font-bold text-gray-800">Kz 245,000</h2>
        </div>
        <DollarSign class="text-blue-600 w-8 h-8" />
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Total de Vendas</p>
          <h2 class="text-xl font-bold text-gray-800">57</h2>
        </div>
        <ShoppingCart class="text-blue-600 w-8 h-8" />
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Descontos</p>
          <h2 class="text-xl font-bold text-gray-800">Kz 3,200</h2>
        </div>
        <Tag class="text-blue-600 w-8 h-8" />
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Lucro Estimado</p>
          <h2 class="text-xl font-bold text-gray-800">Kz 180,000</h2>
        </div>
        <TrendingUp class="text-blue-600 w-8 h-8" />
      </div>
    </div>
     <!--Grafico comeco-->
    
    
   

    <!-- Main content -->
   
      <!-- Topbar -->
    

      <!-- Cards -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        
        <div class="bg-white p-4 rounded-xl shadow">

          <div class="flex justify-between items-center">
            <span class="text-gray-500">Contact</span>
            <span class="text-indigo-500 font-bold">2020</span>
          </div>
          <div class="mt-3">
            <div ref="chart1" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Deals</span>
            <span class="text-green-500 font-bold">400</span>
          </div>
          <div class="mt-3">
            <div ref="chart2" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Campaign</span>
            <span class="text-pink-500 font-bold">350</span>
          </div>
          <div class="mt-3">
            <div ref="chart3" class="w-full h-16"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Worth</span>
            <span class="text-blue-500 font-bold">$6060</span>
          </div>
          <div class="mt-3">
            <div ref="chart4" class="w-full h-16"></div>
          </div>
        </div>
      </section>

      <!-- Charts -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
        <div class="bg-white p-4 rounded-xl shadow">
          <h3 class="font-semibold text-gray-700 mb-2">Activity</h3>
          <div ref="activityChart" class="w-full h-72"></div>
        </div>

      
      </section>
   
          <!--Grafico fim-->

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">Detalhes das Vendas</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="bg-blue-50 text-gray-700 text-left">
              <th class="p-3">Data</th>
              <th class="p-3">Cliente</th>
              <th class="p-3">Funcionário</th>
              <th class="p-3">Total</th>
              <th class="p-3">Pagamento</th>
              <th class="p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, i) in salesDetails"
              :key="i"
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="p-3">{{ item.date }}</td>
              <td class="p-3">{{ item.client }}</td>
              <td class="p-3">{{ item.staff }}</td>
              <td class="p-3 text-blue-600 font-medium">{{ item.total }}</td>
              <td class="p-3">{{ item.payment }}</td>
              <td class="p-3">
                <span
                  :class="item.status === 'Pago' ? 'text-green-600' : 'text-red-500'"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

import * as echarts from "echarts";
import { onMounted, ref } from "vue";

 import {
  DollarSign,
  ShoppingCart,
  Tag,
  TrendingUp,
} from "lucide-vue-next";
 

const salesData = [
  { day: "1", amount: 30000 },
  { day: "2", amount: 45000 },
  { day: "3", amount: 22000 },
  { day: "4", amount: 37000 },
  { day: "5", amount: 50000 },
  { day: "6", amount: 42000 },
  { day: "7", amount: 38000 },
];

const salesDetails = [
  {
    date: "2025-10-16",
    client: "Carlos Silva",
    staff: "Maria João",
    total: "Kz 12,500",
    payment: "Cartão",
    status: "Pago",
  },
  {
    date: "2025-10-17",
    client: "Ana Pedro",
    staff: "João Paulo",
    total: "Kz 8,000",
    payment: "Dinheiro",
    status: "Pendente",
  },
];





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

/* Aparência mais suave */
</style>
    
