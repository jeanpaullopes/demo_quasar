<template>
  <q-btn label="filtrar" @click="filtrar()" />
  <q-btn label="limpar filtro" @click="limparFiltro()" />
  <!--
  <div v-for="pst in posts" :key="pst.id">
    <PostItem :post="pst" />
    <q-separator />
  </div>
   -->
  <div v-for="p in posts" :key="p.id">
    <PostItem :post="p" />
  </div>
  {{ posts }}
</template>

<script>
import PostItem from 'src/components/PostItem.vue'
import { getAllPostsFromRest } from 'src/services/postsServices.js'
export default {
  name: 'posts-page',
  components: {
    PostItem,
  },
  data() {
    return {
      posts: [],
      postOriginal: [],
    }
  },
  mounted() {
    getAllPostsFromRest()
      .then((posts) => {
        this.posts = posts
        this.postOriginal = posts
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    filtrar() {
      this.posts = this.postOriginal.filter((post) => post.userId == 2)
    },
    limparFiltro() {
      this.posts = this.postOriginal
    },
  },
}
</script>
