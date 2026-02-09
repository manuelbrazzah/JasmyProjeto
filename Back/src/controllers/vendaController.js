
import prisma from "../prismaClient.js"

export const criarVenda = async (req, res) => {

  const   {itens} = req.body

  let {desconto = 0, valorPago } = req.body

  desconto = Number(desconto)
   valorPago = Number(valorPago)


  try {
    const resultado = await prisma.$transaction(async (tx) => {

      let total = 0 

      // 1 Calcular total e validar stock
      for (const item of itens) {

        const produto = await tx.produto.findUnique({
          where: { id: item.produtoId }
        })

        if (!produto)
          throw new Error("Produto não encontrado")

        if (produto.stock < item.quantidade)
          throw new Error(`Stock insuficiente para ${produto.nome}`)

        total += produto.preco * item.quantidade
      }

      // 2 Aplicar desconto
      const totalFinal = total - desconto

      if (valorPago < totalFinal)
        throw new Error("Valor pago é insuficiente")

      const troco = valorPago - totalFinal

      // 3 Criar venda
      const  venda = await tx.venda.create({
        data: {
          total,
          desconto,
          totalFinal,
          valorPago,
          troco
        }
      })

      // 4 Criar itens e atualizar stock
      for (const item of itens) {

        const produto = await tx.produto.findUnique({
          where: { id: item.produtoId }
        })

        await tx.itemVenda.create({
          data: {
            vendaId: venda.id,
            produtoId: produto.id,
            quantidade: item.quantidade,
            preco: produto.preco,
            descricao: produto.descricao,
            codigo: produto.codigo
          }
        })

        await tx.produto.update({
          where: { id: produto.id },
          data: {
            stock: produto.stock - item.quantidade
          }
        })
      }

      return { venda, troco } 
    })

    res.status(201).json(resultado)

  } catch (error) {
    console.log("ERRO REAL:",error)
    res.status(400).json({ error: error.message })
  }
}

export  const VerVenda = async(req,res)=>{

  try{

  

  const vendas = await prisma.venda.findMany({
    include: {
      itens: {
       include:{
        produto:true
       }
      }
    },
    orderBy: {
      creatdAt:"desc"
    }
  })
    res.json(vendas)
}catch(err){
  console.log("ERRO REAL",err)
}
}

