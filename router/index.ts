import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '旦夕 | 可能是复旦学生最好的第三方校园服务APP' } 
  },
  {
    path: '/version',
    name: 'Version',
    component: () => import('../views/Version.vue'),
    meta: { title: '更新记录 | 旦夕' } 
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
    meta: { title: '隐私政策 | 旦夕' } 
  },
  {
    path: '/terms-and-condition',
    name: 'TermsAndCondition',
    component: () => import('../views/TermsAndCondition.vue'),
    meta: { title: '使用条款 | 旦夕' } 
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue'),
    meta: { title: '支持 | 旦夕' } 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: '关于 | 旦夕' } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
