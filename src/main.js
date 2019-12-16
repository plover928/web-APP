import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { post, fetch } from '../config/axios'
import VueLazyLoad from 'vue-lazyload'

import fastclick from 'fastclick'

import '@/common/stylus/index.styl'

Vue.prototype.$get = fetch
Vue.prototype.$post = post

Vue.use(VueLazyLoad, {
  loading: require('@/common/image/default.png')
})

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
