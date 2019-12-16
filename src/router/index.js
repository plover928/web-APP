import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    redirect: '/home/recommend'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/Home'),
    children: [
      {
        path: 'rank',
        name: 'rank',
        component: () => import('../views/Rank/Rank')
      },
      {
        path: 'rank/:id',
        name: 'toplist',
        component: () => import('../components/top-list/top-list')
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('../views/Recommend/Recommend')
      },
      {
        path: 'recommend/:id',
        name: 'disc',
        component: () => import('../components/disc/disc')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search/Search')
      },
      {
        path: 'search/:id',
        name: '',
        component: () => import('../views/singer-detail/singer-detail')
      },
      {
        path: 'singer',
        name: 'singer',
        component: () => import('../views/Singer/Singer')
      },
      {
        path: 'singer/:id',
        name: 'singer-detail',
        component: () => import('../views/singer-detail/singer-detail')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
