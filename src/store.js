import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  actions: {
  },
  mutations: {
    setUser (state, user) {
      state.users.push(user)
    }
  }
})
