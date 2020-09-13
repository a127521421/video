<template>
  <div class="video">
    <video
      id="my-player"
      class="video-js"
      controls
      preload="auto"
      :poster="video.image"
      data-setup='{}'>
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    <h3>{{video.title}}</h3>
    <p>{{video.description}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      video: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    Videos () {
      return this.$store.getters.Videos
    }
  },
  mounted () {
    const _this = this
    const index = this.Videos[0].findIndex(function (item, i) {
      return item.id === _this.id
    })
    this.video = this.$store.getters.Videos[0][index]
  }
}
</script>
