import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import darkmode from "../components/ThemeSwitcher.vue"
import template from '../views/template.vue'
import templateAlis from '../views/templateAlis.vue'
import chart from '../views/organizationchart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/darkmode',
      name: 'darkmode',
      component: darkmode
    },
    {
      path: '/code',
      name: 'template',
      component: template
    },
    {
      path: '/alis',
      name: 'templateAlis',
      component: templateAlis
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
})

export default router
