import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import toast from './components/common/toast'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(toast)

//解决移动端300ms延迟
fastclick.attach(document.body)
//vue图片懒加载  :src 换成v-lazy
Vue.use(VueLazyload)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
