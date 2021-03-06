import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/explorer',
            name: 'explorer',
            component: () => import('./views/Explorer.vue')
        },
        {
            path: '/explorer/list',
            name: 'explorer-list',
            component: () => import('./views/Explorer.vue')
        },
        {
            path: '/explorer/map',
            name: 'explorer-map',
            component: () => import('./views/Explorer.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('./views/Faq.vue')
        },
        {
            path: '/get-started',
            name: 'get-started',
            component: () => import('./views/GetStarted.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import( './views/Login.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./views/Dashboard.vue')
        },
        {
            path: '/setup',
            name: 'setup',
            component: () => import('./views/Setup.vue')
        }
    ]
})
