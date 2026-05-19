<template>
  <q-card class="bg-indigo-8 text-white q-ma-lg">
    <q-card-section>
      <span class="text-h6">Posts</span>
      <p>Você tem xx posts</p>
    </q-card-section>
    <q-separator />
    <q-card-actions align="center">
      <q-btn icon-right="dynamic_feed" flat label="ver Post" color="secondary" />
    </q-card-actions>
  </q-card>
  <div class="row">
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
    <div class="col-md-4 col-sm-6">col 4</div>
  </div>
  <routerLink to="/posts"> posts </routerLink>
  <routerLink to="/index"> index </routerLink>
</template>
<script>
import { getAllUsersFromRest } from 'src/services/usersServices.js'
export default {
  name: 'home-page',
  mounted() {
    getAllUsersFromRest()
      .then((users) => {
        console.log(users)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
<style scoped>
.meuCard {
  max-width: 30vw;
}
</style>
