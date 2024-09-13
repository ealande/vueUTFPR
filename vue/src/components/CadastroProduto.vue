<script setup lang="ts">
import produtoApi from '../api/ProdutoApi'
import type { ProdutoModel } from '@/model/ProdutoModel';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let loading = ref(false);
let successMessage = ref(false);
let errorMessage = ref(false);
let produto = ref<ProdutoModel>({
  id: null,
  nome: '',
  quantidade: 0,
})

const route = useRoute()
const id = route?.params?.id;
if (id) {
  produtoApi.buscarPorId(id).then(retorno => {
    console.log(retorno)
    produto.value = {
      id: retorno.id,
      nome: retorno.nome,
      quantidade: retorno.quantidade
    }
  });
}


const cadastrar = () => {
  console.log('chamou o cadastrar');
  console.log(produto);

  loading.value = true;
  produtoApi.salvar(produto.value).then(retorno => {
    produto.value = {
      id: null,
      nome: '',
      quantidade: 0,
    }
    successMessage.value = true;
    loading.value = false;
  }, error => {
    loading.value = false;
    errorMessage.value = true;
  });
}
</script>
<template>
  <h3>Cadastro de produtos</h3>
  <div v-if="successMessage" class="alert alert-success" role="alert">
    Cadastro realizado com sucesso.
  </div>
  <div v-if="errorMessage" class="alert alert-danger" role="alert">
    Erro ao realizar o cadastro.
  </div>
  <form @submit.prevent="cadastrar">
    <div class="form-group">
      <label class="form-label">Nome</label>
      <input class="form-control" type="text" v-model="produto.nome" required />
    </div>
    <div class="form-group">
      <label class="form-label">Quantidade</label>
      <input class="form-control" type="number" v-model="produto.quantidade" required />
    </div>
    <br>
    <div class="row">
      <div class="col-2">
        <button v-if="!id" class="btn btn-primary" type="submit">Cadastrar</button>
        <button v-if="id" class="btn btn-primary" type="submit">Alterar</button>
      </div>
      <div class="col">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  </form>
</template>
<style scoped></style>
