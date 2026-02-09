import {createStore} from "vuex"
import axios from 'axios'
import Venda from "../components/Venda.vue" 

const store = createStore({

    state() {
        return {
       produto2:[], 
        carrinho:[], 
        Vendidos:[],
        //manssagem1:" "

        }
    },
    mutations: {

    // CONFIGURACAO DO REGISTRO DO PRODUTO
     // Adicionar Produto 
         addProduto(state,payload) {
     
             state.produto2.push(payload)
        },

       // Listar Produto

        setProduto(state,payload) {
              state.produto2 = payload
              
        },

      //  Editar Produto 

        updateProduto(state, payload) { 
  
             const index = state.produto2.findIndex(p => p.id === payload.id)
            if(index !== -1){
              state.produto2[index] = payload
            }

    },

        // Eliminar Produto
       
        deleteProduto(state,id){

          const index = state.produto2.findIndex(p => p.id === id)
          
          if(index !== -1){
          
            state.produto2.splice(index,1);
          }

        },

       // FIMM

       // COFIGURACAO DE REGISTRO DE VENDA


       addProdVenda(state,payload) {
                 
        const itemExise = state.produto2.find(
           prod => prod.codigo === payload.codigo 
        )

        const itemExistente = state.carrinho.find(
           prod => prod.codigo === payload.codigo 
        )
       
         if(itemExise && !itemExistente){
          
          state.carrinho.push(payload)
        } //  else{ manssagem1= " Preenche os campos correctamente!!"}
        
       },
      
       removerProdVenda(state,id) {
          const index = state.carrinho.findIndex(
            P => P.id === id
          )

          if(index !== -1){
            state.carrinho.splice(index,1)
          } 
       },
       
       // Finalizar 

       finalizaVenda(state, payload){

        state.Vendidos.push(payload)
         
       },

       setupVenda(state,payload){
          state.Vendidos = payload
       }
        
    

    },
    actions: {
           // CONFIGURACAO DE REGISTRO DO PRODUTO
         
          // ADICIONAR 
          async ADD_PRODUTO({ commit },payload) {
          
            try{
           
                 const {data} = await  axios.post("http://localhost:3000/produtos",payload)
                 commit("addProduto", data)
                
                alert('cadatrdo com sucesso!!')
                console.log("Produto cadastrado com sucesso!!")  
            }catch(error){
    console.error( " Erro ao cadastrar produto",error)
  }
          
},
   // LISTAR


   async SET_PRODUTO({commit}){
          
            try{ 
               
                const {data} = await axios.get("http://127.0.0.1:3000/listarProdutos")
                 commit("setProduto", data)
              
                console.log(" Produto listado com sucesso!!") 
            }catch(error){
        console.error( " Erro",error) 
      //console.log('DATA DO ERRO', error.response?.data)
      //console.log('MENSSAGEM', error.message)
  }
          
},


//EDITAR PRODUTO


  async UPDATE_PRODUTO({commit}, {id,data}){
     try {

     const res = 
     await axios.put(`http://localhost:3000/editarProdutos/${id}
     `, data)
      commit('updateProduto',res.data )
      alert('Editado com sucesso!')

     }catch(err){
      console.log('Erro ao editar o produto',err)
     }
     
    

   },

//ELIMINAR PRODUTO

async DELETE_PRODUTO({commit},id) {
  
    try{
           const {data} =  await axios.delete(`http://localhost:3000/removerProdutos/${id}`)   
           alert("Eliminado com sucesso!!")
         
           commit("deleteProduto", data)


    }catch(error){

      console.log("Erro ao elimianr o produto!!", error)
    }
  },

 // ADICIONAR PRODUTO VENDA

       ADD_PROD_VENDA({commit},payload) {
     try{

        commit("addProdVenda",payload)
      console.log('Adicionado mano!!')
      
      

     }catch(error){
        console.log("Erro ao adicionar!!", error)
        alert("Erro ao adicionar!! Voce de estar a cadastrar oq ja existe")
         
     }

    


  },
  
  REMOVER_VENDA({commit},id){

    try{
        commit("removerProdVenda",id)
        console.log("Excluido com sucesso!")
    }catch(err){
        console.log("Erro ao excluir a venda",err)
    }
  },

  // FINALIZAR VENDA


async FINALIZA_VENDA({commit},payload){
  
  try{
   
  const { data } = await axios.post("http://localhost:3000/finalVenda",payload)

   commit("finalizaVenda", data)
    console.log("Venda finalizada com sucesso!")
  }catch(err){
    console.log("Erro ao finalizar a venda!!",err)


  }
   
},

 // VER AS VENDAS

 async  VER_VENDAS({commit}){

  try{
     const response =  await axios.get("http://localhost:3000/VeVenda")

     commit("setupVenda",response.data )
     console.log("Venda listada com sucesso!")    

  }catch(error){
    console.log("Erro ao listar as vendas!!")
  }
  
  
  }
     
  
    },
    getters:{}
})

export default store