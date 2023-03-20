import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../views/Login.vue"
import MainBox from "../views/MainBox.vue"
import RoutesConfig from "./config"
import store from '@/store'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }

] 

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const ConfigRouter = ()=>{
  RoutesConfig.forEach(item=>{
    router.addRoute("mainbox",item)
  })

  store.commit("changeGetterRouter",true)
}

router.beforeEach((to,from,next)=>{
  if(to.name==="login"){
    next()
  }else{
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
      if(!store.state.isGetterRouter){
        ConfigRouter()
        next({
          path: to.fullPath
        })
      }else{
        next()
      }
    }
  }
})

export default router
