import Vue from 'vue'
import Router from 'vue-router'
import LikedProfiles from './views/LikedProfiles.vue'
import Finder from './views/Finder.vue';
import Search from './views/Search.vue';
import ProfileView from './views/ProfileView.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'finder',
      component: Finder
    },
    {
      path: '/likedProfiles',
      name: 'likedProfiles',
      component: LikedProfiles
    },
    {
      path: '/profile/:id',
      component: ProfileView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('./views/Stats.vue')
    }
  ]
})
