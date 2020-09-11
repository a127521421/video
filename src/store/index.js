import Vue from 'vue'
import Vuex from 'vuex'
// localStorage import
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Favorites: []
  },
  getters: {
    Favorites (state) {
      return state.Favorites
    }
  },
  mutations: {
    addVideo (state, data) {
      state.Favorites.push(data)
    },
    deleVideo (state, data) {
      state.Favorites.splice(data, 1)
    }
  },
  plugins: [createPersistedState()]
})
