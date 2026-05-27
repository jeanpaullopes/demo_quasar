<template>
  <q-card bordered class="q-ma-lg q-pa-md">
    <q-card-section>
      <span class="text-h6"> {{ titulo }}</span>
    </q-card-section>
    <q-separator />
    <q-form @validation-success="salvar">
      id: {{ pessoa.id }}
      <q-input
        outlined
        lazy-rules
        :rules="[(val) => val.length >= 3 || 'O nome tem que ter pelo menos 3 caracteres']"
        v-model="pessoaLocal.nome"
        label="Nome"
      />
      <q-input outlined v-model="pessoaLocal.idade" label="Idade" type="number" />
      <q-checkbox
        v-model="conferido"
        label="Eu conferi os dados e estão corretos"
        color="primary"
      />
      <q-card-actions align="center">
        <q-btn label="cancelar" @click="cancelar" />
        <q-btn v-if="conferido" label="salvar" color="primary" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
<script>
export default {
  name: 'pessoaForm',
  emits: ['cancelar', 'salvar'],
  props: {
    pessoa: Object,
    titulo: String,
  },
  data() {
    return {
      conferido: false,
      pessoaLocal: { ...this.pessoa },
    }
    //pessoaLocal: {
    //  id: this.pessoa.id,
    //  nome: this.pessoa.nome,
    //  idade: this.pessoa.idade,
    //}
  },
  methods: {
    cancelar() {
      this.$emit('cancelar')
    },
    salvar() {
      this.$emit('salvar', this.pessoaLocal)
    },
  },
}
</script>
