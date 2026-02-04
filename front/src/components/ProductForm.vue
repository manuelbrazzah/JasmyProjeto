   
   <template>
  <div class="bg-white rounded-xl shadow p-4">
    <h2 class="text-lg font-semibold mb-4 text-blue-600">Novo Produto</h2>

    <form class="space-y-1">
      <div class="flex gap-2">
        <input type="text" placeholder="Código" class="flex-1 border rounded-md px-3 py-2" />
        <input type="text" placeholder="Código de Barras" class="flex-1 border rounded-md px-3 py-2" />
      </div>

      <input type="text" placeholder="Designação do Produto" class="w-full border rounded-md px-3 py-2" />

      <div class="flex gap-2">
        <input type="number" placeholder="Preço" class="flex-1 border rounded-md px-3 py-2" />
        <input type="number" placeholder="Quantidade" class="flex-1 border rounded-md px-3 py-2" />
        <input type="number" placeholder="Stock" class="flex-1 border rounded-md px-3 py-2" />
      </div>

      <textarea
        placeholder="Informações adicionais"
        class="w-full border rounded-md px-3 py-2"
        rows="3"
      ></textarea>

      <button
        type="button"
        class="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700 font-medium"
      >
        💾 Guardar
      </button>
    </form>
  </div>
</template>

<script setup></script>
    
