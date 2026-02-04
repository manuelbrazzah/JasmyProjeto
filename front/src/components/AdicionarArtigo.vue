
<template>
  <Teleport to="body">
    <!-- Fundo azul transparente -->
    <div class="fixed inset-0 bg-blue-500/30 flex items-center justify-center z-50">
      
      <!-- Card centralizado -->
      <div class="bg-white w-[600px] rounded-xl shadow-2xl p-6">
        <h2 class="text-lg font-bold text-blue-600 mb-4">Novo Produto</h2>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label  class="text-sm font-medium">Nome</label>
             <input type="text" v-model="nome" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">

            <label class="text-sm font-medium">Código</label>
            <input type="text"  v-model="codigo" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
          <div>
            <label class="text-sm font-medium">Código de Barras</label>
            <input type="text"  v-model="codBarra" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
          <!--
            <h1> PRODUTOS: {{ Produto.value.descricao}}</h1>

            -->>
          <div class="col-span-2">
            <label class="text-sm font-medium">Descrição</label>
            <input type="text"  v-model="descricao" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
        </div>

        <div class=" space-x-2 flex justify-end mt-6">
          <button @click="cancelar" class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">Cancelar</button>
          <button @click="Guardar" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Guardar</button>
        </div>
      </div>

    </div>
  </Teleport>
</template>

<script setup >
 import {ref,  onMounted } from 'vue'
 import axios from 'axios' 
 import { useStore } from 'vuex'

 const store = useStore()



// Emitir  o click(cancelar)
 const emit = defineEmits(['cancelaArtigo'])
 const cancelar = ()=>{
    emit('cancelaArtigo')
 }


   // Variaveis do novo produto
     
    const nome = ref('')
    const codigo = ref('')
    const codBarra = ref('')
    const descricao = ref('')
    
    // PRODUTO

    // CADASTRA PRODUTO
 const Guardar = ()=>{ 

    const payload = {
          nome: nome.value,
          codigo: codigo.value,
          codBarra : codBarra.value,
          descricao: descricao.value
        }

     store.dispatch('ADD_PRODUTO',payload)
    
 }

 
  // LISTAR PRODUTO

  
  
  
</script>
    
