
<template>
  
  <Teleport to="body">
   
    <!-- Fundo azul transparente -->
    <div class="fixed inset-0 bg-blue-500/30 flex items-center justify-center z-50">
      
      <!-- Card centralizado -->
      <div class="bg-white w-[600px] rounded-xl shadow-2xl p-6">
        <h2 class="text-lg font-bold text-blue-600 mb-4">Editar Produto</h2>

        
        <div class="grid grid-cols-2 gap-6">

            <label  class="text-sm font-medium">Nome 
             <input type="text" v-model="form.nome" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
            </label>
   
              
            <label  class="text-sm font-medium">Preco
             <input type="number" v-model="form.preco" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
             
             </label> 
                
            <label  class="text-sm font-medium">codigo
             <input type="text" v-model="form.codigo" class="border border-gray-200 rounded w-full p-2 mt-1  focus:ring-2 focus:ring-blue-400">
            </label> 
          
            <label class="text-sm font-medium">Código de Barras
            <input type="text" v-model="form.codBarra" class="border border-gray-200 rounded w-full p-2 mt-1  focus:ring-2 focus:ring-blue-400">
           </label>

          </div>
         
         
          <div class="col-span-2">

            <label class="text-sm font-medium">Descrição</label> 
            <input type="text"  v-model="form.descricao" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
          
              <label class="text-sm font-medium">categoria</label> 
            <input type="text"  v-model="form.categoria" class="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400">
        </div>

          <div>
            <label class="text-sm font-medium">Stock</label> 
             <input type="number" v-model="form.stock" class="border border-gray-300 rounded w-300 p-2 mt-1 focus:ring-2 focus:ring-blue-400">

          <select name="" v-model="form.estado">
        <option value="DISPONIVEL">Disponivel</option>
        <OPtion  value="NOA_DISPONIVEL" >Nao Disponivel</OPtion>
          </select>
          
        </div>

        <div class=" space-x-2 flex justify-end mt-4"> 
          <button @click="cancelarEditar1" class="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">Cancelar</button>
          <button @click="Salvar" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Salvar</button>
        </div>
      </div>

    </div>
  </Teleport>
</template>

<script setup>
 import {ref,watch, reactive} from 'vue'
 //import axios from 'axios' 

 import { useStore } from "vuex"
 const store = useStore()
 
  const props = defineProps({
    
    dados: {
      type:Object,
      required: true
    }

  })

   

     const  form = reactive({
       nome :" ",
       preco: 0,
       codigo :" ",
       codBarra:" ",
       descricao:" ",
       categoria:" ",
       stock: 0,
       estado: "DISPONIVEL",

     })

     watch ( ()=>props.dados, (novo)=>{

         if(!novo) return

         form.nome = novo.nome1
         form.preco= novo.preco1
         form.codigo = novo.codigo1
         form.codBarra = novo.codBarra1
         form.descricao = novo.descricao1 
         form.categoria = novo.categoria1
         form.stock = novo.stock1
         form.estado = novo.estado1

     }, 
     {immediate:true}
       
    )
      


// Emitir  o click(cancelar)
 const emit = defineEmits(['cancelaEditar2'])
 const cancelarEditar1 = ()=>{
    emit('cancelaEditar2')
 }  

   
     // Editar Prodtuo 

     const Salvar = ()=>{
      
     
      store.dispatch( "UPDATE_PRODUTO",
      {
     id: props.dados.id1,
     data:{
             nome: form.nome,
             preco:form.preco, 
             codigo: form.codigo, 
             codBarra: form.codBarra,
             descricao: form.descricao,
             categoria: form.categoria,
             stock: form.stock,
             estado: form.estado

         }
       
       }
     
      )
     }

 
  
  
  
</script>
    
