import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/HomePage.vue'
import Music from '@/pages/Music/MusicPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/music',
        name: 'Music',
        component: Music,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
