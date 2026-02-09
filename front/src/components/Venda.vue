
   <template>  
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Fixed Header -->
    <header class="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-10">
      <h1 class="text-2xl font-bold text-gray-700">VENDAS</h1>
      <span class="text-2xl font-semibold text-blue-600">134 000,00 Kzs</span>
    </header><!--Content -->
<main class="flex-1 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
  <!-- Left Section: Table -->
  <section class="lg:col-span-2 space-y-4"> 
    <!-- Search -->
    <div class="relative"> 
      <Search class="absolute left-3 top-2.5 text-green-500 w-5 h-5" />
      <input
        v-model="pesquisa2"
        type="text"
        placeholder="Pesquisar por descrição ou código"
        class="w-full pl-10 pr-4 py-2 border border-green-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      />
    </div>

    <!-- Tabela -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <table class="w-full text-sm text-gray-700">
        <thead class="bg-gray-50 text-gray-600 border-b">
          <tr>
            <th class="text-left p-3">Nome</th>
            <th class="text-left p-3">Preço</th>
            <th class="text-left p-3">Qtd.</th>
            <th class="text-center p-3">Descrição</th>
            <th class="text-center p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr   v-for=" adc in $store.state.carrinho "
             :key="adc.id" class="border-b hover:bg-gray-50">
            <td class="p-3">{{adc.nome}} </td>
            <td class="p-3">{{adc.preco}}</td>
            <td class="p-3">{{adc.quantidade}}</td>
            <td class="p-3 text-center">{{adc.descricao}}</td> 
            <td class="p-3 text-center">{{adc.estado}}</td> 

            <td @click="Remover(adc.id)" class="p-2 border text-red-500 cursor-pointer">❌</td>
          </tr>
        </tbody>
      </table>
    </div>





  </section>

  <!-- Right Section: Form -->
  <section class="bg-white rounded-xl shadow-md p-5 space-y-5">
    <h2 class="text-lg font-semibold text-gray-700 border-b pb-2">Realizar Venda</h2>

    <!-- Product Inputs -->
    <div class="relative">
      <Search class="absolute left-3 top-2.5 text-green-500 w-5 h-5" />
      <input
         v-model="pesquisa"
         @keyup.enter="pesquisaProduto" 
      type="text" placeholder="Pesquisar produto" class="input-modern" />
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <Package class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input type="text" v-model="codigo" placeholder="Código" class="input-modern" />
      </div>
      <div class="relative">
        <Tag class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input type="text"  v-model="descricao"  placeholder="Descrição" class="input-modern" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <DollarSign class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input type="text" v-model="preco" placeholder="Preço" class="input-modern" />
      </div>
      <div class="relative">
        <Hash class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input type="text" v-model="quantidade" placeholder="Qtd" class="input-modern" />
      </div>
    </div>

    <button @click="Adicionar()" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
      Adicionar
    </button>

    <!-- Finalizar Venda -->
    <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 pt-4">Finalizar Venda</h2>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <Wallet class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input
          v-model="valorPago"
        type="Number" placeholder="Valor Entregue" class="input-modern" />
      </div>
      <div class="relative">
        <Percent class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input 
        v-model="desconto"
        type="Number" placeholder="Desconto" class="input-modern" />
      </div>
    </div>

    <div class="relative">
      <RefreshCcw class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      <input 
        v-model="valorTroco"
      type="text" placeholder="Valor Troco" class="input-modern" />
    </div>

    <div class="relative">
      <CreditCard class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      <select class="input-modern appearance-none">
        <option>Forma de Pagamento</option>
      </select>
    </div>

    <div class="flex gap-3 pt-2">
      <button 
         @click="Finalizar()"
      class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
        Finalizar
      </button>
      <button class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
        Cancelar
      </button>
    </div>
  </section>
</main>

  </div>
</template>
<style scoped>

.input-modern {
  @apply w-full pl-10 pr-3 py-2 border border-green-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm;
} 
 </style>

    <script setup>
    //import { Search, DollarSign, CreditCard, Package, Tag, Hash, Wallet, Percent, RefreshCcw } from "lucide-vue-next";
    import  { ref, computed } from "vue";
    import { useStore } from "vuex";
    
    const store = useStore()

    // carrinho

     const id = ref(0)
     const nome = ref('')
     const codigo = ref('')
     const preco = ref()
     const descricao = ref('')
     const quantidade = ref()
     const estado = ref('')
 


     // PESQUISAR PRODUTO  PARA VENDA

      const produtos = computed(()=>
             
      store.state.produto2
      )

      const  pesquisa = ref('')
      const  pesquisa2 = ref('')

       //  FUNCAO  1 DA PESQUISA
     const pesquisaProduto = () => {
      if(!pesquisa.value) return 

       const produtoP = produtos.value.find(
        p => p.codigo === pesquisa.value || 

        p.descricao.toLowerCase().includes(pesquisa.value.toLowerCase()) ||

        p.nome.toLowerCase().includes(pesquisa.value.toLowerCase())

      

       ) 

        if(!produtoP) {
          alert("produto nao encotrad ou ja adicionado!!")
          return
        }
        
      id.value = produtoP.id
      nome.value = produtoP.nome
      codigo.value = produtoP.codigo
      preco.value = produtoP.preco
      descricao.value = produtoP.descricao
      estado.value =  produtoP.estado
 

     }

    // FUNCAO 2 DA PESQUISA         
   

  

     //ADICIONAR PRODUTO PRA VENDA
     //limpar os campos

     const limpCampo = () =>{
        
           pesquisa.value=" "
           codigo.value=" "
           preco.value=" "
           descricao.value=" "
           quantidade.value=" "
           
        
     }

       //REALIZAR VENDA

     // Adicinaro pra venda
  const  Adicionar  = async() =>  {
        await
      store.dispatch('ADD_PROD_VENDA',

      {
        id:id.value,
        nome: nome.value,
        codigo:codigo.value,
        preco:preco.value,
        descricao:descricao.value,
        quantidade:quantidade.value,
        estado:estado.value
      }

      )

     
       limpCampo()
        
     }

       // FINALIZAR VENDA
   
       const valorPago = ref()
       const desconto = ref()
       const valorTroco = ref()
      

       function Finalizar(){
    
           try{
        const itens = []
        for (let i=0;i<store.state.carrinho.length ; i++){
          const produto = store.state.carrinho[i]

          itens.push({
               produtoId: produto.id,
               quantidade:Number(produto.quantidade)
          })           
          
        }
        
  
        store.dispatch("FINALIZA_VENDA",
        {

          itens:itens,
          valorPago:valorPago.value,
          desconto:desconto.value,
        })        


          }catch(err){
            console.log(Error.response.data)
          }

      
        
       }


     //REMOVER OS PRODUTO  LISTADO

     const Remover =  (id) =>{
       
       store.dispatch("REMOVER_VENDA",id)  
       
       
   
     }
    </script>
    


 