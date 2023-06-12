import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '../views/MemberView.vue'
import MvView from '../views/MvView.vue'
import YoububeView from '../views/YoububeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView
  },
  {
    path: '/mv',
    name: 'mv',
    component: MvView
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: YoububeView
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: PlaylistView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
