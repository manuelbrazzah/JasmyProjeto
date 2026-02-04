
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
             <input type="text" v-model="dados.nome1" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">

            <label class="text-sm font-medium">Código</label>
            <input type="text"  v-model="dados.codigo1" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
          <div>
            <label class="text-sm font-medium">Código de Barras</label>
            <input type="text"  v-model="dados.codBarra1" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
         
          <div class="col-span-2">
            <label class="text-sm font-medium">Descrição</label>
            <input type="text"  v-model="dados.descricao1" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          </div>
        </div>

        <div class=" space-x-2 flex justify-end mt-6"> 
          <button @click="cancelarEditar1" class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">Cancelar</button>
          <button @click="Salvar()" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Salvar</button>
        </div>
      </div>

    </div>
  </Teleport>
</template>

<script setup>
 import {ref,watch} from 'vue'
 //import axios from 'axios' 

 import { useStore } from "vuex"
 const store = useStore()
 
  const props = defineProps({
   
    dados:Object

  })

  // const dados =ref({

  //     id1: '', 
  //    nome1: '',
  //    codigo1: '',
  //    codBarra1: '',
  //    descricao1 :''
  // })

  // watch(
  //   () => props.dados, 
  //   (novo) => {
  //     if(novo) {
  //       dados.value = {novo}
  //       console.log("WATCH DISPAROU",dados.value.nome1)
  //     }

  //   },
  //     { immediate: true }
  // )

// Emitir  o click(cancelar)
 const emit = defineEmits(['cancelaEditar2'])
 const cancelarEditar1 = ()=>{
    emit('cancelaEditar2')
 }



   // Variaveis do novo produto
     

     // Editar Prodtuo

     const Salvar = () =>{  

      store.dispatch("UPDATE_PRODUTo",
 
      {
      id: props.dados.value.id1,    
     nome: props.dados.value.nome1,
     codigo: props.dados.value.codigo1,
     codBarra: props.dados.value.codBarra1,
     descricao : props.dados.value.descricao1 
      }
     
    
     )

     console.log('Os editadosnokddkkd:',props.value.nome1)
     }

 
  
  
  
</script>
    
