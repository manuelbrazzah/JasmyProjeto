
<template>
  <div class="bg-white rounded-xl shadow p-4">
    <div class="flex items-center justify-between mb-3">
      <button  @click="AddFuncionario" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Novo</button>
      <input
        type="text"
        placeholder="Pesquisar por descrição ou código"
        class="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>

    <table class="min-w-full border border-gray-200 rounded-lg text-sm">
      <thead class="bg-blue-50 text-blue-700 uppercase text-xs">
        <tr>
          <th class="p-2 border">Nome completo</th>
          <th class="p-2 border">Email</th>
          <th class="p-2 border">Posição</th>
           <th class="p-2 border">Estado</th>
          <th class="p-2 border">Editar</th>
          <th class="p-2 border">Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 5" :key="n" class="hover:bg-gray-50 text-center">
          
          <td class="p-2 border"> Jack Spirohxx</td>
          <td class="p-2 border">jackspirohxx@gmail.com</td>
          <td class="p-2 border">Funcionario</td>
          <td class="p-2 border text-green-600">Disponível</td>
          <td class="p-2 border text-yellow-500 cursor-pointer">✏️</td>
          <td class="p-2 border text-red-500 cursor-pointer">❌</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

const emit = defineEmits(['AdFuncionario'])
const AddFuncionario = ()=>{

   emit("AdFuncionario")
 
} 
</script>
