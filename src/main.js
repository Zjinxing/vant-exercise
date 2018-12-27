import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/icon.styl'
import { Dialog, Lazyload } from 'vant'

Vue.config.productionTip = false
Vue.use(Dialog)
Vue.use(Lazyload)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
