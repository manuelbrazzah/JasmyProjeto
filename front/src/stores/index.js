import {createStore} from "vuex"
import axios from 'axios'

const store = createStore({

    state() {
        return {
       produto2:[], 
         

         tope : " VERDADE!!"

        }
    },
    mutations: {
     // Adicionar Produto 
         addProduto(state,payload) {
     
             state.produto2.push(payload)
        },

       // Listar Produto

        listProduto(state,payload) {
              state.produto2 = payload
              
        },

        // Editar Produto

        updateProduto(state, payload){
  
                 const index = state.produto2.findIndex(p => p.id = payload.id)
                if(index != -1){
                  state.produto2[index] = payload
                }

        },

        // Eliminar Produto
       
        deleteProduto(state,id){

          const index = state.produto2.findIndex(p => p.id === id)
          
          if(index !== -1){
          
            state.produto2.splice(index,1);
          }

        }
    },
    actions: {
        
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
           
                 const { data } = await axios.get("http://localhost:3000/listarProdutos")
                 commit("listProduto", data)
                alert('Listdo  com sucesso!!')
                console.log("Produto listado com sucesso!!") 
            }catch(error){
    console.error( " Erro ao listar produto",error) 
  }
          
},


//EDITAR PRODUTO


  async UPDATE_PRODUTO({commit}, payload){
     try {

     const { data } = 
     await axios.put(`http://localhost:3000/editarProdutos/${payload.id}
     `,payload)
      commit('updateProduto', data)
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
  }

     
  
    },
    getters:{}
})

export default store