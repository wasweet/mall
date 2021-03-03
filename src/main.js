import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import toast from './components/common/toast'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

//引入vant（移动组件库）组件
import Vant from 'vant'
import "vant/lib/index.css";

Vue.config.productionTip = false

Vue.use(toast)

//解决移动端300ms延迟
fastclick.attach(document.body)
//vue图片懒加载  :src 换成v-lazy
Vue.use(VueLazyload)

//使用Vant组件库
Vue.use(Vant)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
