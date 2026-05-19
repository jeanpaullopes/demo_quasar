<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>
<script>
import { appStore } from 'src/stores/example-store.js'
export default {
  name: 'index-page',
  created() {
    console.log('index page', appStore.users)
  },
}
</script>
