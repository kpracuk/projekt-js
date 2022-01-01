import { defineStore } from "pinia";
import { User } from "../../api/interfaces/auth";

interface authState {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): authState => ({
    user: null
  }),
  getters: {
    isLoggedIn(state) {
      return !!state.user
    },
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(user: authState['user']) {
      this.user = user
    }
  }
})