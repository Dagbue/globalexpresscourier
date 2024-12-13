import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pricing')
  },
  {
    path: '/quote',
    name: 'Quote',
    component: () => import(/* webpackChunkName: "about" */ '../views/Quote')
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tracking'),
    children: [
      {
        path: '/tracker',
        name: 'Tracker',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tracker')
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin-Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Admin-Login')
  },
  {
    path: "/dash-home",
    name: "DashHome",
    component: () =>
        import(/* webpackChunkName: "DashHome" */ "../views/Admin/DashHome"),
    redirect: { name: 'Quotes' },
    children: [
      {
        path: "/quotes",
        name: "Quotes",
        component: () =>
            import(/* webpackChunkName: "DashBoard" */ "../views/Admin/Quotes"),
        meta: { hideNavigation: true }
      },
      {
        path: "/tracking-number",
        name: "Tracking-Number",
        component: () =>
            import(/* webpackChunkName: "Account" */ "../views/Admin/Tracking-Number"),
        meta: { hideNavigation: true }
      },
      {
        path: "/update-location",
        name: "Update-Location",
        component: () =>
            import(/* webpackChunkName: "Support" */ "../views/Admin/Update-Location"),
        meta: { hideNavigation: true }
      },
      {
        path: "/contact-message",
        name: "Contact-Message",
        component: () =>
            import(/* webpackChunkName: "ROIHistory" */ "../views/Admin/Contact-Message"),
        meta: { hideNavigation: true }
      },
      {
        path: "/news-letter",
        name: "News-Letter",
        component: () =>
            import(/* webpackChunkName: "ROIHistory" */ "../views/Admin/News-Letter"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
