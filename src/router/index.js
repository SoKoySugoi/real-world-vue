import { createRouter, createWebHistory } from 'vue-router'
import CardListView from '../views/CardListView.vue'
import CardDetailsView from '../views/CardDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card-list',
      component: CardListView,
    },
    {
      path: '/card/:id',
      name: 'card-details',
      props: true,
      component: CardDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
