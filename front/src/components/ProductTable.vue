
<template>
  <div class="bg-white rounded-xl shadow p-4">
    <div class="flex items-center justify-between mb-3">
      <button  @click="AddArtigo" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Novo</button>
      <input
        type="text"
        placeholder="Pesquisar por descrição ou código"
        class="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>

    <table class="min-w-full border border-gray-200 rounded-lg text-sm">
      <thead class="bg-blue-50 text-blue-700 uppercase text-xs">
        <tr>
           <th class="p-2 border">Nome</th>
          <th class="p-2 border">Cod.</th>
          <th class="p-2 border">C.Barras</th>
          <th class="p-2 border">Descrição</th>
          <th class="p-2 border">Preço</th>
          <th class="p-2 border">Stock</th>
          <th class="p-2 border">Estado</th>
          <th class="p-2 border">Data</th>
          <th class="p-2 border">Editar</th>
          <th class="p-2 border">Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" prod in store.state.produto2" :key="prod.id" class="hover:bg-gray-50 text-center">
          <td class="p-2 border"> {{ prod.nome}}</td> 
          <td class="p-2 border"> {{ prod.codigo }}</td>
          <td class="p-2 border">{{ prod.codBarra }}</td>
          <td class="p-2 border">{{ prod.descricao }}</td>
          <td class="p-2 border">Kz {{ 150 }}</td>
          <td class="p-2 border">{{  10 }}</td> 
          <td class="p-2 border text-green-600">Disponível</td> 
          <td class="p-2 border">{{}}</td>
          <td @click="Editar2( prod.id, prod.nome, prod.codigo, prod.codBarra, prod.descricao    

           )" class="p-2 border text-yellow-500 cursor-pointer">✏️</td>
          
         
           <td @click="Remover(prod.id)" class="p-2 border text-red-500 cursor-pointer">❌</td>
          
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
 import { onMounted } from 'vue';
 import  axios from 'axios';
 import { useStore } from 'vuex';

 const store = useStore()

// Emitir o evento
const emit = defineEmits(['AdArtigo'])
const AddArtigo = ()=>{

   emit("AdArtigo")

}

// PRODUTOS

   // Listar produtos 
     
           
  
  onMounted(()=>{

     store.dispatch("SET_PRODUTO")  
     })

  // Emitir editar
   
     
  const Editar2 = (id, nome, codigo, codBarra, descricao)=>{
    
      const produtoEd = {
        id1:id,
        nome1 : nome,
        codigo1: codigo,
        codBarra1: codBarra,
        descricao1:descricao
      }

    emit('Editar1',produtoEd)
  }

  //Remover produto

  const Remover = (id) => {

       store.dispatch('DELETE_PRODUTO',id);
    
  }
</script>
