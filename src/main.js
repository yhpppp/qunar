// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决300ms */
import fastclick from 'fastclick'
/* 广告滚动 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
/* vuex */
import store from './store'
import 'styles/reset.css'
/* 解决1px */
import 'styles/border.css'
/* 图标 */
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
