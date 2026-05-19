import { defineStore, acceptHMRUpdate } from 'pinia'

const useAppStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    users: [],
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
  },

  actions: {
    increment() {
      this.counter++
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}

export const appStore = useAppStore()
