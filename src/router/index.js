import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TeamView from '../views/TeamView.vue'
import ServicesView from '../views/ServicesView.vue'
import GalleryView from '../views/GalleryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/services',
    name: 'services',
    compopnent: ServicesView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
