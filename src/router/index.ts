import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import WebsiteDisclaimer from '../views/WebsiteDisclaimer.vue'
import SmsTerms from '../views/SmsTerms.vue'
import SmsDisclosure from '../views/SmsDisclosure.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: TermsOfUse
  },
  {
    path: '/website-disclaimer',
    name: 'website-disclaimer',
    component: WebsiteDisclaimer
  },
  {
    path: '/sms-terms',
    name: 'sms-terms',
    component: SmsTerms
  },
  {
    path: '/sms-disclosure',
    name: 'sms-disclosure',
    component: SmsDisclosure
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
