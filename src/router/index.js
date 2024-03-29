import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Wedding.vue')
  },
  {
    path: '/invitados/:id',
    name: 'guests',
    component: () => import('../views/ResponseWedding.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  },
  {
    path: '/admin',
    component: () => import('../views/Navigation.vue'),
    children: [
      {
        path: ':id',
        component: () => import('../components/CreateEdit.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  }
})

export default router
