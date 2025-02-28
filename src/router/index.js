import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventListView.vue'
import EventLayout from '../views/event/EventLayoutView.vue'
import EventDetails from '../views/event/DetailsView.vue'
import EventRegister from '../views/event/RegisterView.vue'
import EventEdit from '../views/event/EditView.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
