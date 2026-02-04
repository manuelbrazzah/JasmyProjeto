
   <template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Fixed Header -->
    <header class="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-10">
      <h1 class="text-2xl font-bold text-gray-700">VENDAS</h1>
      <span class="text-2xl font-semibold text-blue-600">134 000,00 Kzs</span>
    </header><!-- Content -->
<main class="flex-1 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
  <!-- Left Section: Table -->
  <section class="lg:col-span-2 space-y-4">
    <!-- Search -->
    <div class="relative">
      <Search class="absolute left-3 top-2.5 text-green-500 w-5 h-5" />
      <input
        type="text"
        placeholder="Pesquisar por descrição ou código"
        class="w-full pl-10 pr-4 py-2 border border-green-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      />
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <table class="w-full text-sm text-gray-700">
        <thead class="bg-gray-50 text-gray-600 border-b">
          <tr>
            <th class="text-left p-3">Descrição</th>
            <th class="text-left p-3">Preço</th>
            <th class="text-left p-3">Qtd.</th>
            <th class="text-center p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b hover:bg-gray-50">
            <td class="p-3">Produto Exemplo</td>
            <td class="p-3">10 000,00</td>
            <td class="p-3">1</td>
            <td class="p-3 text-center">Pendente</td>
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
      <input type="text" placeholder="Pesquisar produto" class="input-modern" />
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <Package class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input type="text" placeholder="Código" class="input-modern" />
      </div>
      <div class="relative">
        <Tag class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input type="text" placeholder="Descrição" class="input-modern" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <DollarSign class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input type="text" placeholder="Preço" class="input-modern" />
      </div>
      <div class="relative">
        <Hash class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input type="text" placeholder="Qtd" class="input-modern" />
      </div>
    </div>

    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
      Adicionar
    </button>

    <!-- Finalizar Venda -->
    <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 pt-4">Finalizar Venda</h2>

    <div class="grid grid-cols-2 gap-3">
      <div class="relative">
        <Wallet class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input type="text" placeholder="Valor Entregue" class="input-modern" />
      </div>
      <div class="relative">
        <Percent class="absolute left-3 top-2.5 text-gray-500 w-4 h-6" />
        <input type="text" placeholder="Desconto" class="input-modern" />
      </div>
    </div>

    <div class="relative">
      <RefreshCcw class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      <input type="text" placeholder="Valor Troco" class="input-modern" />
    </div>

    <div class="relative">
      <CreditCard class="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      <select class="input-modern appearance-none">
        <option>Forma de Pagamento</option>
      </select>
    </div>

    <div class="flex gap-3 pt-2">
      <button class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
        Finalizar
      </button>
      <button class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
        Cancelar
      </button>
    </div>
  </section>
</main>

  </div>
</template><script setup>
//import { Search, DollarSign, CreditCard, Package, Tag, Hash, Wallet, Percent, RefreshCcw } from "lucide-vue-next";
</script>
<style scoped>

.input-modern {
  @apply w-full pl-10 pr-3 py-2 border border-green-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm;
} 
</style>
    
    
