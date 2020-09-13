import Vue from 'vue'
import Vuex from 'vuex'
// localStorage import
import createPersistedState from 'vuex-persistedstate'
const ytDuration = require('youtube-duration')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Videos: [],
    Favorites: []
  },
  getters: {
    Favorites (state) {
      return state.Favorites
    },
    Videos (state) {
      return state.Videos
    }
  },
  mutations: {
    addVideos (state, data) {
      state.Videos.splice(0, 100)
      state.Videos.push(data.map(d => {
        return {
          id: d.id,
          time: ytDuration.format(d.contentDetails.duration),
          image: d.snippet.thumbnails.medium.url,
          title: d.snippet.localized.title,
          description: d.snippet.channelTitle,
          Favorite: false
        }
      }))
    },
    addVideo (state, data) {
      state.Favorites.push(data)
    },
    deleVideo (state, data) {
      state.Favorites.splice(data, 1)
    },
    deleVideohome (state, data) {
      const index = state.Favorites.findIndex(function (item, i) {
        return item.id === data.id
      })
      state.Favorites.splice(index, 1)
    }
  },
  plugins: [createPersistedState()]
})
