

import prisma from "../prismaClient.js";

 // VARIAVEIS DO CACHE

 let cacheProdutos  =  null
  let cacheTime = null
  const CACHE_DURATION = 800000
  
 //  Adicionar  Produto

     export const criarProduto = async (req, res)=> {

    try{ 
        const {nome, codigo, codBarra,descricao, categoria,
                estado, cadastradoEm } = req.body

          let {preco,stock} = req.body
   
           if(typeof preco ==="string"){

              preco = preco.replace(',','.')
           }
          

           preco = Number(preco)
           stock = Number(stock)
        const novoProduto = await

         prisma.produto.create({
            data: {nome, preco, codigo, codBarra, descricao,categoria,
                 stock,estado,cadastradoEm}
        });

        res.status(201).json(novoProduto)
        cacheProdutos = null
        cacheTime = null
    } catch(error) {
        
        console.error(error)
        res.status(500).json({erro:'erro ao cadastrar produto!'})
    }
}
 

  //  LISTAR PRODUTOS

  export const listarProduto = async (req,res) =>{
  
   try{
    const now = Date.now()

    if(cacheProdutos && (now - cacheTime < CACHE_DURATION)){
      console.log("Vindo do cache")
      return res.json(cacheProdutos)
    }
     console.log("Vindo do banco")

    const produtos = await prisma.produto.findMany()
      cacheProdutos = produtos
      cacheTime = now   
  return res.json( produtos)
 // res.status(200).json(produtos)

   }catch(error){
    console.log("Erro ao listar os produtos", error) 
    res.status(500).json({error:"Erro ao listar produtos"})
   }

  }




  // Editar

   export const editarProduto = async (req,res)=>{
    
     const  id  = Number(req.params.id)
     const {nome, codigo, codBarra, descricao,
     categoria, estado,cadastradoEm} = req.body;

               let { preco, stock } = req.body
 
                if(typeof preco ==="string"){

                  preco = preco.replace(',','.')
                }
           
            preco = Number(preco)
            stock = Number(stock)

    try{
      const produtoAtualizado = await prisma.produto.update({
        //where: { id: Number( req.params.id) },
        where: { id: id }, 
        data : {
            nome, preco,codigo,codBarra, descricao, categoria,
            stock, estado, cadastradoEm
        }
      });
      res.status(200).json(produtoAtualizado) 

       cacheProdutos = null
        cacheTime = null
      //res.json({mensagem:"Produto editado com sucesso!"})

    }catch(err){

        res.status(500).json({erro:"Erro ao editar o produto"})
    }

  }



   // Remover produto

  export const removerProduto = async (req,res) =>{

    const id = parseInt(req.params.id);
     try{
   
         await prisma.produto.delete({
            where: {id},
         });
  
        cacheProdutos = null
        cacheTime = null
        console.log("Deletado com sucesso!!")
        return res.json({mensagem:'Eliminado com sucesso'})
        
     }catch(err){
        res.status(500).json({erro:'Erro ao eliminar!!', err})
        
     }

  }
