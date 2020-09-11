import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/favorite',
    name: 'Favorite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue'),
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/video/:id',
    name: 'Video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue'),
    meta: {
      title: '影片'
    }
  }
]

const router = new VueRouter({
  routes
})

// 顯示標題
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
