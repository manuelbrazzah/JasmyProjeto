
  

 
<template>
  <Teleport to="body">
    <!-- Fundo azul transparente -->
    <div class="fixed inset-0 bg-blue-500/30 flex items-center justify-center z-50">
      
      <!-- Card centralizado -->

      <div class="bg-white rounded-xl shadow-md p-6 w-[400px] mx-auto">
    <h2 class="text-lg font-semibold text-blue-600 mb-4">New Employee</h2>
    
    <form class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700"> Nome completo</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter full name" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@email.com" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Posição</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Job title" />
      </div>

      <div class="flex items-center justify-between mt-4">
        <button @click="cancelar" type="button" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">Cancelar</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Salvar</button>
      </div>
    </form>
  </div>
    <!--fim-->
    </div>
  </Teleport>
</template>

<script setup>
 const emit = defineEmits(['cancelaFuncionario'])
 const cancelar = ()=>{
    emit('cancelaFuncionario')
 }

   name: "Funcionario"
</script>
    

    
