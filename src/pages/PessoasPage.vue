<template>
  {{ pessoas }}
  <q-list class="q-ma-lg" bordered>
    <q-item v-for="p in pessoas" :key="p.id">
      <q-item-section avatar>
        <q-item-label>
          <q-icon name="face">id: {{ p.id }}</q-icon>
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ p.nome }}</q-item-label>
        <q-item-label caption>{{ p.idade }} anos</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-btn icon="edit" @click="pessoaSelecionada = p" />
      </q-item-section>
    </q-item>
  </q-list>

  <q-btn icon="add" @click="novaPessoa()" />
  <PessoaForm
    titulo="cadastro de pessoas"
    @salvar="onSalvar"
    @cancelar="pessoaSelecionada = undefined"
    v-if="pessoaSelecionada"
    :pessoa="pessoaSelecionada"
  />
</template>
<script>
import PessoaForm from 'src/components/PessoaForm.vue'
export default {
  name: 'pessoas-page',
  components: {
    PessoaForm,
  },
  data() {
    return {
      pessoaSelecionada: undefined,
      pessoas: [
        { id: 1, nome: 'João', idade: 30 },
        { id: 2, nome: 'Maria', idade: 25 },
        { id: 3, nome: 'Pedro', idade: 35 },
      ],
    }
  },
  methods: {
    novaPessoa() {
      const pessoa = {
        id: 0,
        nome: '',
        idade: 0,
      }
      this.pessoaSelecionada = pessoa
    },
    onSalvar(pessoa) {
      this.pessoas.push(pessoa)
      this.pessoaSelecionada = undefined
    },
  },
}
</script>
