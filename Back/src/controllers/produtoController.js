


import prisma from "../prismaClient.js";

 //  Adicionar  Produto

     export const criarProduto = async (req, res)=> {

    try{
        const {nome, codigo, codBarra, descricao} = req.body

        const novoProduto = await

         prisma.produto.create({
            data:{nome, codigo, codBarra, descricao}
        });

        res.status(201).json(novoProduto)
    } catch(error) {
        
        console.error(error)
        res.status(500).json({erro:'erro ao cadastrar produto!'})
    }
}
 

  //  LISTAR PRODUTOS

  export const listarProduto = async(req,res) =>{
  
   try{
    const produtos = await prisma.produto.findMany()
    res.json(produtos)

   }catch(error){
    console.log("Erro ao listar os produtos", error)
    res.status(500).json({error:"Erro ao listar produtos"})
   }

  }

 
  // Remover produto

  export const removerProduto = async (req,res) =>{

    const id = parseInt(req.params.id);
     try{
   
         await prisma.produto.delete({
            where: {id},
         });

        // console.log("Deletado com sucesso!!")
        return res.json({mensagem:'Eliminado com sucesso'})
        
     }catch(err){
        res.status(500).json({erro:'Erro ao eliminar!!', err})
        
     }

  }



  // Editar

  export const editarProduto = async (req,res)=>{
    
     const { id } = req.params
     const {nome, codigo, codBarra, descricao } = req.body;

    try{
      const produtoAtualizado = await prisma.produto.update({
        where: { id: Number( req.params.id) },
        data : {
            nome,codigo,codBarra, descricao
        }
      });
      res.status(200).json(produtoAtualizado) 
      res.json({mensagem:"Produto editado com sucesso!"})

    }catch(err){

        res.status(500).json({erro:"Erro ao editar o produto",err})
    }

  }