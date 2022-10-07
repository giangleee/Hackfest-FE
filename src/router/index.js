import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    props: {
      title: "About page",
      breadcrumbList: [],
      className: "pageTitle"
    }
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntroductionView.vue'),
    props: {
      title: "Phương pháp học Kanji bằng LỤC THƯ",
      breadcrumbList: [],
      className: "pageTitle"
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
