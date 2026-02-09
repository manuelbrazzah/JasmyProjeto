<template>
    <div>
        <h1>RELATORIO DE PRODUTOS</h1>
    </div>

    <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-blue-50 text-blue-700 uppercase text-xs">
            <tr>
               <th class="p-2 border">id</th>
               <th class="p-2 border">total</th>
               <th class="p-2 border">desconto</th>
              <th class="p-2 border">totalFinal</th>
              <th class="p-2 border">valorPago</th>
              <th class="p-2 border">troco</th>
              <th class="p-2 border">Estado</th>
              <th class="p-2 border">itens</th>
              <th class="p-2 border">Data</th>
              <th class="p-2 border">Editar</th>
              <th class="p-2 border">Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" vd in store.state.Vendidos" :key="vd.id" class="hover:bg-gray-50 text-center">
              <td class="p-2 border"> {{ vd.id}} </td> 
              <td class="p-2 border">Kz {{ formatar(vd.total) }}</td>
              <td class="p-2 border"> {{  formatar(vd.desconto) }}</td>
              <td class="p-2 border">{{ formatar(vd.totalFinal)  }}</td>
              <td class="p-2 border">{{ formatar(vd.ValorPago)  }}</td>
              <td class="p-2 border">{{ formatar(vd.troco) }}</td>
              <td class="p-2 border">{{ vd.estado }}</td> 

              <td class="p-2 border">{{vd.creatdAt }}</td>

              <div v-for="item in vd"
                :key="item.id">
              <p class="p-2 border text-green-600">{{item.produto.nome}} - </p> 
              <p class="p-2 border text-green-600">{{item.quantidade}} X</p> 
              <p class="p-2 border text-green-600">{{item.produto.preco}}</p> 
              </div>

              
              
              
                       
             
            </tr>
          </tbody>
        </table>
        <!--
         <div>
       <h1>  AS VENDAS </h1>
      <pre>
        {{ JSON.stringify(Vendidos, null, 2) }}
      </pre>

         </div>

        -->
         
   

</template>

<script setup>
import { onMounted, cumputed } from "vue";
import { useStore} from "vuex"

const store = useStore()

  // VER AS VENDAS

  ///teste

   // const Vendidos = computed(() =>store.state.Vendidos)
  
   onMounted(()=>{
   store.dispatch('VER_VENDAS')
   })
    // FORMATAR VENDA COM PONTO

    const formatar = (valor) =>{

      return
      Number(valor).toLocaleString("pt-AO")
    }
</script>