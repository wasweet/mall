import Vue from 'vue'
import Router from 'vue-router'

//1.安装插件
Vue.use(Router)

//2.创建router
const router = new Router({
  mode: 'history',
  routes: [

    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:() => import('../views/home/Home')
    },
    {
      path:'/cart',
      component:() => import('../views/cart/Cart')
    },
    {
      path:'/profile',
      component:() => import('../views/profile/Profile')
    },
    {
      path:'/category',
      component:() => import('../views/category/Category')
    },
    {
      path:'/detail/:iid',
      component:() => import('../views/detail/Detail')
    }
  ]
})
//3.导出
export default router