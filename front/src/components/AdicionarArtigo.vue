
<template>
  <Teleport to="body">
    <!-- Fundo azul transparente -->
    <div class="fixed inset-0 bg-blue-500/30 flex items-center justify-center z-50">
      
      <!-- Card centralizado -->
      <div class="bg-white w-[600px] rounded-xl shadow-2xl p-6">
        <h2 class="text-lg font-bold text-blue-600 mb-4">Novo Produto</h2>
        
        <div class="grid grid-cols-2 gap-6">
          
            <label  class="text-sm font-medium">Nome
             <input type="text" v-model="nome" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
           </label>
               <label  class="text-sm font-medium">Preco
             <input type="text" v-model="preco" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
             </label>

            <label class="text-sm font-medium">Código
            <input type="text"  v-model="codigo" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
            </label>
   
              <label class="text-sm font-medium">Código de Barras
            <input type="text"  v-model="codBarra" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
            </label>
             </div>
         
          <div class="col-span-2">
            <label class="text-sm font-medium">Descrição</label>
            <input type="text"  v-model="descricao" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">

            <label class="text-sm font-medium">Categoria</label>
            <input type="text"  v-model="categoria" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
           
              </div>

               <div>
            <label class="text-sm font-medium">Stock</label> 
             <input type="number" v-model="stock" class="border border-gray-300 rounded w-300 p-2 mt-1 focus:ring-2 focus:ring-blue-400">

          <select name="" v-model="estado">
        <option value="DISPONIVEL">Disponivel</option>
        <OPtion  value="NOA_DISPONIVEL" >Nao Disponivel</OPtion>
          </select>
          
        </div>

        <div class=" space-x-2 flex justify-end mt-4">
          <button @click="cancelar" class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">Cancelar</button>
          <button @click="Guardar" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Guardar</button>
        </div>
       </div>
      </div>
    
  </Teleport>
</template>

<script setup>
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
    const preco = ref(0)
    const codigo = ref('')
    const codBarra = ref('')
    const descricao = ref('')
    const categoria = ref('')
    const stock = ref(0)
    const estado = ref('DISPONIVEL')
    
    // PRODUTO

    // CADASTRA PRODUTO
 const Guardar = ()=>{ 

    const payload = {
          nome: nome.value,
          preco: preco.value,
          codigo: codigo.value,
          codBarra : codBarra.value,
          descricao: descricao.value,
          categoria: categoria.value,
          stock: stock.value,
          estado: estado.value
        }

     store.dispatch('ADD_PRODUTO',payload)
    
 }

 
  // LISTAR PRODUTO

  
  
  
</script>
    
