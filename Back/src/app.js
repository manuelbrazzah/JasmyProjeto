import express from 'express'

import cors from 'cors'
//import ProdutoteRoutes from './routes/produtoRoutes.js'
const app = express()

app.use(cors()) 
app.use(express.json())

//app.use('/api', ProdutoteRoutes) 
//so pra fazer um corro


    import { criarProduto, listarProduto, editarProduto, removerProduto } from './controllers/produtoController.js'
  
    app.post('/produtos',criarProduto)
    app.get('/listarProdutos',listarProduto) 
 
   app.put('/editaProdutos/:id', editarProduto)

   app.delete('/removerProdutos/:id',removerProduto)

    




const PORTA = 3000;

app.listen(PORTA, ()=>{

    console.log('Servidor roudando na porta 3000')
})