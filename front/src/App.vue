
<template>


  <header class="bg-[#3B0AE1] text-white flex items-center justify-between px-6 py-3 shadow">
    <div class="flex space-x-4">
    
    <RouterLink to="/" class="font-semibold hover:underline">Inicio </RouterLink>
    <RouterLink to="/registro" class="font-semibold hover:underline">Registros </RouterLink>
    <RouterLink to="/relatorio" class="font-semibold hover:underline">Relatórios</RouterLink>
    <RouterLink to="/ferramentas" class="font-semibold hover:underline">Ferramentas </RouterLink>
     
    
    </div>

    <div class="text-sm opacity-90">Versão Demo | 2025</div>
  </header>





 <div>

  <RouterView />
 </div>


 <!---

  <div class="flex h-screen bg-gray-100 text-gray-800">
   
         <Sidebar />

  
    <div class="flex-1 flex flex-col">

      <Topbar />      

      <main class="p-6 overflow-y-auto">
        <h1 class="text-2xl font-semibold mb-6">🧾 Artigos</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

          
          <div class="lg:col-span-2">
            
       <ProductTable />
      
          </div>
          <div>


                  <ProductForm />
     
          </div>
        </div>
      </main>
    </div>
  </div>

  -->
</template>

<script setup>

  // import Sidebar from './components/ProductForm.vue';
  // import Topbar from './components/Topbar.vue';
  // import ProductTable from './components/ProductTable.vue';
  // import ProductForm from './components/ProductForm.vue';
</script>

<style>

</style>
