<template>
  <!--
  <q-item>
    <q-item-section>
      <q-item-label>{{ post.title }}</q-item-label>
      <q-item-label caption lines="2">{{ post.body }} </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ user.name }}</q-item-label>
      <q-icon name="star" color="yellow" />
    </q-item-section>
  </q-item>
-->

  <q-item>
    <q-item-section>
      <q-item-label>{{ post.title }}</q-item-label>
      <q-item-label caption>{{ post.body }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-badge color="teal" :label="post.userId" />
    </q-item-section>
  </q-item>
</template>
<script>
import { getUserById } from 'src/services/usersServices.js'
export default {
  name: 'post-item',
  props: {
    post: Object,
  },
  computed: {
    user() {
      return getUserById(this.post.userId)
    },
  },
}
</script>
