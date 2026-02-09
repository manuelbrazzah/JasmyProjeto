import express from 'express'

import cors from 'cors'
//import ProdutoteRoutes from './routes/produtoRoutes.js'
const app = express()

// app.use(cors({
//     origin:'http://localhost:5173'
// })) 

 app.use(cors()) 
app.use(express.json())

// app.use((err,res,req,next)=>{
//     console.err(err)
//     res.status(500).json({erro:'erro inesperado!'})
// })



    // ROTAS PARA O PRODUTO    

    import { criarProduto, listarProduto, editarProduto, removerProduto } from './controllers/produtoController.js'
  
    app.post('/produtos',criarProduto)

    app.get('/listarProdutos',listarProduto) 
 
    app.put('/editarProdutos/:id', editarProduto) 

   app.delete('/removerProdutos/:id',removerProduto) 

    // ROTA PARA VENDA

    import {criarVenda,VerVenda} from  './controllers/vendaController.js'
    app.post('/finalVenda',criarVenda)
    app.get('/VeVenda',VerVenda)



const PORTA = 3000;

app.listen(PORTA, ()=>{

    console.log('Servidor roudando na porta 3000')
})