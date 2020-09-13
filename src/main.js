import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleDoubleLeft, faAngleDoubleRight, faHeart, faHome } from '@fortawesome/free-solid-svg-icons'

import './style/style.styl'

library.add(faAngleDoubleLeft, faAngleDoubleRight, faHeart, faHome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 讓 axios 預設會傳認證資訊，原本是不會傳
axios.defaults.withCredentials = true

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
