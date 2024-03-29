import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'

import Home from '../components/Home.vue'

import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
Vue.use(VueRouter)

const routes = [
  {//路由重定向
    path:'/',
    redirect:'/login'
  },
  {//Login路由规则
    path:'/login',
    component:Login
  },
  {
    path: '/home',
    component:Home,
    redirect: '/welcome',
    children: [
      {path:'/welcome', component:Welcome},
      {path:'/users',component:Users},
      {path:'/rights',component:Rights},
      {path:'/roles',component:Roles},
      {path:'/categories',component:Cate},
      {path:'/params',component:Params}
    ]
  },
  
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next()
  //token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
//  to 将要访问的路径；
//  from 代表从哪个路径跳转而来 ；
//  next 函数 表示放行 next('/login)强制跳转


export default router
