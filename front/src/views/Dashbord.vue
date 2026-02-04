<template>
  

 <div class="flex flex-x-4">
 <hr class="h-[6px] w-[297px] bg-blue-500 border-0 mr-auto mt-8" />
 <hr class="h-[6px] w-[800px] bg-blue-500 border-0 ml-auto mt-8" />

 </div>
 

  <div class="flex h-screen bg-gray-100">

        
       
        <div class=" w-[300px] h-[540px] bg-whate-500 
        shadow-[1px_0_8px_-2px_rgba(0,0,0,0.8)] p-8 top-5">
     
           <h1 class="text-2xl text-blue-500"
           > BlueHair-Facturação</h1>
         
        <div class=" flex flex-col space-y-2 mt-20">
            <FolderIcon class="w-10 h-10 text-yellow-500" />
           <button class="bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-800"> Produto</button> 

           <DocumentIcon class="w-10 h-10 text-blue-500" />
           <button class="bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-800">Cliente</button>
           <button class="bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-800"> Estoque</button>
          </div>
        </div>
      



    <!-- Sidebar

    
    <aside class="w-64 bg-white shadow-md p-5">
      <h2 class="text-2xl font-bold mb-6 text-blue-600">Painel</h2>
      <nav class="space-y-2">
        <a href="#" class="block p-2 rounded hover:bg-blue-50 text-gray-700">🏠 Início</a>
        <a href="#" class="block p-2 rounded hover:bg-blue-50 text-gray-700">📊 Estatísticas</a>
        <a href="#" class="block p-2 rounded hover:bg-blue-50 text-gray-700">📁 Documentos</a>
      </nav>
    </aside>
      -->
    <!-- Conteúdo -->
    <main class="flex-1 p-8 overflow-y-auto">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Nova Tarefa</button>
      </header>

      <!-- Cards -->
      <section class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 class="text-gray-500 text-sm uppercase">Usuários</h2>
          <p class="text-2xl font-bold mt-2">120</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 class="text-gray-500 text-sm uppercase">Projetos</h2>
          <p class="text-2xl font-bold mt-2">34</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 class="text-gray-500 text-sm uppercase">Mensagens</h2>
          <p class="text-2xl font-bold mt-2">89</p>
        </div>
      </section>

      <!-- Gráfico -->
      <GraficoVenda />
    </main>
  </div>
</template>

<script setup>
import GraficoVenda from '../components/GraficoVenda.vue'
</script>

