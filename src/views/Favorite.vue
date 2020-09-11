<template>
  <div class="Favorite">
    <div class="flex">
      <div class="card" v-for="(Favorite, idx) in Favorites.slice(pageStart, pageStart + countOfPage)" :key="idx">
        <div class="image-text">
          <img :src="Favorite.image">
          <p class="time">{{Favorite.time}}</p>
        </div>
        <div>
          <p class="title">{{Favorite.title}}</p>
          <p class="description">{{Favorite.description}}</p>
        </div>
        <button v-if="Favorite.Favorite" class="deleteFavoritebutton" @click="dele(Favorite)">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </div>
    </div>
    <div>
      <ul class="button-flex">
        <li  @click.prevent="setPage(currPage-1)">
          <a href="#">
            <button :disabled="currPage === 1">
            <font-awesome-icon :icon="['fas', 'angle-double-left']" /></button>
            </a></li>
        <li v-for="(n, idx3) in totalPage" :key="idx3" @click.prevent="setPage(n)">
          <a href="#">
            <button :disabled="currPage === n" >{{n}}</button>
            </a></li>
        <li  @click.prevent="setPage(currPage+1)">
          <a href="#">
            <button :disabled="currPage === totalPage">
            <font-awesome-icon :icon="['fas', 'angle-double-right']" /></button>
            </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countOfPage: 12,
      currPage: 1
    }
  },
  computed: {
    Favorites: {
      get () {
        return this.$store.getters.Favorites
      }
    },
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage
    },
    totalPage: function () {
      return Math.ceil(this.Favorites.length / this.countOfPage)
    }
  },
  methods: {
    setPage: function (idx2) {
      if (idx2 <= 0 || idx2 > this.totalPage) {
        return
      }
      this.currPage = idx2
    },
    dele (Favorite) {
      this.$store.commit('deleVideo', Favorite)
    }
  },
  mounted () {}
}
</script>
