import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutatioins.js'
import actions from './actives.js'
import getters from './getters.js'
//安装插件
Vue.use(Vuex)


//创建Store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  actions,
  getters
})

//导出
export default store