<template>
  <div class="home">
    <div class="flex">
      <div class="card" v-for="(video, idx) in videos[0].slice(pageStart, pageStart + countOfPage)" :key="idx">
        <div class="image-text">
          <img :src="video.image" @click="jump(video.id)">
          <p class="time">{{video.time}}</p>
        </div>
        <div>
          <p class="title">{{video.title}}</p>
          <p class="description">{{video.description}}</p>
        </div>
        <button v-if="video.Favorite || Favorites.includes(video.id)" class="deleteFavoritebutton" @click="dele(video)">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
        <button v-else class="Favoritebutton" @click="add(video)">
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
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage
    },
    totalPage: function () {
      return Math.ceil(this.videos[0].length / this.countOfPage)
    },
    Favorites () {
      return this.$store.getters.Favorites.map(d => {
        return d.id
      })
    },
    videos () {
      return this.$store.getters.Videos
    }
  },
  methods: {
    setPage: function (idx2) {
      if (idx2 <= 0 || idx2 > this.totalPage) {
        return
      }
      this.currPage = idx2
    },
    add (video) {
      video.Favorite = true
      this.$store.commit('addVideo', video)
    },
    dele (video) {
      video.Favorite = false
      this.$store.commit('deleVideohome', video)
    },
    jump (id) {
      this.$router.push('/video/' + id)
    }
  },
  async mounted () {
    try {
      const data1 = await this.axios.get(process.env.VUE_APP_APIURL + '/video')
      const data2 = await this.axios.get(process.env.VUE_APP_APIURL + '/video/' + data1.data.response.nextPageToken)
      const data3 = data1.data.response.items.concat(data2.data.response.items)
      this.$store.commit('addVideos', data3)
    } catch (error) {
      console.log(error)
      alert('發生錯誤')
    }
  }
}
</script>
