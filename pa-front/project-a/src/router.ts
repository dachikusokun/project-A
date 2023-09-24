import {createRouter, createWebHistory} from 'vue-router';
import Login from './components/Login.vue';
const routes = [
    {path: '/', name: 'Login', component: Login},

]
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;