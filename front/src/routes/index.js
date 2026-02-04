
import {createRouter,createWebHistory} from "vue-router"

   import Inicio from '../views/Inicio.vue';
   import Registro from '../views/Registro.vue'
   import Relatorio from '../views/Relatorio.vue';
   import Ferramentas from '../views/Ferramentas.vue';
  // import Gerencia from '../views/Gerencia.vue'
  //import LoginGerencia from "../views/loginGerencia.vue";

const routes = [

     { 
    path:'/',
    name:'Inicio',
    component:Inicio
  },
  {
  path:'/registro',
  nema:'Registro',
  component: Registro

  },

   {
  path:'/relatorio',
  nema:'Relatorio',
  component: Relatorio

  },

   {
  path:'/ferramentas',
  nema:'Ferramentas',
  component: Ferramentas

  },

  // {
  // path:'/gerencia',
  // nema:'Gerencia',
  // component: Gerencia

  // },

  //  {
  // path:'/loginGerencia',
  // nema:'LoginGerencia',
  // component: LoginGerencia

  // },



];

 const router = createRouter({
     
    history:createWebHistory(),
    routes
 })




export default router