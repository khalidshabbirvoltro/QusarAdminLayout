import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Setting from '../pages/Setting.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/setting',
        name: 'Settings',
        component: Setting
    },
   
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router