import { createRouter, createWebHistory } from 'vue-router'
import CadastroProduto from '@/components/CadastroProduto.vue'
import ListaProduto from '@/components/ListaProduto.vue'
import CadastroCliente from '../components/CadastroCliente.vue'
import ListaCliente from '../components/ListaCliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cadastro-cliente',
      name: 'cadastro cliente',
      component: CadastroCliente
    },
    {
      path: '/cadastro-cliente/:id',
      name: 'carregar cliente',
      component: CadastroCliente
    },
    {
      path: '/lista-cliente',
      name: 'lista cliente',
      component: ListaCliente
    },
    {
      path: '/cadastro-produto',
      name: 'cadatro produto',
      component: CadastroProduto
    },
    {
      path: '/lista-produto',
      name: 'lista produto',
      component: ListaProduto
    },
  ]
})

export default router
