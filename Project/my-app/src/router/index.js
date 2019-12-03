import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/diseasecate',
    name: 'diseasecate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "diseasecate" */ '../views/Disease-CategoryCorrespondence.vue')
  },
  { 
    path: '/age1',
    name: 'age1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "age1" */ '../views/AgegroupAnalysis-I.vue')
  },
  {
    path: '/age2',
    name: 'age2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "age2" */ '../views/AgegroupAnalysis-II.vue')
  },
  {   
    path: '/geomort',
    name: 'geomort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "geomort" */ '../views/GeographicMortalityExploration.vue')
  },
  {
    path: '/expend',
    name: 'expend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "expend" */ '../views/HealthcareExpenditure.vue')
  },
  {
    path: '/areawise',
    name: 'areawise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "areawise" */ '../views/Area-wiseClustering.vue')
  },
  {
    path: '/teampage',
    name: 'teampage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "teampage" */ '../views/TeamPage.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes //:[]
})

export default router
