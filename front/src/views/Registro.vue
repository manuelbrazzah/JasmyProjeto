<template>
  
      <div class="flex min-h-screen bg-gray-100">

 <Teleport to="body">
           <AdFuncionario @cancelaFuncionario="refutaFuc" v-if="AtivaFormFuc"/>
          <AdicionarArtigo  @cancelaArtigo="refutaArt" v-if="ativaArtigo" />
           <EditarProduto 
            :dados="recebido"
            @cancelaEditar2="refutaEditar" v-if="ativaEditarP" />

         </Teleport>

    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b
      from-[#1a0733] to-[#3b0ca3] text-white flex flex-col">
      <div class="p-4 text-2xl font-bold flex items-center space-x-2">
        <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
        <span>DeskApp</span>
      </div>
      <nav class="flex-1 mt-6 space-y-2">
        <a href="#"  @click="produto" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-home-4-line mr-3"></i> Produtos
        </a>
        <a href="#" @click="venda" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-2-line mr-3"></i> Vendas
        </a>
        <a href="#"  @click="funcionario" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-bar-chart-box-line mr-3"></i> Funcionarios
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-calendar-line mr-3"></i> Estoque
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-slate-800">
          <i class="ri-settings-3-line mr-3"></i> Terminar
        </a>
      </nav>
    </aside>

      <ProductTable   v-if="AtivaProduto" @AdArtigo="novoArtigo"  
             @Editar1="Editar" />
        <Funcionario   v-if="AtivaFuncionario" @AdFuncionario="novoFuncionario" />
         <Venda v-if="AtivaVenda" />
      
         
     </div> 
     

</template>

<script setup>


import { Teleport } from 'vue';
import AdicionarArtigo from '../components/AdicionarArtigo.vue';
import ProductTable from '../components/ProductTable.vue'
import Funcionario from '../components/Funcionario.vue';
import { ref } from 'vue';
//import axios from 'axios';
import AdFuncionario from '../components/AdFuncionario.vue';
import Venda from '../components/Venda.vue';
import EditarProduto from '../components/EditarProduto.vue';

  
  const ativaArtigo = ref(false)
  const AtivaProduto = ref(false)
  const AtivaFuncionario =ref(false)
  const AtivaVenda = ref(false)
  const AtivaFormFuc = ref(false)
  const  ativaEditarP = ref(false)

 // LINKS DO NAVI ASIDE 
  // Produto
 const produto = ()=>{

   AtivaProduto.value= true
  AtivaFuncionario.value = false
   AtivaVenda.value = false
 }

//  Funcionario

 const funcionario = () =>{

   AtivaFuncionario.value = true
   AtivaProduto.value = false
   AtivaVenda.value = false
 }  

     // Adicionar funcionario
  const novoFuncionario =()=>{
   
   AtivaFormFuc.value = true
    
    
  }
      
    // cancelar funcionario

    const refutaFuc = ()=>{
      AtivaFormFuc.value = false
    }

  // Venda
   const venda = ()=>{

    AtivaVenda.value= true
     AtivaFuncionario.value = false
   AtivaProduto.value = false
   
   }
  // Adiciona artigo
 const novoArtigo = () =>{
 ativaArtigo.value = true
 }
 //cancela Artigo

 const refutaArt = ()=>{

  ativaArtigo.value= false
  
 }


 // Editar Produto

   const recebido = ref(null)
 // Editar e receber dados
 const Editar =(obj)=>{

  ativaEditarP.value = true
  recebido.value = obj
  console.log("os dados sao:", recebido)


 }

// Cancelar Editar

const  refutaEditar = () =>{
 ativaEditarP.value = false

}


</script>