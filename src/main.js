// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决300ms */
import fastclick from 'fastclick'
import 'styles/reset.css'
/* 解决1px */
import 'styles/border.css'
/* 图标 */
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
