import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Reset from '../views/Reset.vue';



const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/reset',
        name: 'reset',
        component: Reset
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
